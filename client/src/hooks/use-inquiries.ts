import { useMutation } from "@tanstack/react-query";
import { api, buildUrl, type InquiryInput } from "@shared/routes";
import { useToast } from "./use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InquiryInput) => {
      // In a real scenario with missing API endpoints, this might fail (404),
      // but we will still proceed to the WhatsApp redirect in the onSuccess
      // or handle it in the component if we want the WA redirect to happen regardless.
      
      const validated = api.inquiries.create.input.parse(data);
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        // If the API endpoint doesn't exist yet, we still want to resolve 
        // to allow the frontend WhatsApp redirect to work as a fallback.
        if (res.status === 404) {
          console.warn("API endpoint not found, relying on WhatsApp fallback.");
          return data; // Return the data so onSuccess has access to it
        }
        
        if (res.status === 400) {
          const error = api.inquiries.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit inquiry');
      }
      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onError: (error) => {
      toast({
        title: "Submission Error",
        description: error.message || "Failed to send message via system. Please try WhatsApp directly.",
        variant: "destructive"
      });
    }
  });
}

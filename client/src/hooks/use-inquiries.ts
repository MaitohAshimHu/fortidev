import { useMutation } from "@tanstack/react-query";
import { type InquiryInput } from "@shared/routes";
import { useToast } from "./use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InquiryInput) => {
      // Bypass backend API and return data directly to trigger WhatsApp redirect
      return data;
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

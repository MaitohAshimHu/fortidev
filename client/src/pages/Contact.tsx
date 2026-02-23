import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail, MessageSquare } from "lucide-react";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const serviceOptions = [
  { value: "web2-dev", label: "Web2 Development" },
  { value: "web3-dev", label: "Web3 & dApps" },
  { value: "security-audit", label: "Security Audits" },
  { value: "pentest", label: "Penetration Testing" },
  { value: "seo", label: "SEO Optimization" },
  { value: "marketing-ads", label: "Marketing & Ads" },
  { value: "game-dev", label: "Game Development" },
  { value: "other", label: "Other / General Inquiry" },
];

export default function Contact() {
  const [_, setLocation] = useLocation();
  const { toast } = useToast();
  const createInquiry = useCreateInquiry();
  
  // Extract ?service= param if it exists to pre-fill the form
  const [defaultService, setDefaultService] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam && serviceOptions.some(opt => opt.value === serviceParam)) {
      setDefaultService(serviceParam);
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: defaultService || "",
      message: "",
    },
  });

  // Reset form when defaultService changes (on mount with query params)
  useEffect(() => {
    if (defaultService) {
      form.setValue("service", defaultService);
    }
  }, [defaultService, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // 1. Submit to API (it might fail if backend isn't ready, but hook handles fallback)
      await createInquiry.mutateAsync(values);
      
      // 2. Format WhatsApp Message
      const targetPhone = "916204312017"; // e.g., "919876543210"
      const serviceName = serviceOptions.find(o => o.value === values.service)?.label || values.service;
      
      const whatsappMessage = `Hello Fortified Developments!%0A%0A*Name:* ${values.name}%0A*Phone:* ${values.phone}%0A*Interested in:* ${serviceName}%0A%0A*Details:*%0A${values.message}`;
      
      const whatsappUrl = `https://wa.me/${targetPhone}?text=${whatsappMessage}`;
      
      toast({
        title: "Redirecting to WhatsApp",
        description: "Opening secure chat to finalize your inquiry...",
      });

      // 3. Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      form.reset();
      
    } catch (error: any) {
      // Error handled in the mutation hook, but we catch here to prevent crash
      console.error("Submission failed", error);
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Let's build your <br/>
              <span className="text-primary text-glow">fortress.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-12"
            >
              Fill out the form and you will be securely redirected to our WhatsApp to connect instantly with a lead engineer.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Instant Chat</h4>
                  <p className="text-muted-foreground">Direct connection to our team via WhatsApp for immediate response.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Direct Line</h4>
                  <p className="text-muted-foreground">+91 (620) 431-2017</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Email Us</h4>
                  <p className="text-muted-foreground">services@fortidev.site</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Subtle glow behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-2xl font-display font-bold mb-8 relative z-10">Hire Us</h3>
            
            <div className="relative z-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            className="bg-background/50 border-border h-12 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+91 9999999999" 
                              className="bg-background/50 border-border h-12 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Service Required</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-border h-12 focus:ring-primary focus:ring-offset-0">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border">
                              {serviceOptions.map(option => (
                                <SelectItem key={option.value} value={option.value} className="focus:bg-primary/20 focus:text-primary">
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project, goals, and timeline..." 
                            className="bg-background/50 border-border min-h-[120px] resize-none focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={createInquiry.isPending}
                    className="w-full h-14 rounded-xl text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 box-glow-hover transition-all mt-4"
                  >
                    {createInquiry.isPending ? "Processing..." : (
                      <>
                        Continue to WhatsApp
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting, you will be redirected to WhatsApp to complete your inquiry securely.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}

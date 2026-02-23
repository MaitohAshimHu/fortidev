import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Shield, 
  Code2, 
  Rocket, 
  Lock, 
  ArrowRight,
  Search,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function Home() {
  const features = [
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Security First",
      desc: "Military-grade penetration testing and smart contract audits."
    },
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Web2 & Web3",
      desc: "Full-stack application development from SaaS to dApps."
    },
    {
      icon: <LineChart className="w-6 h-6 text-blue-400" />,
      title: "Scale & Growth",
      desc: "Data-driven SEO, marketing, and ad campaigns that convert."
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Accepting new projects for Q4</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              Fortify Your <br className="hidden md:block" />
              <span className="gradient-text text-glow">Digital Future</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We engineer secure, scalable applications and execute high-impact growth strategies. 
              From smart contract audits to full-stack Web3 development and SEO.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 box-glow-hover transition-all">
                  Start Your Project
                  <Rocket className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 rounded-xl border-border hover:bg-secondary/50 transition-all">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-secondary/20 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-panel p-8 rounded-2xl relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-lg relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Shield className="w-16 h-16 text-primary/50 mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to fortify your business?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Our team of engineers and security experts are ready to take your project to the next level.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-xl px-10 h-14 bg-white text-black hover:bg-gray-200 text-lg font-semibold transition-all hover:scale-105">
              Hire Us Today <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}

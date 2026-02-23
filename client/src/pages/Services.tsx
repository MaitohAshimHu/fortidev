import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Code, 
  Search, 
  Megaphone, 
  Gamepad2, 
  Server,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/PageWrapper";

const services = [
  {
    id: "web2-dev",
    title: "Web2 Development",
    icon: <Code className="w-8 h-8 text-primary" />,
    description: "Full-stack scalable SaaS platforms, enterprise websites, and custom web applications built with modern frameworks.",
    color: "from-primary/20 to-transparent",
    borderColor: "group-hover:border-primary"
  },
  {
    id: "web3-dev",
    title: "Web3 & dApps",
    icon: <Server className="w-8 h-8 text-accent" />,
    description: "Smart contract development, decentralized applications, tokenomics consulting, and blockchain integration.",
    color: "from-accent/20 to-transparent",
    borderColor: "group-hover:border-accent"
  },
  {
    id: "security-audit",
    title: "Security Audits",
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    description: "Comprehensive code reviews and smart contract audits to identify vulnerabilities before deployment.",
    color: "from-green-400/20 to-transparent",
    borderColor: "group-hover:border-green-400"
  },
  {
    id: "pentest",
    title: "Penetration Testing",
    icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
    description: "Simulated cyber attacks on your infrastructure to expose and patch security weaknesses.",
    color: "from-red-400/20 to-transparent",
    borderColor: "group-hover:border-red-400"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    icon: <Search className="w-8 h-8 text-blue-400" />,
    description: "Technical and content-driven Search Engine Optimization to dominate search rankings and drive organic traffic.",
    color: "from-blue-400/20 to-transparent",
    borderColor: "group-hover:border-blue-400"
  },
  {
    id: "marketing-ads",
    title: "Marketing & Ads",
    icon: <Megaphone className="w-8 h-8 text-yellow-400" />,
    description: "Data-driven performance marketing, social media campaigns, and targeted ads for rapid user acquisition.",
    color: "from-yellow-400/20 to-transparent",
    borderColor: "group-hover:border-yellow-400"
  },
  {
    id: "game-dev",
    title: "Game Development",
    icon: <Gamepad2 className="w-8 h-8 text-pink-400" />,
    description: "Interactive experiences, WebGL games, and integrated Web3 play-to-earn mechanics.",
    color: "from-pink-400/20 to-transparent",
    borderColor: "group-hover:border-pink-400"
  }
];

export default function Services() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our <span className="text-primary text-glow">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From conceptualization to secure deployment, we offer end-to-end solutions for your digital ecosystem.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative bg-card border border-border/50 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${service.borderColor}`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-secondary border border-border/50 flex items-center justify-center mb-6 shadow-inner">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-border/30">
                  <Link href={`/contact?service=${service.id}`}>
                    <Button variant="ghost" className="w-full justify-between hover:bg-background/50 group/btn">
                      Request Service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </PageWrapper>
  );
}

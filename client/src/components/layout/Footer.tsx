import { Link } from "wouter";
import { Shield, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">Fortified Developments</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Securing and scaling the future of digital business. From Web2 infrastructure to Web3 smart contracts, we build fortresses.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+916204312017" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91-6204312017</span>
              </a>
              <a href="mailto:services@fortidev.site" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>services@fortidev.site</span>
              </a>
              <a href="mailto:ashim.dev.sec@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>ashim.dev.sec@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services?filter=web3" className="text-muted-foreground hover:text-primary transition-colors">Web3 Development</Link></li>
              <li><Link href="/services?filter=security" className="text-muted-foreground hover:text-primary transition-colors">Security Audits</Link></li>
              <li><Link href="/services?filter=pentest" className="text-muted-foreground hover:text-primary transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services?filter=seo" className="text-muted-foreground hover:text-primary transition-colors">SEO & Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              {/* <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li> */}
              {/* <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li> */}
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fortified Developments. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}

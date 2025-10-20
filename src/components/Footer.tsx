import { Mail, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-secondary text-secondary-foreground py-2 sm:py-4 relative z-10 mt-auto"
      data-scroll-section
      data-scroll-section-inview=""
    >
      <div className="container mx-auto px-4">
        {/* Mobile Layout - Very Short */}
        <div className="flex flex-col items-center gap-2 sm:hidden">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-lg overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760962192/WhatsApp_Image_2025-10-17_at_07.25.35_jynxa8.jpg" 
                alt="SOLARQUENCH Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SOLARQUENCH
            </span>
          </div>
          <p className="text-xs text-secondary-foreground/70 text-center">
            © {currentYear} SOLARQUENCH. All rights reserved |{" "}
            <a 
              href="https://www.lunexweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-bold hover:underline"
            >
              BUILT BY LUNEXWEB
            </a>
          </p>
        </div>

        {/* Desktop Layout - Full Contact Info */}
        <div className="hidden sm:flex lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760962192/WhatsApp_Image_2025-10-17_at_07.25.35_jynxa8.jpg" 
                alt="SOLARQUENCH Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SOLARQUENCH
            </span>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center lg:justify-center gap-3 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a 
                href="mailto:info@solarquench.co.za"
                className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors hover:underline whitespace-nowrap"
              >
                info@solarquench.co.za
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a 
                href="tel:+27712345678"
                className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors hover:underline whitespace-nowrap"
              >
                +27 71 234 5678
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-secondary-foreground/80 whitespace-nowrap">Mon-Fri: 7AM-5PM</span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-secondary-foreground/70">
              © {currentYear} SOLARQUENCH. All rights reserved |{" "}
              <a 
                href="https://www.lunexweb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-bold hover:underline text-base"
              >
                BUILT BY LUNEXWEB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

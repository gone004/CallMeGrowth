import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col gap-2">
              <img 
                src="src/assets/logo.png" 
                alt="CallMeGrowth" 
                className="w-16 h-18"
              />
              <span className="text-xl font-bold">CallMeGrowth</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Where data meets creativity. We help ambitious brands grow through performance-driven digital marketing.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Arkos g. 1-15, Klevinės vs., LT-14180 Vilniaus r., Latvia</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@callmegrowth.com" className="hover:text-primary transition-colors">
                info@callmegrowth.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} CallMeGrowth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
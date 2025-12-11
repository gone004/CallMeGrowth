import { Mail, MapPin } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col gap-2">
              <img
                src={logoImage}
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
                  onClick={() => scrollToSection("home")}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="hover:text-primary transition-colors"
                >
                  Why us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
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
                <Link 
                  to="/privacy" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 0)}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 0)}
                >
                  Cookie Policy
                </Link>
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
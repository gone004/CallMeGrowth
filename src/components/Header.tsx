import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <a href="/CallMeGrowth/" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
                <img src="src/assets/logo.png" alt="" />
              </div>
              <span className="text-base sm:text-xl font-bold truncate">CallMeGrowth</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("why-us")} 
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Contact
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex gradient-bg hover:opacity-90 text-primary-foreground rounded-full px-6 py-2 hover:scale-105 transition-all"
            >
              Get in Touch
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-2 rounded-2xl bg-card border border-border animate-fade-in">
            <nav className="flex flex-col gap-2 px-4">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("why-us")} 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Why Us
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-sm font-medium hover:bg-muted/60 rounded-lg px-4 py-3 text-left transition-all"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="gradient-bg hover:opacity-90 text-primary-foreground rounded-full w-full mt-2"
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
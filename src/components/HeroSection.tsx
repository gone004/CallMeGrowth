import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full gradient-bg opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full gradient-accent-bg opacity-10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-up">
            <span className="gradient-text">CallMeGrowth</span>
          </h1>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground animate-slide-down">
            <MapPin className="w-4 h-4" />
            <span>Arkos g. 1-15, Klevinės vs., LT-14180 Vilniaus r., Latvia.</span>
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 animate-slide-up stagger-1">
            Where data meets creativity
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-2">
            We help ambitious brands grow through performance-driven digital marketing. From social media to analytics, we build strategies that attract attention, drive engagement, and deliver measurable results.
          </p>

          <p className="text-xl md:text-2xl font-semibold gradient-text animate-slide-up stagger-3">
            Let's grow your brand together.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up stagger-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="gradient-bg hover:opacity-90 text-primary-foreground rounded-full px-8 py-6 text-lg hover:scale-105 transition-all group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg hover:scale-105 "
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-20 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-card border border-border card-hover animate-slide-up stagger-5">
            <h3 className="text-lg font-bold mb-3 gradient-text">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower brands with digital strategies that drive sustainable growth, blending creativity, technology, and data to create lasting impact in the digital space.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-card border border-border card-hover animate-slide-up stagger-6">
            <h3 className="text-lg font-bold mb-3 gradient-text">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a trusted global partner for businesses ready to scale, redefining what smart, results-oriented marketing can achieve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
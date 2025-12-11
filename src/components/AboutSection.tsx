import { Target, Sparkles, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              At CallMeGrowth, we turn <span className="gradient-text">data into direction</span> and <span className="gradient-text">creativity into growth</span>.
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              We are a full-service digital marketing agency helping brands stand out in an ever-changing online world. Our team blends analytical precision with creative storytelling to build campaigns that inspire action and fuel long-term success.
            </p>
            
            <p>
              We don't just run ads, we create growth engines. Every project starts with understanding your goals, audience, and voice, ensuring that every campaign delivers results you can see and measure.
            </p>

            <p className="text-xl font-semibold text-foreground">
              CallMeGrowth is where performance meets passion, and where your brand's next chapter begins.
            </p>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
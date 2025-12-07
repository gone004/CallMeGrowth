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

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Strategic Focus</h3>
              <p className="text-muted-foreground">Data-driven strategies tailored to your unique goals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl gradient-accent-bg mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Creative Excellence</h3>
              <p className="text-muted-foreground">Compelling content that captures and converts</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Proven Results</h3>
              <p className="text-muted-foreground">Measurable outcomes that drive real business growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
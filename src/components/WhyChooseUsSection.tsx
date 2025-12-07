import { Target, Palette, Handshake, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Performance First",
    description: "Every campaign is designed to achieve specific, measurable results, not just impressions.",
  },
  {
    icon: Palette,
    title: "Creative Precision",
    description: "We combine art and analytics to make your brand unforgettable and effective.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnership",
    description: "You always know where your budget goes and what it brings back.",
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description: "From startups to established brands, we adapt our strategies to fit your stage and ambitions.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What makes us <span className="gradient-text">different</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-3xl gradient-bg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <reason.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
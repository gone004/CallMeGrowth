import { Megaphone, Users, PenTool, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Performance Advertising",
    description: "We design and manage targeted ad campaigns across platforms like Meta, Google, TikTok, and LinkedIn focused on ROI, not vanity metrics. Every click, impression, and conversion is optimized to move your business forward.",
    gradient: "gradient-bg",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "From strategy to storytelling, we handle your brand's presence with creativity and consistency. Our goal: to turn followers into fans, and fans into customers.",
    gradient: "gradient-accent-bg",
  },
  {
    icon: PenTool,
    title: "Content Strategy & Creation",
    description: "We craft content that connects. Whether it's videos or visuals, our approach blends engagement psychology with aesthetic precision to boost visibility and brand trust.",
    gradient: "gradient-bg",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Optimization",
    description: "We don't guess, we measure. Using detailed analytics, we identify what works, what doesn't, and how to continuously improve performance for maximum growth efficiency.",
    gradient: "gradient-accent-bg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to <span className="gradient-text">grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-3xl bg-card border border-border card-hover"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.gradient} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { useState } from "react";
import { Mail, User, Building, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    formDataToSend.append("access_key", "18d12e38-7f8e-41a3-b4cd-a4a9b57d251b");
    formDataToSend.append("subject", "New Contact Form Submission from CallMeGrowth");
    formDataToSend.append("from_name", "CallMeGrowth Website");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-scale-in">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Let's <span className="gradient-text">grow together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4">Ready to see real growth?</p>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build your next success story powered by strategy, creativity, and results.
            </p>
            <p className="text-lg font-medium mb-8">Get in touch with CallMeGrowth today.</p>
            <a
              href="mailto:info@callmegrowth.com"
              className="inline-flex items-center gap-2 hover:underline gradient-text text-lg"
            >
              <Mail className="w-5 h-5" />
              info@callmegrowth.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h2>
              <p className="text-xl text-muted-foreground">We'd love to hear from you</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up stagger-1">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name 
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Address 
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Building className="w-4 h-4" /> Company
                  </label>
                  <Input
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <Button type="submit" size="lg" className="gradient-bg text-primary-foreground rounded-full text-lg w-full hover:scale-105 transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
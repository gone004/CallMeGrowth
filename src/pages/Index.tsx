import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieNotification from "@/components/CookieNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>

      <Footer />
      <CookieNotification />
    </div>
  );
};

export default Index;
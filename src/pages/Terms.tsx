import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

const Terms = () => {
  // Scroll to top instantly when page loads
  useEffect(() => {
    // Temporarily disable smooth scroll
    document.documentElement.classList.add('no-smooth-scroll');
    window.scrollTo({ top: 0, left: 0 });
    
    // Re-enable smooth scroll after a brief delay
    setTimeout(() => {
      document.documentElement.classList.remove('no-smooth-scroll');
    }, 10);
  }, []);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 space-y-4">
          <p className="text-muted-foreground animate-slide-up">CallMeGrowth UAB</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground animate-slide-down">
            <MapPin className="w-4 h-4" />
              <span>Arkos g. 1-15, Klevinės vs., LT-14180 Vilniaus r., Latvia.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Terms of Use
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground">
              Welcome to CallMeGrowth. By accessing or using our website <a href="http://callmegrowth.com/" className="text-primary hover:underline">callmegrowth.com</a>, services, or products (collectively, the "services"), you agree to comply with these terms. If you do not agree, please refrain from using our services."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Using our services</h2>
            <p className="text-muted-foreground mb-4">
              You may use our services only for lawful purposes and in ways that do not infringe the rights of others. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>interfere with the security or functionality of our services;</li>
              <li>attempt to access areas of the service you are not authorized to enter;</li>
              <li>transmit harmful, illegal, or unsolicited content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Intellectual property</h2>
            <p className="text-muted-foreground">
              All content, including text, graphics, logos, and software, is owned or licensed by CallMeGrowth. You may not copy, modify, distribute, or create derivative works without prior written permission, except as explicitly allowed by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User content</h2>
            <p className="text-muted-foreground">
              If you post, upload, or share content on our services, you grant CallMeGrowth a worldwide, royalty-free, non-exclusive license to use, reproduce, and display such content for purposes related to providing our services. You are responsible for the legality and accuracy of anything you share.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Third-party links</h2>
            <p className="text-muted-foreground">
              Our services may contain links to third-party websites. We are not responsible for their content, policies, or practices. Accessing third-party sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Disclaimers</h2>
            <p className="text-muted-foreground">
              Our services are provided "as is" and "as available." We do not guarantee accuracy, completeness, or reliability. Use the services at your own discretion. We are not liable for indirect, incidental, or consequential damages arising from your use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Limitation of liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, CallMeGrowth shall not be liable for any damages arising from your use or inability to use our services, including but not limited to lost profits, data loss, or business interruption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Changes to terms</h2>
            <p className="text-muted-foreground">
              We may update these terms at any time. The updated version will be posted on our website with the revision date. Your continued use of our services constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Governing law</h2>
            <p className="text-muted-foreground">
              These terms are governed by the laws of the Republic of Lithuania. In case of any disputes, the parties agree to first attempt to resolve the matter amicably through negotiation or mediation. If the dispute cannot be resolved through these means, it shall be submitted to the competent courts of Lithuania.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
            <p className="text-muted-foreground">
              For questions or concerns regarding these terms, please contact us at: <a href="mailto:info@callmegrowth.com" className="text-primary hover:underline">info@callmegrowth.com</a>
            </p>
          </section>

          <section>
            <p className="text-muted-foreground font-semibold">
              Date: 20.12.2025
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

const Cookies = () => {
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
            Cookies Policy
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground">
              At CallMeGrowth, we use cookies and similar technologies to make your experience on our website smoother, faster, and more personalized. By using our site, you agree to how we use cookies as explained below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. What are cookies</h2>
            <p className="text-muted-foreground">
              Cookies are small files stored on your device when you visit a website. They help us remember your preferences, improve website performance, and understand how visitors interact with our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Types of cookies we use</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Necessary cookies:</strong> these are essential for the website to work properly. Without them, some features may not function.</li>
              <li><strong>Performance cookies:</strong> these collect anonymous data about how you use our site, helping us improve its performance.</li>
              <li><strong>Functional cookies:</strong> these remember your choices, like language or display settings, to make your visit more convenient.</li>
              <li><strong>Marketing cookies:</strong> these help us deliver content and advertisements tailored to your interests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Third-party cookies</h2>
            <p className="text-muted-foreground">
              Some cookies are set by third-party services we use, like analytics or advertising partners. We do not control these cookies, so please check the privacy policies of those third parties for more details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. How to manage cookies</h2>
            <p className="text-muted-foreground">
              You can manage or delete cookies through your browser settings. Keep in mind that turning off some cookies may affect how our website works or limit certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Updates to this policy</h2>
            <p className="text-muted-foreground">
              We may update this policy occasionally. The latest version will always be available on our website with the revision date. By continuing to use our website, you accept any updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact us</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about our cookies, reach out to us at: info@callmegrowth.com
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

export default Cookies;

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

const Privacy = () => {
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
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground">
              At CallMeGrowth, we value your trust and are committed to protecting your privacy. This privacy policy explains in detail how we collect, use, store, and share your personal information when you access our website, use our services, or interact with us in any way. By using our services, you agree to the terms outlined in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information we collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect information about you in the following categories:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Personal information:</strong> name, email address, phone number, billing information, shipping addresses, and other information you voluntarily provide when registering, purchasing, or communicating with us.</li>
              <li><strong>Account information:</strong> username, password, preferences, and settings related to your account on our website.</li>
              <li><strong>Usage data:</strong> IP address, browser type, operating system, pages visited, time spent on pages, links clicked, and other analytics data.</li>
              <li><strong>Cookies and similar technologies:</strong> small files stored on your device to enhance website functionality and collect analytical data. See our cookies policy for details.</li>
              <li><strong>Communications:</strong> emails, chat messages, or other correspondence with our support or sales teams.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How we use your information</h2>
            <p className="text-muted-foreground mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>to provide, maintain, and improve our services and website;</li>
              <li>to deliver products or services;</li>
              <li>to communicate important updates, service notifications, and promotional offers;</li>
              <li>to personalize your experience and recommend relevant content;</li>
              <li>to monitor and analyze trends, usage, and activities for website improvement;</li>
              <li>to prevent fraud, ensure security, and enforce our terms of use;</li>
              <li>to comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Legal basis for processing</h2>
            <p className="text-muted-foreground mb-4">
              Where applicable under privacy laws, we rely on the following legal bases for processing personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>your consent;</li>
              <li>the necessity to perform a contract;</li>
              <li>compliance with a legal obligation;</li>
              <li>protection of legitimate interests of CallMeGrowth or third parties;</li>
              <li>protection of vital interests in emergency situations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. How we share your information</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Service providers:</strong> companies that perform services on our behalf, such as hosting, analytics, marketing, and payment processing;</li>
              <li><strong>Legal and regulatory authorities:</strong> if required by law or to protect our legal rights;</li>
              <li><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of assets;</li>
              <li><strong>Third-party partners:</strong> with your consent, to provide customized offers or services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. International transfers</h2>
            <p className="text-muted-foreground">
              If your personal data is transferred outside your country of residence, we ensure that adequate safeguards are in place to protect your data, including standard contractual clauses approved by the European Commission where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data retention</h2>
            <p className="text-muted-foreground">
              We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, to comply with legal obligations, resolve disputes, and enforce agreements. Retention periods vary depending on the type of data and legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Security of information</h2>
            <p className="text-muted-foreground">
              We implement technical, administrative, and physical safeguards to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Your rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>access your personal data and receive a copy;</li>
              <li>correct or update inaccurate or incomplete information;</li>
              <li>request deletion or restriction of processing;</li>
              <li>object to processing for marketing or other purposes;</li>
              <li>withdraw consent at any time, where applicable;</li>
              <li>lodge a complaint with a supervisory authority if you believe your rights have been violated.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Children's privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Links to other websites</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Cookies and similar technologies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar technologies to improve website functionality, analyze usage, and provide personalized content. You can manage cookie preferences through your browser settings. For more information, see our Cookies policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Changes to this privacy policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy periodically. Any changes will be posted on our website with the revision date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
            <p className="text-muted-foreground">
              For questions or concerns regarding this privacy policy or your personal data, please contact us at: <a href="mailto:info@callmegrowth.com" className="text-primary hover:underline">info@callmegrowth.com</a>
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

export default Privacy;
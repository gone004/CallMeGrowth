import { useState, useEffect } from "react";
import { X, Cookie, AlertCircle } from "lucide-react";

const CookieNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = sessionStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    setShowWarning(false);
  };

  const handleReject = () => {
    setShowWarning(true);
  };

  const handleClose = () => {
    setShowWarning(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-xl">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {showWarning ? (
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Cookies Required</h3>
                <p className="text-sm text-gray-600 max-w-md">
                  We're sorry, but cookies are essential for our website to function properly. 
                  Without accepting cookies, you won't be able to access certain features and 
                  functionality of our site.
                </p>
              </div>

              <button
                onClick={handleAccept}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-md"
              >
                I Understand - Accept Cookies
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1 pr-8">
                  <h3 className="font-bold mb-1 text-gray-900">We use cookies</h3>
                  <p className="text-sm text-gray-600">
                    Our website uses cookies to enhance your experience, analyze site traffic, and provide personalized content and ads. By continuing to use our site, you consent to our use of cookies.{" "}
                    <a href="/cookies" className="text-blue-600 hover:underline">
                      Learn more about our cookie policy
                    </a>
                  </p>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleReject}
                    className="flex-1 sm:flex-initial px-6 py-2.5 border-2 border-gray-300 hover:bg-gray-50 rounded-xl font-medium text-gray-700 transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 sm:flex-initial px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieNotification;
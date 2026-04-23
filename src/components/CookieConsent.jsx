"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "mindful_cookie_consent";
const LEGAL_PATHS = ["/cookies-policy", "/privacy-policy", "/terms-and-conditions", "/payment-terms"];

const U = ({ children }) => <span className="underline">{children}</span>;
const B = ({ children }) => <strong>{children}</strong>;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible || LEGAL_PATHS.includes(pathname)) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col">

        {/* Header */}
        <div className="bg-orange-900 rounded-t-xl px-5 py-3 shrink-0">
          <h2 className="text-white text-lg font-bold">Cookies Policy</h2>
          <p className="text-orange-200 text-xs mt-0.5">Last updated: June 24, 2026</p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-5 py-4 space-y-4 text-gray-700 text-sm leading-6 flex-1">

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-1">Terms of Use</h2>
            <p>
              This Cookies Policy is subject to the{' '}
              <a href="/terms-and-conditions" className="text-blue-600 hover:underline">Terms of Use</a>{' '}
              applicable to this Website.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-orange-900 mb-2">How We Use Cookies & Your Options</h2>

            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">What Are Cookies?</h3>
                <p className="mb-2">
                  This website{' '}
                  <a href="https://mindfultms.in/" className="text-blue-600 hover:underline">https://mindfultms.in/</a>{' '}
                  {`(`}<B><U>Website</U></B>{`) is operated by `}<U>Rangsons</U>{` Healthcare Solutions Private Limited (`}<B>Organization</B>{`).`}
                </p>
                <ul className="space-y-2 pl-2">
                  <li>
                    <p className="font-bold mb-0.5">Cookies or Browser Cookies:</p>
                    <p className="pl-3">A cookie is a small file placed on Your device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</p>
                  </li>
                  <li>
                    <p className="font-bold mb-0.5">Web Beacons:</p>
                    <p className="pl-3"><U>Certain</U> sections of our service and our emails may contain small electronic files known as web beacons (also referred to as clear <U>gifs</U>, pixel tags, and single-pixel <U>gifs</U>) that permit the Organization, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</p>
                  </li>
                </ul>
              </div>

              <div>
                <p className="mb-1">We may use cookies for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>To enable certain functionalities on the Website;</li>
                  <li>To provide analytics;</li>
                  <li>To store your preferences;</li>
                  <li>To support ad delivery and behavioral advertising;</li>
                </ul>
                <p className="mt-2">
                  Please also refer to our{' '}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline"><U>Privacy Policy</U></a>{' '}
                  for more details on our use of cookies.
                </p>
              </div>

              <p>We use both session cookies and persistent cookies.</p>
            </div>
          </section>

          <section className="space-y-3">

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Necessary / Essential Cookies</h3>
              <div className="space-y-1">
                <p><B>Type:</B> Session Cookies</p>
                <p><B>Administered by:</B> Us</p>
                <p><B>Purpose:</B> These cookies are necessary to provide the services you request through the Website and to enable key functionality. They help authenticate users and prevent fraudulent use of user accounts. Without these cookies, certain requested services cannot be delivered. These cookies are used solely to provide such essential services.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Acceptance Cookies</h3>
              <div className="space-y-1">
                <p><B>Type:</B> Persistent Cookies</p>
                <p><B>Administered by:</B> Us</p>
                <p><B>Purpose:</B> These cookies record whether you have accepted the use of cookies on the Website.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Functionality Cookies</h3>
              <div className="space-y-1">
                <p><B>Type:</B> Persistent Cookies</p>
                <p><B>Administered by:</B> Us</p>
                <p><B>Purpose:</B> These cookies store your preferences and choices (such as login details and language preferences) to enhance your experience on the Website. They help personalize your experience and save you from having to re-enter information on the Website on subsequent visits.</p>
              </div>
            </div>

          </section>

          <section>
            <h2 className="text-base font-bold text-orange-900 mb-1">Your Cookie Options</h2>
            <p>{`You can manage your cookie preferences by adjusting your browser settings. You may delete existing cookies or configure your browser to block new cookies. For further instructions, consult your browser's help section.`}</p>
          </section>

        </div>

        {/* Footer / Buttons */}
        <div className="border-t border-gray-200 px-5 py-3 flex flex-col sm:flex-row gap-2 sm:justify-end shrink-0 bg-white rounded-b-xl">
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Decline Non-Essential
          </button>
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-2 rounded-lg bg-orange-900 text-white font-semibold text-sm hover:bg-orange-800 transition-colors"
          >
            Accept All Cookies
          </button>
        </div>

      </div>
    </div>
  );
}

import { Container } from '@mui/material';

export const metadata = {
  title: 'Cookies Policy | MindfulTMS Neurocare India',
  description: 'Learn how MindfulTMS Neurocare India uses cookies and your options for managing them.',
};

const U = ({ children }) => <span className="underline">{children}</span>;
const B = ({ children }) => <strong>{children}</strong>;

export default function CookiesPolicy() {
  return (
    <Container maxWidth="lg">
      <div className="py-12 px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-900 mb-2">
          Cookies Policy
        </h1>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Last updated: June 24, 2026
        </p>

        <div className="space-y-8 text-gray-700 text-base leading-7">

          {/* Terms of Use */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Terms of Use</h2>
            <p>
              This Cookies Policy is subject to the{' '}
              <a href="/terms-and-conditions" className="text-blue-600 hover:underline">Terms of Use</a>{' '}
              applicable to this Website.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">How We Use Cookies & Your Options</h2>

            <div className="space-y-6">

              {/* What Are Cookies */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">What Are Cookies?</h3>
                <p className="mb-5">
                  This website{' '}
                  <a href="https://mindfultms.in/" className="text-blue-600 hover:underline">https://mindfultms.in/</a>{' '}
                  {`(`}<B><U>Website</U></B>{`) is operated by `}<U>Rangsons</U>{` Healthcare Solutions Private Limited (`}<B>Organization</B>{`).`}
                </p>

                <ul className="space-y-5 pl-2">
                  <li>
                    <p className="font-bold mb-2">Cookies or Browser Cookies:</p>
                    <p className="pl-4">
                      A cookie is a small file placed on Your device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold mb-2">Web Beacons:</p>
                    <p className="pl-4">
                      <U>Certain</U> sections of our service and our emails may contain small electronic files known as web beacons (also referred to as clear <U>gifs</U>, pixel tags, and single-pixel <U>gifs</U>) that permit the Organization, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                    </p>
                  </li>
                </ul>
              </div>

              {/* Purposes */}
              <div>
                <p className="mb-3">We may use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To enable certain functionalities on the Website;</li>
                  <li>To provide analytics;</li>
                  <li>To store your preferences;</li>
                  <li>To support ad delivery and behavioral advertising;</li>
                </ul>
                <p className="mt-4">
                  Please also refer to our{' '}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline"><U>Privacy Policy</U></a>{' '}
                  for more details on our use of cookies.
                </p>
              </div>

              <p>We use both session cookies and persistent cookies.</p>
            </div>
          </section>

          {/* Cookie Types */}
          <section className="space-y-6">

            {/* Necessary */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Necessary / Essential Cookies</h3>
              <div className="space-y-2">
                <p><B>Type:</B> Session Cookies</p>
                <p><B>Administered by:</B> Us</p>
                <p>
                  <B>Purpose:</B> These cookies are necessary to provide the services you request through the Website and to enable key functionality. They help authenticate users and prevent fraudulent use of user accounts. Without these cookies, certain requested services cannot be delivered. These cookies are used solely to provide such essential services.
                </p>
              </div>
            </div>

            {/* Acceptance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Acceptance Cookies</h3>
              <div className="space-y-2">
                <p><B>Type:</B> Persistent Cookies</p>
                <p><B>Administered by:</B> Us</p>
                <p>
                  <B>Purpose:</B> These cookies record whether you have accepted the use of cookies on the Website.
                </p>
              </div>
            </div>

            {/* Functionality */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Functionality Cookies</h3>
              <div className="space-y-2">
                <p><B>Type:</B> Persistent Cookies</p>
                <p><B>Administered by:</B> Us</p>
                <p>
                  <B>Purpose:</B> These cookies store your preferences and choices (such as login details and language preferences) to enhance your experience on the Website. They help personalize your experience and save you from having to re-enter information on the Website on subsequent visits.
                </p>
              </div>
            </div>

          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-3">How Do Third Parties Use Cookies on This Website?</h2>
            <p>
              Third-party companies, such as analytics providers and ad networks, may use cookies to collect information about users on an anonymous basis. This data may be used to build profiles of your activities on this Website and on other websites you visit.
            </p>
          </section>

          {/* Your Cookie Options */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-3">Your Cookie Options</h2>
            <p className="mb-3">
              {`You can manage your cookie preferences by adjusting your browser settings. You may delete existing cookies or configure your browser to block new cookies. For further instructions, consult your browser's help section.`}
            </p>
            <p>
              Please note that if you delete or block cookies, certain features of the Website may not function properly, some content may not display correctly, and your preferences may not be saved.
            </p>
          </section>

        </div>
      </div>
    </Container>
  );
}

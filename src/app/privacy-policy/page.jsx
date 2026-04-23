import { Container } from '@mui/material';

export const metadata = {
  title: 'Privacy Policy | MindfulTMS Neurocare India',
  description: 'Privacy Policy governing the collection, use, and disclosure of your personal information by MindfulTMS Neurocare India.',
};

const U = ({ children }) => <span className="underline">{children}</span>;
const B = ({ children }) => <strong>{children}</strong>;

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="lg">
      <div className="py-12 px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Please read this Privacy Policy carefully before using our Website or Services.
        </p>

        <div className="space-y-10 text-gray-700 text-base leading-7">

          {/* Background */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Background</h2>
            <p className="mb-4">
              {`This document (`}<B>"Privacy Policy"</B>{`) is an electronic record in terms of the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and the rules framed thereunder as applicable.`}
            </p>
            <p className="mb-4">
              <B>MindfulTMS</B>{` ("Organization"), having its places in Bengaluru and Delhi.`}
            </p>
            <p className="mb-4">
              {`This Privacy Policy covers: (i) the type of information collected by the Organization, including personal data or information; (ii) the purpose, means and modes of usage of such information; and (iii) how and to whom such information which has been collected will be disclosed.`}
            </p>
            <p>
              {`For the purpose of this Privacy Policy, `}<B>"You"</B>{`, `}<B>"Your"</B>{` shall mean any natural or legal person that engages with the Organization. The term `}<B>"We"</B>{`, `}<B>"Us"</B>{`, `}<B>"Our"</B>{` shall mean the Organization, its employees, and authorised agents that perform any services on the Organization's behalf.`}
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Information We Collect</h2>
            <p className="mb-3">{`When You engage with the Organization, we may collect:`}</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Name;</li>
              <li>Phone number;</li>
              <li>Address;</li>
              <li>Email address;</li>
              <li>Any other information</li>
            </ul>
            <p>{`(collectively referred to as `}<B>"Personal Information"</B>{`).`}</p>
          </section>

          {/* Use of Collected Information */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Use of Collected Information</h2>
            <p className="mb-3">{`The Personal Information collected by Us shall be used for the purposes of:`}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Contacting or identifying You;</li>
              <li>Providing services that You avail from the Organization;</li>
              <li>Protecting You and conducting security investigations and fraud and abuse analysis;</li>
              <li>Creation of customer profiles and personas;</li>
              <li>Sharing of Your data across our office locations in Bengaluru, India and Delhi, India for operational purposes.</li>
            </ul>
            <p>Personal Information will primarily be stored in electronic form.</p>
          </section>

          {/* Provision of Services */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Provision of Services</h2>
            <p className="mb-3">{`The Organization may disclose Your Personal Information to:`}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contractors and service providers, including hosting services, analytics providers, etc. (Partners);</li>
              <li>For payment billing and invoicing related purposes.</li>
            </ul>
          </section>

          {/* Communication */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Communication</h2>
            <p>
              {`You may receive promotional emails, reminders, and notifications from the Organization or at Our Clinics.`}
            </p>
          </section>

          {/* Personalization */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Personalization</h2>
            <p>
              {`Your Personal Information is used to personalize your website experience and other services.`}
            </p>
          </section>

          {/* Updates and Other Purposes */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Updates and Other Purposes</h2>
            <p className="mb-3">
              {`You will receive updates and promotional offers from time to time. You will also receive reminders and other details regarding your usage of the account. You can opt out of our promotional emails.`}
            </p>
            <p>
              {`Subject to this clause, the Organization does not sell, trade, rent or disclose Your Personal Information.`}
            </p>
          </section>

          {/* Consultation Information */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Consultation Information</h2>
            <p className="mb-4">
              {`You may share information during personal consultations with Experts (`}<B>"Consultation Information"</B>{`). The Organization may use this information for:`}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Providing any personalised benefits;</li>
              <li>Tracking the IP address of Your device;</li>
              <li>Sharing with third-party analytics tools.</li>
            </ul>
            <p className="mb-4">
              {`Consultation Information is accessible only to Experts, authorized personnel, select employees, relevant agents, service providers, and third parties strictly on a need-to-know basis. All such parties are obligated to maintain the confidentiality of any Consultation Information.`}
            </p>
            <p className="mb-4">
              {`The Organization will not disclose or share your Consultation Information with any third party, either orally or in writing, except as required under applicable law, with your explicit consent.`}
            </p>
            <p className="mb-3">{`Under limited circumstances, the Organization may share your Personal Information and Consultation Information with third parties:`}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{`If required by law to disclose such information to authorities or regulatory bodies for legal compliance;`}</li>
              <li>{`If your employer or the facilitating entity requires it to respond to inquiries from regulators or government agencies.`}</li>
            </ul>
          </section>

          {/* Website Cookies */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Website Cookies</h2>
            <p className="mb-4">
              {`The information collected through cookies is used by Us for the technical administration of the website, research and development, and to improve the quality of Our website services.`}
            </p>
            <p className="mb-4">
              {`These cookies are intended to be automatically cleared or deleted when You quit the browser application. You are encouraged to use the "clear cookies" functionality of Your browser.`}
            </p>
            <p>
              {`The information We collect with cookies is not sold, rented, or shared with any third parties.`}
            </p>
          </section>

          {/* Third Party Links */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Third Party Links</h2>
            <p className="mb-4">
              {`The website may contain links to other websites (`}<B>"Linked Sites"</B>{`). The Linked Sites are not under the control of the Organization. We are not responsible for the content of any Linked Site.`}
            </p>
            <p className="mb-4">
              {`The Organization does not intend the Linked Sites to be referrals to, endorsements of, or affiliations with the linked entities.`}
            </p>
            <p>
              {`You acknowledge and agree that the Organization shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, advertising, products, services or other materials available on or through any Linked Sites.`}
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Data Retention</h2>
            <p className="mb-4">
              {`We shall retain any Personal Information and assessment information that You may have provided to Us, for as long as required for the specific purpose(s) for which it was collected.`}
            </p>
            <p className="mb-4">
              {`We will retain and use Your Personal Information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.`}
            </p>
            <p>
              {`You can withdraw Your consent for storing and/or processing of Your Personal Information at any time.`}
            </p>
          </section>

          {/* Security Procedures */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Security Procedures</h2>
            <p className="mb-4">
              {`We have taken measures to protect Your Personal Information under Our control from unauthorized access, improper use or disclosure, unauthorized modification and unlawful destruction or accidental loss.`}
            </p>
            <p>
              {`However, no method of transmission over the internet is 100% secure. We will oblige with any directions from the government authority in case of a data breach.`}
            </p>
          </section>

          {/* Opting Out of Marketing Communication */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Opting Out of Marketing Communication</h2>
            <p>
              {`You may opt out of receiving marketing communications by contacting us at `}
              <a href="mailto:cx@mindfultms.in" className="text-blue-600 hover:underline">cx@mindfultms.in</a>.
            </p>
          </section>

          {/* Governing Law and Jurisdiction */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Governing Law and Jurisdiction</h2>
            <p>
              {`This Privacy Policy shall be governed by and constructed in accordance with the applicable laws of India without reference to conflict of laws principles. The courts in `}<U>Bengaluru</U>{`, India shall have the exclusive jurisdiction.`}
            </p>
          </section>

          {/* Grievance Officer */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Grievance Officer</h2>
            <p className="mb-4">{`Please report any violations or grievances in relation to this Privacy Policy to the following personnel:`}</p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-1">
              <p><span className="font-semibold">Name:</span> <U>Arokiaraj Charles Williams</U></p>
              <p><span className="font-semibold">Designation:</span> General Manager – India Operations</p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:Charles.williams@mindfultms.in" className="text-blue-600 hover:underline">
                  Charles.williams@mindfultms.in
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </Container>
  );
}

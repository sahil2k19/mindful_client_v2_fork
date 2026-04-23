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

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">1. Background</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                {`This document (`}<B>{`"Privacy Policy"`}</B>{`) is an electronic record in terms of the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and the rules framed there under as applicable.`}
              </li>
              <li>
                {`This Privacy Policy is issued by `}<U>Rangsons</U>{` Healthcare Solutions Private Limited, which operates the mental health and `}<U>neurocare</U>{` service provider `}<U>MindfulTMS Neurocare India</U>{` (`}<B>{`"Organization"`}</B>{`), having its places of business at Bengaluru and Delhi and registered office at No 1553 `}<U>Vani Vilasa</U>{` Road, Mysore, `}<U>Mysuru</U>{`, Karnataka, India, 570004.`}
              </li>
              <li>
                {`This Privacy Policy covers: (i) the type of information collected by the Organization, including personal data or information; (ii) the purpose, means and modes of usage of such information; and (iii) how and to whom such information which has been collected will be disclosed.`}
              </li>
              <li>
                {`For the purpose of this Privacy Policy, wherever the context so requires `}<B>{`"You"`}</B>{` or `}<B>{`"Your"`}</B>{` shall mean any natural or legal person that engages with the Organization. The term `}<B>{`"We"`}</B>{`, `}<B>{`"Us"`}</B>{`, or `}<B>{`"Our"`}</B>{` shall mean the Organization, its employees, and authorised agents that perform any services on the Organization's behalf.`}
              </li>
              <li>
                {`All the other defined terms shall have the same meaning as provided for under the terms of use, which may be found `}<a href="/terms-and-conditions" className="text-blue-600 hover:underline">here</a>{`.`}
              </li>
              <li>
                {`We reserve the right to make changes to this Privacy Policy at any time. We will notify You about such changes through an announcement on Our website. You agree to periodically review the current version of the Privacy Policy updated by the Organization, and consent to such changes to continue engaging with the Organization.`}
              </li>
              <li>
                {`If You choose to use engage with the Organization, then You agree to the collection and use of Your Personal Information in relation with this Privacy Policy.`}
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">2. Type of Information Collected from You</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <p className="mb-2">{`When You engage with the Organization (for availing the services offered by the Organization), We would be collecting the following information from You:`}</p>
                <ul className="list-[circle] pl-6 space-y-1">
                  <li>Your full name;</li>
                  <li>Your contact number;</li>
                  <li>Your e-mail address;</li>
                  <li>Payment information;</li>
                  <li>{`Any other information shared by you, including while availing the Services. (collectively referred to as, `}<B>{`"Personal Information"`}</B>{`).`}</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">3. Use of Collected Information</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <p className="mb-2">{`The Personal Information collected by Us shall be used for the purposes of:`}</p>
                <ul className="list-[circle] pl-6 space-y-1">
                  <li>contacting or identifying You;</li>
                  <li>sending You information about the Organization, its services and products or other information which We perceive may be useful to You;</li>
                  <li>providing any services that You avail from the Organization, including facilitating interactions with You;</li>
                  <li>protecting You and conducting security investigations and fraud and abuse analysis (including to help Us flag spam mail);</li>
                  <li>Creation of customer profiles and personas, analysis of user behaviour to enhance Our website's experience etc;</li>
                  <li>Sharing of Your data across our office locations in Bengaluru, India and Delhi, India for operational purposes.</li>
                </ul>
              </li>
              <li>
                <B>Legal basis for processing Personal Information:</B>{` We process Your Personal Information on the basis of (a) Your consent, or (b) as permitted under applicable law.`}
              </li>
              <li>Your Personal Information will primarily be stored in electronic form.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">4. Processing, Use and Disclosure of Personal Information</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <p><U><B>Provision of Services:</B></U>{` The Personal Information that You have shared with Us may be shared by Us with other third parties to enable us to provide you with Services, including (a) contractors and service providers, including but not limited to providers of hosting services, analytics providers, etc., that we engage with (`}<B>{`"Partners"`}</B>{`); (b) Organization and its affiliates; and (c) our payment gateway provider, for payment billing and invoicing related purposes.`}</p>
              </li>
              <li>
                <p><U><B>Necessary disclosures:</B></U>{` We reserve the right to disclose Your Personal Information / Consultation Information (i) to comply with any court order, law, or legal process, including to respond to any government or regulatory request; (ii) to enforce or apply Our Terms and `}<U>other</U>{` agreements, including for billing and collection purposes, (iii) if We believe it is necessary or appropriate to protect the rights, property, or safety of the Organization, our clients, vendors, or others, and (iv) for the purposes of fraud protection and credit risk reduction, and for other regulatory compliances or reasons.`}</p>
              </li>
              <li>
                <p><U><B>Communication:</B></U>{` We use Your Personal Information to send you reminders and notifications with respect to your bookings / sessions on our website / at any of our clinic locations (`}<B>{`"Clinics"`}</B>{`) and promotional updates via emails, SMS/WhatsApp. Additionally, Your Personal Information is used to contact you regarding products and service offerings on the website, or at Our Clinics, which may include third-party service providers or any products and service offerings by the Organization or its affiliates. It is clarified that Your Consultation Information will not be shared for such purposes.`}</p>
              </li>
              <li>
                <p><U><B>Personalization:</B></U>{` We may use the above information along with a stream of algorithms for tailoring and customizing content or design of our website. We also use information such as interests, characteristics, etc., for our research and development in order to enhance product features, improve the functionality of the website, improve the services offered at Our Clinics, perform internal analysis, recommendations, saleability, etc.`}</p>
              </li>
              <li>
                <p><U><B>Updates and other purposes:</B></U>{` We may share updates about our website / Clinics and promotional offers from time to time. You will also receive reminders and other details regarding your usage of the account. You can opt out of our promotional emails or messages anytime by clicking the UNSUBSCRIBE link at the bottom of any of our email or message correspondences. We shall have no responsibility in any manner whatsoever regarding any promotional emails or SMS sent to you.`}</p>
              </li>
            </ul>

            <div className="space-y-4 mt-4">
              <p>
                {`We may anonymize your Personal Information and Consultation Information so that you cannot be individually identified, and provide that information to our partners. We may combine this information with information received from our other users in a way that it is no longer identifiable to a particular individual, for inter `}<U>alia</U>{` research and development purposes in order to enhance the quality of our Services.`}
              </p>
              <p>
                {`Subject to this clause, the Organization does not sell, trade, or rent or disclose Your Personal Information / Consultation Information to any third party. However, the Organization cannot fully ensure that such information will not be disclosed to third parties. For example, We may be legally obligated to disclose information to the government or third parties under certain circumstances, third parties may circumvent the Organization's security measures to unlawfully intercept or access transmissions or private communications. In the unlikely event that the Organization needs to investigate or resolve possible problems or inquiries, We may, and You authorize the Organization to, disclose any information about You to government officials as permitted by applicable law.`}
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  <p className="mb-2">{`We however, may employ third-party entities and individuals and disclose Your Personal Information / Consultation Information to such entities and individuals, for the following reasons:`}</p>
                  <ul className="space-y-1 pl-4">
                    {[
                      'To facilitate Our services provided to You;',
                      'To provide any service on Our behalf;',
                      'To perform service-related tasks;',
                      'To assist Us in analysing how Our service is used;',
                      'To share Your data across our clinic locations in Bengaluru, India and Delhi, India for operational purposes.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="shrink-0 text-gray-500">{String.fromCharCode(97 + idx)})</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  {`We will inform You when these third-party providers have access to Your Personal Information in order to perform tasks assigned to them on Our behalf. We will ensure that these third parties are contractually required to maintain the confidentiality of Your Personal Information and are contractually prohibited from using Your Personal Information for any other purpose.`}
                </li>
                <li>
                  {`We will disclose Your Personal Information and Consultation Information in accordance with the provisions of this Privacy Policy and the provisions of applicable law.`}
                </li>
                <li>
                  {`Notwithstanding the provisions of applicable law, we may disclose Your Personal Information if: (a) we have received Your consent for such disclosure; (b) when we believe in good faith that disclosure is necessary to protect Our rights; (c) to protect Your rights and safety; (d) to prevent the commission of an offence, or the attempt of any offence; (d) To investigate fraud or respond to a government, judicial or other legal requests; or (e) to provide emergency medical treatment to You, to prevent harm to You or to other third-parties.`}
                </li>
                <li>
                  {`While Your privacy and the information You share is of paramount importance to Us, in the event we determine at our sole discretion from information You share with Us, and specifically any answer that You give to any of the confidential questions, would affect Your life, health, either mental or physical or the life, health of any other third party, then We shall inform of the same to Your parent/legal guardian and or any other authority in accordance with applicable law.`}
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">5. Processing, Use and Disclosure of Consultation Information</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                {`To deliver its Services through the website or Our Clinics, You consent to the Organization processing (including disclosing and transferring, as outlined in this Privacy Policy) any information You share during personal consultations with Experts (`}<B>{`"Consultation Information"`}</B>{`). This Consultation Information will not be collected, used, or processed for the purposes of (a) providing any personalised browsing experience; (b) tracking the IP address of Your device and saving Your data as cookies; (c) sharing of your geographical location to third-party advertisers; (d) sharing with third-party analytics tools.`}
              </li>
              <li>
                {`All Consultation Information processed by the Organization is accessible only to Experts, authorized personnel, select employees, relevant agents, service providers, and third parties (including contractors) strictly on a need-to-know basis and only if access to such information is necessary for providing Services. All such parties are obligated to maintain the confidentiality of any Consultation Information they access.`}
              </li>
              <li>
                {`The Organization, including its employees, agents, and third-party contractors (including Experts), will not disclose or share your Consultation Information with any third party, either orally or in writing, except as required under applicable law, with your explicit consent.`}
              </li>
              <li>
                {`You also consent to the Organization sharing your Consultation Information with third-party insurance providers, should you file a claim and such information is necessary for them to offer their services.`}
              </li>
              <li>
                <p className="mb-2">{`Under the following limited circumstances, the organization may share your Personal Information and Consultation Information with third parties (including your employer, educational institution, or other entities facilitating your access to the Services):`}</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex gap-3">
                    <span className="shrink-0 text-gray-500">a.</span>
                    <span>{`If the Organization believes there is a significant, real, or imminent threat to your health, safety, or life, or to the health, safety, or life of others or the public;`}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-gray-500">b.</span>
                    <span>{`If required by law to disclose such information to authorities or regulatory bodies for legal compliance, or if your employer or the facilitating entity requires it to respond to inquiries from regulators or government agencies.`}</span>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              {`For the purposes of this Privacy Policy, the `}<B>{`"Experts"`}</B>{` shall mean the persons who provide counselling / therapy, psychiatric, `}<U>rTMS</U>{`, and clinical assessments.`}
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">6. Website Cookies</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                {`Our website uses temporary cookies, which are files that Your web browser puts on Your system when You visit the website, to store small amounts of data that is commonly used as an anonymous unique identifier. The information collected through these cookies is used by Us for the technical administration of the website, research and development, and to improve the quality of Our website services.`}
              </li>
              <li>
                {`We may use third party cookies to track visitor behaviour and to improve the quality of Our Services. However, such cookies shall not store any Personal Information, nor shall such information be disclosed to any third party. You have the option to either accept or refuse these cookies, and will be informed when a cookie is being sent to Your computer. If You choose to refuse Our cookies, You may not be able to use some portions of Our website services.`}
              </li>
              <li>
                {`These cookies are intended to be automatically cleared or deleted when You quit the browser application. You are encouraged to use the `}<B>{`"clear cookies"`}</B>{` functionality of Your browser to ensure such clearing/deletion, since it is impossible for Us to guarantee, predict or provide for the behaviour of Your system.`}
              </li>
              <li>
                {`The information We collect with cookies is not sold, rented, or shared with any third parties.`}
              </li>
              <li>
                {`To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our `}<a href="/cookies-policy" className="text-blue-600 hover:underline">Cookie Policy</a>{`.`}
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">7. Third Party Links</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                {`The website may contain links to other websites (`}<B>{`"Linked Sites"`}</B>{`). The Linked Sites are not under the control of the Organization. We are not responsible for the content of any Linked Site, including, without limitation to, any link contained in a Linked Site, or any changes or updates to a Linked Site.`}
              </li>
              <li>
                {`The Organization does not intend the Linked Sites to be referrals to, endorsements of, or affiliations with the linked entities.`}
              </li>
              <li>
                {`On accessing the Linked Sites, You shall be governed by the terms of use, privacy policy and such other additional policies of the Linked Sites. You further acknowledge and agree that the Organization shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, advertising, products, services or other materials available on or through any Linked Sites or for any errors, defamatory content, libel, slander, omissions, falsehoods, obscene content, pornographic material, or any profanity contained therein.`}
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">8. Your Rights</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <B>Data Retention:</B>{` We shall retain any Personal Information including any data related to Your assessment, any associated information and all the content therein, that You may have provided to Us, for as long as required for the specific purpose(s) for which it was collected, stored and processed for. It is clarified that the data pertaining to Your assessment(s) shall be retained permanently by Us. We will retain and use Your Personal Information and/or assessment data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.`}
              </li>
              <li>
                <B>Consent Withdrawal:</B>{` You can withdraw Your consent for storing and/or processing of Your Personal Information at any time.`}
              </li>
              <li>
                <B>Access or deletion of Personal Data:</B>{` In accordance with applicable law, You have the right to access or request the deletion of Your Personal Information from Our systems.`}
              </li>
              <li>
                <B>Rectification of Personal Data:</B>{` You have the right to ask Us to correct inaccurate or incomplete Personal Information concerning You.`}
              </li>
              <li>
                <B>Grievance Redressal Mechanism:</B>{` You have the right to a grievance redressal provided by Us in respect of any act or omission by Us regarding the performance of Our obligations in relation to Your Personal Information.`}
              </li>
              <li>
                {`To exercise any of the `}<U>abovementioned</U>{` rights or seek further details on the process, You are encouraged to contact Us using the details provided below.`}
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">9. Security Procedures</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                {`We have implemented industry standard security policies, rules and technical measures as required under applicable law to protect any kind of Personal Information / Consultation Information that We have under Our control from unauthorized access, improper use or disclosure, unauthorized modification and unlawful destruction or accidental loss.`}
              </li>
              <li>
                {`However, it is contended that no method of transmission over the internet, or method of electronic storage, is 100% secure. Thus, while We strive to protect Your Personal Information, the website cannot ensure and does not warrant the security of any information you transmit to Us.`}
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">10. Data Breach Protocol</h2>
            <p>
              {`In the event of a Personal Information breach, We will, at the earliest instance, intimate the concerned government authority(`}<U>ies</U>{`) and You about such breach, in accordance with applicable law. We will oblige with any directions, including urgent remedial or mitigation measures, as provided by the government authority(`}<U>ies</U>{`).`}
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">11. Opting Out of Marketing Communication</h2>
            <ul className="list-disc pl-6">
              <li>
                {`If You wish to opt-out of receiving any marketing communication from Us, You can write to us at `}
                <a href="mailto:cx@mindfultms.in" className="text-blue-600 hover:underline">cx@mindfultms.in</a>
                {` stating the same and We shall comply with such request.`}
              </li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">12. Governing Law and Jurisdiction</h2>
            <ul className="list-disc pl-6">
              <li>
                {`This Privacy Policy shall be governed by and constructed in accordance with the applicable laws of India without reference to conflict of laws principles. The courts in Bengaluru, India shall have the exclusive jurisdiction to determine any disputes arising in relation to, or under this Privacy Policy.`}
              </li>
            </ul>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">13. Grievance Officer</h2>
            <p className="mb-4">{`If You have any grievances as to the usage of any of Your Personal Information or any other privacy concerns, You can contact the Grievance Officer whose details are provided hereunder:`}</p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-1">
              <p><span className="font-semibold">Name:</span> Charles Williams</p>
              <p>
                <span className="font-semibold">E-mail Address:</span>{' '}
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

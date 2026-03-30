import { Container } from '@mui/material';

export const metadata = {
  title: 'Terms and Conditions | MindfulTMS Neurocare India',
  description: 'Terms and Conditions governing your access to and use of the MindfulTMS Neurocare India website and services.',
};

const U = ({ children }) => <span className="underline">{children}</span>;
const B = ({ children }) => <strong>{children}</strong>;

export default function TermsAndConditions() {
  return (
    <Container maxWidth="lg">
      <div className="py-12 px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-900 mb-2">
          Terms and Conditions
        </h1>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Please read these Terms carefully before using our Website or Services.
        </p>

        <div className="space-y-10 text-gray-700 text-base leading-7">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">1. Acceptance of Terms</h2>

            <div className="mb-5">
              <h3 className="font-semibold text-gray-900 mb-2">i. Overview</h3>
              <p className="mb-3">
                {`These Terms and Conditions (`}<B>{`"Terms"`}</B>{`), read together with our Privacy Policy, govern your access to and use of the website `}
                <a href="https://mindfultms.in/" className="text-blue-600 hover:underline">https://mindfultms.in/</a>
                {` (`}<B>{`"Website"`}</B>{`) owned and operated by `}<U>Rangsons</U>{` Healthcare Solutions Private Limited which operates the mental health and `}<U>neurocare</U>{` service provider `}<U>MindfulTMS</U>{` `}<U>Neurocare</U>{` India (`}<B>{`"Company,"`}</B>{` `}<B>{`"we,"`}</B>{` `}<B>{`"us,"`}</B>{` or `}<B>{`"our"`}</B>{`). The Website provides Services relating to mental wellness, including repetitive `}<U>transcranial</U>{` magnetic stimulation, therapy and `}<U>counselling</U>{` services, psychiatry services, self-help resources, clinical assessments, `}<U>neuro</U>{` feedback training, `}<U>qEEG</U>{`, and wellness programs (the `}<B>{`"Services"`}</B>{`).`}
              </p>
              <p>
                {`By accessing or using the Website, you confirm your agreement to these Terms, which shall be binding upon you. Please read them carefully before proceeding. If you do not accept these Terms, you are not permitted to access or use the Website or the Services.`}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">ii. Modification</h3>
              <p>
                {`We reserve the right to update or modify these Terms at any time. Any such changes will become effective immediately upon being posted on the Website. Your continued use of the Website following any such changes indicates your acceptance of the updated Terms. It is your responsibility to periodically review the Terms for updates.`}
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">2. Description of Services</h2>
            <p className="mb-3">{`The Website facilitates access to mental health and wellness services, including:`}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{`Booking appointments for consultation, therapy, `}<U>rTMS</U>{`, `}<U>neuro</U>{` feedback training and `}<U>qEEG</U>{`;`}</li>
              <li>{`Audio/video/face-to-face/chat-based `}<U>counselling</U>{` / psychiatry sessions;`}</li>
              <li>{`Self-assessments and improvement plans;`}</li>
              <li>{`Therapy and coaching sessions delivered by certified professionals;`}</li>
              <li>{`Educational content and digital wellness resources.`}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">3. Your Use of the Website / Services</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">i.</h3>
                <p className="mb-3">
                  {`The Company hereby grants you a non-exclusive, non-transferable, non-`}<U>sublicensable</U>{` right to access and use the Website solely for the purposes of availing the Services, in each case (i) in compliance with these Terms, and (ii) to the extent permitted under all applicable laws and regulations (foreign and domestic). You agree that during the use of the Services, you will not in any way host, display, upload, modify, publish, transmit, store, update or share any information that:`}
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    <>{`belongs to another person and to which you have no right;`}</>,
                    <>{`is obscene, pornographic, `}<U>paedophilic</U>{`, invasive of `}<U>{`another's`}</U>{` privacy, insulting or harassing on the basis of gender, racially or ethnically objectionable, relating to or encouraging money laundering or gambling, or promoting enmity between different groups on the grounds of religion or caste with the intent to incite violence;`}</>,
                    <>{`is harmful to children;`}</>,
                    <>{`infringes any patent, trademark, copyright or other proprietary rights, deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any misinformation or information which is patently false and untrue or misleading in nature; or`}</>,
                    <>{`violates any law for the time being in force.`}</>
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="shrink-0 text-gray-500">({String.fromCharCode(97 + idx)})</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">ii.</h3>
                <p>
                  {`Notwithstanding the foregoing, you shall not, and shall not permit anyone else to, directly or indirectly: (i) modify, reproduce or otherwise create derivatives of any part of the Services or Proprietary Content (as defined below); (ii) reverse engineer, disassemble, `}<U>decompile</U>{` or otherwise attempt to discover the source code or structure, sequence and organization of all or any part of the Services (except that this restriction shall not apply to the limited extent restrictions on reverse engineering are prohibited by applicable local law); (iii) rent, lease, resell, distribute or use the Services for `}<U>timesharing</U>{`, service bureau, or commercial purposes; (iv) remove any copyright, trademark, or other proprietary rights notices contained in or on our Services, including those of the Website, Company or its affiliates or any of our `}<U>licensors</U>{`; (v) utilize information, content or any data you view on and/or obtain from our Services to provide any service that is competitive with us; (vi) upload or post or use the Service to transfer, any content or other material that contains or constitutes viruses, `}<U>trojan</U>{` or other code with malicious, disruptive and/or destructive features; (vii) attempt to gain unauthorized access to any portion or feature of the Website, or the account of any other User or entity, or otherwise interfere with any other user's or entity's use of the Service; (viii) engage in any activity that interferes with or disrupts the Services; (ix) engage in any fraudulent activity or activity that facilitates fraud; (x) make any negative, disparaging, or defamatory statement(s) or comments about us, the Website, our brand name, or our domain name, the Company or its affiliates, nor shall you engage in any behavior or action that could damage the image or reputation of the Company or its affiliates.`}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">iii.</h3>
                <p>
                  {`We hold the discretion to restrict provision of our Services to individuals, regions, or jurisdictions as deemed necessary. Additionally, we may cease offering certain or all Services available on our Website at our discretion. We also reserve the authority to limit the availability of our Services. Prices of the Services are subject to change at any moment without prior notification to you, solely under our discretion. Offers on this Website are void where prohibited by law.`}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">iv.</h3>
                <p>
                  {`We maintain the authority and right to decline any appointments made with us. At our discretion, we may choose to restrict or void purchases on a per-person basis. Should we alter or decline an appointment, we will inform you via the email, billing address, or phone number (SMS/`}<U>Whatsapp</U>{`) given during registration or when the appointment was made.`}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">v.</h3>
                <p>
                  {`You acknowledge and agree that we do not guarantee, represent or warrant that the quality Services, information purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.`}
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">4. Payments</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">i.</h3>
                <p>
                  {`We may levy charges for accessing certain Services offered through the Website, including but not limited to chat, audio, and video-based `}<U>counselling</U>{`, psychiatry sessions, face-to-face consultations, `}<U>rTMS</U>{` treatments, `}<U>neuro</U>{` feedback training, and other mental wellness programs. Prior to availing any such paid Service, you will be notified of the applicable fees. In addition to these Terms, the use of specific Services may be subject to additional service-specific terms.`}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">ii.</h3>
                <p>
                  {`Unless otherwise required under applicable law, all payments made for Services are non-refundable. If you are not satisfied with a particular Service, you may contact us at `}
                  <a href="mailto:cx@mindfultms.in" className="text-blue-600 hover:underline">cx@mindfultms.in</a>
                  {`. We will review your request individually and may, at our discretion and subject to applicable legal requirements, process a refund. The Company's decision in such matters shall be final and binding.`}
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">5. Obligations of the User</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">i.</h3>
                <p className="mb-3">
                  {`You agree to immediately notify us of any unauthorized use of your account information or any other breach of security. We shall not be liable for any loss or damage arising from your failure to comply with this clause. You agree that you will not, in any way:`}
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    <>{`interfere with the ability of others to access or use the Website;`}</>,
                    <>{`disrupt the normal flow of communication or otherwise act in a manner that adversely affects other Users' ability to use the Website;`}</>,
                    <>{`interfere with or disrupt the servers or networks connected to the Website, or disobey any requirements, procedures, policies, or regulations of networks connected to the Website;`}</>,
                    <>{`use the Website to transfer, any content or other material that contains or constitutes viruses, trojan or other code with malicious, disruptive and/or destructive features;`}</>,
                    <>{`attempt to gain unauthorized access to any hardware or software system, or networks associated with the Website, or obtain any services or information not intentionally made available to you by us on or through the Website; and`}</>,
                    <>{`make/post/re-post any testimonial on the Website or on any social media platform (such as Facebook, Instagram etc.) in relation to the Website which contains profanity or abusive language.`}</>
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="shrink-0 text-gray-500">({String.fromCharCode(97 + idx)})</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">ii.</h3>
                <p>{`You shall always be responsible for anyone using the Services via your computer or mobile device, and for making them aware of these Terms when they access the Website through your device.`}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">iii.</h3>
                <p>{`You shall at all times be responsible for costs incurred to use and access the Website and utilizing the Services. Under no circumstances shall the Company or its affiliates be liable for such costs.`}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">iv.</h3>
                <p>{`You agree and grant permission to the Company to send order updates, notifications, promotional messages via SMS/`}<U>Whatsapp</U>{`/email from the Company or its affiliates.`}</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">6. Intellectual Property Rights</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">i.</h3>
                <p>
                  {`Subject to your compliance with these Terms, we grant you a limited, non-exclusive, revocable, non-transferable, non-licensable, non-sublicensable license to access and use our Services to: (a) use our Website for your use in accordance with these Terms on any computer device, mobile device or any other device owned or otherwise controlled by you strictly in accordance with these Terms, and (b) access, stream, download, and use on your computer, mobile, or any other device, our Services and content made available in or otherwise accessible through our Services, strictly in accordance with these Terms.`}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">ii. <U>Copyright:</U></h3>
                <p className="mb-3">
                  {`You agree that all material, including without limitation information, data, software, text, design elements, graphics, images and other content (collectively, `}<B>{`"Content"`}</B>{`), contained in or delivered via the Services or otherwise made available by us on the Website or otherwise in connection with the Services, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, code, and software used on or incorporated into the Website (collectively, `}<B>{`"Proprietary Content"`}</B>{`), is the property of the Company, and is protected by applicable law. The compilation of all content on this Website is the exclusive property of the Company. You agree not to decompile, reverse engineer or disassemble any content accessible through the Website, not to insert any code or manipulate the content of the Website in any way that affects the User's experience, and not to use any data mining, data gathering or extraction method. We reserve the right to terminate your User Account immediately and without notice, if we, in our sole and absolute discretion, believe that you are in violation of this clause.`}
                </p>
                <p>
                  {`Our content available on or via the Website, is provided to you as is for your information and personal use only and may not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the Company. We reserve all rights, not expressly granted in and to the Website.`}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">iii. <U>Trademarks:</U></h3>
                <p>
                  {`The Website is the property of the Company, including, but not limited to its text, graphics, logos, the name 'MindfulTMS' and button icons, images, scripts and service names constitute trademarks/trade dress of 'MindfulTMS'. The trademarks, domain names and trade dress of the Company shall not be used in connection with any service that is not affiliated with the Company in any manner that is likely to (a) cause confusion among Users or potential Users; or (b) dilute the rights of the Company; or (c) to disparage or discredit the Company.`}
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">7. Indemnity</h2>
            <p>
              {`You agree to defend, indemnify and hold the Company and its affiliates, and each of its and their respective officers, directors, agents, co-branders, other partners, and employees, harmless from any and all damage (whether direct, indirect, incidental, consequential or otherwise), loss, liability, cost and expense (including, without limitation, reasonable attorneys' and accounting fees) resulting from any claim, `}<U>judgement</U>{`, demand, suit, proceeding (whether before an arbitrator, court, mediator or otherwise), or investigation made by any third party (each a `}<B>{`"Claim"`}</B>{`) due to or arising out of: (i) your use of, contribution to or connection with the Service; (ii) your violation of these Terms or our Privacy Policy or any claim that you have breached any provision of these Terms or Privacy Policy; and/or (iii) your violation of any rights of another or of any applicable law. The Company shall provide notice to you of any such Claim, provided that the failure or delay by the Company in providing such notice shall not limit your obligations hereunder. The Company reserves the right to assume the exclusive `}<U>defence</U>{` and control of any matter which is subject to indemnification under this clause, and in such case, you agree to cooperate with all reasonable requests in assisting the Company's defines of such matter.`}
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">8. Service Modifications / Suspensions</h2>
            <div className="space-y-4">
              <div><h3 className="font-semibold text-gray-900 mb-1">i.</h3><p>{`The Company reserves the right at any time to modify, suspend or discontinue, temporarily or permanently, your User Account and/or the Services (or any part thereof) for any reason or no reason with or without notice. You agree that the Company shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Services.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">ii.</h3><p>{`The Company reserves the right at its sole discretion to modify the Services listed on the Website, availability, permitted appointments / order and the prices of the Services are subject to change without notice.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">iii.</h3><p>{`The Company reserves the right to change or discontinue the Service(s), or any part of it, at any time without prior notice.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">iv.</h3><p>{`The Company will not be held liable to you or any third party for any changes, price adjustments, suspensions, or discontinuations of the Service(s).`}</p></div>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">9. Termination</h2>
            <p>
              {`The Company, in its sole discretion, may terminate your password (if applicable), accounts (or any part thereof) and/or your right to use the Services, at any time for any reason or no reason, including, without limitation, for lack of use, failure to timely pay any fees or other monies due to the Company, or if the Company believes that you have violated or acted inconsistently with these Terms. You agree that any termination of your right to use the Services may be effected without prior notice, and acknowledge and agree that the Company may immediately deactivate or delete your account and all related Content and files related to your account and/or bar any further access to such files or the Services. Further, you agree that the Company shall not be liable to you or any third-party for any termination of your right to use or otherwise access the Services. All provisions of these Terms that by their nature should survive termination of your right to use the Services shall survive (including, without limitation, all limitations on liability, releases, indemnification obligations, disclaimers of warranties, and intellectual property protections and licenses).`}
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">10. Links</h2>
            <p>
              {`We may, in the course of providing the Services provide links to other internet websites or resources hosted or owned by third parties. We have no control over such websites and resources or third parties, and you acknowledge and agree that we are not responsible for the availability of such websites or resources and do not endorse and are not responsible or liable for any Content, advertising, products, services or other materials on or available from such websites or resources. You further acknowledge and agree that we shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with any use of or reliance on any such Content, advertising, products, services or other materials available on or through any such website or resource.`}
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">11. Disclaimers</h2>
            <div className="space-y-5">
              <div><h3 className="font-semibold text-gray-900 mb-1">i.</h3><p>{`Your access to and use of our Services or any content are at your own risk. You understand and agree that our Services are provided to you on an "AS IS" and "AS AVAILABLE" basis. Without limiting the foregoing, to the maximum extent permitted under applicable law, WE DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We make no warranty or representation and disclaim all responsibility and liability for: (i) the completeness, accuracy, availability, timeliness, security or reliability of our Services, any information on the Website or any content; (ii) any harm to your computer system, loss of data, or other harm that results from your access to or use of our Services or any content; (iii) the deletion of, or the failure to store or to transmit, any content and other communications maintained by our Services; and (iv) whether our Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis. No advice or information, whether oral or written, obtained from us or through our Services, will create any warranty or representation not expressly made herein.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">ii.</h3><p>{`We shall not be held liable for any physical, emotional, psychological, or financial consequences arising from your voluntary decision to discontinue the Services. By choosing to cease the Services you have sought, whether midway through a care plan, prior to completing a recommended treatment duration, or against the advice of our Experts, acknowledge that any resulting outcomes, including worsening of condition, delayed recovery, or relapse, shall be at your sole risk and responsibility. You are encouraged to consult with your assigned Expert or a licensed medical professional before making such a decision.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">iii.</h3><p>{`The Services provided are intended to support your overall mental wellness and are not a substitute for emergency psychiatric care or hospitalization. You agree that if you are facing a critical situation or mental health crisis, you will seek immediate assistance from emergency services or a licensed medical facility.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">iv.</h3><p>{`While our Experts are trained and licensed in their respective fields, we do not guarantee that the Services will meet your individual expectations or result in a specific clinical outcome. The effectiveness of therapy, psychiatric services, `}<U>rTMS</U>{`, or any other treatment varies from person to person and is influenced by multiple factors, including your active participation and adherence to recommendations.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">v.</h3><p>{`Any recommendations regarding lifestyle, diet, medication, or related `}<U>behavioural</U>{` changes made by our Experts are advisory in nature and must be exercised at your discretion. We are not liable for any adverse effects, injuries, or outcomes resulting from such recommendations, particularly where such effects arise from incomplete disclosure of medical history or current health conditions on your part.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">vi.</h3><p>{`You understand that therapy, psychiatry and wellness services may involve discussions of sensitive or triggering topics. While our Experts are trained to handle such situations with care and professionalism, we shall not be held liable for any temporary emotional discomfort that may arise during sessions.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">vii.</h3><p>{`You agree that your access to and use of digital wellness content (including assessments, exercises, and self-help tools) is for informational purposes only. These tools are not a diagnostic substitute and should not be relied upon as a replacement for a one-on-one consultation with a licensed professional.`}</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">viii.</h3><p>{`Any testimonials or success stories presented on the Website or through marketing material represent individual experiences and do not constitute a warranty or guarantee of similar results for all users.`}</p></div>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">12. Limitation of Liability</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">i.</h3>
                <p>{`You acknowledge and agree that, in no event will the Company be liable to you or any third party for any indirect, punitive, exemplary, incidental, special, or consequential damages whether in contract, tort (including negligence), or otherwise arising out of these Terms, or the use of, or the inability to use, our Services, including, without limitation, any information made available through our Services pursuant to these Terms. In the event the foregoing limitation of liability is determined by a court of competent jurisdiction to be unenforceable, then the maximum liability for all claims of every kind will not exceed USD 100.0/- (United States Dollars One Hundred Only). The foregoing limitation of liability will cover, without limitation, any technical malfunction, computer error or loss of data, and any other injury arising from the use of our Services. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. To the extent that the Company may not disclaim any implied warranty or limit its liabilities, the scope and duration of such warranty and the extent of the Company's liability will be the minimum permitted under Applicable Law.`}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ii.</h3>
                <p>{`While we have taken reasonable steps to prevent internet fraud and ensure any data collected from you is stored as securely and safely in accordance with applicable law, we cannot rule out nor be held liable in the unlikely event of a breach resulting in hacking or other malicious forms of data access/theft etc.`}</p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">13. Assignment</h2>
            <p>{`These Terms are only for your benefit. You shall have no right to assign any rights or any benefits or obligation hereunder to any other party or legal entity. Any attempted assignment shall be void.`}</p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">14. Relationship of Parties</h2>
            <p>{`The parties hereto are independent contractors, and nothing contained herein shall be interpreted as creating any relationship other than that of independent contracting parties. The parties shall not be construed as being partners, joint ventures, shareholders, employer/employee, or agent/servant. You have no power or authority to bind the Company to any obligation, agreement, debt or liability. You shall not hold itself out as an agent or representative of the Company or its affiliates.`}</p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">15. Entire Agreement</h2>
            <p>{`Unless otherwise specified herein, these Terms constitute the entire agreement between you and the Company in respect of the Services. These Terms supersede all previous written and oral agreements between you and the Company, if any. The Company's failure to act with respect to a breach by you or others does not waive its right to act with respect to subsequent or similar breaches.`}</p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">16. Governing Law and Dispute Resolution</h2>
            <p>
              {`These Terms shall be governed by and constructed in accordance with the applicable laws of India, without regard to conflict of law principles. The courts in `}<U>Bengaluru</U>{`, India shall have exclusive jurisdiction to determine any dispute arising out of, under, or in relation to any of the matters contained in these Terms. All disputes arising out of, or in connection with these Terms shall be referred to arbitration, in accordance with the provisions of the Arbitration and Conciliation Act 1996. The seat and venue of the arbitration shall be `}<U>Bengaluru</U>{`, India.`}
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">17. Severability</h2>
            <p>{`If any term of these Terms is held invalid or unenforceable, it will be so held to the minimum extent required by law, and all other terms will remain valid and enforceable.`}</p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">18. Grievance Officer</h2>
            <p className="mb-4">{`Please report any violations or grievances in relation to these Terms to the following personnel:`}</p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-1">
              <p><span className="font-semibold">Name:</span> <U>Arokiaraj Charles Williams</U></p>
              <p><span className="font-semibold">Designation:</span> General Manager – India Operations</p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:charles.williams@mindfultms.in" className="text-blue-600 hover:underline">
                  charles.williams@mindfultms.in
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </Container>
  );
}

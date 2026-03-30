import { Container } from '@mui/material';

export const metadata = {
  title: 'Payment Terms | MindfulTMS Neurocare India',
  description: 'Payment terms, refund & cancellation policy, and appointment terms for MindfulTMS Neurocare India.',
};

const B = ({ children }) => <strong>{children}</strong>;

export default function PaymentTerms() {
  return (
    <Container maxWidth="lg">
      <div className="py-12 px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-900 mb-2">
          Payment & Appointment Terms
        </h1>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Please read these terms carefully before booking an appointment.
        </p>

        <div className="space-y-10 text-gray-700 text-base leading-7">

          {/* Payment Terms */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Payment Terms</h2>
            <ol className="space-y-4" style={{ listStyleType: 'lower-roman', paddingLeft: '1.5rem' }}>
              <li>
                <B>Advance Payment Required:</B> All consultation and therapy fees must be paid in full before the session, whether booked online or in-clinic. Your appointment is confirmed only upon successful payment.
              </li>
              <li>
                <B>Session Duration & Charges:</B> Psychology consultations are scheduled for 1 hour; psychiatric consultations for 30 minutes. If a session extends beyond the allotted time, additional charges will apply on a pro-rata basis as per clinic policy.
              </li>
              <li>
                <B>Online Payment Gateway:</B> All online payments are processed securely through our payment gateway. We accept UPI / Credit Card / Debit Card / Net Banking. A booking confirmation will be issued upon successful payment.
              </li>
              <li>
                <B>In-Clinic Payments:</B> Payments at the clinic may be made via cash, card, UPI, or any other mode accepted at the centre. In the case of cheque payments, treatment will commence only after the cheque has been successfully cleared.
              </li>
              <li>
                <B>Payment Failures:</B> In the event of a transaction failure or delay due to banking or gateway issues, please do not attempt multiple payments before verifying the status with our administration team. The clinic cannot be held responsible for failures arising from banking or gateway technical issues; please coordinate with your bank or payment provider for resolution.
              </li>
              <li>
                <B>Pricing Revisions:</B> Service charges may be revised periodically at the discretion of management. Prices applicable at the time of booking will be honoured for that session.
              </li>
            </ol>
          </section>

          {/* Refund & Cancellation */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Refund & Cancellation Policy</h2>
            <ol className="space-y-4" style={{ listStyleType: 'lower-roman', paddingLeft: '1.5rem' }}>
              <li>
                <B>Non-Refundable Fees:</B> Consultation and therapy fees are non-refundable once payment is made, including cases where the patient chooses not to proceed after booking.
              </li>
              <li>
                <B>Missed or Late Cancellations:</B> If a session is missed or cancelled without prior notice as per clinic policy, paid fees cannot be refunded or adjusted.
              </li>
              <li>
                <B>Exceptional Refunds:</B> {`Refunds, if approved, are solely at management's discretion and will be processed within 7–10 working days. Any approved refund amount will be recalculated at the standard (non-discounted) per-session rate for sessions already completed. All refunds are subject to deduction of applicable payment gateway and convenience charges incurred at the time of the original transaction.`}
              </li>
              <li>
                <B>Non-Transferable:</B> All bookings and sessions are for the individual patient only and cannot be transferred to another person or service.
              </li>
            </ol>
          </section>

          {/* Appointment Terms */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">Appointment Terms</h2>
            <ol className="space-y-5" style={{ listStyleType: 'lower-roman', paddingLeft: '1.5rem' }}>
              <li>
                <B>Punctuality:</B>
                <ol className="mt-2 space-y-2 pl-4" style={{ listStyleType: 'lower-alpha' }}>
                  <li><em>In-Clinic:</em> Please arrive at least 15 minutes before your scheduled appointment time to complete registration and documentation.</li>
                  <li><em>Telehealth:</em> Please log in and ensure your device and internet connection are ready at least 10 minutes before the session.</li>
                  <li>In both cases, late arrivals or delayed logins will receive only the remaining portion of the allotted session duration.</li>
                </ol>
              </li>
              <li>
                <B>Rescheduling:</B> Requests to reschedule must be communicated to the clinic strictly before 24 hours of the scheduled appointment via phone, WhatsApp, or email. Rescheduling is subject to availability and clinic policy.
              </li>
              <li>
                <B>Telehealth Sessions:</B> For virtual appointments, it is your responsibility to ensure a stable internet connection, a compatible device with audio/video capability, and a private, quiet environment. Telehealth is not a substitute for emergency care; in the event of a mental health emergency, please contact your nearest medical provider immediately.
              </li>
              <li>
                <B>In-Clinic Visits:</B> Patients are requested to carry any prior medical records, reports, or referral documents relevant to their treatment. The clinic follows scheduled appointment slots and requests that accompanying persons wait in the designated waiting area unless invited by the clinician.
              </li>
              <li>
                <B>Session Extensions:</B> Should additional time beyond the scheduled duration be required, prior agreement with the provider is necessary, and pro-rata charges will apply.
              </li>
              <li>
                <B>Right to Reschedule by Clinic:</B> In exceptional circumstances (provider unavailability, technical issues, etc.), MindfulTMS reserves the right to reschedule your appointment and will notify you at the earliest opportunity.
              </li>
            </ol>
          </section>

          {/* General Conditions */}
          <section>
            <h2 className="text-xl font-bold text-orange-900 mb-4">General Conditions</h2>
            <ol className="space-y-4" style={{ listStyleType: 'lower-roman', paddingLeft: '1.5rem' }}>
              <li>
                All payment-related or booking queries must be directed exclusively to the clinic administration. Management is the sole authorized body to review or finalize financial matters.
              </li>
              <li>
                While the clinic may assist with insurance-related documentation, it cannot guarantee reimbursement. Patients are personally responsible for verifying their insurance coverage.
              </li>
              <li>
                The pricing of services is subject to periodic revision as per management policy.
              </li>
            </ol>
          </section>

        </div>
      </div>
    </Container>
  );
}

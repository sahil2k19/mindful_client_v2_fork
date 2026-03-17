export const neurofeedbackMedicalTherapy = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Neurofeedback Training (NFB)",
  "alternateName": ["Neurofeedback", "EEG Neurofeedback", "Neurotherapy", "NFB"],
  "description": "Non-invasive, drug-free brain training using real-time EEG feedback to help the brain self-regulate. Effective for ADHD, anxiety, depression, PTSD, sleep disorders, and peak cognitive performance.",
  "url": "https://mindfultms.in/services/neurofeedback",
  "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Psychiatry" },
  "procedureType": "http://schema.org/NoninvasiveProcedure",
  "bodyLocation": "Brain",
  "howPerformed": "EEG sensors placed on the scalp measure brainwave activity. Patients engage with feedback-based games or videos for approximately 20 minutes per session, 3–4 sessions per week.",
  "preparation": "No special preparation required. Suitable for children as young as 6.",
  "contraindication": "Unmanaged seizures, neurological implants, or severe psychiatric instability.",
  "applicableLocation": "ADHD, Anxiety, Depression, PTSD, Sleep Disorders, Cognitive Enhancement",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "MindfulTMS",
    "url": "https://mindfultms.in"
  }
};

export const neurofeedbackFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Neurofeedback Training?",
      "acceptedAnswer": { "@type": "Answer", "text": "Neurofeedback Training (NFB) is a form of biofeedback that trains the brain to self-regulate its electrical activity. EEG sensors monitor brainwaves in real time and provide feedback through games or videos, reinforcing optimal brain states and improving focus, mood, and well-being." }
    },
    {
      "@type": "Question",
      "name": "What conditions does Neurofeedback help with?",
      "acceptedAnswer": { "@type": "Answer", "text": "Neurofeedback is effective for ADHD, anxiety, depression, PTSD, sleep disorders, and general cognitive enhancement and peak performance." }
    },
    {
      "@type": "Question",
      "name": "Is Neurofeedback safe for children?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Neurofeedback is completely non-invasive, drug-free, and safe for children as young as 6. There are no known harmful side effects." }
    },
    {
      "@type": "Question",
      "name": "How many Neurofeedback sessions are needed?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most people benefit from 25–40 sessions over 3–6 months, at a frequency of 3–4 sessions per week." }
    },
    {
      "@type": "Question",
      "name": "What happens during a Neurofeedback session?",
      "acceptedAnswer": { "@type": "Answer", "text": "A small EEG headband is placed on the head to measure brainwave activity. The patient then plays interactive brain-controlled games or watches responsive videos for approximately 20 minutes while clinicians monitor EEG data in real time." }
    },
    {
      "@type": "Question",
      "name": "Do Neurofeedback benefits last after training ends?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Neurofeedback creates lasting neuroplastic changes. Benefits are long-term. Occasional refresher sessions may help maintain results." }
    },
    {
      "@type": "Question",
      "name": "Can Neurofeedback replace medication?",
      "acceptedAnswer": { "@type": "Answer", "text": "Neurofeedback should not replace medication without medical guidance. However, many patients successfully reduce medication needs over time under medical supervision." }
    },
    {
      "@type": "Question",
      "name": "How is Neurofeedback different from rTMS?",
      "acceptedAnswer": { "@type": "Answer", "text": "rTMS stimulates the brain externally using a magnetic coil, whereas Neurofeedback trains the brain internally through EEG-based feedback, helping it learn to self-regulate naturally. The two treatments can be combined for enhanced results." }
    },
    {
      "@type": "Question",
      "name": "Who should not have Neurofeedback training?",
      "acceptedAnswer": { "@type": "Answer", "text": "Those with unmanaged seizures, neurological implants, or severe psychiatric instability should consult a medical professional before starting Neurofeedback training." }
    }
  ]
};

export const neurofeedbackBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mindfultms.in/services" },
    { "@type": "ListItem", "position": 3, "name": "Neurofeedback", "item": "https://mindfultms.in/services/neurofeedback" }
  ]
};

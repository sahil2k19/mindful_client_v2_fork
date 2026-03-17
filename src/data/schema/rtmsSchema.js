export const rtmsMedicalTherapy = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Repetitive Transcranial Magnetic Stimulation (rTMS)",
  "alternateName": ["rTMS", "TMS Therapy", "Transcranial Magnetic Stimulation"],
  "description": "rTMS is a non-invasive, FDA-cleared treatment using MRI-strength magnetic pulses to stimulate specific brain regions. Used for depression, OCD, anxiety, PTSD, chronic pain, and more. No medication, no anaesthesia required.",
  "url": "https://mindfultms.in/services/rtms",
  "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "Psychiatry" },
  "recognizingAuthority": { "@type": "Organization", "name": "U.S. Food and Drug Administration (FDA)" },
  "legalStatus": "FDA cleared for Major Depressive Disorder (2008) and OCD (2018)",
  "procedureType": "Noninvasive",
  "bodyLocation": "Brain — Left Dorsolateral Prefrontal Cortex (DLPFC)",
  "howPerformed": "A magnetic coil is placed on the scalp and delivers focused magnetic pulses to targeted brain regions. Sessions are 20–40 minutes, 5 days/week, for 4–6 weeks.",
  "preparation": "No special preparation required. Patients remain awake and alert throughout the session.",
  "followup": "Maintenance booster sessions can be scheduled monthly as needed based on individual response.",
  "contraindication": "Not suitable for patients with metal implants or devices in the head/neck, active pacemakers, history of seizure disorders, or sensitivity to magnetic fields.",
  "adverseOutcome": {
    "@type": "MedicalEntity",
    "name": "Mild scalp discomfort during sessions; seizure risk estimated at 1 in 10,000 treatments"
  },
  "indication": [
    { "@type": "MedicalIndication", "name": "Major Depressive Disorder (MDD)" },
    { "@type": "MedicalIndication", "name": "Treatment-Resistant Depression" },
    { "@type": "MedicalIndication", "name": "Obsessive-Compulsive Disorder (OCD)" },
    { "@type": "MedicalIndication", "name": "Generalized Anxiety Disorder (GAD)" },
    { "@type": "MedicalIndication", "name": "Post-Traumatic Stress Disorder (PTSD)" },
    { "@type": "MedicalIndication", "name": "Bipolar Disorder (Depressive Episodes)" },
    { "@type": "MedicalIndication", "name": "Chronic Pain" },
    { "@type": "MedicalIndication", "name": "Migraine with Aura" },
    { "@type": "MedicalIndication", "name": "ADHD" },
    { "@type": "MedicalIndication", "name": "Tinnitus" },
    { "@type": "MedicalIndication", "name": "Smoking Addiction" }
  ],
  "provider": {
    "@type": "MedicalOrganization",
    "name": "MindfulTMS",
    "url": "https://mindfultms.in"
  }
};

export const rtmsBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 3, "name": "rTMS Treatment", "item": "https://mindfultms.in/services/rtms" }
  ]
};

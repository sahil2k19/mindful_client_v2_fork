export const therapyMedicalTherapy = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Psychotherapy",
  "alternateName": ["Therapy", "Counselling", "Psychological Therapy", "CBT", "DBT"],
  "description": "Evidence-based psychotherapy with experienced psychologists and counsellors treating depression, anxiety, OCD, trauma, PTSD, BPD, eating disorders, ADHD, grief, and substance abuse in Bengaluru and Delhi.",
  "url": "https://mindfultms.in/services/therapy",
  "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "MentalHealth" },
  "procedureType": "Noninvasive",
  "indication": [
    { "@type": "MedicalIndication", "name": "Depression" },
    { "@type": "MedicalIndication", "name": "Anxiety" },
    { "@type": "MedicalIndication", "name": "OCD" },
    { "@type": "MedicalIndication", "name": "Trauma" },
    { "@type": "MedicalIndication", "name": "PTSD" },
    { "@type": "MedicalIndication", "name": "Borderline Personality Disorder (BPD)" },
    { "@type": "MedicalIndication", "name": "Eating Disorders" },
    { "@type": "MedicalIndication", "name": "ADHD" },
    { "@type": "MedicalIndication", "name": "Grief and Loss" },
    { "@type": "MedicalIndication", "name": "Stress" },
    { "@type": "MedicalIndication", "name": "Substance Abuse" },
    { "@type": "MedicalIndication", "name": "Self-Esteem Issues" }
  ],
  "provider": {
    "@type": "MedicalOrganization",
    "name": "MindfulTMS",
    "url": "https://mindfultms.in"
  }
};

export const therapyBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 2, "name": "Services" },
    { "@type": "ListItem", "position": 3, "name": "Therapy", "item": "https://mindfultms.in/services/therapy" }
  ]
};

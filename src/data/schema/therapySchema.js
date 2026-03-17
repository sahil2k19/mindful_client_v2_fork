export const therapyMedicalTherapy = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Psychotherapy",
  "alternateName": ["Therapy", "Counselling", "Psychological Therapy", "CBT", "DBT"],
  "description": "Evidence-based psychotherapy with experienced psychologists and counsellors treating depression, anxiety, OCD, trauma, PTSD, BPD, eating disorders, ADHD, grief, and substance abuse in Bengaluru and Delhi.",
  "url": "https://mindfultms.in/services/therapy",
  "relevantSpecialty": { "@type": "MedicalSpecialty", "name": "MentalHealth" },
  "procedureType": "http://schema.org/NoninvasiveProcedure",
  "applicableLocation": "Depression, Anxiety, OCD, Trauma, PTSD, BPD, Eating Disorders, ADHD, Grief, Stress, Substance Abuse, Self-Esteem Issues",
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

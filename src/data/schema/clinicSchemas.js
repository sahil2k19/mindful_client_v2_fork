// ─── REPLACE placeholders before going live ───────────────────────────────

const availableServices = [
  { "@type": "MedicalTherapy", "name": "rTMS Treatment", "url": "https://mindfultms.in/services/rtms" },
  { "@type": "MedicalTherapy", "name": "Neurofeedback Training", "url": "https://mindfultms.in/services/neurofeedback" },
  { "@type": "MedicalTherapy", "name": "Psychotherapy", "url": "https://mindfultms.in/services/therapy" },
  { "@type": "MedicalTherapy", "name": "Psychiatry", "url": "https://mindfultms.in/services/psychiatry" }
];

export const whitefieldClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "MindfulTMS Bengaluru Whitefield",
  "url": "https://mindfultms.in/clinicLocation/Bengaluru-Whitefield",
  "image": [
    "https://mindfultms.in/clinicImages/white/1.webp",
    "https://mindfultms.in/clinicImages/white/2.webp",
    "https://mindfultms.in/clinicImages/white/3.webp"
  ],
  "description": "MindfulTMS Whitefield offers rTMS therapy, neurofeedback training, psychotherapy, and psychiatry services in East Bengaluru.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "704, 2nd Floor, ASN Signature, Varthur Road, near Laughing Waters, Siddapura, Ramagondanahalli",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560066",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9698",
    "longitude": "77.7499"
  },
  "telephone": "REPLACE_WHITEFIELD_PHONE",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["REPLACE_DAYS_e.g_Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "REPLACE_e.g_09:00",
      "closes": "REPLACE_e.g_18:00"
    }
  ],
  "hasMap": "https://mindfultms.in/clinicLocation/Bengaluru-Whitefield",
  "medicalSpecialty": ["http://schema.org/Psychiatric", "http://schema.org/MentalHealth"],
  "availableService": [
    ...availableServices,
    { "@type": "MedicalTherapy", "name": "Clinical Assessment", "url": "https://mindfultms.in/clinicalAssessment" }
  ],
  "parentOrganization": {
    "@type": "MedicalOrganization",
    "name": "MindfulTMS",
    "url": "https://mindfultms.in"
  }
};

export const whitefieldBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 2, "name": "Our Clinics" },
    { "@type": "ListItem", "position": 3, "name": "Bengaluru Whitefield", "item": "https://mindfultms.in/clinicLocation/Bengaluru-Whitefield" }
  ]
};

export const hebbalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "MindfulTMS Bengaluru Hebbal",
  "url": "https://mindfultms.in/clinicLocation/Bengaluru-Hebbal",
  "description": "MindfulTMS Hebbal (at Aster CMI) offers rTMS therapy, neurofeedback training, psychotherapy, and psychiatry services in North Bengaluru.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#43/2, New Airport Road, NH-7, Outer Ring Rd, Sahakar Nagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560092",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "REPLACE_HEBBAL_LAT",
    "longitude": "REPLACE_HEBBAL_LNG"
  },
  "telephone": "REPLACE_HEBBAL_PHONE",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["REPLACE_DAYS"],
      "opens": "REPLACE_e.g_09:00",
      "closes": "REPLACE_e.g_18:00"
    }
  ],
  "hasMap": "https://mindfultms.in/clinicLocation/Bengaluru-Hebbal",
  "medicalSpecialty": ["http://schema.org/Psychiatric", "http://schema.org/MentalHealth"],
  "availableService": availableServices,
  "parentOrganization": {
    "@type": "MedicalOrganization",
    "name": "MindfulTMS",
    "url": "https://mindfultms.in"
  }
};

export const hebbalBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 2, "name": "Our Clinics" },
    { "@type": "ListItem", "position": 3, "name": "Bengaluru Hebbal", "item": "https://mindfultms.in/clinicLocation/Bengaluru-Hebbal" }
  ]
};

export const delhiClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "MindfulTMS New Delhi Greater Kailash 1",
  "url": "https://mindfultms.in/clinicLocation/New-Delhi",
  "description": "MindfulTMS Greater Kailash 1 offers rTMS therapy, neurofeedback training, psychotherapy, and psychiatry services in New Delhi.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "REPLACE_DELHI_STREET_ADDRESS",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "REPLACE_DELHI_PINCODE",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "REPLACE_DELHI_LAT",
    "longitude": "REPLACE_DELHI_LNG"
  },
  "telephone": "REPLACE_DELHI_PHONE",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["REPLACE_DAYS"],
      "opens": "REPLACE_e.g_09:00",
      "closes": "REPLACE_e.g_18:00"
    }
  ],
  "hasMap": "https://mindfultms.in/clinicLocation/New-Delhi",
  "medicalSpecialty": ["http://schema.org/Psychiatric", "http://schema.org/MentalHealth"],
  "availableService": availableServices,
  "parentOrganization": {
    "@type": "MedicalOrganization",
    "name": "MindfulTMS",
    "url": "https://mindfultms.in"
  }
};

export const delhiBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 2, "name": "Our Clinics" },
    { "@type": "ListItem", "position": 3, "name": "New Delhi", "item": "https://mindfultms.in/clinicLocation/New-Delhi" }
  ]
};

// Map city URL slug → schema objects
export const clinicSchemaByCity = {
  "Bengaluru-Whitefield": { clinic: whitefieldClinicSchema, breadcrumb: whitefieldBreadcrumb },
  "Bengaluru-Hebbal":     { clinic: hebbalClinicSchema,     breadcrumb: hebbalBreadcrumb },
  "New-Delhi":            { clinic: delhiClinicSchema,       breadcrumb: delhiBreadcrumb },
};

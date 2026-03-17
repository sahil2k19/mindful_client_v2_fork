// ─── REPLACE placeholders before going live ───────────────────────────────

export const psychiatryMedicalBusiness = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "MindfulTMS Psychiatry Services",
  "description": "Experienced psychiatrists offering personalised treatment plans and medication management for mental health conditions including depression, anxiety, OCD, PTSD, bipolar disorder and more.",
  "url": "https://mindfultms.in/services/psychiatry",
  "medicalSpecialty": "Psychiatry",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "MindfulTMS",
    "url": "https://mindfultms.in"
  }
};

export const psychiatryPhysicians = [
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Shubham REPLACE_SURNAME",
    "image": "https://mindfultms2.s3.us-east-1.amazonaws.com/1756967000604-Dr%20Subham%20%281%29.webp",
    "description": "REPLACE_BIO",
    "medicalSpecialty": "Psychiatry",
    "worksFor": { "@type": "MedicalOrganization", "name": "MindfulTMS", "url": "https://mindfultms.in" },
    "workLocation": {
      "@type": "MedicalClinic",
      "name": "MindfulTMS New Delhi Greater Kailash 1",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "REPLACE_DELHI_STREET_ADDRESS",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "REPLACE_DELHI_PINCODE",
        "addressCountry": "IN"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Sandeep Govil",
    "image": "https://mindfultms2.s3.us-east-1.amazonaws.com/1756967022829-Dr%20Sandeep%20Govil%20Pictures%20%281%29%20%281%29.webp",
    "description": "REPLACE_BIO",
    "medicalSpecialty": "Psychiatry",
    "worksFor": { "@type": "MedicalOrganization", "name": "MindfulTMS", "url": "https://mindfultms.in" },
    "workLocation": {
      "@type": "MedicalClinic",
      "name": "MindfulTMS New Delhi Greater Kailash 1",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "REPLACE_DELHI_STREET_ADDRESS",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "REPLACE_DELHI_PINCODE",
        "addressCountry": "IN"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Abhishek REPLACE_SURNAME",
    "image": "https://mindfultms2.s3.us-east-1.amazonaws.com/1756967041780-Dr%20Abhishek%20%20%281%29%20%281%29.webp",
    "description": "REPLACE_BIO",
    "medicalSpecialty": "Psychiatry",
    "worksFor": { "@type": "MedicalOrganization", "name": "MindfulTMS", "url": "https://mindfultms.in" },
    "workLocation": {
      "@type": "MedicalClinic",
      "name": "MindfulTMS Bengaluru Whitefield",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "704, 2nd Floor, ASN Signature, Varthur Road, near Laughing Waters, Siddapura, Ramagondanahalli",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560066",
        "addressCountry": "IN"
      }
    }
  }
];

export const psychiatryBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 2, "name": "Services" },
    { "@type": "ListItem", "position": 3, "name": "Psychiatry", "item": "https://mindfultms.in/services/psychiatry" }
  ]
};

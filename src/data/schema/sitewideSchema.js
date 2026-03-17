// ─── REPLACE placeholders before going live ───────────────────────────────
// Search: REPLACE

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "MindfulTMS",
  "alternateName": "Mindful TMS Neurocare",
  "url": "https://mindfultms.in",
  "logo": "https://mindfultms.in/home/logoMain.svg",
  "description": "India's leading rTMS neurocare clinic chain offering medication-free treatment for depression, OCD, anxiety, chronic pain and more. 5+ years experience, clinics in Bengaluru and Delhi.",
  "email": "connect@mindfultms.in",
  "foundingDate": "REPLACE_FOUNDING_YEAR",
  "medicalSpecialty": ["Psychiatry", "Neurology", "MentalHealth"],
  "sameAs": [
    "https://www.facebook.com/mindfultmsneurocare/",
    "REPLACE_INSTAGRAM_URL",
    "REPLACE_LINKEDIN_URL"
  ],
  "location": [
    {
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
    },
    {
      "@type": "MedicalClinic",
      "name": "MindfulTMS Bengaluru Hebbal",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#43/2, New Airport Road, NH-7, Outer Ring Rd, Sahakar Nagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560092",
        "addressCountry": "IN"
      }
    },
    {
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
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MindfulTMS",
  "url": "https://mindfultms.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mindfultms.in/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

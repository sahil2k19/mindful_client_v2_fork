export const assessmentWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "MindfulTMS Free Mental Health Self-Assessment",
  "url": "https://mindfultms.in/assesment",
  "description": "Free online self-assessment test to identify symptoms of depression, anxiety, stress, OCD, and other mental health conditions.",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "description": "Free self-assessment"
  },
  "provider": {
    "@type": "MedicalOrganization",
    "name": "MindfulTMS",
    "url": "https://mindfultms.in"
  }
};

export const assessmentBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mindfultms.in" },
    { "@type": "ListItem", "position": 2, "name": "Self Assessment", "item": "https://mindfultms.in/assesment" }
  ]
};

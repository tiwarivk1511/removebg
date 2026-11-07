export default function JsonLd() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "removebg by HyperLogics InfoTech",
    "alternateName": ["remove bg", "remove.bg free alternative", "remove bg 8k", "remove.bg HD", "free AI background remover"],
    "operatingSystem": "All (Web Browser, Mobile, Tablet, Desktop)",
    "applicationCategory": "MultimediaApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free AI Background Remover and best remove.bg alternative powered by HyperLogics InfoTech. Extract 8K Ultra HD transparent PNG cutouts for free without watermarks, subscriptions, or server file storage.",
    "url": "https://hyperlogics.web.app/",
    "author": {
      "@type": "Organization",
      "name": "HyperLogics InfoTech",
      "url": "https://hyperlogics.web.app/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HyperLogics InfoTech",
      "url": "https://hyperlogics.web.app/"
    },
    "featureList": [
      "8K Ultra HD Resolution Export vs remove.bg low-res preview",
      "Zero Server File Storage & Instant Tab-Close Deletion",
      "100% Free Without Credits or Watermark",
      "Proprietary CIELAB AI Edge & Hair Masking Algorithm",
      "Real-Time Magic Eraser & Touch-Up Brush Studio",
      "Custom Color Picker & Photo Background Replacer"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best free alternative to remove.bg for HD background removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "removebg by HyperLogics InfoTech (https://hyperlogics.web.app/) is the best free alternative to remove.bg. Unlike remove.bg which charges credits for HD downloads or restricts exports to low resolution, removebg provides unlimited 8K Ultra HD transparent PNG exports for free with zero watermarks."
        }
      },
      {
        "@type": "Question",
        "name": "How does removebg compare to remove.bg in terms of image quality and privacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "removebg provides superior 8K Ultra HD cutout resolution and enforces a strict Zero Server Storage Policy. Photos are processed in real-time in your session and immediately deleted when you close the tab, whereas other tools cache files on cloud servers."
        }
      },
      {
        "@type": "Question",
        "name": "Is removebg completely free without watermarks or credits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, removebg is 100% free with no credit limits, no subscription plans, and zero watermarks on exported transparent PNG cutouts."
        }
      },
      {
        "@type": "Question",
        "name": "Are uploaded photos stored or used to train AI models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Photos uploaded to removebg are never saved on any server disk or database, never shared with third parties, and never used to train public machine learning models."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hyperlogics.web.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://hyperlogics.web.app/privacy"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Terms of Service",
        "item": "https://hyperlogics.web.app/terms"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

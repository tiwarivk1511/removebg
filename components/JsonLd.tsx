export default function JsonLd() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "removebg by HyperLogics InfoTech",
    "alternateName": [
      "remove bg",
      "remove.bg free alternative",
      "remove bg 8k",
      "remove.bg HD",
      "free AI background remover",
      "bulk background remover"
    ],
    "operatingSystem": "All (Web Browser, Windows, macOS, Linux, iOS, Android)",
    "applicationCategory": "MultimediaApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free AI Background Remover and best remove.bg alternative powered by HyperLogics InfoTech. Extract 8K Ultra HD transparent PNG cutouts for free without watermarks, subscriptions, or server file storage.",
    "url": "https://hyperlogics.web.app/",
    "image": "https://hyperlogics.web.app/rbg_logo.png",
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
      "Custom Color Picker & Photo Background Replacer",
      "Batch Bulk Processing up to 500 Images with ZIP Download"
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Remove Background from Image for Free in 8K Ultra HD",
    "description": "Step-by-step guide to removing photo backgrounds online using removebg by HyperLogics InfoTech.",
    "image": "https://hyperlogics.web.app/rbg_logo.png",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Upload Your Image",
        "text": "Drag and drop any PNG, JPG, or WebP photo up to 15MB into the uploader."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "AI Edge Extraction",
        "text": "The deep neural network AI automatically detects subjects, hair strands, and contours in under 1 second."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Customize & Export 8K",
        "text": "Replace backdrops with solid studio colors, dual gradients, or download the 8K Ultra HD transparent PNG cutout instantly."
      }
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
        "name": "How do I remove the background from multiple images in bulk for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Switch to Bulk Batch Mode on removebg by HyperLogics InfoTech. Upload up to 500 images at once, process them concurrently with AI precision, and download all transparent PNG cutouts in a single ZIP archive."
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

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HyperLogics InfoTech",
    "url": "https://hyperlogics.web.app/",
    "logo": "https://hyperlogics.web.app/favicon.ico",
    "sameAs": [
      "https://hyperlogics.web.app/",
      "https://github.com/tiwarivk1511/removebg.git"
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
        "name": "Bulk Batch 500",
        "item": "https://hyperlogics.web.app/bulk"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Privacy Policy",
        "item": "https://hyperlogics.web.app/privacy"
      },
      {
        "@type": "ListItem",
        "position": 4,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

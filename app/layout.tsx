import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Free AI Background Remover | 8K Ultra HD Cutouts | Powered by HyperLogics InfoTech",
  description: "Instantly remove image backgrounds online for free using proprietary AI edge detection algorithms powered by HyperLogics InfoTech. Zero server file storage, 8K Ultra HD PNG download, 100% private real-time processing.",
  icons: {
    icon: "/rbg_logo.png",
    shortcut: "/rbg_logo.png",
    apple: "/rbg_logo.png",
  },
  verification: {
    google: "Y211WQLWdfyh7PZgJsrSb0qvSLBZjQh6bD8w00yDTM0",
  },
  other: {
    "google-adsense-account": "ca-pub-8719202935652940",
  },
  keywords: [
    // Core & High-Volume Search Keywords
    "background remover",
    "remove bg",
    "free background remover",
    "AI background removal",
    "transparent background maker",
    "remove background from image",
    "background eraser online",
    "make image transparent",
    "cut out image background",
    "automatic background remover",
    "remove bg free alternative",
    "free photo cutout tool",
    "8K background remover",
    "photo editor online free",
    "magic eraser tool",
    "bulk background remover",
    "batch background removal zip",

    // Technical & Architecture Keywords
    "HyperLogics InfoTech",
    "ONNX WASM AI model",
    "client side AI background removal",
    "sub pixel alpha masking",
    "CIELAB color space segmentation",
    "WebAssembly image processing",
    "deep learning image segmentation",
    "browser GPU acceleration",
    "zero server file storage privacy",
    "instant tab close data purge",
    "lossless HD transparent PNG export",
    "dual color gradient generator",

    // Target Audience & Use-Case Keywords
    "background remover for graphic designers",
    "background remover for ecommerce sellers",
    "background remover for photographers",
    "Amazon product photo background remover",
    "Shopify photo background editor",
    "background remover for social media creators",
    "passport photo background remover",
    "marketing banner image cutout",
    "real estate photo background remover",
    "car product photo background eraser",
    "hair and fur detail background removal"
  ],
  authors: [{ name: "HyperLogics InfoTech", url: "https://hyperlogics.web.app/" }],
  creator: "HyperLogics InfoTech",
  publisher: "HyperLogics InfoTech",
  metadataBase: new URL("https://hyperlogics.web.app/"),
  alternates: {
    canonical: "https://hyperlogics.web.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "removebg - Free AI Background Remover (8K Ultra HD)",
    description: "Extract high-precision transparent PNG cutouts in sub-second speed with zero server storage. Powered by HyperLogics InfoTech.",
    url: "https://hyperlogics.web.app/",
    siteName: "removebg by HyperLogics InfoTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "removebg - Free AI Background Remover",
    description: "Remove image backgrounds instantly with 8K Ultra HD precision and zero server file storage.",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google-site-verification" content="Y211WQLWdfyh7PZgJsrSb0qvSLBZjQh6bD8w00yDTM0" />
        <meta name="google-adsense-account" content="ca-pub-8719202935652940" />
        <link rel="icon" href="/rbg_logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/rbg_logo.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8719202935652940"
          crossOrigin="anonymous"
        />
        <JsonLd />
      </head>
      <body
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white"
        suppressHydrationWarning
      >
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}

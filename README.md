# removebg - Free AI Background Remover & Editor

> Powered by **HyperLogics InfoTech** ([https://hyperlogics.web.app/](https://hyperlogics.web.app/))  
> Live Production URL: [https://removebg-281c8.web.app](https://removebg-281c8.web.app)  
> GitHub Repository: [https://github.com/tiwarivk1511/removebg.git](https://github.com/tiwarivk1511/removebg.git)

![removebg Banner](/removebg_logo.png)

## Overview

**removebg** is an ultra-modern, high-performance web application designed for instant AI image background removal and customization. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4, removebg enables creators, e-commerce stores, graphic designers, and photographers to extract sub-pixel transparent PNG cutouts for free without registration or watermarks.

---

## Key Features & Capabilities

### ⚡ 1. Deep Learning AI Segmentation Engine
- **Local Neural Network Inference:** Utilizes `@imgly/background-removal` WASM/ONNX neural AI models directly inside the browser.
- **Sub-Pixel Contour Precision:** Accurately segments fine hair, fur, complex clothing textures, and transparent objects.
- **Zero Server Storage Privacy:** Photos are processed in real-time during the active browser session and are immediately erased when the tab is closed or refreshed.

### 📦 2. Bulk Batch Processing (Up to 500 Images)
- **500 Image Batch Capacity:** Upload and process up to 500 product photos or portraits simultaneously.
- **Multi-Threaded Parallel Execution:** Concurrently processes batch queues for ultra-fast performance.
- **8K Ultra HD ZIP Download:** Packages all processed transparent PNG cutouts into a single `.zip` file (`JSZip`).

### 🎨 3. Background Replacer Studio
- **Solid Colors:** Studio White, Obsidian Black, Deep Navy, Neon Cyan, Royal Blue, Sunset Purple, Rose Pink, and Emerald Green.
- **Custom Color Picker:** Native color wheel selector for any custom hex background color.
- **Studio Gradients:** Preset linear gradients (Cyber Cyan, Sunset Flame, Midnight Neon, Emerald Aura, Cosmic Pink, Nordic Frost).
- **Custom Dual Gradient Generator:** Interactive dual-color picker (`Color 1 → Color 2`) generating custom `linear-gradient` backdrops.
- **Custom Photo Backdrop:** Upload custom background images to instantly swap studio scenes.

### 🖌️ 4. Touch-Up Studio
- **Magic Eraser & Restore Subject Brushes:** Manually erase or restore specific pixels with adjustable brush sizes.
- **Linear Undo / Redo History:** Unlimited state history for precise editing control.
- **3D Drop Shadow Controls:** Add customizable 3D realistic drop shadows with adjustable blur and opacity.

### 🚀 5. SEO, GEO & AEO Optimization
- **Search Engine Optimization (SEO):** Clean metadata, OpenGraph tags, Twitter Cards, `canonical` URLs, `sitemap.xml`, and `robots.txt`.
- **Generative Engine Optimization (GEO):** Machine-readable `llms.txt` document for AI search engines (Perplexity AI, ChatGPT/SearchGPT, Claude, Gemini, Bing Copilot).
- **Answer Engine Optimization (AEO):** `SoftwareApplication` and `FAQPage` JSON-LD schema markup for Google Featured Snippets and SGE Overviews.

### 📺 6. Monetization & Brand Reserved Ad Slots
- Integrated Google AdSense (`ca-pub-8719202935652940`).
- Top Leaderboard Slot permanently reserved for **HyperLogics InfoTech** promotional banners.

---

## Tech Stack

| Component | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) with Static Output Export |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 & Glassmorphic Light Theme |
| **Animations** | `motion/react` (Framer Motion) |
| **AI Neural Engine** | `@imgly/background-removal` (WASM / ONNX) |
| **ZIP Packaging** | `jszip` |
| **Icons** | Lucide React |
| **Hosting** | Firebase Hosting (`removebg-281c8.web.app`) |

---

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tiwarivk1511/removebg.git
   cd removebg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Deployment

### Production Build
To create a static production build (`out/` directory):
```bash
npm run build
```

### Firebase Hosting Deployment
Deploy the static export directly to Firebase Hosting:
```bash
npx firebase-tools deploy --only hosting
```

---

## Corporate Operating Identity

**removebg** is engineered and maintained by **HyperLogics InfoTech**.

- **Website:** [https://hyperlogics.web.app/](https://hyperlogics.web.app/)
- **Live Application:** [https://removebg-281c8.web.app](https://removebg-281c8.web.app)
- **GitHub Repository:** [https://github.com/tiwarivk1511/removebg.git](https://github.com/tiwarivk1511/removebg.git)
- **Copyright:** © HyperLogics InfoTech. All rights reserved.

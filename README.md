# 🚀 Sanjeevan Muralitharan's Professional Portfolio

A premium, highly responsive, and typography-driven developer portfolio built with modern web technologies. This project showcases software engineering expertise, full-stack applications, sticky stacking projects, academic history, and leadership details with modern dark aesthetics, fluid typography, and premium animations.

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router, custom Babel preset, Webpack compiler)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Runtime / Engine**: [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-first theme system with CSS variables)
* **Animation Libraries**:
  * [GSAP (GreenSock)](https://gsap.com/) (smooth entry animations and slide reveals)
  * [Framer Motion](https://www.framer.com/motion/) (spring transitions and page-level exits)
* **Streaming Media**: [hls.js](https://github.com/video-dev/hls.js/) (dynamic client-side HLS video engine for backgrounds)
* **Icon Library**: [Lucide React](https://lucide.dev/) (minimal vector icons)

---

## ✨ Key Features & Sections

1. **Hero Section (`Hero.tsx`)**
   * High-contrast landing presentation with a fullscreen background HLS video.
   * Rotating role title indicator (`"Creative"`, `"Fullstacker"`, `"Builder"`, `"Scholar"`).
   * Entry reveals powered by GSAP.

2. **About Me (`AboutSection.tsx`)**
   * Typography-focused biography text.
   * Floating 3D glassmorphic icons (Moon, Lego block, Abstract shapes) styled with responsive sizing and parallax offsets.

3. **Skills / What I Do (`ServicesSection.tsx`)**
   * Clean, high-contrast black-on-white card grid layout.
   * Detailed capability listings for **Full-stack**, **Mobile**, **Backend & API**, and **DevOps & deployment**.
   * Responsive tags with skill lists.

4. **Projects (`ProjectsSection.tsx`)**
   * Sticky stacking cards showing detailed project showcases (e.g. CanvasConnect, SmartCareHub, VentureAssist).
   * Responsive split-grid layouts with dynamic aspect ratios and asset grids.

5. **Profile (`ResumeSection.tsx`)**
   * Education & Extracurricular activities organized in a clean timeline layout.
   * Academic details for **Sri Lanka Institute of Information Technology (SLIIT)** and **Jaffna Hindu College**.
   * Leadership details for **Rotary International School Interact Club** and **AIESEC**.

6. **Footer & Contact (`Footer.tsx`)**
   * Direct messaging options (Email, Phone, Location map) laid out in responsive grids.
   * Professional socials (GitHub, LinkedIn).
   * Integrated round profile picture inside the socials bar matching the icon dimensions.

---

## 🎨 Design System & Aesthetics

### Color Palette (Defined in `src/app/globals.css`)
* **Background (`--bg`)**: `#0C0C0C` (Sleek deep black)
* **Surface (`--surface`)**: `#141414` (Soft charcoal surfaces)
* **Text (`--text`)**: `#D7E2EA` (High-contrast cool gray-white)
* **Muted (`--muted`)**: `#888888` (Mid-tone gray for subtitles)
* **Accent Colors**:
  * Steel Blue: `#4E85BF`
  * Light Blue-Gray: `#89AACC`
  * Accent White: `#f5f5f5`
* **Stroke/Borders (`--stroke`)**: `#1f1f1f`

### Fonts & Typography
* **Display Font**: `Instrument Serif` (Google Font) — Used for large, italic headings.
* **Body Font**: `Inter` (Google Font) — Clean sans-serif used for paragraphs and UI metadata.

### Favicon
* Custom vector **SVG Favicon** (`src/app/icon.svg`) featuring a clean transparent background and a circular gradient border around the italic monogram initials **"SM"**.

---

## 📂 Project Structure

```text
my_portfolio/
├── public/                 # Static assets (Project screenshots, icons)
│   └── assets/
│       ├── profile.jpg     # Profile picture used in footer socials
│       └── projects/       # Screenshots for project details
├── src/
│   ├── app/                # Next.js App Router core files
│   │   ├── globals.css     # Global CSS rules, Tailwind v4 theme, animations
│   │   ├── layout.tsx      # Main layout, metadata config, Google Fonts
│   │   └── page.tsx        # Homepage entry combining sections
│   ├── components/         # Reusable presentation blocks
│   │   ├── AboutSection.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── AppWrapper.tsx
│   │   ├── Buttons.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProfileAvatar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ResumeSection.tsx
│   │   └── ServicesSection.tsx
│   └── config/
└── package.json            # Scripts and dependency lists
```

---

## 🚀 Setup & Local Development

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, and then follow these steps:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

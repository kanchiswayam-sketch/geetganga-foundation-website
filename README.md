# GEETGANGA SOCIAL FOUNDATION SOLAPUR — Official Website (Stage 1)

> **"Serving Society Through Health, Sports, Education & Social Service"**  
> **"आरोग्य, क्रीडा, शिक्षण आणि समाजसेवेच्या माध्यमातून समाजसेवा"**  
> *ब्रीदवाक्य / Guiding Creed: आरोग्यम् धनसंपदा (Health is Supreme Wealth)*

Official, modern, mobile-first website for **Geetganga Social Foundation Solapur** (गीतगंगा सोशल फाऊंडेशन सोलापूर), a grassroots non-profit social organization based in Bhavani Peth, Solapur, Maharashtra, India.

---

## 🌟 Key Features

1. **Brand Identity & Authenticity**
   - Incorporates the official foundation logo (`public/assets/logo.png`) featuring the symbolic tree of health and life supported by caring hands.
   - Preserves original color palette: Saffron Orange (`#EA580C`), Deep Maroon/Crimson (`#9F1239`), and Trust Royal Indigo (`#1E297A`).
   - Official Sanskrit/Marathi motto: **आरोग्यम् धनसंपदा**.

2. **Complete Dual-Language Support (मराठी & English)**
   - Instant language switching across all sections, navigation, forms, and cards.
   - Clean Unicode Devanagari script designed with readable Marathi typography (`Mukta`).
   - Structured translations dictionary in `src/data/translations.ts` for easy maintenance.

3. **Homepage Sections**
   - **Header:** Sticky navbar with foundation logo, bilingual name, desktop links, language toggle, and mobile drawer.
   - **Hero Section:** Prominent mission statement, verified Solapur badge, creed banner, and quick action buttons.
   - **About the Foundation:** Background of community service in Solapur, core guiding pillars, and verified headquarters address.
   - **Our Mission and Vision:** Clear, inspirational dual-card layout detailing concrete goals and long-term societal vision.
   - **Our Key Activities:** Interactive 5-pillar showcase:
     - Health & medical camps (*आरोग्य व वैद्यकीय शिबिरे*)
     - Blood donation & health awareness (*रक्तदान व आरोग्य जनजागृती*)
     - Sports & youth development (*क्रीडा व युवा विकास*)
     - Education & student support (*शिक्षण व विद्यार्थी सहाय्य*)
     - Social service & community welfare (*समाजसेवा व लोककल्याण*)
   - **Activities & Photo Gallery:** Filterable gallery (All, Health Camps, Blood Donation, Community) using authentic foundation photos, complete with an accessible lightbox modal.
   - **Donation Section:** High-contrast display of the official Union Bank BHIM UPI QR code (`public/assets/donation-qr.png`), one-tap UPI ID copy (`QR919527076866-1658@unionbankofindia`), verified beneficiary details, step-by-step payment instructions, and required security disclaimer.
   - **Volunteer Section:** Engaging community call-to-action with benefits of joining and a direct prefilled WhatsApp connection button.
   - **Contact Section:** Direct helpline / WhatsApp link (`+91 9970610781`), official email (`gitgangafoundation@gmail.com`), physical address (`102 C 73, Bhavani Peth, Solapur - 413002`), map navigation link, and an interactive message form.
   - **Footer:** Foundation identity, activity links, navigation, disclaimer, language toggle, and copyright.

4. **Floating Action Hub**
   - Quick floating WhatsApp chat button (`9970610781`) for immediate community assistance.
   - Smooth scroll-to-top button.

5. **Graceful Asset Fallback**
   - Reusable `ImageWithFallback` component ensures no broken image icons ever display if an asset is missing or loading fails.

---

## 🛠️ Technology Stack

- **Framework:** React 18 (TypeScript)
- **Bundler:** Vite 5
- **Styling:** Modular Responsive CSS with Custom Design Tokens (Zero paid dependencies, mobile-first)
- **Icons:** `lucide-react`
- **Fonts:** Google Fonts (`Mukta` for Devanagari & Latin readability, `Plus Jakarta Sans`)
- **Hosting Target:** Free static hosting (GitHub Pages, Vercel, Netlify, Cloudflare Pages)

---

## 📁 Project Structure

```
geetganga-foundation-website/
├── public/
│   └── assets/
│       ├── logo.png                   # Official Foundation Logo
│       ├── donation-qr.png            # Official Union Bank BHIM UPI QR
│       ├── foundation-activity-1.jpg  # Foundation Office & Signboard
│       ├── foundation-activity-2.jpg  # Community Gathering & Foundation Team
│       ├── foundation-activity-3.jpg  # Voluntary Blood Donation Camp
│       ├── foundation-activity-4.jpg  # Free Senior Citizen Health Screening
│       ├── foundation-activity-5.jpg  # Community Welfare Collaboration (FPAI)
│       └── foundation-activity-6.jpg  # Doctors & Medical Camp Team
├── src/
│   ├── components/
│   │   ├── About.tsx                  # About the Foundation
│   │   ├── Contact.tsx                # Contact Info & WhatsApp Form
│   │   ├── Donation.tsx               # Donation QR & UPI Copy
│   │   ├── Footer.tsx                 # Footer & Links
│   │   ├── Gallery.tsx                # Photo Gallery & Lightbox
│   │   ├── Header.tsx                 # Navigation & Language Switch
│   │   ├── Hero.tsx                   # Hero Banner & Creed
│   │   ├── ImageWithFallback.tsx      # Graceful Image Error Handler
│   │   ├── KeyActivities.tsx          # 5 Core Activity Pillars
│   │   ├── MissionVision.tsx          # Mission & Vision Cards
│   │   └── Volunteer.tsx              # Volunteer Call to Action
│   ├── data/
│   │   └── translations.ts            # English & Marathi Dictionary
│   ├── styles/
│   │   └── index.css                  # Responsive CSS & Theme Variables
│   ├── types/
│   │   └── index.ts                   # TypeScript Interfaces & Types
│   ├── App.tsx                        # Main Application Layout
│   └── main.tsx                       # React Entry Point
├── index.html                         # Base HTML with SEO & Fonts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts                     # Configured with base: './' for static hosting
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

### Installation
```bash
# Clone or navigate to the project directory
cd d:/geetganga-foundation-website

# Install dependencies
npm install
```

### Running Locally (Development Mode)
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the URL shown in your terminal).

### Building for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory, ready to deploy to any free static host.

### Previewing the Production Build
```bash
npm run preview
```

---

## 🌐 Free Static Hosting Deployment

The project is preconfigured with relative asset paths (`base: './'`), making deployment effortless on any free hosting service:

### Option A: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Output directory: `dist`
4. Build command: `npm run build`

### Option B: Netlify
1. Drag and drop the `dist/` folder into Netlify Drop (https://app.netlify.com/drop).
2. Or connect your Git repository with:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option C: GitHub Pages
1. In `vite.config.ts`, verify `base: './'`.
2. Push code to your GitHub repository.
3. In repository settings -> **Pages**, set source to GitHub Actions or deploy the `dist` branch.

---

## 🛡️ Safeguards & Verification Compliance

- **No Speculative or Invented Data:** Only verified contact details, addresses, and public service facts from official foundation banners are displayed.
- **Privacy First:** No private Aadhaar cards, personal identification numbers, or confidential patient health records are published or stored.
- **Transparent Payment Guidance:** The Union Bank UPI QR code is provided solely as a direct payment method to the foundation's official bank account. The website does not store banking credentials or claim instant payment verification.

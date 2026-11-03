# GEETGANGA SOCIAL FOUNDATION SOLAPUR — Official Website (Premium Multi-Page)

> **"Serving Society Through Health, Sports, Education & Social Service"**  
> **"आरोग्य, क्रीडा, शिक्षण आणि समाजसेवेच्या माध्यमातून समाजसेवा"**  
> *ब्रीदवाक्य / Guiding Creed: आरोग्यम् धनसंपदा (Health is Supreme Wealth)*

Official, national-level, mobile-friendly multi-page website for **Geetganga Social Foundation Solapur** (गीतगंगा सोशल फाऊंडेशन सोलापूर), a registered non-profit social organization based at 102 C 73, Bhawani Peth, Solapur, Maharashtra, India.

---

## 🌟 Architecture & Pages

The application is structured into **18 distinct pages** powered by a client-side HashRouter that guarantees compatibility with all static hosting providers (zero 404 rewrite issues on page refresh):

### 1. Institutional Governance & About
- **Home (`#/`)**: Photographic hero background with dark overlay, quick-action matrix, foundation summary, core guiding pillars, leadership preview, interactive activities, real camp photos gallery, Union Bank UPI QR donation card, and contact hub.
- **About Us (`#/about`)**: Foundation origins in Bhawani Peth, mission scope, and 4 guiding pillars.
- **Mission & Vision (`#/mission-vision`)**: Concrete objectives and long-term societal vision.
- **Leadership (`#/leadership`)**: Democratic non-profit governance overview and standards.
- **Managing Committee (`#/managing-committee`)**: Verified executive officers with official portraits:
  - **Venkatesh Gangadhar Kanchi** — Chairman (`3d2c3362-1eab-489d-8aa5-d9dbb12f74b0.jpg`)
  - **Dr Vinay Satyanarayan Gundla** — Vice Chairman (`5d1591c3-d8e4-4536-8c27-8280bf769ee1.jpg`)
  - **Chandrakant Gangadhar Kanchi** — Secretary (`cf7ce6c7-2fcb-4058-baf9-e61826ed2036.jpg`)
  - **Venugopal Narsing Uttur** — Treasurer (`838fb306-60a5-400e-8310-d588fe2378f0.jpg`)
  - **Rupali Venkatesh Kanchi** — Joint Treasurer (`40e489f4-e48d-4ec5-92c9-ae022920637c.jpg`)
  - **Ratnakar Subhash Nakka** — Director (`5bbef55d-7548-43dc-b615-54ed5c786d5e.jpg`)
  - **Deepa Chandrakant Kanchi** — Director (`bc7c1e47-3518-4703-91ad-c5cc1e31baf3.jpg`)
- **Advisory Committee (`#/advisory-committee`)**: Distinguished advisors:
  - **Ashok Tarachand Sanklecha** — Business
  - **Nandkishor Udgiri** — Chartered Accountant
  - **Channesh Suryakant Indi** — Sports
  - **Shivanand Vasant Ganji** — Law

### 2. Key Programmes
- **Health and Medical Camps (`#/health-camps`)**: Specialized diagnosis, free consultations, BP/sugar screening, ECG testing, and complimentary medicines with Shri Markandey Solapur Sahakari Rugnalaya.
- **Blood Donation (`#/blood-donation`)**: Voluntary blood drives, free blood grouping, donor directories, and awareness campaigns.
- **Sports and Youth Development (`#/sports-youth`)**: Outdoor athletics, sports kits for youth, anti-addiction education, and healthy living.
- **Education and Social Service (`#/education-social`)**: Notebook and educational kit distribution, school dropout prevention, and community relief.

### 3. Media & Event Gallery
- **Events and Programmes Gallery (`#/events`)**: Rich, interactive **Event Gallery** featuring 9 authentic, documented foundation events with **27 real camp photographs** in `public/assets/events/`, venue details, dates, participant and beneficiary metrics, partner organizations, interactive image zoom lightbox modal, and direct WhatsApp inquiry links.
- **Photo Gallery (`#/gallery`)**: Authentic activity photographs with interactive filter tabs and an accessible full-screen lightbox zoom.
- **Video Gallery (`#/video-gallery`)**: Video documentaries and camp footage from regional initiatives.
- **News and Announcements (`#/news`)**: Official circulars, upcoming camp dates, and volunteer announcements.

### 4. Engagement & Legal
- **Donate (`#/donate`)**: High-contrast Union Bank of India BHIM UPI QR code, copyable UPI ID (`QR919527076866-1658@unionbankofindia`), verification notice, step-by-step payment guide, and legal disclaimer.
- **Become a Volunteer (`#/volunteer`)**: Call-to-action with benefits and prefilled WhatsApp connection.
- **Contact Us (`#/contact`)**: Office address, helpline/WhatsApp (`9970610781`), official email (`geetgangasocialfoundation@gmail.com`), Google Maps link, and spam-protected direct contact form.
- **Privacy Policy (`#/privacy-policy`)**: Detailed commitment to zero patient/Aadhaar data storage, financial transparency, and digital safety.

---

## 🔒 Security Architecture & Review Checklist

Security is treated as a core architectural priority:

1. **Zero Secret Exposure in Frontend:**
   - No private API keys, administrative passwords, database tokens, or secrets reside in client-side code.
2. **No Insecure Frontend-Only Authentication:**
   - Avoided fake "client-side admin login" pages that give a false impression of security. Any administrative panel must be backed by an independent, authenticated server-side API with Role-Based Access Control (RBAC) and Two-Factor Authentication (2FA).
3. **Privacy & Identity Data Protection:**
   - Private registration documents, Aadhaar cards, PAN cards, and confidential patient records are excluded from public assets and kept untracked via `.gitignore`.
4. **Content Security Policy & Secure Headers:**
   - Configured in `index.html`:
     ```html
     <meta http-equiv="X-Content-Type-Options" content="nosniff" />
     <meta name="referrer" content="strict-origin-when-cross-origin" />
     <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:; object-src 'none'; base-uri 'self';" />
     ```
5. **Form Spam Protection & Input Sanitization:**
   - Form inputs are sanitized against HTML/script injection tags (`<[^>]*>?`).
   - Anti-bot invisible honeypot trap field (`_honeypot`).
   - Time-based rate-limiting check prevents automated script bursts.
   - Submissions dispatch directly to the user's encrypted WhatsApp client, avoiding middleman database leaks.
6. **Payment Safeguards:**
   - Transparent UPI QR display with explicit reminder to verify payee name (`GEETGANGA SOCIAL FOUNDATION SOLAPUR`) before authorizing payments.
   - The site does not store card numbers, PINs, or banking credentials.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite 5
- **Routing:** Lightweight, typed client-side HashRouter (100% immune to 404 errors on static hosts)
- **Styling:** Custom Modular CSS with CSS Variables (Zero paid dependencies, mobile-first)
- **Icons:** `lucide-react`
- **Typography:** Google Fonts (`Mukta` for Devanagari & Latin readability, `Plus Jakarta Sans`)

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
│   │   ├── About.tsx                  # About Summary Component
│   │   ├── Breadcrumbs.tsx            # Inner Page Breadcrumbs
│   │   ├── Contact.tsx                # Contact Info & Spam-Protected Form
│   │   ├── Donation.tsx               # Donation QR & UPI Copy
│   │   ├── Footer.tsx                 # Comprehensive 4-Column Footer
│   │   ├── Gallery.tsx                # Photo Gallery with Lightbox
│   │   ├── Header.tsx                 # Sticky Navbar with Dropdowns
│   │   ├── Hero.tsx                   # Photographic Hero Background
│   │   ├── ImageWithFallback.tsx      # Graceful Asset Fallback
│   │   ├── KeyActivities.tsx          # 5-Pillar Showcase
│   │   ├── MissionVision.tsx          # Mission & Vision Summary
│   │   └── Volunteer.tsx              # Volunteer Call to Action
│   ├── pages/
│   │   ├── HomePage.tsx               # Main Homepage
│   │   ├── AboutPage.tsx              # Detailed About Page
│   │   ├── MissionVisionPage.tsx      # Mission & Vision Page
│   │   ├── LeadershipPage.tsx         # Leadership Overview Page
│   │   ├── ManagingCommitteePage.tsx  # Executive Managing Committee (7 Members)
│   │   ├── AdvisoryCommitteePage.tsx  # Advisory Committee (4 Members)
│   │   ├── EventsPage.tsx             # Past & Upcoming Events Calendar
│   │   ├── HealthCampsPage.tsx        # Medical & Health Camps Deep-Dive
│   │   ├── BloodDonationPage.tsx      # Blood Donation Deep-Dive
│   │   ├── SportsYouthPage.tsx        # Sports & Youth Development Deep-Dive
│   │   ├── EducationSocialPage.tsx    # Education & Social Service Deep-Dive
│   │   ├── PhotoGalleryPage.tsx       # Dedicated Photo Gallery Page
│   │   ├── VideoGalleryPage.tsx       # Video Documentary Page
│   │   ├── DonatePage.tsx             # Dedicated Scan & Donate Page
│   │   ├── VolunteerPage.tsx          # Dedicated Volunteer Page
│   │   ├── NewsPage.tsx               # News & Announcements
│   │   ├── ContactPage.tsx            # Dedicated Contact Page
│   │   └── PrivacyPolicyPage.tsx      # Privacy Policy & Security Standards
│   ├── data/
│   │   └── translations.ts            # Complete Marathi & English Dictionaries
│   ├── styles/
│   │   └── index.css                  # Responsive CSS & Theme Tokens
│   ├── types/
│   │   ├── index.ts                   # Core Data Models
│   │   └── routes.ts                  # Route Types & Route Mapping
│   ├── utils/
│   │   └── router.ts                  # Hash-Based Typed Client Router
│   ├── App.tsx                        # Main App Shell & Route Switcher
│   └── main.tsx                       # Application Entry Point
├── index.html                         # Base HTML with CSP, Security & Fonts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts                     # Relative path configuration (base: './')
└── README.md
```

---

## 🚀 Running and Deploying

### Prerequisites
- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

### Installation
```bash
npm install
```

### Running Locally (Development Mode)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
```
Creates an optimized static bundle in `dist/`.

### Free Static Hosting Deployment
The project is configured with `base: './'` in `vite.config.ts`, making it directly deployable to any free static host:

- **GitHub Pages:** Set publishing source to the `dist` directory or push via GitHub Actions.
- **Vercel:** Run `vercel` or connect your repository; build command is `npm run build`, output is `dist`.
- **Netlify:** Drag and drop the `dist/` directory into Netlify Drop, or connect Git with publish directory `dist`.
- **Cloudflare Pages:** Connect Git with build command `npm run build` and output directory `dist`.

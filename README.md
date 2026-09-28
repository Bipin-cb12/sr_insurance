# Sruthy — Private Insurance Advisory & Financial Protection Consultancy Website

A high-end, premium, professional insurance advisor web application built for **Sruthy**, Insurance Advisor & Financial Protection Consultant.

Designed with a luxury private-wealth aesthetic (Deep Navy `#0a1426`, Off-White `#fafaf8`, Soft Grey, and Subtle Champagne Gold `#d1b164` accents), high-end serif typography (*Cormorant Garamond*), crisp modern UI (*Plus Jakarta Sans*), smooth interactive animations (*Framer Motion*), and conversion-focused customer journeys.

---

## 🌟 Key Features & Sections

1. **Premium Loading Experience** — Sophisticated 1.8s intro animation with monogram crest and *“SRUTHY — Protecting What Matters Most”*.
2. **Sticky Luxury Navbar** — Brand crest, navigation links, primary phone link, consultation trigger, and responsive mobile drawer.
3. **Hero Section** — High-impact headline, value propositions, CTA buttons, WhatsApp link, luxury-framed dummy advisor portrait, floating trust card, and editable demo metrics strip.
4. **Human-Centered Trust Strip** — 5 core trust pillars: Personalized Advice, Transparent Guidance, Long-Term Support, Claim Assistance, and Renewal Support.
5. **About Sruthy** — Advisor biography, advisory philosophy, core principles, and the **5-Step Advisory Approach** methodology cards.
6. **8 Insurance Solutions** — Interactive cards with modals for:
   - Term Insurance
   - Life Insurance
   - Health Insurance
   - Family Protection
   - Child Plans
   - Retirement Planning
   - Motor Insurance
   - Wealth & Investment Plans
7. **Find Your Plan (Interactive Assessment)** — 8-step diagnostic questionnaire evaluating age, occupation, dependents, income, and goals to generate a personalized protection focus and benchmark coverage recommendation (with mandatory informational disclaimer).
8. **Interactive Premium Calculator** — Live sliders for Age, Gender, Tobacco status, Coverage amount (up to ₹5 Cr), Term duration, and Payment cadence with dynamic estimate range and clear demo disclaimers.
9. **Side-by-Side Plan Comparison** — Comprehensive comparison table across coverage, demo premiums, durations, benefits, and target profiles.
10. **Why Choose Sruthy** — 6 value proposition cards explaining the difference between transactional buying and fiduciary advisory.
11. **The Insurance Journey** — 8-phase interactive roadmap from Discovery to Lifelong Claim Advocacy.
12. **Client Testimonials & Trust Metrics** — Clearly labelled demo client reviews and animated statistics showcase (10+ Years, 500+ Families, 1000+ Policies, 99.4% Claim Guidance).
13. **Claim Assistance Desk** — 5-step emergency roadmap, interactive document checklist UI (with text checklist export), and direct claim assistance request form.
14. **Renewal Support** — 4 policy continuity defenses and renewal reminder registration form.
15. **Consultation Booking System** — Interactive appointment booking form with requirement selection, validation, celebratory confetti, and persistent local storage.
16. **Direct Contact Section** — Call, WhatsApp, Email, Book Consultation, and office location with Google Maps placeholder.
17. **AI Insurance Chatbot: Sruthy Assist** — Floating bottom-right assistant with animated typing indicator, timestamps, quick replies, local intelligent rule-based engine, and direct section navigation.
18. **FAQ Accordion** — Comprehensive answers to top client questions.
19. **Insurance Knowledge Hub** — Educational guides with modal reader across 7 categories.
20. **Digital Business Card** — One-click downloadable `.vcf` vCard generator, WhatsApp, Call, Email, and profile sharing.
21. **Advisor Back-Office Portal (Demo CRM)** — Discreet floating button (`Advisor CRM (Demo)`) to view incoming bookings, claims, and renewal tracking with JSON export.
22. **SEO & Accessibility** — Semantic HTML, Open Graph tags, accessible labels, and mobile-first responsive design.

---

## 🛠️ Central Configuration: Updating Agent Details

All agent details, phone numbers, email addresses, office locations, demo statistics, and dummy profile images are centralized in **one single file**:

📁 [`src/data/agentConfig.ts`](file:///c:/Users/balan/Documents/New%20folder/Sruthy_insurance_web/src/data/agentConfig.ts)

```typescript
export const agentConfig = {
  name: 'Sruthy',
  designation: 'Insurance Advisor & Financial Protection Consultant',
  email: 'sruthy@gmail.com',
  phones: {
    primary: '9999999999',
    displayPrimary: '+91 99999 99999',
    secondary: '8888888888',
    displaySecondary: '+91 88888 88888',
  },
  whatsapp: {
    number: '919999999999',
    ...
  },
  profileImage: {
    // Replace this URL with Sruthy's actual portrait photo:
    url: 'https://images.unsplash.com/...',
  },
  ...
};
```

---

## 🚀 Running the Project Locally

### 1. Install dependencies:
```bash
npm install
```

### 2. Start development server:
```bash
npm run dev
```

### 3. Production build:
```bash
npm run build
```

### 4. Preview production build:
```bash
npm run preview
```

---

## 🏗️ Technical Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with custom luxury palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Storage**: Client-side local storage persistence for bookings, claims, and renewal records

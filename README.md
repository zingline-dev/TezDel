# TezDel Ecosystem 🚀

**Odisha's Next-Generation Hyperlocal Commerce Platform**

TezDel is a modern, zero-commission hyperlocal food, grocery, and commerce delivery ecosystem built specifically for the Bhubaneswar market (with plans to scale across Odisha). It connects local consumers with restaurants, home chefs, kirana stores, and delivery captains.

---

## 🏗️ Architecture

The frontend is built using **React, TypeScript, and Vite**, utilizing a modern, responsive design system with a focus on premium aesthetics (glassmorphism, vibrant gradients, and fluid typography).

The repository is split into two distinct standalone frontend applications to maintain clean separation of concerns:

### 1. `TezDel_Web` (Consumer Portal)
The main consumer-facing web application.
- **Features:** Food ordering, grocery delivery, corporate catering, and user account management.
- **Port:** Runs locally on `:5173`.

### 2. `TezDel_Partners` (Partner Acquisition Portal)
A dedicated, high-fidelity landing site designed to onboard local businesses and independent workers.
- **Features:** 
  - Comprehensive breakdown of Partner Programs (Restaurants, Home Chefs, Kiranas, Captains).
  - Highlight of the "Zero Commission" value proposition.
  - ONDC-ready infrastructure roadmap.
  - Partner Success Stories and FAQs.
  - Integrated lead-capture registration form.
- **Port:** Runs locally on `:5174`.

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Modular, Utility-first, heavily reliant on CSS Grid `auto-fit` and `clamp()` for fluid responsiveness)
- **Icons:** Lucide-React
- **Routing:** React Router DOM

---

## 🚀 Getting Started

To run the applications locally, follow these steps:

### Running the Consumer App (`TezDel_Web`)
```bash
cd Frontend/TezDel_Web
npm install
npm run dev
```

### Running the Partner Portal (`TezDel_Partners`)
```bash
cd Frontend/TezDel_Partners
npm install
npm run dev
```

---

## 📈 Recent Progress & Fixes (Latest Updates)

### TezDel Web (Consumer)
- **Navigation Overlap Fix:** Added a global `.page-container` CSS class with a dynamic padding offset (`padding-top: 90px;`) to prevent the fixed glassmorphism navbar from overlapping the top content (Search Bars, Headers) on all internal pages (Food, Grocery, Investor, etc.).
- **Homepage Layout Refinements:**
  - Perfected the CSS Grid alignment on the "Why We're Different" section by switching to `alignItems: 'stretch'`, ensuring the text box and adjacent image share a perfectly symmetric height.
  - Removed outdated layout elements (e.g., broken "Chef Stories" cards) and tightened the overall vertical rhythm of the homepage.
  - Replaced broken, zoomed-in placeholder images with high-quality, wide-angle Unsplash assets (Indian Cuisine/Biryani) that naturally fit the `object-fit: cover` containers.
- **Codebase Cleanliness:** Standardized ES Module import structures (e.g., moved Lucide-React icons to the top of `Contact.tsx`) and ran CSS auto-formatting.

### TezDel Partners
- Established the core architectural separation of the Partner Portal into its own dedicated frontend (`TezDel_Partners`).
- Integrated responsive fluid typography (`clamp()`) and auto-fitting CSS grids for a seamless mobile-to-desktop onboarding experience.

---

## 🌟 Core Philosophy

1. **Zero Commission:** We do not charge predatory 25-30% commissions. We empower local businesses to keep their profits.
2. **Community First:** From supporting independent home chefs to enabling small kirana stores, TezDel is built for the local community.
3. **ONDC Ready:** Preparing local businesses to integrate with the Open Network for Digital Commerce to maximize their digital reach.

---

*By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. © TezDel™ Ltd 2026. All rights reserved.*

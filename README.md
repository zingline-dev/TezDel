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

## 🌟 Core Philosophy

1. **Zero Commission:** We do not charge predatory 25-30% commissions. We empower local businesses to keep their profits.
2. **Community First:** From supporting independent home chefs to enabling small kirana stores, TezDel is built for the local community.
3. **ONDC Ready:** Preparing local businesses to integrate with the Open Network for Digital Commerce to maximize their digital reach.

---

*© 2024-2026 TezDel™ Hyperlocal Ecosystem. All rights reserved.*

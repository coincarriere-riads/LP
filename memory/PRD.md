# CoinCarrière — Landing Page (Riad recruitment) — PRD

## Problem statement (verbatim summary)
Build a premium, cinematic, conversion-focused landing page for **CoinCarrière**, a Moroccan recruitment platform. Target: Riad owners, maisons d'hôtes, traditional hospitality businesses needing reliable staff (reception, housekeeping, kitchen, service, guest experience). Positioning: "Le recrutement de votre Riad, enfin simplifié." All copy in French. Premium SaaS aesthetic (Apple clarity, Linear polish, Stripe data viz). Unexpected design move: rotating recruitment compass with animated needle behind the hero dashboard.

## User personas
- **Riad owner / manager (primary)**: time-constrained, prepping high season, needs reliable hospitality hires fast.
- **Maison d'hôtes operator**: small team, tight budget, quality-driven.
- **Traditional hospitality team**: needs reception, housekeeping, kitchen, service profiles.

## Core requirements (static)
- French copy, premium tone, conversion-focused.
- CTA external URL: `https://coincarriere.com/register?type=company`.
- Official metrics only: 462+ entreprises, 4 949+ offres, 100% gratuit. No fabricated stats.
- 8-sector chart with cyan/blue bars + lime accent on top sector, animated on scroll.
- Mobile-first responsive, prefers-reduced-motion respected.
- All interactive/critical elements have `data-testid` (kebab-case).

## Architecture / Stack
- **Frontend**: React 19 + CRA + Tailwind 3, Outfit (display) + Inter (body) + JetBrains Mono. Components in `/app/frontend/src/components/landing/`.
- **Backend**: FastAPI (`/api` prefix) + MongoDB (`motor`). Lead capture in `recruiter_leads` collection.
- **Hosting**: Supervisor-managed (frontend:3000, backend:8001). External URL via `REACT_APP_BACKEND_URL`.

## What's been implemented (2026-05-16)
- Sticky glassmorphism navigation with mobile menu.
- Cinematic hero with SVG recruitment compass (animated needle, rotating tick ring), glassy floating dashboard preview, layered Riad background.
- Empathy section (4 cards).
- Trust section (3 metric cards, one inverted dark with lime accent).
- Animated horizontal bar chart (8 sectors, lime top accent, IntersectionObserver-driven width animation, accessible note).
- How It Works (4 dark glassmorphism steps with animated connecting line).
- Riad-specific benefits bento (6 cards).
- Realistic dashboard demo (browser frame, sidebar, kanban pipeline Nouveau→Présélection→Entretien→Retenu, filters, analytics mini-card, "Simulation de démo — exemple Riad" label).
- Recruiter features grid (6 cards).
- Final CTA + lead capture form (POST `/api/leads` then opens external signup in new tab).
- Clean footer.
- Backend: `POST/GET /api/leads`, `GET /api/stats/sectors`, plus legacy `/api/status` preserved.
- E2E tested: backend 9/9 pytest pass, frontend 100% (all 11 sections, CTAs, lead form, mobile responsiveness, chart animation).

## Prioritized backlog
- **P1** Anti-spam: honeypot field + per-IP rate limit on `/api/leads`.
- **P1** Admin route `/admin/leads` (basic auth) to view captured Riad demands.
- **P2** A/B test the hero headline + secondary photo crop.
- **P2** Multilingual switch (FR / AR / EN) — placeholder hreflang.
- **P2** Logos strip ("ils recrutent avec nous") if real partner authorizations exist.
- **P3** Migrate `@app.on_event` to lifespan handler.

## Next tasks
- Configure email notification (Resend / SendGrid) when a new lead is captured.
- Add Plausible / GA event tracking on hero & final CTA clicks.
- Replace placeholder Mongo collection with proper indexes on `email` + `created_at`.

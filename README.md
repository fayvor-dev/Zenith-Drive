# Zenith Drive — Motor Dealership Website

A multi-page Next.js dealership site for **Zenith Drive** (Benin City, Edo State, Nigeria), built with TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

## Before you launch — please confirm

All vehicle prices, mileage, and some trim/model details are **editable placeholders** and are flagged in the UI with an amber notice on each vehicle's detail page. Before going live:

1. Open `lib/vehicles.ts` — this is the single source of truth for every vehicle listed on the site (price, year, mileage, specs, description, features, and photo order).
2. Update `price`, `mileageKm`, and set `priceConfirmed: true` once figures are verified.
3. Two listings (`lexus-rx-suv` and `lamborghini-urus`) currently have interior photos only — add exterior photography and update their `images` array when available.
4. Update the Google Maps embed on `/contact` (currently a placeholder box) with a live embed for Ugbowo, Uniben, Benin City.
5. Contact details (phone, WhatsApp, email, address) are set in `components/Footer.tsx`, `components/WhatsAppButton.tsx`, and `app/contact/page.tsx` — update in all three if they change.
6. The Test Drive and Contact forms currently show a success state on submit but do **not** send data anywhere (no backend, per the brief). Wire them to an email service, form endpoint, or database when ready.

## Project structure

```
app/                    Routes (App Router)
  page.tsx              Home
  vehicles/page.tsx      Full inventory with filters
  vehicles/[slug]/       Vehicle detail (dynamic route)
  about/, services/,
  test-drive/, contact/
components/             Reusable UI (Navbar, Footer, Hero, VehicleCard, forms, etc.)
lib/vehicles.ts         Vehicle data — edit this file to add/update inventory
public/vehicles/        Vehicle photography
```

## Adding a new vehicle

Add a new object to the `vehicles` array in `lib/vehicles.ts` with a unique `slug` (used in the URL) and `id`. Drop its photos into `public/vehicles/` and reference them in the `images` array — the first image is used as the primary listing photo everywhere (cards, hero features, etc.).

## Design system

- **Palette:** Cream, Off-White, Butter, Brown, Ash, Charcoal — defined in `tailwind.config.ts`.
- **Type:** Fraunces (display), Manrope (body), Space Mono (specs/labels).
- **Signature motif:** animated contour/elevation lines in the hero (`components/TopoLines.tsx`) — a nod to "Zenith" (the peak) and to performance-graph readouts, used instead of any car photo as a hero background.
- Motion respects `prefers-reduced-motion` automatically.

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Rebrand to Elite Level Lawn Care

Convert this Mike's Mobile Auto Repair / Garage Ace / MMAR Care project into a marketing site for **Elite Level Lawn Care** serving Lee County, FL. Strip out everything tied to an automotive shop, customer/admin/tech portal, memberships, and the native app.

### 1. Brand swap

- `src/lib/brand.ts` → single brand "Elite Level Lawn Care" (drop PLATFORM/PRODUCT split).
- Update memory: new color/brand notes, drop MMAR / Garage Ace references.
- Footer copyright → "Elite Level Lawn Care".
- Use placeholder contact: phone `(555) 123-4567`, service area Lee County, FL.
- Replace logo/favicon references with a simple text/SVG placeholder (no asset generation unless asked).

### 2. Remove portal/admin/tech & memberships

Delete pages, components, routes, edge functions, and DB-coupled UI for:

- `src/pages/portal/*`, `src/pages/admin/*`, `src/pages/tech/*`
- `src/components/portal/*`, `src/components/admin/*`, `src/components/tech/*`, `src/components/shell/*`
- `src/pages/MmarCare.tsx`, `GarageAce.tsx`, `WhyGarageAce.tsx`, `Fleet.tsx`, `FinancingContract.tsx`, `WarrantyPolicy.tsx`, `EstimateApproval.tsx`, `InspectionReport.tsx`, `MileageUpdate.tsx`, `SharedCustomerSummary.tsx`, `SetPassword.tsx`, `Unsubscribe.tsx`, `AppointmentConfirmation.tsx`, `Book.tsx`
- All matching routes in `src/App.tsx`
- Edge functions: keep only generic `send-sms` and `receive-inbound-email` if useful; delete the rest (memberships, invoices, financing, twilio voice, reminders, push, etc.) via `delete_edge_functions`.
- Drop `src/hooks/useAuth.tsx`, `useNativePushRegistration`, related providers from `App.tsx`.
- Remove `FinancingContract`, `WarrantyPolicy`, `Login` page (no auth needed for marketing site).

DB tables themselves stay — no destructive migrations — but unused UI is gone.

### 3. Remove app install / native shell

- Delete `src/pages/InstallApp.tsx`, `src/components/shell/InstallAppBanner.tsx`, `NativeBoot.tsx`, `PullToRefresh.tsx`, `MOBILE_APP_README.md`, `UNIVERSAL_LINKS.md`, `capacitor.config.ts`, `public/.well-known/apple-app-site-association`, `public/.well-known/assetlinks.json`, `public/manifest.webmanifest`.
- Strip Capacitor deps from `package.json` and any imports.
- Strip install banner/links from `Navigation.tsx`, `Footer.tsx`, mobile bottom nav.

### 4. Automotive → Lawn care content

Replace service taxonomy with Lee County industry-standard lawn services:

- Weekly Lawn Mowing
- Edging & Line Trimming
- Hedge & Shrub Trimming
- Fertilization & Weed Control
- Mulch Installation
- Palm Tree Trimming
- Sod Installation & Repair
- Irrigation Repair
- Leaf & Debris Cleanup
- Landscape Design

Files to rewrite:
- `src/lib/serviceTypes.ts`, `src/data/serviceCategories.ts`, `src/data/serviceCityMatrix.ts`, `src/data/localLandingPages.ts`, `src/data/maintenanceIntervals.ts` (delete — auto-only), `src/lib/vehicleMasterChecklist.ts` (delete), `src/lib/auditServiceTypeTemplates.ts` (delete), `src/lib/nhtsa.ts` (delete).
- Blog posts (`src/data/blogPosts.ts`) — replace with 3–4 lawn care starter posts.
- Home page sections (`src/components/home/*`, `Hero`, `Services`, `About`, `Testimonials`, `Contact`, `FAQ`, `WhyChooseUs`, `VoiceSearchAnswers`, `FeaturedServices`, `PopularLocalServices`).
- `Index.tsx`, `AboutPage`, `ServicesIndex`, `ServiceCategory`, `ServiceAreas`, `LeeCounty`, `LocalLanding`, `CityPage`, `ContactPage`, `Reviews`, `ReviewLanding`, `Blog*`, `NotFound`.
- `index.html` meta/title/JSON-LD.
- Email templates in `supabase/functions/_shared/transactional-email-templates/` — strip or rewrite remaining ones.
- Floating call/SMS button keeps the placeholder number.

### 5. Cleanup

- Update `src/App.tsx` route list to only: `/`, `/about`, `/services`, `/services/:slug`, `/service-areas`, `/areas/:city`, `/lee-county-fl`, `/blog`, `/blog/:slug`, `/contact`, `/reviews`, `*`.
- Trim `package.json` of now-unused deps (Capacitor, Stripe, etc.) — keep conservative.
- Update sitemaps/robots/prerender scripts to new routes.
- Update README.

### Technical notes

- This is a destructive refactor — many files deleted in bulk via `rm`.
- Edge functions removed from disk **and** from Supabase via `delete_edge_functions`.
- DB schema left intact (no migrations) — orphan tables are harmless and avoid data loss if you ever restore.
- Memory file updated to reflect new brand + removed memories about MMAR/Garage Ace/portal.

### Out of scope (ask later if needed)

- Real logo, photography, brand colors beyond keeping current dark/green-tweaked palette.
- Real phone number, address, owner name, license info.
- Booking/contact form backend (currently just a `tel:` / SMS link).
- New native app or PWA.
# Project state

Updated: 2026-09-21

## sitemap_status

`COMPLETE — reference frontend`: `/`, eight service URLs, `/ceny/`, `/calculator/`, `/portfolio/`, three generated case routes, `/process/`, `/garantiya/`, `/about/`, `/reviews/`, `/blog/`, one article, `/contacts/`, `/privacy/`, `/personal-data/`, `/thank-you/`, `robots.txt`, `sitemap.xml` and branded HTTP 404.

## page_status

- Structure/content/frontend: complete for reference scope.
- Real business content: blocked on owner data listed below.
- WordPress/Elementor production build: not started; architecture and mapping prepared.
- Forms/CRM: UX states complete; external submission intentionally not connected.

## component_registry

Header, Navigation, Mobile Menu, Button, Text Link, Hero, Section Header, Service Card pattern, Price/Fact Card, Case Card, Case Showcase, FAQ, Lead Form, Input, Select, Checkbox, Calculator Shell, Gallery pattern, Breadcrumbs, CTA Section, Footer, Empty State, Error/validation State and 404.

## business_data_gaps

- Brand/domain and legal entity details.
- Phone, email, messengers, hours, office/showroom and precise service area.
- Product packages, inclusions/exclusions, pricing method, coefficients and minimum check.
- Real durations, warranty terms, SLA and contract extracts.
- CRM choice, integration contract and responsible managers.
- Team names, roles, experience, portraits and production model.
- Real cases: photos, area, ЖК/area, dates, duration, budgets, scope, changes and permissions.
- Real reviews and publication permissions.
- Furniture production model, suppliers and brands permitted for publication.
- Approved privacy/personal-data documents and analytics identifiers.

## media_registry

- `hero.webp/avif`, `project-day.webp/avif`, `project-night.webp/avif`: AI-generated temporary art-direction assets; not factual cases; must be replaced before production.
- All output images include intrinsic dimensions, responsive CSS behavior and lazy loading below hero; hero loads eagerly.

## wordpress_mapping

Complete at architecture/specification level in `WORDPRESS_ELEMENTOR_MAPPING.md`. No WordPress instance, ACF license or Elementor environment was supplied, so CMS implementation and visual parity QA remain pending.

## seo_status

- Unique metadata and canonical reference implemented for public route templates.
- Static HTML generated for every route.
- Sitemap/robots generated; OAI-SearchBot explicitly allowed.
- Breadcrumbs and internal HTML links implemented.
- Factual LocalBusiness/Organization schema intentionally withheld until real NAP/legal data exists.
- Production domain must replace localhost in metadata, sitemap and robots.

## qa_status

- Playwright: 35/35 passed.
- Sitemap: all defined URLs return 200; unknown URL returns branded HTTP 404.
- Console: 0 errors on tested routes.
- Required network requests: 0 failures.
- Responsive overflow: passed at 360, 390, 430, 768, 1366 and 1600 px.
- Interaction: mobile menu, Escape, keyboard focus, calculator, form validation passed.
- Reduced motion: passed.
- Visual inspection: desktop home, mobile home and mobile calculator reviewed; no critical layout defects observed.

## open_bugs

- None in local reference QA.
- Known non-bugs / pending integrations: no CRM transmission, no production NAP/schema, no real price output, no real cases/reviews/team.

## build_status

- `npm audit`: 0 vulnerabilities.
- `npm run lint`: passed.
- `npm run build`: passed; 30 static pages/assets generated.
- `npm run test:qa`: 35 passed.
- Local preview: running at `http://localhost:3000` via `server.mjs`.
- Production deployment: not performed by design.

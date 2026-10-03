# WordPress + Elementor architecture

## Global foundation

| Frontend | Elementor / WordPress |
|---|---|
| CSS color, type, spacing tokens | Elementor Global Colors, Global Fonts и Site Settings; централизованный stylesheet для spacing/motion |
| Header + desktop/mobile nav | Theme Builder Header; Nav Menu + минимальный JS для off-canvas и Escape/focus |
| Footer | Theme Builder Footer с динамическими Global Options |
| Page metadata | Один SEO plugin; динамические Title, Description, canonical, OG и robots |
| 404 | Theme Builder 404; сервер обязан вернуть HTTP 404 |
| Robots / sitemap | SEO plugin + серверная проверка; OAI-SearchBot, Googlebot и Yandex разрешены для публичных URL |

## Component mapping

| Frontend component | Elementor implementation | Data source |
|---|---|---|
| Hero | Reusable Elementor Template | Page fields: eyebrow, H1, intro, CTA, media |
| Button / Text Link | Global widget style | Global CTA settings or local label/URL |
| Service Card | Loop Item | `service` CPT |
| Price Card / table | Loop Item or custom query grid | global pricing options + service fields |
| Case Card | Loop Item | `case` CPT |
| Interactive Case Showcase | Minimal custom Elementor widget | selected `case` records; CSS transitions + small accessible JS |
| Testimonial | Loop Item | `review` CPT linked to case |
| Team Card | Loop Item | `team_member` CPT |
| Metrics | Reusable Template | validated Global Options only |
| Process Steps | Repeater-backed reusable widget | page/CPT repeater |
| FAQ | Reusable accordion template | `faq` CPT or relationship field |
| Lead Form | Form widget or minimal custom form plugin | Global CRM settings; server validation and retry queue |
| Calculator | Minimal custom plugin/widget | versioned coefficient option set |
| Gallery | Elementor Gallery with dynamic field | case gallery |
| Before/After | Minimal accessible custom widget | case before/after fields |
| Breadcrumbs | SEO-plugin breadcrumbs in Theme Builder | current entity hierarchy |
| CTA Section | Reusable Template | Global CTA + contextual copy |

## Structured entities

### `service`

Title, slug, hero copy/media, short promise, included/excluded items, price range, duration range, budget factors, related cases, related FAQ, related articles, SEO/OG fields.

### `case`

Title, slug, ЖК/район, area, property type, repair type, completion date, duration, works budget, materials budget, furniture budget, scope, starting condition, before media, gallery, plan, timeline, technical solutions, changes, linked team, linked review, linked services, SEO/OG fields.

### `review`

Client display name/allowed identification, quote, video, source URL, consent status, linked case, project type, publication status.

### `team_member`

Name, role, experience, responsibility, portrait, credentials and visibility.

### `faq`

Question, answer, topic, linked services/articles, order and publication status.

### `article`

Author relationship, reviewed/updated date, excerpt, body, factual asset/checklist, linked service, linked case, SEO/OG fields.

## Global options

Brand/legal name, phone, messengers, email, office/service area, hours, legal details, primary CTA, confirmed warranty text, validated price coefficients, CRM endpoint IDs, analytics IDs and social/profile URLs. Content Editor may change content but not system templates, integrations or global layout tokens.

## Calculator plugin contract

Inputs: area, market type, condition, repair type, design option, furniture option and extras. Output: honest range by major group. Store coefficient-set version with every result. Send answers, range, landing URL, UTM, yclid/gclid and timestamp to CRM only after contact consent. Expose analytics events `calculator_start`, `calculator_step`, `calculator_result`, `contact_submit`, `abandon_step`.

## Transfer sequence

1. Configure Global Colors, Fonts, spacing and breakpoint rules.
2. Create CPTs, fields, relationships, roles and global options.
3. Build Header, Footer, 404 and base Theme Builder templates.
4. Build Loop Items and reusable section templates.
5. Implement calculator and case showcase as isolated minimal widgets.
6. Populate only verified business content and real media.
7. Compare reference and WordPress at 360/390/430/768/1366/1600.
8. Run SEO, accessibility, forms/CRM, performance and full sitemap QA on staging.

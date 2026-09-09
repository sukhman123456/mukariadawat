# Dawat Restaurant — Website Plan

A warm, premium North Indian restaurant site for Dawat Restaurant, Mukerian. Only the facts you supplied are used; anything unknown shows a clear placeholder.

## Pages

- **Home** — hero ("A Taste of North India, Made to Bring People Together."), short intro ("Good Food. Warm Hospitality."), Dawat Favourites preview, food experience strip, services, why Dawat, rating band, ordering CTA
- **About** — the restaurant, hospitality, dine-in/takeaway/delivery, location advantage on G.T. Road, ₹200–₹400 per person
- **Menu** — Dawat Special Roti, Paneer Tikka, Pineapple Raita, Rice Bowl with `[MENU DESCRIPTION]` / `[MENU PRICE]` placeholders until the real menu is provided
- **Gallery** — food-led grid (breads, mains, dining atmosphere), each captioned as illustrative food imagery, not photos of the premises
- **Reviews** — 4.0 rating, approximately 965 reviews, link out to the Google review profile; no invented testimonials
- **Contact** — name in English and Punjabi, full address, phone 01883-245160, Call Now and Get Directions buttons, embedded Google map of the address

Sticky header on every page: DAWAT / ਦਾਵਤ ਰੇਸਟੋਰੇਂਟ, links to the six pages, Order Online button, hamburger menu on mobile. Footer repeats brand, address, phone, links and Order Online. On mobile a fixed bottom bar keeps Call, Menu and Order Online one tap away.

## Look and feel

- Deep maroon primary, near-black charcoal, muted saffron accent, warm ivory background
- Elegant serif for headings, clean sans-serif for everything else
- Restrained motion: gentle section reveals, image fades, calm hover states
- Squared-off cards, thin gold rules, generous whitespace — no gradients, glass effects or neon

## Images

Six to eight photorealistic North Indian food visuals generated for the hero, intro, menu items, food experience section and gallery — warm natural light, shallow depth of field, restaurant plating, no text or people in frame.

## Placeholders you can fill later

- `[ORDER ONLINE LINK]` — every Order Online button points here until you give the real ordering destination
- `[MENU PRICE]` and `[MENU DESCRIPTION]` on menu items
- Opening hours are omitted entirely since none were provided

## Technical notes

- One route file per page under `src/routes`, shared `Header`, `Footer`, `MobileActionBar`, `SectionHeading`, `DishCard`, `ServiceCard` components
- Colour, radius and font tokens defined in `src/styles.css`; fonts loaded via a link tag in the root route
- Per-page `head()` with unique title, description and Open Graph tags; LocalBusiness/Restaurant JSON-LD on Home and Contact with the real address, phone and price range
- Semantic landmarks, single H1 per page, descriptive alt text, keyboard-focusable controls, AA contrast

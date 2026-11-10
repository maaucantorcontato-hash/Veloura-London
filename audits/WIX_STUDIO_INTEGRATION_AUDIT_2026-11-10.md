# VELOURA — Wix Studio integration audit (10 November 2026)

**Target site:** My Site 2 — site ID `673dd945-7ba6-414e-9099-f77e83a13b9a` — Wix Studio, draft, Free plan. **NOT** the old Veloura Store with Premium/linked domain.

**Data sources:** Connected Wix API reads (site context, Rich Content Site Context List Static Pages, Wix Forms Form Schema API); earlier human-confirmed desktop/mobile Wix Studio screenshots and submitted form test. This is a **structural audit**. Pixel-level Figma/Wix side-by-side inspection is **blocked until the exact Figma file link is provided**. The connected Figma account was authenticated but its connector tools require a file key to open a specific design. Current Wix API tools read business entities; they do not expose direct manipulation of Wix Studio page-layer positions, form styles, responsive breakpoints, or native drag/drop widgets.

## Confirmed page inventory (8 static pages)
| Page ID | Wix title | Current path | Proposed path | Priority |
| --- | --- | --- | --- | --- |
| `c1dmp` | Home | `/home` | assess if legacy empty page, then remove from nav without deleting prematurely | High |
| `cmfqr` | Home · Desktop | `/blank` | `/` after confirming homepage designation in editor | Critical |
| `kxcal` | Shop | `/blank-1` | `/shop` | Critical |
| `lmi3w` | Product Detail · Desktop | `/blank-2` | keep only if it serves a real purpose, otherwise native Wix Stores Product Page | Critical |
| `zhhb3` | Contact | `/blank-3` | `/contact` | High |
| `hitp0` | Our Story | `/blank-4` | `/our-story` | High |
| `hr8un` | Privace Policy | `/blank-5` | `/privacy-policy`; correct typo | High |
| `ryx4g` | Cart Page | `/cart-page` | retain native cart and verify icons/link | Critical |

The Wix Pages API result includes some app pages but excludes other installed Wix Stores app pages. The API inventory is **not** a complete crawl of every dynamic product/cart/checkout URL. These are current internal paths of a draft site, not verified published links. Do not modify slugs without checking all references, navigation bindings, legal/privacy links, and any previously shared URLs.

## Existing Wix Forms (verified)
**Contact form:** `eb73acd9-d969-4f44-b907-5c5adce82a38`, name `Send us a note`, enabled, revision 19. The owner previously confirmed a successful submission. Inputs:
- Required: **Your name** (first name); **Email address** (email validated); **Your Message** (text).
- Optional: **What can we help with?** dropdown: Order enquiry, Delivery & tracking, Returns & refunds, Product question, Other.
- Optional: **Order number (optional)**.
- Required: confirmation of reading **Privacy Policy**, linked internally to `/blank-5`.
- Submit label: **SEND MESSAGE**.
- Confirmation: **Thank you for contacting VELOURA. We'll be in touch soon** (8 seconds).
**Secondary form:** `8900dc53-cbee-49f4-aa5f-147a98e1dac9`, `Subscribe`, enabled. Location and visual integration have not been verified.

**Preservation rule:** Do not delete/recreate the working form, because submission flows, notifications and field identifiers already work. Restyle the **same native Wix form**. The Wix Forms schema REST API controls fields and validation but does not provide a documented route to edit the rendered widget's fonts, paddings, colors or position; those are edited in Wix Studio's selected form **Settings > Design** panel. The official Wix design article confirms controls for form background, fields, header, buttons and responsive breakpoint settings: https://support.wix.com/en/article/wix-forms-designing-your-site-forms

## Functional vs imported elements
Known from prior user screenshots / tests:
- Native Wix mobile Header with working menu and cart has been used on Home, Shop and Contact; keep working native controls.
- Figma-imported eight jewellery cards are arranged in four tiny columns at ~390px; this is a presentation/layout issue **and** they are not yet verified as Wix Stores connected cards.
- Contact form was submitted successfully; visual appearance disliked by owner.
- Some imported Figma text/icons/buttons were visually convincing but initially not linked to Wix native features.
- The active Wix Stores catalog previously contained only five items, including placeholder unrelated products; the eight Figma names are illustrative designs, not confirmed supplier listings. Do not publish fabricated stock/photos/prices.
- The native Wix Stores Product Page should process variants/cart; a static Figma Product Detail page must not masquerade as checkout.

## Prioritized intervention plan
1. **Figma inspection**: open the original `VELOURA — Online Jewellery Store` file, inspect Home, Shop, Product Detail, Our Story and Contact desktop/mobile frames and extract exact type, colors, spacing, interactions. Do not clone Pandora assets or distinctive trademarks/trade dress.
2. **Contact page polish**: implement `CONTACT_REDESIGN.md` using **native Wix Form** widget styling, not static HTML. Verify success, privacy checkbox, a notification message, keyboard and mobile layout.
3. **Site IA & links**: finalize single canonical homepage, clean slugs, fix Privacy typo, use native Wix navigation for Home, Shop, Our Story, Contact, category pages, Cart; test each desktop and mobile state. No deletions without dependencies.
4. **Shop responsiveness**: aim 2 columns at 390px, usable imagery/text/prices and tap targets; avoid guessing missing "Wrap" Wix controls. Inspect layer nesting before changes.
5. **Catalog integration**: actual approved supplier SKUs + Wix Stores native product widgets/links. Make product cards clickable through dynamic product pages. A link is not Add to Cart functionality.
6. **Footer and trust**: clear real contact channel, working Privacy/Terms/Returns, consistent language UK English and GBP, accurate delivery messaging, no fake reviews, fictitious discounts or false badges.
7. **QA & launch readiness**: mobile 390px and desktop, 320px/768px if possible, form test, cart, product variant, checkout (only after billing/payment setup), accessibility and copy. Maintain draft status until reviewed.

## What this audit does NOT claim
It does not say every link is broken; button interactions have not been programmatically crawled. It does not say the Contact page has been visually replaced: the Figma file key and Wix Studio visual editor controls remain prerequisites. No live changes, billing actions or publishing were performed in this audit.

## Changes executed after the audit (same day)

### Wix Catalog V3 — change actually applied and verified
- Site: `673dd945-7ba6-414e-9099-f77e83a13b9a` (My Site 2).
- Product: **Textured Loop Earrings**, ID `d2dc8bef-0a26-414a-b1dc-7bbba867bc6a`.
- Was **visible=true**, unverified from any approved supplier, from legacy/demo catalog.
- Safely patched to **visible=false** using Wix Catalog V3 Update Product with revision guard.
- Verified via Get Product: `visible=false`, revision **2**, retained in catalog (NOT deleted).
- The other four registered products were already not visible in the online store, including the Veloura Gold Pendant Necklace. No prices or inventory values changed.
- This protects against publishing a product that has no documented sourcing/materials/fulfilment review. **It does not alter static Figma-imported card visuals.**

### Contact form inspection
- Wix form `Send us a note` (ID `eb73acd9-d969-4f44-b907-5c5adce82a38`) remains enabled and unchanged.
- Its Wix schema already orders fields **Your name → Email address → What can we help with? → Order number (optional) → Your Message → Privacy Policy checkbox → SEND MESSAGE** (all seven visible controls in one-column 12-unit layout).
- Therefore the main complaint is **visual layout/design**, not schema field ordering. No schema update is justified simply for aesthetics.
- Wix Forms API does not provide an evidenced endpoint for font/colour/padding/section-layout editing; the native Wix Studio visual editor's **Settings → Design** must be used. Do not replace the proven functional form with static HTML.
- Previous test notification and delivery should be re-verified after restyling, not broken by deleting the schema.

### Remaining blockers / next steps
- Figma account connection confirmed through its connector, but no original **Figma Design file key/node URL** was found in available project context, user history, or the project's GitHub repository. Need owner to copy the exact URL of original Figma file.
- Present available Wix connector does **not** expose direct manipulation of Wix Studio's visual canvas (layers, menu wiring, breakpoint-specific pixel styling or form theme). Thus site redesign and slugs were **not** silently changed.
- Wix site remains **draft/free plan** and has not been published.

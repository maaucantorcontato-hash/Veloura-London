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

## Original Figma source verified (file link supplied by owner)

**File:** https://www.figma.com/design/jZbAsMy7VVnCwpoZb3q7Tr/VELOURA-%E2%80%94-Online-Jewellery-Store
**Figma file key:** `jZbAsMy7VVnCwpoZb3q7Tr`, Page 1 `0:1`.

The following **11 original frames** were located in the actual Figma source: Home / Shop / Product Detail / Our Story / Contact (all Desktop and Mobile), plus a reusable button collection. Representative frame IDs:
- Home Desktop: `9:15519`; Home Mobile: `9:16256`
- Shop Desktop: `9:15685`; Shop Mobile: `9:16412`
- Product Detail Desktop: `9:15871`; Product Detail Mobile: `9:16579`
- Our Story Desktop: `9:16028`; Our Story Mobile: `9:16728`
- Contact Desktop: `9:16126`; Contact Mobile: `9:16814`
- Reusable buttons: `9:17352`

**Key corrections to implement in Wix, based on inspected original Figma nodes:**
1. **Mobile Shop grid** source frame `9:16461` is **350px wide with 8 cards in precisely TWO columns**. Card widths **169px**, horizontal gap **12px**, x offsets 0 and 181px. The previous Wix imported layout at 390px showed FOUR unreadably small columns, thus should be fixed in Wix breakpoint, without changing the correct Figma master.
2. **Desktop Contact** source frame `9:16153` uses two columns: customer care section width **480px** at x=64 and form **704px** at x=672. The native Wix contact form should retain working data/notifications and be styled to closely match source frame `9:16168`.
3. **Mobile Contact** source form `9:16845` is **350px wide** and **822px tall**; most inputs are **48px** tall, message area **140px** tall, CTA **50px** tall. Fields are one column and labels above. The Figma desktop form has the name and email field side by side.
4. **Typography** confirmed from nodes: editorial headings **Cormorant Garamond Regular**, body and field labels **Inter Regular**. Desktop Contact heading **76px**, mobile **47px** (may need refinement for usability rather than blindly adopting all sizes).
5. **Exact colour evidence** from source Figma node `9:17450`: SEND MESSAGE background RGB (~136,115,68), i.e. **#887344**. Main text node `9:16152`: RGB (~41,39,32), i.e. **#292720**. Input stroke RGB (~220,214,203), i.e. **#DCD6CB**. **Use these source colours rather than invented previous palette for matching this Figma file.**
6. Figma reusable button instances inspected (`9:17450` SEND MESSAGE and `9:17437` ADD TO BAG) had **zero prototyping reactions**. These are visual components, **not functionality**, explaining why they need native Wix links/forms/cart bindings.
7. The Figma original contains **unverified commercial assertions** such as announcement `A LITTLE EVERYDAY LUXURY · FREE UK DELIVERY OVER £100`, email `support@veloura.co.uk`, placeholder product prices £65–£110, and metal specs on static Figma products. Before publication, verify real contact mailbox, shipping thresholds, actual physical product material/variants/prices, and returns promises; do not assume the Figma sample catalog matches approved suppliers.
8. Source mobile Shop products resemble premium studio photography but actual source images do not establish rights to advertise the *physical supplier goods*. Keep Figma product images as placeholders until approved true-to-product and authorised photos are available.

**Access status:** Figma connector reads and screenshot inspection succeeded. No Figma content was changed — source is a correct visual baseline. The Wix Studio design canvas itself remains inaccessible for automated layer/style edits through the current Wix management connector. Any claim that form typography or 2-column Wix mobile layout was automatically fixed would be incorrect. Wix catalog cleanup (hiding one example item) did succeed and was verified separately.

**Next meaningful implementation:** native Wix Studio Contact form theme and mobile Shop product grid, keeping existing working form/menu/cart; then navigation and product-page integration. The site must stay draft until real fulfillment/commercial details and payment readiness are verified.

## Wix Contact refresh execution — same project task (2026-11-10)

### Figma: real editable designs now created (original screens preserved)
- Dedicated new Figma page `63:45`: **VELOURA · Contact Refresh — Wix Ready**.
- [Enhanced Desktop 1440px](https://www.figma.com/design/jZbAsMy7VVnCwpoZb3q7Tr/VELOURA-%E2%80%94-Online-Jewellery-Store?node-id=63-46) — editable frame `63:46`, native editable fields, gold CTA, jewellery photograph reused from original Figma.
- [Enhanced Mobile 390px](https://www.figma.com/design/jZbAsMy7VVnCwpoZb3q7Tr/VELOURA-%E2%80%94-Online-Jewellery-Store?node-id=63-94) — editable frame `63:94`, stacked fields and full-width CTA.
- [Design states / Wix implementation contract](https://www.figma.com/design/jZbAsMy7VVnCwpoZb3q7Tr/VELOURA-%E2%80%94-Online-Jewellery-Store?node-id=63-137), frame `63:137`.
- Screens were rendered and visually inspected. **They are Figma design layers**, not live form submissions.

### Wix: real safe schema layout mutation applied
- Site ID `673dd945-7ba6-414e-9099-f77e83a13b9a` — My Site 2, Studio **draft**.
- Form ID `eb73acd9-d969-4f44-b907-5c5adce82a38`, **Send us a note**.
- Wix Forms API `PATCH /form-schema-service/v4/forms/{id}`: successful form revision **19 → 20**.
- Set desktop `steps[0].layout.large.items`: **name** column 0 width 6, **email** column 6 width 6, both on row 0; remaining 5 elements occupy sequential full-width rows. Response returned all **7 original fields**.
- Submit success settings and required privacy consent remain in the existing form; no live form or page deletion.
- API result confirms backend schema layout, **not that the Wix Studio visual editor has refreshed**; check visual when Wix page is next reviewed.

### GitHub deliverable
- [Responsive form prototype](../design/wix-contact/index.html) — client-side interactivity, validation, responsive style and safe failure when Wix message bridge is absent.
- [Wix backend Velo reference implementation](../design/wix-contact/backend/velouraContact.web.js) — intended to submit to the **existing** Wix Forms ID, NOT installed.
- [Wix Contact page bridge](../design/wix-contact/wix-contact-page.js) — intended for Wix HTML Component + Velo, NOT installed.
- [Integration contract and security caveats](../design/wix-contact/README.md).

### Not completed
**The custom visual form is NOT live in the Wix Studio Contact page.** The connected Wix API lacks direct canvas widget insertion and visual form styling mutation capabilities; the Wix site has **Velo disabled**. Production installation through the editor/Code is still needed, plus real submission testing and anti-spam safeguards. Keep current native functional form until the transition is validated. Do not misrepresent code readiness as a verified deployed integration.

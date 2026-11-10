# VELOURA — First sale readiness and launch blockers (10 November 2026)

## Scope and principle
Only the actual Wix Studio store **My Site 2**, site ID `673dd945-7ba6-414e-9099-f77e83a13b9a`. Data verified by Wix GetSiteContext and read-only APIs this session. This file is a launch checklist, not proof of a live storefront.

## Verified state
- Wix Studio website status **Draft**, on **Free** plan; `Velo: Disabled`.
- Wix Stores **Catalog V3** installed, site payment currency **GBP**.
- Native Wix Forms form `Send us a note` enabled and functioning previously, responsive form desktop schema updated to show name/email side by side; Figma replacement UI designed and code staged but **not installed in Wix canvas**.
- Wix Stores **5 registered products, ALL currently `visible:false`**:
  1. Veloura Gold Pendant Necklace
  2. Round Eyeglasses
  3. Baseball Cap
  4. Essential Oil Diffuser
  5. Textured Loop Earrings
- Site properties regional country code currently **`IO`**, not GB. This is a site *property*; **do not automatically change to GB** simply because customers are in UK. Determine truthful merchant jurisdiction, payout provider eligibility and taxes.
- Shipping general profile contains **Domestic → GB** and **International → global/default**.
- The **GB Domestic** shipping option is **Free shipping (£0)** without a stated delivery estimate in API output. This must be checked for margin and accurate customer delivery commitments.
- The **International** region has options labeled **DHL Free Shipping, 3–8 business days (£0)** and **DHL Express Shipping, 2–5 business days (£5)**. These claims are unverified; important **not to confuse these with the GB domestic option**. Both need validation/replacement before opening worldwide sales.
- No confirmation of active payment provider or test checkout. **Wix Free + Draft** should not be treated as ready to charge customers.
- Old separate **Veloura Store** Core subscription had a failed renewal, cannot automatically be presumed transferrable to this Studio site, and a compatible Studio plan/payment method must be resolved.
- Figma source has real Contact desktop/mobile frames. New redesign completed as editable Figma frames; Wix connector only edits business data/forms schema, not existing visual page canvas components.

## Immediate conversion path (minimum viable store)
1. **Obtain Yhpup's regular landed cost**, 1 YH4194A Gold pair, repeat/non-promo rate, tracked shipping to a UK address, VAT/import fees separately, and whether supplier charges GBP or USD. There is only seller general quote US$2–4, and listing £0.99 first-time welcome + £2.45 shipping, NOT reliable repeat landed cost.
2. **Verify material and SKU**: RTS24G59561SL screenshots show encouraging lead/cadmium/nickel release test results for generic Yhpup golden stainless steel earrings, but no verified association with exact YH4194A; ask for complete original report and SKU confirmation. Request sample before paid launch if feasible.
3. **Get three comparable UK retail prices** (real-world prices, matching composition/size/finish). Price VELOURA slightly below peers *only after* contribution margin covers acquisition, shipping, taxes, payment fees, refunds/returns and ad spend. No invented comparison prices.
4. **Create ONE verified Wix Stores Product V3 listing** with authentic supplier-authorised media and description, correct selected variant, UK GBP price; keep not visible until all gates clear. Native Wix Stores product page + Add to Cart must be connected from Figma visual Shop cards rather than static anchors.
5. **Fix eCommerce settings**: GB Domestic free shipping currently £0 (must be intentional/absorbed); supplier estimates **11–14 days** for UK, not guaranteed. No 3–8 day promises. International DHL options are currently unverified and should not be advertised until actual carriers/service are contracted; initially target **UK only**.
6. **Payment readiness**: Use correct merchant legal country for provider onboarding, validate account KYC, configure payment provider and GBP payouts, select compatible Wix Studio premium subscription without duplicate billing, connect own domain only after billing.
7. **Test before publish**: product variant, Add to Bag/Cart, checkout shipping calculation UK, confirmation email, fulfilment handoff, native Contact form, privacy/returns policies, mobile navigation. Do not collect money until the real transaction path is confirmed.
8. **Then publish minimal catalog** (one-to-three verified products) and begin organic posts + limited paid ads only after ability to fulfil has been proven.

## High-priority UI work vs later
- **Before launch:** working product detail/card navigation, cart, checkout, UK delivery & returns policies, visible customer support, no fake prices/reviews/promises, legible mobile Shop.
- **Later:** complete custom Figma-to-Wix Contact skin, subtle typography polishing, larger catalog, premium collection, conversion experiments. Current Wix native Contact form is operational; redesign must not delay first legitimate sale.

## Why new Figma Contact design is not auto-published to Wix
Figma node API creates editable designs; it does not create Wix Stores or Wix Forms widgets. The currently-connected Wix management API can query and mutate **Wix business objects/form schema** but does **not have a writable graphical Wix Studio canvas API** to insert/reposition DOM widgets or page code into an existing Studio page. A Wix HTML Component + Velo bridge is technically possible but needs editor access/deployment and tests; Velo is currently disabled. Therefore prepared HTML/Velo files in `design/wix-contact` are *not* a deployed solution. No amount of assuming a link between connectors makes the page interactive.

## Pending merchant responses
Yhpup confirmed supports dropshipping; says YH4194A non-Choice unlabelled, supplier media may be used, UK shipping estimated 11–14 days; generic US$2–4 price for earrings. Final one-pair repeated order landed quote remains missing. Request **only** that cost breakdown now, not repeated packaging questions.

No production store deployment or subscriptions were changed in this investigation.

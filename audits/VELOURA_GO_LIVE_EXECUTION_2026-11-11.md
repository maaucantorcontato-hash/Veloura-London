# VELOURA — Three-stage go-live execution, 11 Nov 2026

## Target
Wix Studio **My Site 2**, meta site ID `673dd945-7ba6-414e-9099-f77e83a13b9a`, Wix Stores Catalog V3. Owner requested product completion, checkout testing, then publication. **Site remains DRAFT, NOT PUBLISHED.** No orders charged or test purchases initiated.

## Stage 1 — Product
**Source:** Wix GetProduct (read with MEDIA_ITEMS_INFO/CURRENCY/ALL_CATEGORIES_INFO/URL) and Wix Media Manager Search Files on 11 Nov 2026.

- Product: `The Sculpt Hoops — Gold Tone`, ID `a217520b-41a9-4e5b-9f99-e4afdc7a94bd`, SKU `VEL-EAR-001-GOLD`.
- Price **£18.90**, site/product currency **GBP**, revision `1`, hidden (`visible:false`).
- Native product relative path `/product-page/the-sculpt-hoops-gold-tone` — path existence in API does NOT prove actual frontend Wix Studio page renders or static imported Figma Shop navigation connects.
- Product media `itemsInfo.items: []`. Media library has 76 files, including AI-generated conceptual gold earring and campaign images. No clearly identifiable **original Yhpup YH4194A Gold supplier photo** among reliably named files. Do not attach fictional/AI visuals as authentic commercial product photography.
- **Inventory availability = OUT_OF_STOCK.** Even if switched visible, checkout would remain blocked. Do not set `inStock:true` or invent quantities without vendor availability and fulfillment confirmation.
- Vendor quote **£4.82 product + £2.45 UK shipping = £7.27 base**, with unknown destination charges/tax. Do not mistake it for VAT-inclusive landed cost.
- Vendor states estimated 11–14 days UK and has approved use of seller media in chat. Supplier compliance report not matched conclusively to exact YH4194A SKU.
- Product remains hidden; no stock, image, or description changes made during this audit.

## Stage 2 — Shipping, tax and payments
**Completed Wix mutation:** Existing UK shipping option `5825f776-482e-4fac-a524-7666d5bc6f9d` successfully PATCHed with a guarded revision; Wix GET after write verified:
- title **Standard UK Delivery**
- estimatedDeliveryTime **Estimated 11–14 days**
- zero-priced rate (customer pays **£0**), title **Free UK Delivery**
- delivery region `Domestic` id `60e3ca92-027b-4b32-b334-28d058a5cdcb`, destination country GB, active.
- International delivery region `d400617d-48d3-4616-87fc-a2eac15cf58e` remains inactive, and unverified DHL offers should not be shown internationally.
- The rate is a seller-estimate shipping promise, not a carrier guarantee. Need explicit policy for handling/fulfillment and return conditions.

**Tax status:**
- `GET /billing/v1/tax-settings` -> `taxIncludedInItemPrices: false` (no indication tax already embedded).
- `POST /billing/v1/tax-regions/query` -> 0 tax regions.
- `POST /billing/v1/manual-tax-mappings/query` -> 0 mappings.
- This is **not proof no VAT is due**. Cross-border goods shipped from AliExpress to UK buyers may involve VAT/import obligations and thresholds. Seek factual legal/tax validation; do NOT invent 0% tax or a blanket tax rate.

**Payment status:**
- Prior actual Stripe connected account `acct_1UVxh2F6xridsHME` is BR, default currency BRL, `charges_enabled:true`, `payouts_enabled:true`, requirements currently due empty. **Not proof of Wix Checkout Stripe integration** — Stripe does not appear as a supported direct option for Brazil in Wix dashboard.
- User's latest Wix dashboard/screen recording reports Brazilian **Wix Pagamentos** with card, Pix, boleto connected/active. Its onboarding indicated owner identity verification pending until a live test transaction and content/footer requirements. **GBP payment compatibility not proven**. The site remains configured with product currency GBP and business location BR.
- No real/experimental charge made. Need an actual Wix native cart-to-payment test **only after** the product is truthful and ready.
- Only accept purchases if processor confirms it can charge site base currency GBP for BR merchant or a legitimate alternative provider supports GBP. Do not switch site currency merely as a workaround without repricing.

## Stage 3 — Publish gate
- Wix GetSiteContext: `Draft / Premium / Custom Domain`; site not published.
- Account domain list: `velouralondon.online` associated to `My Site 2` as primary (registrar HostGator, DNS Cloudflare via nameservers), SSL certificate flag `true`.
- Last Wix connectivity check timestamp 6 Nov 2026 `INVALID_RECORDS`, Cloudflare proxy A IPs `104.21.30.39`, `172.67.150.134`. This is a **stale result** and requires fresh verification before publication. Do not blindly change nameservers, MX or DNS proxies: obtain exact Wix pointing target in dashboard.
- Prior page audit showed imported Figma-style Shop and Product Detail mock pages on `/blank-1` / `/blank-2` which may not be connected to the Wix Stores native product page. Wix REST business API cannot directly edit those Wix Studio canvas elements, so frontend Add to Bag/cart links remain **untested**.

## Concrete release criteria (do not bypass)
- [ ] Authentic approved exact-SKU Yhpup media attached to native product; actual photo reviewed.
- [ ] Confirm current YH4194A inventory/fulfillment and set actual availability accordingly.
- [ ] Validate vendor material/compliance/SKU proof and UK landed cost with VAT/fees.
- [ ] Wix Payments GBP checkout eligibility and BR payout flow confirmed.
- [ ] UK VAT/tax/returns/privacy/delivery/footer information reviewed.
- [ ] Shop card linked to real native Wix Stores product page, Add to Bag/cart usable on desktop/mobile.
- [ ] Cloudflare → Wix DNS/HTTPS currently resolves correctly with updated Wix connectivity check.
- [ ] End-to-end Wix payment test and transactional email/fulfillment workflow validated.
- [ ] Only then switch product visible and publish actual Studio site with owner release approval.

**Current safe status:** only UK shipping option changed; all 6 products hidden; no test charge and no publication.

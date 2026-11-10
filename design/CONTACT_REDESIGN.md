# VELOURA — Contact page redesign specification
**Status:** Wix Studio implementation design, **not yet applied**. Preserve native Wix Forms schema ID `eb73acd9-d969-4f44-b907-5c5adce82a38`.

## Design intent
Premium but approachable editorial British jewellery aesthetic; reference the *quality of hierarchy, service clarity and ease of use* of well-made UK jewellery ecommerce sites. **Do not copy Pandora's exact site, brand assets, distinct graphics or proprietary text.**

**Brand values from current VELOURA kit**
- Ivory `#F8F5EF` — page background
- Ink/brown `#35271F` — main headings and text
- Warm gold `#AE874A` — restrained accent and focus
- Surface `#FFFFFF`
- Subtle borders `#DFD3C3` or lighter `#E9E2D8`
- Serif editorial heading consistent with VELOURA's established type; clean sans for legible functional text.

## Desktop layout
- Native common Wix header retained at top, with working menu, bag and VELOURA wordmark; align spacing to Home/Shop.
- Hero on ivory, centered text:
  - Eyebrow: `CUSTOMER CARE` (12px uppercase, letter spacing ~2px)
  - H1: `We're here to help.` (responsive 42–54px serif, ink)
  - Supporting text: `Questions about an order or a piece you've seen? Send us a message below.`
- Section max width approx **1040px**, centered; **2 columns**, left ~36%, right ~64%, 32–48px gap.
- Left: minimal `How can we help?` section with *real* contact methods only, simple descriptions of product and order enquiries; do not display fake office addresses, response deadlines, phone number or email not yet actually active.
- Right: native form on white or very pale ivory panel. Radius 4–8px, no drop shadow or a barely visible shadow, 1px warm gray border, 28–36px internal padding.
- Name and email in 2 columns only if Wix Forms editor allows a reliable 2-field row and tablet/mobile don't overlap. All subsequent fields full width.
- Field labels ink/dark brown, 14–16px legible, not tiny; vertical spacing 16–20px.
- Inputs: white fill, 1px `#D9D3C9` border, 4px corners, 48–52px min-height. On focus, a visible gold/brown outline of sufficient contrast; preserve visible labels.
- Required markers discreet but visible. Message box 120–150px high.
- Button: full-width or right-aligned (desktop), dark `#35271F` with white text; approx 50–54px min-height, 4px corners; text `SEND MESSAGE`. Include visible hover/focus state.
- Privacy checkbox remains required and linked to the **real** Wix Privacy Policy route; don't remove it while restyling.
- Confirmation success: `Thank you for contacting VELOURA. We'll be in touch soon.` Ensure contrast and focus visibility.

## Mobile (390px target, check 320px)
- Single-column, full-width form with 16–20px horizontal margins.
- H1 ~32–38px, body ~15–16px, eyebrow ~11–12px.
- All inputs one column and **minimum 44px high**, with 16px text to avoid mobile zoom on common browsers.
- Labels above fields; no floating overlays that conflict with dropdown/error states.
- Button **full-width**, min 48px high. Ensure sticky header never overlaps opening content.
- Keep sufficient spacing above bottom footer and between field error messages.
- Avoid huge vertical whitespace or cramped ultra-small imported Figma typography.

## Native Wix implementation path (officially documented)
1. **Wix Studio > Pages > Contact**, select existing `Send us a note` form.
2. **Settings > Design** (for New Wix Forms) and configure:
   - Form Background: white or ivory, restrained border.
   - Form Fields: neutral fill, dark text, minimal border, accessible Regular/Hover/Error states.
   - Header and Paragraph: brand serif heading, clean readable body.
   - Buttons: ink background, white label, purposeful hover and focus treatment.
3. Apply consistent responsive form settings on the **mobile breakpoint**; review field layout, height and validation.
4. Edit surrounding Wix sections for the two-column page composition, not the form's native submission workflow.
5. Test a submission to check success message and notification routing. Respect preview restrictions.

**Important:** These are target values, not claims that every listed numerical control exists in every Wix Form UI. Official guide: https://support.wix.com/en/article/wix-forms-designing-your-site-forms

## Integrity and privacy
- Keep form ID, fields, mandatory checkbox and notification flow.
- Verify `/blank-5` Privacy link before renaming its route; it is currently referenced by the form schema.
- Display a public business contact channel only once it is provisioned and receiving mail.
- Avoid '100% secure', certifications, 24/7 support, shipping guarantees or reviews that are not verifiable.

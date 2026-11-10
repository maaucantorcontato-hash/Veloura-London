# VELOURA Contact — Figma design + Wix Forms integration package

## State (2026-11-10)
- **Editable Figma design created:** [Desktop](https://www.figma.com/design/jZbAsMy7VVnCwpoZb3q7Tr/VELOURA-%E2%80%94-Online-Jewellery-Store?node-id=63-46), [Mobile](https://www.figma.com/design/jZbAsMy7VVnCwpoZb3q7Tr/VELOURA-%E2%80%94-Online-Jewellery-Store?node-id=63-94).
- **Existing Wix Forms schema retained and updated:** `eb73acd9-d969-4f44-b907-5c5adce82a38`, revision 19 → **20**, name and email now share row 0 in **large (desktop) layout**, 6 columns each. The 7 original fields and native submit remain intact. This was a real Wix API mutation.
- **NOT YET INSTALLED:** the custom HTML component, Wix page-code bridge and backend module in this folder are source files for an eventual custom deployment. The current Wix connector does not expose placing HTML elements or their page-code in an existing Wix Studio visual page. **Do not assert that the newly designed custom form is currently live or sending messages.**
- Site My Site 2 remains **draft** (Wix Studio). The native Wix form is the currently usable sender.

## Files
- `index.html` — responsive accessible UI matching Figma; validates client-side. Requires Wix handshake to submit. Never displays a fake success when disconnected.
- `backend/velouraContact.web.js` — backend Wix Velo webMethod; validates contact fields and submits into **the existing** Wix Forms form ID through elevated `@wix/forms` API. It has not been deployed.
- `wix-contact-page.js` — Wix Contact page handler connecting an HTML Component to the webMethod using Wix's documented message API. It has not been deployed.

## Field mapping
| Visual field | Wix Forms target | Type |
| --- | --- | --- |
| Name | `first_name_2559` | STRING / required |
| Email | `email_2d38` | STRING / required |
| Topic | `what_can_we_help_with` | STRING / dropdown optional |
| Order number | `order_number_optional` | STRING / optional |
| Message | `your_message` | STRING / required |
| Privacy consent | `form_field_c135` | BOOLEAN / required |

The topic values in `index.html` were read from the live form schema. The Privacy Policy currently exists at internal route `/blank-5`; its professional slug is a separate pending site-edit task.

## Security and readiness
The standalone preview is not connected and must **never** be used as a public contact form until tested with the backend. The sample Wix Velo `Permissions.Anyone` endpoint is an unauthenticated form-submit surface and must receive **CAPTCHA, abuse/rate-limiting controls and end-to-end tests** before being deployed. Do not expose Wix API keys in browser code. Keep Wix's own native form in place until the new UI has been successfully installed and submission/notification/consent have been verified.

Wix has a documented native form style editor, but the currently connected Wix REST API only edits form schema fields/layout and does **not** provide a safe public endpoint to change canvas-level colors/fonts/spacing or insert a Figma frame. Therefore installation of these particular visuals into the existing **Studio** page remains blocked by the lack of an editor-write tool.

## Primary sources
- https://dev.wix.com/docs/api-reference/crm/forms/form-submissions/create-submission?apiView=SDK
- https://dev.wix.com/docs/api-reference/crm/forms/form-submissions/about-submission-values
- https://dev.wix.com/docs/velo/velo-only-apis/$w/html-component/on-message
- https://dev.wix.com/docs/velo/velo-only-apis/$w/html-component/post-message
- https://support.wix.com/en/article/wix-forms-designing-your-site-forms

## Continued Wix check during supplier review (10 November 2026)
A fresh read-only Wix Form Schema API call confirmed that `Send us a note` remains **enabled**, revision **20**, with **all 7 controls**, required name/email/message/consent, correct thank-you message, and the desired **two-field desktop row** (6 columns each). This is an API-state check, **not a browser-level submission or screenshot verification**. Wix Studio Contact canvas still has the native form rather than the custom Figma design. No new publishing, canvas insertion, Velo enablement or test submissions occurred during this verification.

// Target: Wix Studio Contact page Velo page code.
// DEPLOYMENT STATUS: Reference implementation only, NOT installed.
// Requires existing HTML Component named #htmlContact and Velo enabled.
// HTML iframe content: index.html (same folder in GitHub).
import { submitVelouraContact } from 'backend/velouraContact.web';

$w.onReady(() => {
  const html = $w('#htmlContact');
  html.onMessage(async (event) => {
    const packet = event.data;
    if (!packet || typeof packet !== 'object') return;
    if (packet.type === 'VELOURA_READY') {
      html.postMessage({ type: 'VELOURA_INIT' });
      return;
    }
    if (packet.type !== 'VELOURA_SUBMIT') return;
    const requestId = String(packet.requestId || '');
    if (!requestId.startsWith('veloura-')) return;
    try {
      await submitVelouraContact(packet.fields);
      html.postMessage({ type: 'VELOURA_SUCCESS', requestId });
    } catch (error) {
      // Do not leak exception details or personal data to the iframe.
      html.postMessage({ type: 'VELOURA_FAILURE', requestId });
    }
  });
});
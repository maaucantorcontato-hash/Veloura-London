// Target: Wix Studio's Velo backend / backend/velouraContact.web.js
// DEPLOYMENT STATUS: Reference implementation only. Not installed on My Site 2.
// Source: https://dev.wix.com/docs/api-reference/crm/forms/form-submissions/create-submission?apiView=SDK
import { Permissions, webMethod } from '@wix/web-methods';
import { submissions } from '@wix/forms';
import { auth } from '@wix/essentials';

const FORM_ID = 'eb73acd9-d969-4f44-b907-5c5adce82a38';
const ALLOWED_TOPICS = new Set(['', 'Order enquiry', 'Delivery & tracking', 'Returns & refunds', 'Product question', 'Other']);

export const submitVelouraContact = webMethod(Permissions.Anyone, async (data) => {
  if (!data || typeof data !== 'object') throw new Error('Invalid request');
  const name = String(data.name || '').trim();
  const email = String(data.email || '').trim();
  const message = String(data.message || '').trim();
  const topic = String(data.topic || '');
  const order = String(data.order || '').trim();
  if (name.length < 2 || name.length > 120 || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      message.length < 10 || message.length > 5000 ||
      order.length > 100 || !ALLOWED_TOPICS.has(topic) || data.consent !== true) {
    throw new Error('Invalid contact form fields');
  }
  // Before public deployment, enable and test spam/CAPTCHA protection and per-IP throttling.
  const value = {
    formId: FORM_ID,
    submissions: {
      first_name_2559: name,
      email_2d38: email,
      your_message: message,
      form_field_c135: true
    }
  };
  if (topic) value.submissions.what_can_we_help_with = topic;
  if (order) value.submissions.order_number_optional = order;

  const elevated = auth.elevate(submissions.createSubmission);
  const created = await elevated(value);
  return { ok: true, id: created?._id || created?.submission?._id || null };
});
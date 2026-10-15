// ─────────────────────────────────────────────────────────────
// Business details — edit here and every page updates.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'B&M Property Construction Services',
  shortName: 'B&M',
  legalName: 'B&M Property Construction Services LLC',
  tagline: 'Kitchen, bath and home repair on Florida’s Space Coast',
  // Change this when the new domain is chosen (also in astro.config.mjs).
  url: 'https://www.bmconstructionsvc.com',
  phone: '(321) 890-7839',
  phoneHref: 'tel:+13218907839',
  email: 'bud@bmconstructionsvc.com',
  city: 'Titusville',
  region: 'FL',
  regionName: 'Florida',
  postalCode: '32780',
  geo: { lat: 28.6122, lng: -80.8076 },
  // Florida law (F.S. 489.119) requires the license number on contractor advertising.
  // Fill this in before launch — it shows in the footer and schema when set.
  licenseNumber: '',
  facebook: 'https://www.facebook.com/profile.php?id=61591627427479',
  googleProfile:
    'https://www.google.com/maps/search/?api=1&query=B%26M+Property+Construction+Services+Titusville+FL',
  googleRating: '5.0',
  // FormSubmit sends form entries to the email above. The first entry
  // triggers a one-time activation email to that inbox.
  formAction: 'https://formsubmit.co/bud@bmconstructionsvc.com',
};

export const sameAs = [site.facebook].filter(Boolean);

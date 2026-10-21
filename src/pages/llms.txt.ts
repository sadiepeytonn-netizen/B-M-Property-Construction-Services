import { site } from '../data/site';
import { residentialServices, commercialServices } from '../data/services';
import { commercialFaqs } from '../data/faqs';
import { areas } from '../data/areas';
import { homeFaqs } from '../data/faqs';

// Plain-text summary for AI assistants (llmstxt.org convention).
export function GET() {
  const body = `# ${site.name}

> Licensed and insured remodeling and repair company based in Titusville, Florida. For homeowners: kitchen remodeling, bathroom remodeling, flooring, drywall and painting, carpentry and trim, and general home repairs. For commercial clients: metal stud framing, commercial drywall finishing, and repairs and maintenance for offices and retail spaces, including work as a framing and finishing subcontractor for general contractors. Serves Brevard County and the Orlando area. Does not do new home building or ground-up commercial construction.

- Phone: ${site.phone}
- Email: ${site.email}
- Based in: ${site.city}, ${site.regionName}
- Free written estimates
- Google rating: ${site.googleRating} (${site.googleProfile})
${site.licenseNumber ? `- Florida license: ${site.licenseNumber}\n` : ''}
## Residential services
${residentialServices.map((s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.short}`).join('\n')}

## Commercial services
- [Commercial overview](${site.url}/commercial/)
${commercialServices.map((s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.short}`).join('\n')}

## Service areas
${areas.map((a) => `- [${a.name}, FL](${site.url}/service-areas/${a.slug}/): ${a.county}, ${a.drive.toLowerCase()} from Titusville`).join('\n')}

## Common questions
${[...homeFaqs, ...commercialFaqs.slice(1, 3)].map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Pages
- [Home](${site.url}/)
- [About](${site.url}/about/)
- [Contact and estimates](${site.url}/contact/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

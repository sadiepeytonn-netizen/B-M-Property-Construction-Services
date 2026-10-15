import { site } from '../data/site';
import { services } from '../data/services';
import { areas } from '../data/areas';
import { homeFaqs } from '../data/faqs';

// Plain-text summary for AI assistants (llmstxt.org convention).
export function GET() {
  const body = `# ${site.name}

> Licensed and insured residential remodeling and home repair company based in Titusville, Florida. Kitchen remodeling, bathroom remodeling, flooring, drywall and painting, carpentry and trim, and general home repairs for homeowners in Brevard County and the Orlando area. Does not build new homes.

- Phone: ${site.phone}
- Email: ${site.email}
- Based in: ${site.city}, ${site.regionName}
- Free written estimates
- Google rating: ${site.googleRating} (${site.googleProfile})
${site.licenseNumber ? `- Florida license: ${site.licenseNumber}\n` : ''}
## Services
${services.map((s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.short}`).join('\n')}

## Service areas
${areas.map((a) => `- [${a.name}, FL](${site.url}/service-areas/${a.slug}/): ${a.county}, ${a.drive.toLowerCase()} from Titusville`).join('\n')}

## Common questions
${homeFaqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Pages
- [Home](${site.url}/)
- [About](${site.url}/about/)
- [Contact and estimates](${site.url}/contact/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

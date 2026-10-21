export type Service = {
  slug: string;
  category?: 'residential' | 'commercial'; // defaults to residential
  name: string;
  short: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'bathroom-remodeling',
    name: 'Bathroom remodeling',
    short: 'Tub-to-shower conversions, tile, vanities and full bathroom makeovers.',
    title: 'Bathroom Remodeling in Titusville & Brevard County',
    description:
      'Bathroom remodels in Titusville, Merritt Island, Cocoa and Orlando: walk-in showers, tile, vanities and tub-to-shower conversions. Free estimates. Call (321) 890-7839.',
    image: '/images/bath-after.jpg',
    imageAlt: 'Remodeled bathroom with a glass walk-in shower and double vanity',
    intro: [
      'Most Space Coast homes were built with a builder-grade bathroom that has seen thirty years of humidity. We replace the parts that are tired — the tub, the tile, the vanity, the fan that never quite cleared the steam — and leave you with a room that is easier to clean and holds up to Florida weather.',
      'A typical bathroom remodel with us takes one to three weeks depending on the scope. You get one point of contact from the first walkthrough to the final wipe-down, and a written quote before any work starts.',
    ],
    includes: [
      'Tub-to-shower conversions and walk-in showers',
      'Shower and floor tile, including waterproofing underneath',
      'Vanities, countertops, sinks and mirrors',
      'Toilets, faucets and fixture swaps',
      'Grab bars and aging-in-place updates',
      'Exhaust fans, lighting and paint',
    ],
    faqs: [
      {
        q: 'How long does a bathroom remodel take?',
        a: 'A fixture and vanity refresh can be done in a few days. A full remodel with new tile and a walk-in shower usually takes one to three weeks, depending on materials and any permits required.',
      },
      {
        q: 'Can you turn my bathtub into a walk-in shower?',
        a: 'Yes. Tub-to-shower conversions are one of our most common jobs. We remove the tub, waterproof the new shower area, tile it and install a glass door or panel.',
      },
      {
        q: 'Do you handle permits?',
        a: 'When a job needs a permit, we pull it or coordinate it with the licensed trade partner doing that part of the work, so you are not left chasing paperwork.',
      },
    ],
  },
  {
    slug: 'kitchen-remodeling',
    name: 'Kitchen remodeling',
    short: 'Cabinets, countertops, backsplash, flooring and lighting.',
    title: 'Kitchen Remodeling in Titusville & Central Florida',
    description:
      'Kitchen remodels in Titusville, Brevard County and the Orlando area: cabinets, countertops, backsplash, flooring and lighting. Free estimates. Call (321) 890-7839.',
    image: '/images/kitchen-after.jpg',
    imageAlt: 'Remodeled kitchen with white shaker cabinets, quartz counters and an island',
    intro: [
      'A kitchen update should make the room work better, not just look newer. We plan around how you actually cook and store things, then handle the cabinets, counters, backsplash, flooring and lighting as one job instead of five separate contractors.',
      'Whether you want a full remodel or just new counters and a backsplash on the cabinets you already have, we give you a written quote and a realistic schedule up front.',
    ],
    includes: [
      'Cabinet installation and cabinet refacing',
      'Quartz, granite and butcher-block countertops',
      'Tile backsplash',
      'Kitchen islands and open-concept updates',
      'Under-cabinet and pendant lighting',
      'Flooring, trim and paint to finish the room',
    ],
    faqs: [
      {
        q: 'How much does a kitchen remodel cost?',
        a: 'It depends on the size of the kitchen and the materials. A countertop and backsplash update costs far less than new cabinets and a layout change. We walk the space with you and give a written quote at no charge.',
      },
      {
        q: 'Can I keep my cabinets and just update the rest?',
        a: 'Often, yes. If the cabinet boxes are solid, we can paint or reface them and pair them with new counters, hardware and backsplash for a big change at a lower cost.',
      },
      {
        q: 'Will I be without a kitchen the whole time?',
        a: 'For a counter and backsplash job, usually only a few days. For full remodels we sequence the work to keep the downtime as short as possible and tell you the dates in advance.',
      },
    ],
  },
  {
    slug: 'flooring-installation',
    name: 'Flooring installation',
    short: 'Luxury vinyl plank, tile and laminate, including removing the old floor.',
    title: 'Flooring Installation in Titusville & Brevard County',
    description:
      'Luxury vinyl plank, tile and laminate flooring installed in Titusville, Merritt Island, Cocoa and Orlando. Old floor removal included. Call (321) 890-7839.',
    image: '/images/flooring.jpg',
    imageAlt: 'Luxury vinyl plank flooring being installed in a living room',
    intro: [
      'Florida floors take a beating from sand, humidity and the occasional leak. We install flooring that handles it — mostly waterproof luxury vinyl plank and porcelain tile — and we take care of tearing out the old carpet or tile first.',
      'We level the subfloor where it needs it, undercut door jambs so the new floor slides underneath cleanly, and finish with new baseboards or quarter round.',
    ],
    includes: [
      'Luxury vinyl plank (LVP) and waterproof flooring',
      'Porcelain and ceramic tile',
      'Laminate flooring',
      'Carpet and old tile removal',
      'Subfloor leveling and repair',
      'Baseboards, quarter round and transitions',
    ],
    faqs: [
      {
        q: 'What flooring is best for a Florida home?',
        a: 'Luxury vinyl plank and porcelain tile are the most popular choices here because they are waterproof and handle humidity well. We can help you choose based on the room and your budget.',
      },
      {
        q: 'Do you remove the old flooring?',
        a: 'Yes. Removal and haul-away of the old carpet, tile or laminate is included in our flooring quotes.',
      },
    ],
  },
  {
    slug: 'drywall-and-painting',
    name: 'Drywall repair & painting',
    short: 'Holes, water damage, texture matching and interior paint.',
    title: 'Drywall Repair & Interior Painting in Titusville, FL',
    description:
      'Drywall repair, water-damage patches, texture matching and interior painting in Titusville and across Brevard County and Orlando. Call (321) 890-7839.',
    image: '/images/drywall-paint.jpg',
    imageAlt: 'Freshly painted interior wall with drywall finishing tools',
    intro: [
      'From a doorknob hole to a ceiling stained by a roof leak, we cut out the damaged drywall, patch it, match the existing texture and paint so the repair disappears.',
      'We also paint whole rooms and whole interiors — walls, ceilings, trim and doors — with clean lines and the furniture covered.',
    ],
    includes: [
      'Drywall patches and hole repair',
      'Water-damaged drywall and ceiling repair',
      'Knockdown and orange-peel texture matching',
      'Interior painting: walls, ceilings, trim and doors',
      'Popcorn ceiling removal',
    ],
    faqs: [
      {
        q: 'Can you match my wall texture?',
        a: 'Yes. Most Florida homes have knockdown or orange-peel texture, and we match it so the patch blends in once painted.',
      },
      {
        q: 'Do you repair ceilings after a roof leak?',
        a: 'Yes, once the roof itself has been fixed. We replace the stained or soft drywall, treat it and repaint the ceiling.',
      },
    ],
  },
  {
    slug: 'carpentry-and-trim',
    name: 'Carpentry & trim',
    short: 'Doors, baseboards, crown molding, shelving and built-ins.',
    title: 'Finish Carpentry & Trim Work in Titusville, FL',
    description:
      'Interior doors, baseboards, crown molding, shelving and built-ins in Titusville, Brevard County and Orlando. Call (321) 890-7839 for a free estimate.',
    image: '/images/carpentry.jpg',
    imageAlt: 'New white interior door with trim and baseboards in a hallway',
    intro: [
      'Trim is what makes a room look finished. We hang new interior doors, run baseboards and crown molding, and build shelves and closet systems that fit the space properly.',
      'If a door sticks, a jamb is rotted or a closet just does not work, we fix that too.',
    ],
    includes: [
      'Interior door replacement and adjustment',
      'Baseboards, casing and crown molding',
      'Shelving, closet systems and built-ins',
      'Rotted trim and door jamb repair',
      'Wainscoting and accent walls',
    ],
    faqs: [
      {
        q: 'Can you replace just a few doors?',
        a: 'Yes. We replace single doors or a whole house worth, and match the hardware and trim style you already have.',
      },
    ],
  },
  {
    slug: 'home-repairs',
    name: 'Home repairs',
    short: 'The to-do list: fixtures, fixes and small jobs, done properly.',
    title: 'Handyman & Home Repair Services in Titusville, FL',
    description:
      'Home repair and handyman services in Titusville, Mims, Port St. John and across Brevard County and Orlando. Fixtures, doors, drywall and more. Call (321) 890-7839.',
    image: '/images/home-repair.jpg',
    imageAlt: 'Tool bag and drill on the porch of a Florida home',
    intro: [
      'Not every job is a remodel. Send us your list — the leaky faucet, the sagging cabinet door, the fan that wobbles, the screen that tore in the last storm — and we will knock it out in a visit or two.',
      'Small jobs get the same care as big ones: we show up when we say we will, protect your floors and clean up before we leave.',
    ],
    includes: [
      'Faucet, fixture and ceiling fan replacement',
      'Cabinet, door and hardware repairs',
      'Caulking, grout and sealing',
      'Screen and lanai repairs',
      'Storm prep and post-storm repairs',
      'Move-in and pre-sale punch lists',
    ],
    faqs: [
      {
        q: 'Is there a minimum job size?',
        a: 'No. Call with whatever is on your list. Grouping several small jobs into one visit is usually the most cost-effective way to get them done.',
      },
      {
        q: 'Do you help get a house ready to sell?',
        a: 'Yes. We regularly work through inspection reports and pre-listing punch lists for homeowners and realtors.',
      },
    ],
  },
];

// ── Commercial ──────────────────────────────────────────────
services.push(
  {
    slug: 'commercial-repairs-maintenance',
    category: 'commercial',
    name: 'Commercial repairs & maintenance',
    short: 'Ceiling tile, doors and hardware, drywall patches, paint and punch lists.',
    title: 'Commercial Handyman & Maintenance in Brevard & Orlando',
    description:
      'Commercial repairs and maintenance for offices, retail and property managers in Titusville, Brevard County and Orlando. Punch lists, doors, ceilings, drywall. (321) 890-7839.',
    image: '/images/commercial-maintenance.jpg',
    imageAlt: 'Ladder under an open ceiling tile in an office hallway with a tool cart',
    intro: [
      'Offices, retail units and rental buildings collect the same small problems: a door that will not latch, stained ceiling tiles, holes in the hallway drywall, a bathroom grab bar that came loose. We take care of that list so your space looks right and works for the people using it.',
      'We work with property managers, business owners and building owners on one-off calls, tenant turnovers and recurring maintenance lists.',
    ],
    includes: [
      'Acoustic ceiling tile and grid repair',
      'Commercial doors, closers, hinges and hardware',
      'Drywall patching and paint touch-ups',
      'Restroom fixtures, partitions and grab bars',
      'Tenant turnover and move-out repairs',
      'Punch lists for property managers',
    ],
    faqs: [
      {
        q: 'Do you work with property managers?',
        a: 'Yes. Send the list of units and items, and we will quote it and work through it. We can also handle turnover repairs between tenants.',
      },
      {
        q: 'Can you work around our business hours?',
        a: 'Tell us when the space is open and when it is not, and we will plan the schedule around it so the work disrupts your business as little as possible.',
      },
    ],
  },
  {
    slug: 'metal-stud-framing',
    category: 'commercial',
    name: 'Metal stud framing',
    short: 'Interior partitions, demising walls, soffits and bulkheads in light-gauge steel.',
    title: 'Metal Stud Framing in Brevard County & Orlando',
    description:
      'Light-gauge metal stud framing for interior partitions, demising walls, soffits and bulkheads in Titusville, Brevard County and Orlando. Call (321) 890-7839.',
    image: '/images/office-before.jpg',
    imageAlt: 'Commercial office space framed with metal studs before drywall',
    intro: [
      'Most commercial interiors are framed in light-gauge steel: it is straight, it does not rot, and it is what inspectors and fire codes expect. We lay out and frame interior walls from your floor plan, including the door openings, soffits and blocking the other trades will need.',
      'We frame interior, non-load-bearing walls. On tenant improvements and remodels we can work directly for the owner or as a framing subcontractor for your general contractor.',
    ],
    includes: [
      'Interior partition walls and offices',
      'Demising walls between tenant spaces',
      'Soffits, bulkheads and ceiling framing',
      'Door and window openings with headers',
      'Wood or steel blocking for cabinets, grab bars and TVs',
      'Furring walls over block and concrete',
    ],
    faqs: [
      {
        q: 'Do you work as a subcontractor for general contractors?',
        a: 'Yes. We frame and finish on tenant improvements and remodels for general contractors, working from your drawings and schedule.',
      },
      {
        q: 'Do you do structural or load-bearing framing?',
        a: 'No. We frame interior, non-load-bearing walls, soffits and ceilings. Structural work stays with the building contractor and engineer of record.',
      },
      {
        q: 'Can you frame fire-rated walls?',
        a: 'Yes. Rated walls are framed and finished to the tested assembly specified on the drawings, including the stud gauge, spacing and board type it calls for.',
      },
    ],
  },
  {
    slug: 'commercial-drywall-finishing',
    category: 'commercial',
    name: 'Commercial drywall & finishing',
    short: 'Hanging, taping and Level 4–5 finishes, ready for paint.',
    title: 'Commercial Drywall & Finishing in Brevard & Orlando',
    description:
      'Commercial drywall hanging, taping and Level 4–5 finishing for offices, retail and tenant buildouts in Titusville, Brevard County and Orlando. (321) 890-7839.',
    image: '/images/retail-after.jpg',
    imageAlt: 'Finished retail space with smooth painted drywall walls and a soffit',
    intro: [
      'Commercial lighting is unforgiving. Long walls under LED panels show every seam and screw head, so we finish to the level the space calls for, up to a Level 5 skim coat where the light is harsh.',
      'We hang, tape, finish and prime, and we can paint so the space is ready for flooring and fixtures. That includes moisture-resistant board in wet areas and FRP panels in restaurant kitchens and back rooms.',
    ],
    includes: [
      'Drywall hanging on metal or wood framing',
      'Taping and finishing, Level 4 and Level 5',
      'Fire-rated and moisture-resistant board',
      'Soffits, bulkheads and corner bead',
      'FRP wall panels for kitchens and restrooms',
      'Primer and paint, ready for move-in',
    ],
    faqs: [
      {
        q: 'What is a Level 5 drywall finish?',
        a: 'Level 5 adds a thin skim coat over the entire wall after taping and finishing. It is used where bright or angled light would show the joints, such as long hallways, lobbies and retail walls.',
      },
      {
        q: 'Do you handle both framing and drywall?',
        a: 'Yes. Doing the metal stud framing and the drywall finishing with one crew keeps the schedule tight and avoids finger-pointing between trades.',
      },
    ],
  },
);

export const residentialServices = services.filter((s) => s.category !== 'commercial');
export const commercialServices = services.filter((s) => s.category === 'commercial');

export const getService = (slug: string) => services.find((s) => s.slug === slug);

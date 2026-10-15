export type Area = {
  slug: string;
  name: string;
  county: string;
  drive: string;
  lat: number;
  lng: number;
  zips: string[];
  intro: string;
  homes: string;
  nearby: string[];
};

// Titusville is home base. Order = closest first.
export const areas: Area[] = [
  {
    slug: 'titusville',
    name: 'Titusville',
    county: 'Brevard County',
    drive: 'Home base',
    lat: 28.6122,
    lng: -80.8076,
    zips: ['32780', '32796'],
    intro:
      'Titusville is where we are based, so most of our week is spent in homes from the riverfront to the neighborhoods off Garden Street and Barna Avenue. Being local means we can usually get out for a walkthrough within a few days.',
    homes:
      'A lot of Titusville houses are 1960s–1980s block homes that still have their original bathrooms and kitchens. Those are exactly the rooms we update most: tub-to-shower conversions, new tile, new counters and flooring that stands up to humidity.',
    nearby: ['Mims', 'Port St. John', 'Merritt Island'],
  },
  {
    slug: 'mims',
    name: 'Mims',
    county: 'Brevard County',
    drive: 'About 10 minutes',
    lat: 28.6650,
    lng: -80.8448,
    zips: ['32754'],
    intro:
      'Mims sits just north of Titusville, and we work there regularly. Larger lots and older homes mean a steady mix of bathroom updates, flooring, and repair lists that have been building up.',
    homes:
      'Many Mims homeowners have been in the same house for years and are updating to stay in it longer — walk-in showers, grab bars, wider doorways and easier-to-clean floors are common requests.',
    nearby: ['Titusville', 'Port St. John'],
  },
  {
    slug: 'port-st-john',
    name: 'Port St. John',
    county: 'Brevard County',
    drive: 'About 15 minutes',
    lat: 28.4769,
    lng: -80.7887,
    zips: ['32927'],
    intro:
      'Port St. John is a short drive south on US-1 and one of our busiest areas. We do everything from single-day repair visits to full kitchen remodels here.',
    homes:
      'The neighborhoods here are mostly single-story homes from the 1970s through the 1990s, many with original kitchens, popcorn ceilings and dated tile — all things we replace routinely.',
    nearby: ['Titusville', 'Cocoa', 'Mims'],
  },
  {
    slug: 'cocoa',
    name: 'Cocoa',
    county: 'Brevard County',
    drive: 'About 25 minutes',
    lat: 28.3861,
    lng: -80.7420,
    zips: ['32922', '32926', '32927'],
    intro:
      'From the older homes near Cocoa Village to the newer subdivisions west of I-95, we handle remodels and repairs across Cocoa.',
    homes:
      'Older Cocoa homes often need more than a cosmetic refresh — soft subfloors, old water damage behind tile and tired trim are common finds, and we fix them properly before the new finishes go in.',
    nearby: ['Rockledge', 'Merritt Island', 'Port St. John'],
  },
  {
    slug: 'merritt-island',
    name: 'Merritt Island',
    county: 'Brevard County',
    drive: 'About 25 minutes',
    lat: 28.3581,
    lng: -80.6823,
    zips: ['32952', '32953'],
    intro:
      'Merritt Island sits between the Indian River and the Banana River, and the salt air and humidity are hard on bathrooms, floors and trim. We remodel and repair homes across the island.',
    homes:
      'Waterfront and canal homes here benefit most from moisture-resistant choices: porcelain tile, waterproof vinyl plank, PVC trim in wet areas and proper ventilation in bathrooms.',
    nearby: ['Cocoa', 'Titusville', 'Rockledge'],
  },
  {
    slug: 'rockledge',
    name: 'Rockledge',
    county: 'Brevard County',
    drive: 'About 30 minutes',
    lat: 28.3500,
    lng: -80.7253,
    zips: ['32955'],
    intro:
      'Rockledge has some of the oldest neighborhoods on the Space Coast along with newer communities to the west. We work in both, mostly on kitchens, bathrooms and flooring.',
    homes:
      'In the older riverfront homes we often update kitchens and baths while keeping the character of the house; in newer homes the request is usually upgrading builder-grade finishes.',
    nearby: ['Cocoa', 'Merritt Island'],
  },
  {
    slug: 'oviedo',
    name: 'Oviedo',
    county: 'Seminole County',
    drive: 'About 45 minutes',
    lat: 28.6700,
    lng: -81.2081,
    zips: ['32765', '32766'],
    intro:
      'We travel west on SR-50 to Oviedo for kitchen and bathroom remodels and larger repair projects. Scheduling is planned ahead so you get the same crew start to finish.',
    homes:
      'Oviedo has a lot of 1990s and 2000s subdivision homes that are ready for their first real update — swapping out builder-grade vanities, laminate counters and carpet.',
    nearby: ['Winter Park', 'Orlando'],
  },
  {
    slug: 'winter-park',
    name: 'Winter Park',
    county: 'Orange County',
    drive: 'About 50 minutes',
    lat: 28.5999,
    lng: -81.3392,
    zips: ['32789', '32792'],
    intro:
      'In Winter Park we take on bathroom and kitchen remodels, flooring and finish carpentry, often in older homes where the details matter.',
    homes:
      'Many Winter Park homes date back decades. We update the rooms that need it while respecting original trim, layouts and character wherever we can.',
    nearby: ['Orlando', 'Oviedo'],
  },
  {
    slug: 'orlando',
    name: 'Orlando',
    county: 'Orange County',
    drive: 'About 50 minutes',
    lat: 28.5384,
    lng: -81.3789,
    zips: ['32801', '32803', '32806', '32817', '32828'],
    intro:
      'We travel to Orlando for kitchen remodels, bathroom remodels and flooring jobs. If you are in east Orlando near SR-50 or the 408, you are an easy drive for us.',
    homes:
      'Orlando homes range from mid-century houses near downtown to newer communities on the east side. Whatever the age, we focus on finishes that hold up in Florida heat and humidity.',
    nearby: ['Winter Park', 'Oviedo', 'Clermont'],
  },
  {
    slug: 'clermont',
    name: 'Clermont',
    county: 'Lake County',
    drive: 'About 1 hour 20 minutes',
    lat: 28.5494,
    lng: -81.7729,
    zips: ['34711', '34714', '34715'],
    intro:
      'Clermont is the far edge of where we travel, and we go there for remodels and larger projects worth the drive. We schedule these jobs in solid blocks so the work keeps moving.',
    homes:
      'Clermont has grown fast, and many newer homes have builder-grade kitchens and bathrooms that owners want upgraded — counters, tile, showers and flooring.',
    nearby: ['Orlando', 'Winter Park'],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);

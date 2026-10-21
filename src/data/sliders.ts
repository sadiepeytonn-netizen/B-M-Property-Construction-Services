import { img } from './images';

export const homePairs = [
  { label: 'Kitchen', before: img('kitchen-before'), after: img('kitchen-after'),
    beforeAlt: 'Dated 1980s kitchen with oak cabinets and laminate counters before remodeling',
    afterAlt: 'The same kitchen after remodeling with white shaker cabinets and quartz counters' },
  { label: 'Bathroom', before: img('bath-before'), after: img('bath-after'),
    beforeAlt: 'Dated bathroom with pink tile and a fiberglass tub before remodeling',
    afterAlt: 'The same bathroom after remodeling with a glass walk-in shower and double vanity' },
];

export const commercialPairs = [
  { label: 'Office suite', before: img('office-before'), after: img('office-after'),
    beforeAlt: 'Commercial office suite framed with metal studs before drywall',
    afterAlt: 'The same office suite finished with painted drywall, a glass conference room and ceiling grid' },
  { label: 'Retail space', before: img('retail-before'), after: img('retail-after'),
    beforeAlt: 'Retail tenant space with metal stud framing and taped drywall during finishing',
    afterAlt: 'The same retail space finished with smooth painted walls, a soffit and polished concrete floor' },
];

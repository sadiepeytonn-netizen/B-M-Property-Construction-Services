// Image sources. During preview these point at the Higgsfield CDN;
// once the files are in /public/images, set USE_LOCAL = true.
const USE_LOCAL = false;
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3JCuhy8bk00IMgzdkEJSO8oJPBi';

const remote: Record<string, string> = {
  'kitchen-after': `${CDN}/hf_20261015_143240_0bb9b33d-69c3-47e3-9667-7a9ad9353d6a.png`,
  'bath-after': `${CDN}/hf_20261015_143240_081f593d-6ceb-4c1f-8d8c-16f2c7a7ef52.png`,
  flooring: `${CDN}/hf_20261015_143240_49fad6c3-25cf-4392-b98a-55ad4e42a22c.png`,
  carpentry: `${CDN}/hf_20261015_143239_a695a622-788b-438a-b70a-e41ea11f800f.png`,
  'kitchen-before': `${CDN}/hf_20261015_143605_1dbdaa0a-33ea-4bbe-9449-b636ce5796d3.png`,
  'bath-before': `${CDN}/hf_20261015_143605_7e298c09-e31d-4947-b6bb-73ca7179444f.png`,
  'drywall-paint': `${CDN}/hf_20261015_143508_62d75e36-1351-400e-92d1-4d1d610713e1.png`,
  'home-repair': `${CDN}/hf_20261015_143509_7d57083c-a259-49d2-a726-d18ec5d89fd6.png`,
  // Commercial
  'office-before': `${CDN}/hf_20261021_205028_f32e8677-d73a-4455-b045-fd3591d4a17e.png`,
  'office-after': `${CDN}/hf_20261021_204918_b722a9eb-81cd-437c-adf3-67b57b765534.png`,
  'retail-before': `${CDN}/hf_20261021_205028_821d46f6-8113-4761-881b-57d91bc90b9d.png`,
  'retail-after': `${CDN}/hf_20261021_204918_22dbfb75-ef42-45f1-9ac4-d412779728fb.png`,
  'commercial-maintenance': `${CDN}/hf_20261021_204919_98d9ee39-29bf-4834-bd99-57de9b0b6c33.png`,
};

export function img(name: string): string {
  if (USE_LOCAL || !remote[name]) return `/images/${name}.jpg`;
  return remote[name];
}

// Accepts "/images/name.jpg" paths used in data files.
export function imgPath(path: string): string {
  const name = path.replace(/^\/images\//, '').replace(/\.\w+$/, '');
  return img(name);
}

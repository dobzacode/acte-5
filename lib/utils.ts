import { Image, Logo } from '@/sanity/lib/queries';
import { clsx, type ClassValue } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://corentinkittel.fr';

export async function dynamicBlurDataUrl(url: string) {
  const base64str = await fetch(`${baseUrl}/_next/image?url=${url}&w=16&q=75`).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString('base64')
  );

  const blurSvg = `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
        <filter id='b' color-interpolation-filters='sRGB'>
          <feGaussianBlur stdDeviation='1' />
        </filter>
  
        <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
        href='data:image/png;base64,${base64str}' />
      </svg>
    `;

  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}

export function imageByIndex(images: Image[], index: number) {
  const image = images[index % images.length];
  return image.asset; // Retourner uniquement l'objet asset de l'image
}

export function getCategoryWithSubCategory(
  categorie:
    | 'Convention'
    | 'Anniversaire'
    | 'Inauguration'
    | 'Spectacle clef en main'
    | 'Spectacle sur mesure'
    | 'Cérémonie des médailles'
    | 'Cérémonie des voeux'
    | 'Portes ouvertes'
    | 'Soirée de gala'
    | "Spectacle d'entreprise"
    | 'Team Building'
    | 'Identité visuelle'
    | "Vidéo d'entreprise"
    | 'Support de communication'
    | 'Edition'
) {
  console.log(categorie);
  switch (categorie) {
    case 'Inauguration':
    case 'Convention':
    case 'Anniversaire':
    case 'Cérémonie des médailles':
    case 'Cérémonie des voeux':
    case 'Portes ouvertes':
    case 'Soirée de gala':
    case 'Team Building':
      return 'Evenementiel';
    case "Spectacle d'entreprise":
    case 'Spectacle clef en main':
    case 'Spectacle sur mesure':
      return 'Spectacle';
    default:
      return 'Graphisme';
  }
}

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export const decodeAssetId = (id: string) => {
  const [, assetId, dimensions, format] = pattern.exec(id) ?? [];
  const [width, height] = dimensions.split('x').map((v: string) => parseInt(v, 10));

  return {
    format,
    width,
    height
  };
};

export function reorganizeArray(
  array: (Logo & { blurSrc: string; url: string })[]
): (Logo & { blurSrc: string; url: string })[] {
  if (!array.length) {
    return [];
  }

  const priorityTitles = [
    'RGDS',
    'Mars Petcare',
    'Groupe Roederer',
    'BPALC',
    'Constellium',
    'Ophea'
  ];

  let validArray = array.filter(
    (item): item is Logo & { blurSrc: string; url: string } =>
      item && typeof item === 'object' && 'title' in item && item.title != null
  );

  // Create a map to store priority items by their titles
  const priorityItemsMap = new Map<string, Logo & { blurSrc: string; url: string }>();
  const otherItems: (Logo & { blurSrc: string; url: string })[] = [];

  // Separate items into priority map and other items
  validArray.forEach((item) => {
    if (priorityTitles.includes(item.title!)) {
      priorityItemsMap.set(item.title!, item);
    } else {
      otherItems.push(item);
    }
  });

  // Shuffle other items
  for (let i = otherItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [otherItems[i], otherItems[j]] = [otherItems[j], otherItems[i]];
  }

  // Create ordered priority array based on priorityTitles order
  const orderedPriorityItems = priorityTitles
    .map((title) => priorityItemsMap.get(title))
    .filter((item): item is Logo & { blurSrc: string; url: string } => item != null);

  return [...orderedPriorityItems, ...otherItems];
}

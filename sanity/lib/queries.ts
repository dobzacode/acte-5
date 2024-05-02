import { PortableTextBlock } from '@portabletext/react';
import { groq } from 'next-sanity';

export interface Event {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  categorie:
    | 'Convention'
    | 'Anniversaire'
    | 'Inauguration'
    | 'Cérémonie des médailles'
    | 'Cérémonie des voeux'
    | 'Portes ouvertes'
    | 'Soirée de gala'
    | "Spectacle d'entreprise"
    | 'Team Building';
  date: string;
  titre: string;
  description: string;
  client: string;
  metadescription: string;
  metatitre: string;
  imageGallery: Image[];
}
export interface Author {
  _type: string;
  _ref: string;
}

export interface Image {
  _type: string;
  asset: any;
  alt?: string;
  url: string;
  blurSrc: string;
}

export interface ImageWithUrl {
  _type: string;
  asset: any;
  alt?: string;
  url: string;
}

export interface Post {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  slug: {
    current: string;
    _type: string;
  };
  metatitre: string;
  metadescription: string;
  titre: string;
  auteur?: Author;
  mainImage: Image;
  imageGallery?: Image[];
}

export const POSTS_QUERY = groq`*[_type == "publication" && defined(slug)]`;

export type PostsQueryResponse =
  | (Post & {
      body?: PortableTextBlock[] | null;
    })[]
  | null;

export const POST_QUERY = groq`*[_type == "publication" && slug.current == $slug][0]`;

export type PostQueryResponse =
  | (Post & {
      body?: PortableTextBlock[] | null;
    })
  | null;

export const EVENTS_QUERY = groq`*[_type == "evenement"]`;

export type EventsQueryResponse = Event[] | null;

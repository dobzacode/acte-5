import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import event from './schemaTypes/event';
import post from './schemaTypes/post';

import revueScouteActuelle from './schemaTypes/revue-scoute-actuelle';
import spectacle from './schemaTypes/spectacle';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, event, spectacle, revueScouteActuelle]
};

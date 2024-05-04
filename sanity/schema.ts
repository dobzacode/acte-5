import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import event from './schemaTypes/event';
import post from './schemaTypes/post';
import revueScoute from './schemaTypes/revue-scoute';
import spectacle from './schemaTypes/spectacle';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, event, spectacle, revueScoute]
};

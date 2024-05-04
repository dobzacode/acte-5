import { type SchemaTypeDefinition } from 'sanity';

import author from './schemaTypes/author';
import blockContent from './schemaTypes/blockContent';
import category from './schemaTypes/category';
import event from './schemaTypes/event';
import post from './schemaTypes/post';
import spectacle from './schemaTypes/spectacle';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, event, spectacle]
};

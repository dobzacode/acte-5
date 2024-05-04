import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { frFRLocale } from '@sanity/locale-fr-fr';
import { presentationTool } from 'sanity/presentation';
import { dataset, projectId, studioUrl } from './sanity/lib/api';
import { schema } from './sanity/schema';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['']);

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,

  plugins: [
    structureTool({
      //@ts-expect-error - TS doesn't know about the `structure` method
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("Tournée de l'année").id('revueScouteActuelle').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('revueScouteActuelle').documentId('revueScouteActuelle')
            ),

            // Regular document types
            S.documentTypeListItem('evenement').title('Evenement'),
            S.documentTypeListItem('publication').title('Publication'),
            S.documentTypeListItem('spectacle').title('Spectacle'),
            S.documentTypeListItem('revueScouteAffiche').id('Affiches de la Revue Scoute')
          ])
    }),
    frFRLocale(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft'
        }
      },
      title: 'Aperçu'
    })
  ],
  schema: {
    types: schema.types,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
  }
});

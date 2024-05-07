import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { frFRLocale } from '@sanity/locale-fr-fr';
import { muxInput } from 'sanity-plugin-mux-input';
import { presentationTool } from 'sanity/presentation';
import { dataset, projectId, studioUrl } from './sanity/lib/api';
import { schema } from './sanity/schema';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['revueScouteActuelle', 'revueScouteAffiche']);

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,

  plugins: [
    muxInput(),
    structureTool({
      //@ts-expect-error - TS doesn't know about the `structure` method
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title("Tournée de l'année")
              .id('revueScouteActuelle')
              .child(
                S.document().schemaType('revueScouteActuelle').documentId('revueScouteActuelle')
              ),
            S.listItem()
              .title('Affiches de la Revue Scoute')
              .id('revueScouteAffiche')
              .child(
                S.document().schemaType('revueScouteAffiche').documentId('revueScouteAffiche')
              ),

            S.documentTypeListItem('evenement').title('Evenement'),
            S.documentTypeListItem('publication').title('Publication'),
            S.documentTypeListItem('spectacle').title('Spectacle')
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

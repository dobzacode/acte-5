import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { frFRLocale } from '@sanity/locale-fr-fr';
import { presentationTool } from 'sanity/presentation';
import { dataset, projectId, studioUrl } from './sanity/lib/api';
import { schema } from './sanity/schema';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['revueScouteActuelle', 'revueScouteAffiche', 'parametres']);

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,

  plugins: [
    structureTool({
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
            S.listItem()
              .title('Paramètres')
              .id('parametres')
              .child(S.document().schemaType('parametres').documentId('parametres')),
            S.documentTypeListItem('evenement').title('Projets'),
            S.documentTypeListItem('publication').title('Articles (blog)'),
            S.documentTypeListItem('spectacle').title('Spectacle'),
            S.documentTypeListItem('logo').title('Logo')
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

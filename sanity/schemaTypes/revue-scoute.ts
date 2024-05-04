import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'revueScoute',
  title: 'La Revue Scoute',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO'
    },
    { name: 'production', title: 'Production' }
  ],
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (Rule) =>
        Rule.max(100)
          .required()
          .warning(`Le titre de l'événément ne doit pas dépasser 100 caractères`)
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'blockContent'
    }),
    defineField({
      name: 'ecritureEtJeu',
      title: 'Ecriture et jeu',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'miseEnScene',
      title: 'Mise en scène',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'costumes',
      title: 'Costumes',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'decors',
      title: 'Décors',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'lumiereEtRegie',
      title: 'Lumière et régie',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'musiqueEtSon',
      title: 'Musique et son',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'photos',
      title: 'photos',
      type: 'array',
      group: 'production',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'imageGallery',
      title: "Galerie d'image",
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'metatitre',
      title: 'Métatitre',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'metadescription',
      title: 'Métadescription',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required()
    })
  ],

  preview: {
    select: {
      title: 'titre',
      date: 'date',
      media: 'imageGallery.0'
    },
    prepare(selection) {
      const { title } = selection;
      return { ...selection, subtitle: title };
    }
  }
});

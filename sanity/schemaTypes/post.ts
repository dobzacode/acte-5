import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'metatitre',
      title: 'Métatitre',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'metadescription',
      title: 'Métadescription',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'auteur',
      title: 'Auteur',
      type: 'reference',
      to: { type: 'author' }
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principal',
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
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publié le',
      type: 'datetime'
    }),
    defineField({
      name: 'body',
      title: 'Corps de texte',
      type: 'blockContent'
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
    })
  ],

  preview: {
    select: {
      title: 'titre',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    }
  }
});

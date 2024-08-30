import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'evenement',
  title: 'Evénement',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'media', title: 'Media' },
    { name: 'contenu', title: 'Contenu', default: true }
  ],
  fields: [
    defineField({
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'contenu',
      options: {
        list: [
          { title: 'Convention', value: 'Convention' },
          { title: 'Anniversaire', value: 'Anniversaire' },
          { title: 'Inauguration', value: 'Inauguration' },
          { title: 'Cérémonie des médailles', value: 'Cérémonie des médailles' },
          { title: 'Cérémonie des voeux', value: 'Cérémonie des voeux' },
          { title: 'Portes ouvertes', value: 'Portes ouvertes' },
          { title: 'Soirée de gala', value: 'Soirée de gala' },
          { title: "Spectacle d'entreprise", value: "Spectacle d'entreprise" },
          { title: 'Team building', value: 'Team Building' },
          { title: 'Identité visuelle', value: 'Identité visuelle' },
          { title: 'Support de communication', value: 'Support de communication' },
          { title: 'Edition', value: 'Edition' },
          { title: 'Spectacle clef en main', value: 'Spectacle clef en main' },
          { title: 'Spectacle sur mesure', value: 'Spectacle sur mesure' },
          { title: "Vidéo d'entreprise", value: "Vidéo d'entreprise" }
        ]
      },
      validation: (Rule) => Rule.required().min(1)
    }),

    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      group: 'contenu',
      validation: (Rule) =>
        Rule.max(100)
          .required()
          .warning(`Le titre de l'événément ne doit pas dépasser 100 caractères`)
    }),

    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      group: 'contenu',
      validation: (Rule) =>
        Rule.required().warning(`Le nom du client ne doit pas dépasser 60 caractères`)
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      group: 'contenu',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'contenu',
      validation: (Rule) =>
        Rule.max(200)
          .required()
          .warning(`La description de l'événément ne doit pas dépasser 200 caractères`)
    }),
    defineField({
      name: 'imageGallery',
      title: "Galerie d'image",
      type: 'array',
      group: 'media',
      validation: (Rule) => Rule.required().min(1),
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
      title: 'Fichier vidéo',
      name: 'video',
      type: 'file',
      group: 'media',
      hidden: ({ document }) =>
        //@ts-expect-error is not defined
        document?.categories?.some((categorie) => categorie === "Vidéo d'entreprise") ? false : true
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'seo',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'titre',
        maxLength: 96
      }
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
      client: 'client',
      media: 'imageGallery.0'
    },
    prepare(selection) {
      const { title, client } = selection;
      return { title, subtitle: client };
    }
  }
});

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'evenement',
  title: 'Evénement',
  type: 'document',
  fields: [
    defineField({
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
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
          { title: 'Team building', value: 'Team Building' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
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
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) =>
        Rule.required().warning(`Le nom du client ne doit pas dépasser 60 caractères`)
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200)
          .required()
          .warning(`La description de l'événément ne doit pas dépasser 200 caractères`)
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
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'metadescription',
      title: 'Métadescription',
      type: 'string',
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
      const { title } = selection;
      return { ...selection, subtitle: title };
    }
  }
});

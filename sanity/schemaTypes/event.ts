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
          { title: 'Convention', value: 'convention' },
          { title: 'Anniversaire', value: 'anniversaire' },
          { title: 'Inauguration', value: 'inauguration' },
          { title: 'Cérémonie des médailles', value: 'ceremonieDesMedailles' },
          { title: 'Cérémonie des voeux', value: 'ceremonieDesVoeux' },
          { title: 'Portes ouvertes', value: 'portesOuvertes' },
          { title: 'Soirée de gala', value: 'soireeDeGala' },
          { title: "Spectacle d'entreprise", value: 'spectacleDentreprise' },
          { title: 'Team building', value: 'teamBuilding' }
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

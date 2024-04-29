import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ]
});

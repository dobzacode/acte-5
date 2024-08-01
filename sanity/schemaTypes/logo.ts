import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',

  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
  ],

  preview: {
    select: {
      title: 'title',
      media: 'logo'
    },
    prepare(selection) {
      const { title, media } = selection;
      return { title, media };
    }
  }
});

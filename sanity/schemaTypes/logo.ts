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
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
  ],

  preview: {
    select: {
      title: 'titre',
      media: 'logo'
    },
    prepare(selection) {
      return { ...selection };
    }
  }
});

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'parametres',
  title: 'Paramètres',
  type: 'document',
  groups: [
    { name: 'spectacle', title: 'Spectacle', default: true },
    { name: 'evenement', title: 'Evenementiel' }
  ],
  fields: [
    defineField({
      name: 'lienBilletterie',
      title: 'Lien vers la billetterie',
      type: 'url',
      group: 'spectacle',
      validation: (Rule) => Rule.required().warning(`Le lien vers la billetterie est obligatoire`)
    })
  ],
  preview: {
    prepare() {
      return { title: 'Paramètres' };
    }
  }
});

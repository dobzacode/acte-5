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
      group: 'spectacle'
    }),
    defineField({
      name: 'tourneeBoutton',
      title: "Texte du bouton tournée de la page d'accueil spectacle",
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'spectacle'
    })
  ],
  preview: {
    prepare() {
      return { title: 'Paramètres' };
    }
  }
});

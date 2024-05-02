interface Block {
  h3: string;
  p: string;
}

interface Service {
  slug: string;
  title: string;
  h2: string[] | string;
  block: Block[] | Block;
  imageSrc: string;
}

const SERVICES_DATA: Service[] = [
  {
    slug: 'ceremonie-remise-medailles',
    title: 'Cérémonie des médailles',
    h2: 'Que ce soit une cérémonie des médailles du travail, ou encore une cérémonie pour célébrer l’ancienneté, chaque salarié a droit, au cours de sa carrière à son moment de gloire, de reconnaissance.',
    block: [
      {
        h3: 'Une cérémonie de médailles pour une entreprise en réussite, fière de son succès',
        p: `Cette cérémonie de médailles est le témoignage de la reconnaissance de l’entreprise envers les acteurs de sa réussite.
    Réception au déroulé précis… sans anicroche, sans contretemps… car nous aurons pris le temps nécessaire pour en peaufiner les détails.`
      }
    ]
  }
];

export default SERVICES_DATA;

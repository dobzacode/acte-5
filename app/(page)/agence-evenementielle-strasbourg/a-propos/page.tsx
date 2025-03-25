import TeamSection from '@/components/event/a-propos/team-section';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import ContactSection from '@/components/spectacle/contact-section';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre agence | Acte 5 à Strasbourg',
  description:
    "Acte 5 est une agence pluri-indisciplinée…. mais ne demandez pas une présentation académique de l'équipe ! On s'y ennuierait bien vite."
};

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center gap-xl overflow-x-clip px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
        <TitleSection
          title={'A PROPOS'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/a-propos', text: 'A propos' }
          ]}
        ></TitleSection>
        <div className="main-gap section-px flex w-full flex-col laptop:container laptop:mx-auto">
          <InviewWrapper
            variant={{
              hidden: {
                opacity: 0,
                x: 100
              },
              enter: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8
                }
              },
              exit: {
                opacity: 0,
                x: -100
              }
            }}
            className="inner-section-gap flex w-full max-tablet:flex-col"
          >
            <p className="sub-heading text-pretty">
              Agence événementielle à{' '}
              <strong className="font-medium text-primary">TAILLE HUMAINE</strong>, ACTE 5
              accompagne avec <strong className="font-medium text-primary">PASSION</strong> et{' '}
              <strong className="font-medium text-primary">CRÉATIVITÉ</strong> les entreprises,
              institutions et collectivités dans leurs événements : conventions, séminaires, team
              buildings, inaugurations, soirées de gala, anniversaires d'entreprise. <br /> <br />
              Nous nous adaptons à vos demandes en créant{' '}
              <strong className="font-medium text-primary">SUR-MESURE</strong> des événements
              innovants qui vous ressemblent. Nous développons des{' '}
              <strong className="font-medium text-primary">SOLUTIONS DURABLES</strong> qui
              laisseront une{' '}
              <strong className="font-medium text-primary">EMPREINTE POSITIVE</strong>. Forts de
              plus de 40 ans d'expérience, nous sommes constamment à la recherche de nouveautés pour
              vous accompagner et vous surprendre. <br /> <br />
              <strong className="font-medium text-primary">NOTRE OBJECTIF</strong> ? Vous faire
              vivre des moments de <strong className="font-medium text-primary">PARTAGE</strong>{' '}
              uniques placés sous le signe de{' '}
              <strong className="font-medium text-primary">L'ÉMOTION</strong> et de la{' '}
              <strong className="font-medium text-primary">CONVIVIALITÉ</strong>, pour que
              l'éphémère devienne <strong className="font-medium text-primary">INOUBLIABLE</strong>.
            </p>
          </InviewWrapper>
        </div>

        <TeamSection></TeamSection>
      </main>
      <ContactSection className="!rounded-tl-none"></ContactSection>
    </>
  );
}

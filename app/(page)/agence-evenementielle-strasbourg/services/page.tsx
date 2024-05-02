import ServiceGalerie from '@/components/event/nos-services/service-galerie';
import { FromTopStaggerVariant } from '@/components/framer-motion/div-variants';
import StaggeredText from '@/components/framer-motion/staggered-text';
import TitleSection from '@/components/ui/title-section';

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center justify-center gap-xl px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'NOS SERVICES'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' }
        ]}
      ></TitleSection>
      <div className="section-px flex flex-col gap-3xl  laptop:container laptop:mx-auto">
        <StaggeredText
          delay={1}
          staggerValue={0.05}
          variant={FromTopStaggerVariant}
          className="heading--large"
        >
          L&apos;agence événementielle Acte 5 s&apos;appuie depuis près de 30 ans sur les arts de la
          scène et la pratique théâtrale pour faire passer les messages.
        </StaggeredText>
        <p className="sub-heading ">
          Inauguration, convention et séminaire d&apos;entreprise, portes ouvertes, fête du
          personnel, lancement de produit, intervention théâtrale en entreprise, écriture
          personnalisée… quel que soit votre besoin, nous saurons y répondre !
        </p>
      </div>
      <ServiceGalerie></ServiceGalerie>
    </main>
  );
}

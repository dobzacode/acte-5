import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import FormWrapped from '@/components/ui/form/form-wrapped';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nous contacter | Acte 5 à Strasbourg',
  description:
    "Prenez contact avec notre équipe événementielle expérimentée pour concrétiser vos projets les plus ambitieux. Que vous planifiiez une inauguration, une convention d'entreprise ou tout autre événement spécial, notre équipe est là pour vous aider à transformer votre vision en réalité. Contactez-nous dès aujourd'hui pour commencer à planifier un événement inoubliable qui impressionnera vos clients et collaborateurs."
};

export default function Home() {
  return (
    <main className=" relative flex w-full flex-col items-center justify-center gap-xl overflow-hidden overflow-x-clip px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        h1Css="laptop-large:w-[10ch]"
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida tincidunt varius. Vivamus fermentum volutpat semper. Donec ultrices nisi ac lacus ornare, sit amet auctor erat congue. Cras rutrum sapien sit amet arcu elementum, sed ornare justo posuere. Donec egestas, justo eu porttitor vestibulum, velit dui tincidunt velit, non aliquam odio magna ac felis. Mauris ornare mauris id arcu viverra, aliquet pharetra erat cursus. Sed ultricies vestibulum posuere.'
        }
        title={'NOUS CONTACTER'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/services', text: 'Contact' }
        ]}
      ></TitleSection>
      <InviewWrapper
        className="section-px laptop:container laptop:mx-auto"
        tag="section"
        variant={ComingFromRightVariant}
      >
        <FormWrapped></FormWrapped>
      </InviewWrapper>
    </main>
  );
}

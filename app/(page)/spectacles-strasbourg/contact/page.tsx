import ContactBanner from '@/components/event/contact/contact-banner';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import FormWrapped from '@/components/ui/form/form-wrapped';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nous contacter | Acte 5',
  description:
    'Contactez notre équipe pour organiser une expérience spectaculaire pour votre groupe ou obtenir des informations détaillées sur nos spectacles captivants. Que vous planifiiez une sortie en groupe ou que vous recherchiez simplement des informations, nous sommes là pour vous aider. Réservez dès maintenant pour garantir les meilleurs sièges et laissez-nous vous guider à travers une aventure théâtrale inoubliable.'
};

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center justify-center gap-xl overflow-x-clip px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        h1Css="laptop-large:w-[10ch]"
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
        <FormWrapped isSpectacle={true}></FormWrapped>
      </InviewWrapper>
      <ContactBanner/>
    </main>
  );
}

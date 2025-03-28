import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import HistorySection from '@/components/spectacle/a-propos/history-section';
import ContactSection from '@/components/spectacle/contact-section';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import image1 from '/public/assets/spectacle/apropos/apropos_hero_1.jpg';
import image2 from '/public/assets/spectacle/apropos/apropos_hero_2.jpg';

export const metadata: Metadata = {
  title: 'À Propos de Notre Compagnie de production de Spectacles | Acte 5',
  description:
    "Découvrez l'histoire et la passion qui animent notre compagnie de spectacles. Plongez dans l'univers artistique qui nourrit nos productions captivantes et rencontrez l'équipe dévouée qui donne vie à chaque représentation. Explorez notre vision, nos valeurs et notre engagement envers l'excellence artistique. Bienvenue dans le monde envoûtant de notre compagnie de spectacles, où chaque représentation est une expérience inoubliable."
};

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center gap-xl overflow-x-clip px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
        <TitleSection
          title={'A PROPOS'}
          element={[
            { href: '/spectacles-strasbourg', text: 'Spectacle' },
            { href: '/spectacles-strasbourg/a-propos', text: 'A propos' }
          ]}
        ></TitleSection>
        <div className="section-px main-gap flex w-full max-w-[90rem] flex-col items-center">
          <DivWrapper
            variant={ComingFromLeftVariant}
            className="max-laptop:inner-section-gap mx-auto flex items-center max-laptop:mr-auto max-laptop:flex-col max-laptop:justify-between"
          >
            <div className="relative aspect-[5/3] w-full overflow-hidden rounded-sm max-mobile-large:container mobile-large:w-[30rem] laptop:shrink-0 laptop-large:w-[36rem]">
              <Image
                src={image2}
                alt="image"
                placeholder="blur"
                fill
                className="object-cover"
              ></Image>
            </div>

            <p className="laptop-large:sub-heading body section-px relative -z-10 mr-auto max-w-[50ch] text-pretty text-center laptop:mx-auto laptop:text-left">
              Depuis <strong className="font-medium text-primary">plus de 40 ans</strong>, la Revue
              Scoute est un <strong className="font-medium text-primary">pilier</strong> de la scène
              satirique alsacienne. Aujourd&apos;hui, elle représente : <br />- plus de{' '}
              <strong className="font-medium text-primary">35 000</strong> spectateurs
              <br />- <strong className="font-medium text-primary">70</strong> représentations par
              saison
              <br />- <strong className="font-medium text-primary">10</strong> salles en tournée
              <br />- <strong className="font-medium text-primary">160</strong> propositions avant
              de trouver le titre
              <br />- des <strong className="font-medium text-primary">éclats de rire</strong> non
              comptabilisables !
            </p>
          </DivWrapper>
          <DivWrapper
            variant={ComingFromRightVariant}
            className="max-laptop:inner-section-gap mx-auto flex items-center justify-between max-laptop:ml-auto max-laptop:flex-col-reverse"
          >
            <p className="laptop-large:sub-heading body section-px max-w-[50ch] text-pretty text-center laptop:mx-auto laptop:text-right">
              <strong className="font-medium text-primary">Duo iconique</strong> de la région,
              Patricia Weller et Denis Germain sont connus de tous ! Ils ont inventé, au fil de
              leurs créations, des personnages devenus de véritables{' '}
              <strong className="font-medium text-primary">icônes</strong> de la pensée régionale,
              et qui démontrent par le <strong className="font-medium text-primary">rire</strong> et
              l&apos;
              <strong className="font-medium text-primary">absurde</strong> combien la France,
              l&apos;Europe et, trêve de modestie, le monde, feraient bien de s&apos;appuyer sur la{' '}
              <strong className="font-medium text-primary">sagesse alsacienne</strong>. Ils
              remplissent les salles à travers toute l&apos;Alsace avec leurs spectacles, et
              investissent aussi le monde de l&apos;entreprise avec des interventions{' '}
              <strong className="font-medium text-primary">sur-mesure</strong>.
            </p>

            <div className="relative aspect-[5/3] w-full overflow-hidden rounded-sm max-mobile-large:container mobile-large:w-[30rem] laptop:shrink-0 laptop-large:w-[36rem]">
              <Image
                src={image1}
                alt="image"
                placeholder="blur"
                fill
                className="object-cover"
              ></Image>
            </div>
          </DivWrapper>
        </div>
        <HistorySection></HistorySection>
      </main>
      <ContactSection className="!rounded-tl-none" isSpectacle={true}></ContactSection>
    </>
  );
}

import { ComingFromTopVariant, FadeInVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Image from 'next/image';
import planImage from '/public/assets/plan-acte-5-2024.webp';

export default function ContactBanner() {
  return (
    <section
      className={`inner-section-gap section-px !tablet:py-5xl !mobile-small:py-3xl !mobile-medium:py-2xl !mobile-large:py-4xl flex w-full flex-col overflow-hidden bg-primary-400 py-2xl duration-medium`}
    >
      <InviewWrapper
        className="heading--sub-extra-large section-px text-center text-white"
        tag="h2"
        variant={ComingFromTopVariant}
      >
        Plus d&apos;informations
      </InviewWrapper>
      <InviewWrapper
        variant={FadeInVariant}
        className="inner-section-gap flex items-center justify-center max-laptop-large:flex-col"
      >
        <div className="flex items-center overflow-hidden max-laptop-large:justify-between max-laptop-large:gap-lg max-laptop:items-start">
          <div className="flex flex-col gap-md text-right text-white">
            <h2 className="heading--sub-large flex items-center gap-sm">
              Horaires d&apos;ouverture
            </h2>
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-xs">
                <p className="sub-heading font-medium">Du lundi au jeudi</p>
                <p className="body">de 9h à 12h30 et de 14h à 18h30</p>
              </div>
              <div className="flex flex-col gap-xs">
                <p className="sub-heading font-medium">Le vendredi</p>
                <p className="body font-normal">de 9h à 12h30 et de 14h à 17h30</p>
              </div>
              <p className="sub-heading">Parking privé et réservé à nos visiteurs</p>
            </div>
          </div>
          <div className="h-[240px] w-[2px] rounded-full bg-white laptop-large:hidden"></div>
          <div className="flex flex-col gap-lg text-left laptop-large:hidden">
            <div className="flex flex-col gap-sm text-white">
              <h2 className="heading font-medium">Nous trouver</h2>
              <p className="sub-heading">1 rue de Munster 67100 Strasbourg</p>
            </div>

            <div className="flex flex-col gap-sm text-white">
              <h2 className="heading font-medium">Nous appeler</h2>
              <a className="sub-heading" href="tel:0388449940">
                0388449940
              </a>
            </div>
            <div className="flex flex-col gap-sm text-white">
              <h2 className="heading font-medium">Nous écrire</h2>
              <a className="sub-heading" href="mailto:info@acte5.fr">
                info@acte5.fr
              </a>
            </div>
          </div>
        </div>
        <div className="max-mobile:max-w-full relative flex h-fit w-full max-w-[80vw] shrink-0 flex-col items-center gap-md rounded-xs bg-white p-md laptop-large:w-1/2">
          <Image
            src={planImage}
            placeholder="blur"
            alt="map"
            className="rounded-sm object-contain"
          ></Image>
          <a
            href="https://www.google.fr/maps/place/Acte+5/@48.5717596,7.7631287,17z/data=!3m1!4b1!4m5!3m4!1s0x4796c9048d663f07:0xc1ac646bfb4e35c2!8m2!3d48.5717561!4d7.7653174"
            className="body z-10 w-fit rounded-xs px-md py-sm underline laptop:gap-sm laptop:px-lg laptop:py-md"
          >
            Voir sur google maps
          </a>
        </div>
        <div className="flex flex-col gap-lg text-left max-laptop-large:hidden">
          <div className="flex flex-col gap-sm text-white">
            <h2 className="heading font-medium">Nous trouver</h2>
            <p className="sub-heading">1 rue de Munster 67100 Strasbourg</p>
          </div>
          <div className="flex flex-col gap-sm text-white">
            <h2 className="heading font-medium">Nous appeler</h2>
            <a className="sub-heading" href="tel:0388449940">
              0388449940
            </a>
          </div>
          <div className="flex flex-col gap-sm text-white">
            <h2 className="heading font-medium">Nous écrire</h2>
            <a className="sub-heading" href="mailto:info@acte5.fr">
              info@acte5.fr
            </a>
          </div>
        </div>
      </InviewWrapper>
    </section>
  );
}

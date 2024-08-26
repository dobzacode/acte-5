import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Map from './map';

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
      <div className="inner-section-gap flex items-center justify-center max-laptop:flex-col">
        <div className="flex items-start max-laptop:justify-between max-laptop:gap-lg">
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
          <div className="flex flex-col gap-lg text-left laptop:hidden">
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
        <div className="max-mobile:max-w-full relative aspect-square w-full max-w-[80vw] shrink-0 laptop:w-1/3">
          <Map />
        </div>
        <div className="flex flex-col gap-lg text-left max-laptop:hidden">
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
    </section>
  );
}

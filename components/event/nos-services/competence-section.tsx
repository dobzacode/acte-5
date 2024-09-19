import { FadeInVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import ScrollWrapper from '@/components/framer-motion/scroll-wrapper';
import Image from 'next/image';
import designimage from '/public/assets/event/services/movingimage/design-graphique.jpg';
import evenementimage from '/public/assets/event/services/movingimage/event.jpg';
import spectacleimage from '/public/assets/event/services/movingimage/spectacle.jpg';

export default function CompetenceSection() {
  return (
    <DivWrapper
      variant={FadeInVariant}
      tag="ul"
      className="relative flex w-full flex-col gap-2xl overflow-x-clip tablet:gap-7xl"
    >
      <ScrollWrapper tag="li" className="flex w-full items-center justify-center">
        <Image
          src={evenementimage}
          placeholder={'blur'}
          className="max-tablet:hidden tablet:rounded-l-full"
          alt="placeholder"
          width={340}
          height={340}
        />

        <div className="flex flex-col gap-md">
          <h2 className="heading--large text-primary-400">Événementiel</h2>
          <p className="sub-heading max-w-[50ch]">
            Chaque événement est une œuvre d'art. Nous concevons, planifions et mettons en scène des
            expériences mémorables qui laissent une empreinte durable dans le cœur de vos cibles.
          </p>
        </div>
      </ScrollWrapper>
      <ScrollWrapper tag="li" inverted className="flex w-full items-center justify-center">
        <Image
          src={spectacleimage}
          placeholder={'blur'}
          className="rounded-r-full max-tablet:hidden"
          alt="placeholder"
          width={340}
          height={340}
        />
        <div className="flex flex-col gap-md">
          <h2 className="heading--large text-primary-400">Spectacle d&apos;entreprise</h2>
          <p className="sub-heading max-w-[50ch]">
            Nous tissons des récits hilarants et créons des spectacles sur mesure qui surprennent,
            amusent et captivent, pour offrir à vos spectateurs une expérience fun et inoubliable !
          </p>
        </div>
      </ScrollWrapper>
      <ScrollWrapper tag="li" className="flex w-full items-center justify-center">
        <Image
          src={designimage}
          placeholder={'blur'}
          className="rounded-l-full max-tablet:hidden"
          alt="placeholder"
          width={340}
          height={340}
        />
        <div className="flex flex-col gap-md">
          <h2 className="heading--large text-primary-400">Design graphique </h2>
          <p className="sub-heading max-w-[50ch]">
            Nous créons des visuels percutants et créatifs qui attirent l&apos;attention et
            subliment vos messages, en mettant en valeur votre identité et vos idées.
          </p>
        </div>
      </ScrollWrapper>
    </DivWrapper>
  );
}

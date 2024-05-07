import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import UiButton from '@/components/ui/ui-button';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';

export default function TrustSection() {
  return (
    <section className="section-px inner-section-gap flex h-fit w-full  flex-col">
      <InviewWrapper
        variant={ComingFromLeftVariant}
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <h1 className="heading--extra-large w-fit min-[1600px]:w-1/2">
          agence en communication évenementielle
        </h1>
      </InviewWrapper>
      <InviewWrapper
        variant={ComingFromRightVariant}
        className="inner-section-gap flex flex-col"
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <div className="relative z-20 flex w-full flex-col gap-md mobile-large:gap-md ">
          <p className="heading whitespace-nowrap">Ils nous ont fait confiance</p>
          <div className="relative flex w-full flex-wrap gap-sm [&>*]:w-xl [&>*]:shrink-0 [&>*]:mobile-small:w-2xl [&>*]:mobile-medium:w-3xl [&>*]:mobile-large:w-4xl [&>*]:tablet:w-5xl [&>*]:laptop:w-6xl [&>*]:laptop-large:w-7xl">
            <p className="aspect-square  rounded-sm bg-gray-200 "></p>
            <p className="aspect-square  rounded-sm bg-gray-200 "></p>
            <p className="aspect-square   rounded-sm bg-gray-200 "></p>
            <p className="aspect-square   rounded-sm bg-gray-200 "></p>
            <p className="aspect-square   rounded-sm bg-gray-200 "></p>
            <p className="aspect-square   rounded-sm bg-gray-200 "></p>
            <p className="aspect-square   rounded-sm bg-gray-200 "></p>
            <p className="aspect-square  rounded-sm bg-gray-200 "> </p>
            <p className="aspect-square  rounded-sm bg-gray-200 "> </p>
          </div>
        </div>
        <UiButton
          href="/agence-evenementielle-strasbourg/temoignages"
          as={Link}
          size="lg"
          className="w-fit "
          variant="solid"
          color="pastelPrimary"
          endContent={<LuChevronRight className="shrink-0" />}
        >
          Voir les témoignages
        </UiButton>
      </InviewWrapper>
    </section>
  );
}

import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import UiButton from '@/components/ui/ui-button';

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
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <div className="relative z-20 flex w-full flex-col gap-md mobile-large:gap-md ">
          <p className="heading whitespace-nowrap">Ils nous ont fait confiance</p>
          <div className="relative flex w-full flex-wrap gap-sm [&>*]:shrink-0">
            <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
            <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
            <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
            <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
            <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
            <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
            <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
            <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"> </p>
            <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"> </p>
          </div>
          <UiButton size="lg" className="w-fit " variant="solid" color="pastelPrimary">
            Voir les témoignages
          </UiButton>
        </div>
      </InviewWrapper>
    </section>
  );
}

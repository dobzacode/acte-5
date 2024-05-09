import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

export default function TrustSection() {
  return (
    <section className="section-px inner-section-gap relative z-10 flex h-fit w-full  flex-col">
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
        <DivHoverWrapper
          className="group w-fit origin-center duration-medium hover:opacity-90"
          variant={{
            hover: {
              scale: 1.02,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror'
              }
            }
          }}
        >
          <Link
            href="/agence-evenementielle-strasbourg/temoignages"
            className="sub-heading group  relative flex w-fit items-center gap-xs   rounded-sm before:absolute before:-bottom-2  before:z-10 before:h-[1px] before:w-full before:max-w-0 before:bg-black before:duration-medium after:absolute after:-bottom-2 after:z-10  after:h-[1px] after:w-full after:bg-black/20 hover:before:max-w-full laptop:gap-sm "
            scroll={false}
          >
            <span>Explorer les réussites de nos clients</span>
            <LuArrowUpRight className="rotate-0 duration-medium group-hover:rotate-45 group-hover:delay-300" />
          </Link>
        </DivHoverWrapper>
      </InviewWrapper>
    </section>
  );
}

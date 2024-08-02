import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import LogoFetchWrapper from './logo-fetch-wrapper';

export default function TrustSection() {
  return (
    <section className="section-px inner-section-gap relative z-10 flex h-fit w-full  flex-col laptop:container laptop:mx-auto">
      <InviewWrapper
        variant={ComingFromLeftVariant}
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <h2 className="heading--large w-fit ">
          Forte de plus de 30 ans d&apos;expertise en communication événementielle, Acte 5 puise
          dans les arts de la scène pour donner vie à vos messages d&apos;entreprise
        </h2>
      </InviewWrapper>
      <InviewWrapper
        variant={ComingFromRightVariant}
        className="inner-section-gap flex flex-col"
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <div className="relative z-20 flex w-full flex-col gap-md pt-md mobile-large:gap-md">
          <p className="heading whitespace-nowrap">Ils nous ont fait confiance</p>
          <LogoFetchWrapper></LogoFetchWrapper>
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

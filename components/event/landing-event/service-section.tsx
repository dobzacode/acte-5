import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Marquee from '@/components/framer-motion/marquee';
import UiButton from '@/components/ui/ui-button';

const ONGLETS =
  'CONVENTION D’ENTREPRISE - ANNIVERSAIRE - INAUGURATION D’ENTREPRISE - CÉRÉMONIE DES MÉDAILLES - CÉRÉMONIE DES VŒUX - PORTES OUVERTES - SOIRÉE DE GALA - SPECTACLE D’ENTREPRISE - TEAM BUILDING - CONVENTION D’ENTREPRISE - ANNIVERSAIRE';

const ONGLETSBIS =
  'TEAM BUILDING - SOIRÉE DE GALA - INAUGURATION D’ENTREPRISE - ANNIVERSAIRE - CONVENTION D’ENTREPRISE - CÉRÉMONIE DES MÉDAILLES - PORTES OUVERTES - CÉRÉMONIE DES VŒUX - SPECTACLE D’ENTREPRISE - ANNIVERSAIRE - CONVENTION D’ENTREPRISE';

export default function ServiceSection() {
  const GRID_CHILDREN = () => {
    return [
      <div key={'1'} className="col-span-3 col-start-1  row-start-1  rounded-sm bg-gray-200"></div>,
      <div
        key={'2'}
        className="col-span-4 col-start-4 row-start-1 rounded-sm  bg-gray-200  tablet:col-span-6 laptop:col-span-3"
      ></div>,
      <div
        key={'3'}
        className="row-start-2 content-end max-tablet:hidden tablet:col-span-2 tablet:col-start-7  laptop:row-start-1"
      >
        <h2 className="heading--large flex text-white">NOS SERVICES</h2>
      </div>,
      <div
        key={'4'}
        className="col-span-3 col-start-8 row-start-1 rounded-sm bg-gray-200  tablet:col-span-3  tablet:col-start-1   tablet:row-start-2 laptop:col-span-2"
      ></div>,
      <div
        key={'5'}
        className="col-span-4 row-start-2 rounded-sm bg-gray-200  tablet:col-span-3 tablet:col-start-4  tablet:row-start-2 laptop:col-span-2 laptop:col-start-3"
      ></div>,
      <div
        key={'6'}
        className="col-span-4 row-start-2 rounded-sm bg-gray-200  max-laptop:hidden max-tablet:block tablet:col-span-3 tablet:col-start-7  tablet:row-start-1 laptop:col-span-5 laptop:col-start-1 laptop:row-span-2 laptop-large:col-span-4"
      ></div>,
      <div
        key={'7'}
        className="col-span-2 row-start-2 rounded-sm bg-gray-200 tablet:col-span-5 tablet:col-start-1 tablet:row-start-3 laptop:col-span-6 laptop:col-start-5  laptop:row-start-2 laptop-large:col-span-3  laptop-large:row-span-3 laptop-large:row-start-2"
      ></div>,
      <div
        key={'8'}
        className="laptop-large::col-start-7 col-span-6  row-span-2 row-start-3 flex flex-col gap-lg rounded-sm text-white max-tablet:hidden tablet:col-span-6 tablet:row-start-3 laptop:col-start-6 laptop-large:col-start-8 laptop-large:row-start-2 laptop-large:content-start "
      >
        <p className="sub-heading">
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <UiButton className="w-fit" size="lg" variant="solid" color="primary">
          Découvrez nos services
        </UiButton>
      </div>
    ];
  };

  return (
    <section className="flex w-full flex-col gap-2xl overflow-hidden overflow-x-clip bg-black">
      <Marquee>
        <p className="heading--extra-large text-white">{ONGLETS}</p>
      </Marquee>

      <div className="section-px flex flex-col gap-md mobile-large:gap-lg tablet:gap-xl">
        <InviewWrapper className="tablet:hidden" variant={ComingFromLeftVariant}>
          <h2 className="heading--large flex text-white ">NOS SERVICES</h2>
        </InviewWrapper>
        <div className="  grid h-full w-full grid-cols-10 grid-rows-[200px_200px] gap-2 tablet:grid-rows-[200px_200px_200px] tablet:gap-5">
          {GRID_CHILDREN().map((child, index) => (
            <InviewWrapper
              id={child.key ?? undefined}
              style={{ zIndex: -index + 20, position: 'relative' }}
              viewport={{ once: true }}
              className={child.props.className}
              variant={{
                hidden: { y: -300, opacity: 0 },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.9,
                    type: 'spring',
                    damping: 20,
                    stiffness: 80,
                    opacity: { duration: 0.3, delay: index * 0.2 }
                  }
                }
              }}
            >
              {child}
            </InviewWrapper>
          ))}
        </div>
        <InviewWrapper
          variant={ComingFromRightVariant}
          className="flex w-full flex-col gap-lg rounded-sm pt-md  text-white tablet:hidden"
        >
          <p className="sub-heading">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <UiButton className="w-fit" size="lg" variant="solid" color="primary">
            Découvrez nos services
          </UiButton>
        </InviewWrapper>
      </div>

      <Marquee inverted>
        <p className="heading--extra-large text-white">{ONGLETSBIS}</p>
      </Marquee>
    </section>
  );
}

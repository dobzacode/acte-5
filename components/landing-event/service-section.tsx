import InviewWrapper from '../framer-motion/inview-wrapper';
import Marquee from '../framer-motion/marquee';
import UiButton from '../ui/ui-button';

const ONGLETS =
  'CONVENTION D’ENTREPRISE - ANNIVERSAIRE - INAUGURATION D’ENTREPRISE - CÉRÉMONIE DES MÉDAILLES - CÉRÉMONIE DES VŒUX - PORTES OUVERTES - SOIRÉE DE GALA - SPECTACLE D’ENTREPRISE - TEAM BUILDING - CONVENTION D’ENTREPRISE - ANNIVERSAIRE';

export default function ServiceSection() {
  const GRID_CHILDREN = () => {
    return [
      <div key={1} className="col-span-3 col-start-1  row-start-1  rounded-sm bg-gray-200"></div>,
      <div key={2} className="col-span-3 col-start-4  row-start-1  rounded-sm bg-gray-200"></div>,
      <div key={3} className="col-span-2 col-start-7 row-start-1  content-end">
        <h2 className="heading--large flex text-white">NOS SERVICES</h2>
      </div>,
      <div key={4} className="col-span-2 col-start-1  row-start-2  rounded-sm bg-gray-200"></div>,
      <div key={5} className="col-span-2 col-start-3  row-start-2  rounded-sm bg-gray-200"></div>,
      <div key={6} className="col-span-4 col-start-1  row-start-3  rounded-sm bg-gray-200"></div>,
      <div
        key={7}
        className="col-span-3 col-start-5  row-span-2 row-start-2  rounded-sm bg-gray-200"
      ></div>,
      <div
        key={8}
        className="col-span-3 col-start-8 row-span-2 row-start-2 flex flex-col gap-lg rounded-sm text-white "
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
    <section className="flex w-full flex-col gap-7xl bg-black ">
      <Marquee>
        <p className="heading--extra-large text-white">{ONGLETS}</p>
      </Marquee>

      <div className="gap  grid h-full w-full grid-cols-10 grid-rows-[200px_200px_200px] gap-5 px-4xl">
        {GRID_CHILDREN().map((child, index) => (
          <InviewWrapper
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

      <Marquee>
        <p className="heading--extra-large text-white">{ONGLETS}</p>
      </Marquee>
    </section>
  );
}

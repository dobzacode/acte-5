import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Marquee from '@/components/framer-motion/marquee';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '/public/assets/event/landing/services/1.jpeg';
import image2 from '/public/assets/event/landing/services/2.jpeg';
import image3 from '/public/assets/event/landing/services/3.jpeg';
import image4 from '/public/assets/event/landing/services/4.jpg';
import image5 from '/public/assets/event/landing/services/5.jpeg';
import image6 from '/public/assets/event/landing/services/6.jpeg';
import image7 from '/public/assets/event/landing/services/7.jpeg';
import image8 from '/public/assets/event/landing/services/8.jpeg';

const srcArr = [image1, image2, image3, image4, image5, image6, image7, image8];

const ONGLETS =
  'CONVENTION D’ENTREPRISE - ANNIVERSAIRE - INAUGURATION D’ENTREPRISE - CÉRÉMONIE DES MÉDAILLES - CÉRÉMONIE DES VŒUX - PORTES OUVERTES - SOIRÉE DE GALA - SPECTACLE D’ENTREPRISE - TEAM BUILDING - CONVENTION D’ENTREPRISE - ANNIVERSAIRE';

const ONGLETSBIS =
  'TEAM BUILDING - SOIRÉE DE GALA - INAUGURATION D’ENTREPRISE - ANNIVERSAIRE - CONVENTION D’ENTREPRISE - CÉRÉMONIE DES MÉDAILLES - PORTES OUVERTES - CÉRÉMONIE DES VŒUX - SPECTACLE D’ENTREPRISE - ANNIVERSAIRE - CONVENTION D’ENTREPRISE';

export default function ServiceSection() {
  const GRID_CHILDREN = () => {
    return [
      <div key={'1'} className="col-span-3 col-start-1 row-start-1 rounded-sm bg-gray-200"></div>,
      <div
        key={'2'}
        className="col-span-4 col-start-4 row-start-1 rounded-sm bg-gray-200 tablet:col-span-6 laptop:col-span-3"
      ></div>,
      <div
        key={'3'}
        className="row-start-2 content-end max-tablet:hidden tablet:col-span-2 tablet:col-start-7 laptop:row-start-1"
      >
        <h2 className="heading--large flex text-white">NOS SERVICES</h2>
      </div>,
      <div
        key={'4'}
        className="col-span-3 col-start-8 row-start-1 rounded-sm bg-gray-200 tablet:col-span-3 tablet:col-start-1 tablet:row-start-2 laptop:col-span-2"
      ></div>,
      <div
        key={'5'}
        className="col-span-4 row-start-2 rounded-sm bg-gray-200 tablet:col-span-3 tablet:col-start-4 tablet:row-start-2 laptop:col-span-2 laptop:col-start-3"
      ></div>,
      <div
        key={'6'}
        className="col-span-6 row-start-2 rounded-sm bg-gray-200 max-laptop:hidden max-tablet:block tablet:col-span-6 tablet:col-start-7 tablet:row-start-1 laptop:col-span-5 laptop:col-start-1 laptop:row-span-2 laptop-large:col-span-4"
      ></div>,
      <div
        key={'7'}
        className="col-span-2 row-start-2 rounded-sm bg-gray-200 max-laptop:hidden tablet:col-span-5 tablet:col-start-1 tablet:row-start-3 laptop:col-span-6 laptop:col-start-5 laptop:row-start-2 laptop-large:col-span-3 laptop-large:row-span-3 laptop-large:row-start-2"
      ></div>,
      <div
        key={'8'}
        className="laptop-large::col-start-7 col-span-6 row-span-2 row-start-3 flex flex-col gap-lg rounded-sm text-white max-tablet:hidden tablet:col-span-6 tablet:row-start-3 laptop:col-start-6 laptop-large:col-start-8 laptop-large:row-start-2 laptop-large:content-start"
      >
        <p className="sub-heading">
          En plaçant l'écoute et la compréhension des besoins de nos clients au centre de notre
          démarche, nous créons des expériences uniques, façonnées pour laisser une empreinte
          mémorable. Nous allions l'art du storytelling à la précision théâtrale pour créer des
          événements spectaculaires
        </p>
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
            href="/agence-evenementielle-strasbourg/services"
            className="sub-heading shadow-primary-sm 0 flex w-fit items-center gap-xs rounded-sm border-b-2 border-r-2 border-white bg-primary-400 px-md py-sm text-white laptop:gap-sm laptop:px-lg laptop:py-md"
          >
            <span>Découvrez nos services</span>
          </Link>
        </DivHoverWrapper>
      </div>
    ];
  };

  return (
    <section className="relative z-20 flex w-full flex-col gap-2xl overflow-hidden overflow-x-clip bg-black">
      <Marquee>
        <p className="heading--extra-large text-white">{ONGLETS}</p>
      </Marquee>

      <div className="section-px inner-section-gap flex flex-col laptop:container laptop:mx-auto">
        <InviewWrapper className="tablet:hidden" variant={ComingFromLeftVariant}>
          <h2 className="heading--large flex text-white">NOS SERVICES</h2>
        </InviewWrapper>
        <div className="grid h-full w-full grid-cols-10 grid-rows-[200px_200px] gap-2 tablet:grid-rows-[200px_200px_200px] tablet:gap-4">
          {GRID_CHILDREN().map((child, index) => {
            return (
              <InviewWrapper
                key={index}
                id={child.key ?? undefined}
                style={{ zIndex: -index + 20, position: 'relative' }}
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
                {child.key !== '8' && child.key !== '3' ? (
                  <Image
                    src={srcArr[index]}
                    alt="image"
                    className="rounded-xs object-cover"
                    fill
                    placeholder="blur"
                    sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
                  />
                ) : (
                  child
                )}
              </InviewWrapper>
            );
          })}
        </div>
        <InviewWrapper
          variant={ComingFromRightVariant}
          className="inner-section-gap flex w-full flex-col rounded-sm text-white tablet:hidden"
        >
          <p className="sub-heading">
            En plaçant l'écoute et la compréhension des besoins de nos clients au centre de notre
            démarche, nous créons des expériences uniques, façonnées pour laisser une empreinte
            mémorable. Nous allions l'art du storytelling à la précision théâtrale pour créer des
            événements spectaculaires
          </p>
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
              href="/agence-evenementielle-strasbourg/services"
              className="sub-heading shadow-primary-sm 0 flex w-fit items-center gap-xs rounded-sm border-b-2 border-r-2 border-white bg-primary-400 px-md py-sm text-white laptop:gap-sm laptop:px-lg laptop:py-md"
            >
              <span>Découvrez nos services</span>
            </Link>
          </DivHoverWrapper>
        </InviewWrapper>
      </div>

      <Marquee inverted>
        <p className="heading--extra-large text-white">{ONGLETSBIS}</p>
      </Marquee>
    </section>
  );
}

import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';

const COMPETENCE = [
  {
    title: 'Compétence',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Compétence',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Compétence',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Compétence',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

export default function CompetenceSection() {
  return (
    <section className="   flex w-full flex-col items-center gap-5xl laptop:container max-tablet:gap-2xl laptop:mx-auto">
      <InviewWrapper variant={ComingFromTopVariant}>
        <h2 className="heading--extra-large section-px text-center text-primary-400 ">
          Notre expertise
        </h2>
      </InviewWrapper>
      <ul className="section-px max-tablet:inner-section-gap grid grid-cols-2 gap-3xl max-mobile-large:flex max-mobile-large:flex-col">
        {COMPETENCE.map((competence, index) => (
          <InviewWrapper
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.6, repeatType: 'mirror', repeat: Infinity }
            }}
            key={index}
            className="card flex origin-center flex-col gap-md"
            variant={
              index % 2 === 0
                ? {
                    hidden: {
                      opacity: 0,
                      x: -100
                    },
                    enter: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.2,
                        type: 'spring',
                        damping: 30
                      }
                    },
                    exit: {
                      opacity: 0,
                      x: -100
                    }
                  }
                : {
                    hidden: {
                      opacity: 0,
                      x: 100
                    },
                    enter: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.2,
                        type: 'spring',
                        damping: 30
                      }
                    },
                    exit: {
                      opacity: 0,
                      x: 100
                    }
                  }
            }
          >
            <h3 className="heading--large text-center">{competence.title}</h3>
            <p className="sub-heading text-center">{competence.description}</p>
          </InviewWrapper>
        ))}
      </ul>
    </section>
  );
}

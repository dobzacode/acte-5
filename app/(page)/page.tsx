import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';

export default function Home() {
  return (
    <main className="main flex h-full flex-col justify-between gap-3xl pb-5xl">
      <DivWrapper
        className="flex w-2/3  flex-col items-center gap-md"
        variant={ComingFromLeftVariant}
      >
        <p className="heading--sub-extra-large text-primary-400">Slogan</p>
        <p className="heading text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna{' '}
        </p>
      </DivWrapper>
      <section className="container flex justify-between gap-2xl max-tablet:flex-col tablet:gap-xl  laptop:justify-center laptop:gap-3xl  laptop-large:max-w-[1200px] laptop-large:gap-5xl">
        <DivWrapper
          className="heading--sub-large flex w-fit flex-col items-center gap-md rounded-md bg-default-200 px-2xl py-5xl"
          variant={ComingFromLeftVariant}
        >
          <h2>EVENEMENTIEL</h2>
          <p className="sub-heading  text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
            ut labore et dolore magna{' '}
          </p>
        </DivWrapper>
        <DivWrapper
          className="heading--sub-large flex w-fit flex-col items-center gap-md rounded-md bg-default-200 px-2xl py-5xl"
          variant={ComingFromLeftVariant}
        >
          <h2>SPECTACLE</h2>
          <p className="sub-heading  text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
            ut labore et dolore magna{' '}
          </p>
        </DivWrapper>
      </section>
    </main>
  );
}

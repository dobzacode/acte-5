import ScrollWrapper from '@/components/framer-motion/scroll-wrapper';
import Image from 'next/image';

export default function CompetenceSection() {
  return (
    <ul className="relative flex w-full flex-col gap-2xl overflow-x-clip pt-3xl tablet:gap-7xl tablet:pt-8xl">
      <ScrollWrapper tag="li" className=" flex  w-full items-center justify-center  ">
        <Image
          src="/placeholder-image.png"
          className="max-tablet:hidden tablet:rounded-l-full"
          alt="placeholder"
          width={300}
          height={300}
        />

        <div className="flex flex-col  gap-xl">
          <h2 className="heading--sub-extra-large text-primary-400">Compétence</h2>
          <p className="sub-heading max-w-[50ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
            ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
          </p>
        </div>
      </ScrollWrapper>
      <ScrollWrapper tag="li" inverted className=" flex  w-full items-center justify-center  ">
        <Image
          src="/placeholder-image.png"
          className="rounded-r-full max-tablet:hidden"
          alt="placeholder"
          width={300}
          height={300}
        />
        <div className="flex flex-col  gap-xl">
          <h2 className="heading--sub-extra-large text-primary-400">Compétence</h2>
          <p className="sub-heading max-w-[50ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
            ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
          </p>
        </div>
      </ScrollWrapper>
      <ScrollWrapper tag="li" className=" flex  w-full items-center justify-center  ">
        <Image
          src="/placeholder-image.png"
          className="rounded-l-full max-tablet:hidden"
          alt="placeholder"
          width={300}
          height={300}
        />
        <div className="flex flex-col  gap-xl">
          <h2 className="heading--sub-extra-large text-primary-400">Compétence</h2>
          <p className="sub-heading max-w-[50ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
            ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
          </p>
        </div>
      </ScrollWrapper>
    </ul>
  );
}

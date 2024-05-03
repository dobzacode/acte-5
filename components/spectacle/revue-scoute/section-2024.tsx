import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Image from 'next/image';
import DateTable from '../landing/scoute-section/date-table';

export default function Section2024() {
  return (
    <section className="section-px flex flex-col gap-6xl ">
      <section className="section-px flex flex-col gap-xl laptop:container laptop:mx-auto">
        <InviewWrapper
          className="heading--sub-extra-large text-primary-400"
          tag="h2"
          variant={ComingFromLeftVariant}
        >
          Edition 2024
        </InviewWrapper>
        <div className="relative h-[30rem] w-full overflow-hidden rounded-sm">
          <Image src="/placeholder-image.png" fill alt="image" className="object-cover"></Image>
        </div>
        <p className="sub-heading text-pretty">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </section>
      <section className="section-px flex flex-col gap-xl laptop:container laptop:mx-auto">
        <InviewWrapper
          className="heading--sub-extra-large text-primary-400"
          tag="h2"
          variant={ComingFromLeftVariant}
        >
          Les dates
        </InviewWrapper>
        <DateTable></DateTable>
      </section>
      <section className="section-px flex w-full flex-col gap-xl laptop:container laptop:mx-auto">
        <InviewWrapper
          className="heading--sub-extra-large  text-primary-400 "
          tag="h2"
          variant={ComingFromLeftVariant}
        >
          Distribution
        </InviewWrapper>
        <ul className="flex w-full flex-wrap items-center  gap-md">
          {Array.from({ length: 12 }).map((_, index) => {
            return (
              <InviewWrapper
                style={{ zIndex: 20 - index }}
                variant={{
                  hidden: {
                    opacity: 0,
                    y: -200
                  },
                  enter: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      y: { delay: 0.5 + index * 0.1, type: 'spring', damping: 20 },
                      opacity: { duration: 0.2, delay: 0.5 + index * 0.1 }
                    }
                  },
                  exit: {
                    opacity: 0,
                    y: -200
                  }
                }}
                className="card relative flex flex-col  gap-md overflow-hidden px-0 pt-0"
              >
                <Image src="/placeholder-image.png" alt="image" width={200} height={400}></Image>
                <p className="sub-heading px-sm text-center">Lorem Ipsum</p>
              </InviewWrapper>
            );
          })}
        </ul>
      </section>
    </section>
  );
}

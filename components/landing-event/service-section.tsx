import UiButton from '../ui/ui-button';

export default function ServiceSection() {
  return (
    <section className="flex w-full flex-col gap-5xl bg-black  py-3xl">
      <p className="heading--extra-large text-white">LOREM IPSUM LOREM IPSUM</p>
      <div className="gap  grid h-full w-full grid-cols-10 grid-rows-3 gap-5 px-4xl">
        <div className="col-span-3 col-start-1  row-start-1  rounded-sm bg-gray-200"></div>
        <div className="col-span-3 col-start-4  row-start-1  rounded-sm bg-gray-200"></div>
        <div className="col-span-2 col-start-7 row-start-1  content-end">
          <h2 className="heading--large flex text-white">NOS SERVICES</h2>
        </div>
        <div className="col-span-2 col-start-1  row-start-2  rounded-sm bg-gray-200"></div>
        <div className="col-span-2 col-start-3  row-start-2  rounded-sm bg-gray-200"></div>
        <div className="col-span-4 col-start-1  row-start-3  rounded-sm bg-gray-200"></div>
        <div className="col-span-3 col-start-5  row-span-2 row-start-2  rounded-sm bg-gray-200"></div>
        <div className="col-span-3 col-start-8 row-span-2 row-start-2 flex flex-col gap-lg rounded-sm text-white ">
          <p className="sub-heading">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <UiButton className="w-fit" size="lg" variant="solid" color="primary">
            Découvrez nos services
          </UiButton>
        </div>
      </div>
      <p className="heading--extra-large text-white">LOREM IPSUM LOREM IPSUM</p>
    </section>
  );
}

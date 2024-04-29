import FormWrapped from '@/components/ui/form/form-wrapped';
import UiButton from '@/components/ui/ui-button';

export default function Home() {
  return (
    <main className="container   mx-auto flex flex-col  items-center  justify-center overflow-hidden px-lg py-lg">
      <section className="flex w-fit flex-col items-center gap-2xl">
        <div className="flex w-fit flex-col gap-md ">
          <p className="heading--extra-large   ">Heading--extra-large</p>
          <p className="heading--sub-extra-large   ">Heading--sub-extra-large</p>
          <p className="heading--large   ">Heading--large</p>
          <p className="heading--sub-large   ">Heading--sub-large</p>
          <p className="heading   ">Heading</p>
          <p className="sub-heading   ">Sub-heading</p>
          <p className="body   ">Body</p>
          <p className="caption   ">Caption</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-sm">
            <div className="flex gap-xs ">
              <UiButton color="default" variant="solid" className="shadow-sm">
                Solid
              </UiButton>
              <UiButton color="default" variant="faded">
                Faded
              </UiButton>
              <UiButton color="default" variant="bordered">
                Bordered
              </UiButton>
              <UiButton color="default" variant="light">
                Light
              </UiButton>
              <UiButton color="default" variant="flat">
                Flat
              </UiButton>
              <UiButton color="default" variant="ghost">
                Ghost
              </UiButton>
              <UiButton color="default" variant="shadow">
                Shadow
              </UiButton>
            </div>
            <div className="flex gap-xs ">
              <UiButton color="primary" variant="solid" className="shadow-sm">
                Solid
              </UiButton>
              <UiButton color="primary" variant="faded">
                Faded
              </UiButton>
              <UiButton color="primary" variant="bordered">
                Bordered
              </UiButton>
              <UiButton color="primary" variant="light">
                Light
              </UiButton>
              <UiButton color="primary" variant="flat">
                Flat
              </UiButton>
              <UiButton color="primary" variant="ghost">
                Ghost
              </UiButton>
              <UiButton color="primary" variant="shadow">
                Shadow
              </UiButton>
            </div>
            <div className="flex gap-xs ">
              <UiButton color="secondary" variant="solid" className="shadow-sm">
                Solid
              </UiButton>
              <UiButton color="secondary" variant="faded">
                Faded
              </UiButton>
              <UiButton color="secondary" variant="bordered">
                Bordered
              </UiButton>
              <UiButton color="secondary" variant="light">
                Light
              </UiButton>
              <UiButton color="secondary" variant="flat">
                Flat
              </UiButton>
              <UiButton color="secondary" variant="ghost">
                Ghost
              </UiButton>
              <UiButton color="secondary" variant="shadow">
                Shadow
              </UiButton>
            </div>
          </div>
          <div className="caption flex gap-xl  text-black [&_div]:h-5xl [&_div]:w-5xl [&_div]:rounded-sm [&_div]:bg-white">
            <div className="flex items-center justify-center shadow-small">
              <p>shadow-small</p>
            </div>
            <div className="flex items-center justify-center shadow-medium">
              <p>shadow-medium</p>
            </div>
            <div className="flex items-center justify-center shadow-large">
              <p>shadow-large</p>
            </div>
          </div>
        </div>

        <FormWrapped></FormWrapped>
      </section>
    </main>
  );
}

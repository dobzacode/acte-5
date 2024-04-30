import UiButton from '../ui/ui-button';

export default function TrustSection() {
  return (
    <section className="section-px flex h-fit w-full flex-col  gap-2xl overflow-x-hidden mobile-large:gap-4xl laptop:gap-5xl laptop-large:gap-6xl">
      <h1 className="heading--extra-large w-fit min-[1600px]:w-1/2">
        agence en communication évenementielle
      </h1>
      <div className="relative z-20 flex w-full flex-col gap-md mobile-large:gap-xl">
        <p className="heading whitespace-nowrap">Ils nous ont fait confiance</p>
        <div className="relative flex w-full gap-lg [&>*]:shrink-0">
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"> </p>
          <UiButton
            size="lg"
            className="absolute bottom-10 right-0 w-fit max-laptop:hidden "
            variant="solid"
            color="pastelPrimary"
          >
            Explorez les réussites de nos clients
          </UiButton>
        </div>
        <UiButton size="lg" className="w-fit laptop:hidden " variant="solid" color="pastelPrimary">
          Voir les témoignages
        </UiButton>
      </div>
    </section>
  );
}

import UiButton from '../ui/ui-button';

export default function TrustSection() {
  return (
    <section className="flex w-full flex-col gap-6xl px-4xl">
      <h1 className="heading--extra-large w-1/2">agence en communication évenementielle</h1>
      <div className="flex w-full flex-col gap-xl">
        <p className="heading">ILS NOUS ONT FAIT CONFIANCE</p>
        <div className="relative flex w-full gap-lg">
          <p className="aspect-square w-7xl rounded-sm bg-gray-200"></p>
          <p className="aspect-square w-7xl rounded-sm bg-gray-200"></p>
          <p className="aspect-square w-7xl rounded-sm bg-gray-200"></p>
          <p className="aspect-square w-7xl rounded-sm bg-gray-200"></p>
          <p className="aspect-square w-7xl rounded-sm bg-gray-200"></p>
          <p className="aspect-square w-7xl rounded-sm bg-gray-200"></p>
          <p className="aspect-square w-7xl rounded-sm bg-gray-200"></p>
          <p className="aspect-square w-7xl rounded-sm bg-gray-200"> </p>
          <UiButton
            size="lg"
            className="absolute -bottom-xl -right-md w-fit "
            variant="solid"
            color="pastelPrimary"
          >
            EXPLOREZ LES REUSSITES DE NOS CLIENTS
          </UiButton>
        </div>
      </div>
    </section>
  );
}

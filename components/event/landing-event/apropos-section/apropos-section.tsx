import UiButton from '@/components/ui/ui-button';
import CompetenceSection from './competence-section';

export default function AproposSection() {
  return (
    <section className="flex flex-col items-center gap-3xl  overflow-x-clip pb-5xl mobile-large:gap-4xl tablet:gap-6xl laptop:gap-7xl laptop-large:gap-9xl">
      <CompetenceSection></CompetenceSection>
      <div className="section-px flex flex-col items-center gap-lg text-center mobile-large:gap-xl tablet:gap-2xl ">
        <p className="heading--sub-extra-large">Toujours pas convaincu ?</p>
        <UiButton size="lg" className=" w-fit " variant="solid" color="pastelPrimary">
          Non, je souhaite en savoir plus
        </UiButton>
      </div>
    </section>
  );
}

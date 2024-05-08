import Flag from './flag';
import Stake from './stake';

export default function TimelapseSection() {
  return (
    <section className="laptop:section-px relative flex w-full flex-col justify-between gap-9xl py-9xl">
      <Stake></Stake>

      <Flag></Flag>
      <Flag inverted={true}></Flag>
      <Flag></Flag>
      <Flag inverted={true}></Flag>
    </section>
  );
}

import UiBreadcrumbs from './ui-breadcrumbs';

export default function TitleSection({
  title,
  element
}: {
  element: {
    text: string;
    href: string;
  }[];
  title: string;
}) {
  return (
    <section className="section-px container mx-auto flex flex-col gap-5 self-start">
      <h1 className="heading--extra-large text-primary-400">{title}</h1>
      <UiBreadcrumbs element={element}></UiBreadcrumbs>
    </section>
  );
}

import { cn } from '@/lib/utils';
import { ComingFromLeftVariant } from '../framer-motion/div-variants';
import DivWrapper from '../framer-motion/div-wrapper';
import UiBreadcrumbs from './ui-breadcrumbs';

export default function TitleSection({
  title,
  element,
  className
}: {
  element: {
    text: string;
    href: string;
  }[];
  title: string;
  className?: string;
}) {
  return (
    <DivWrapper
      className={cn('section-px container mx-auto flex flex-col gap-5 self-start', className)}
      tag="section"
      variant={ComingFromLeftVariant}
    >
      <h1 className="heading--extra-large text-primary-400">{title}</h1>
      <UiBreadcrumbs element={element}></UiBreadcrumbs>
    </DivWrapper>
  );
}

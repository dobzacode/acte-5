import { cn } from '@/lib/utils';
import { ComingFromLeftVariant } from '../framer-motion/div-variants';
import DivWrapper from '../framer-motion/div-wrapper';
import UiBreadcrumbs from './ui-breadcrumbs';

export default function TitleSection({
  title,
  element,
  className,
  description,
  h1Css
}: {
  element: {
    text: string;
    href: string;
  }[];
  title: string;
  className?: string;
  description?: string;
  h1Css?: string;
}) {
  return (
    <DivWrapper
      className={cn(
        'section-px  flex flex-col  gap-5 self-start laptop:container laptop:mx-auto',
        className
      )}
      tag="section"
      variant={ComingFromLeftVariant}
    >
      <h1 className={cn('heading--extra-large text-pretty text-primary-400', h1Css)}>{title}</h1>
      <UiBreadcrumbs element={element}></UiBreadcrumbs>
      {description && <p className="sub-heading max-w-[60ch] pt-lg">{description}</p>}
    </DivWrapper>
  );
}

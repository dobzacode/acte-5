import { cn } from '@/lib/utils';
import UiBreadcrumbs from './ui-breadcrumbs';

export default function TitleSection({
  title,
  element,
  className,
  description,
  h1Css,
  subtitle
}: {
  element: {
    text: string;
    href: string;
  }[];
  title: string;
  className?: string;
  description?: string;
  h1Css?: string;
  subtitle?: string;
}) {
  return (
    <div
      className={cn(
        'section-px flex flex-col gap-5 self-start break-words laptop:container laptop:mx-auto',
        className
      )}
      // tag="section"
      // variant={ComingFromLeftVariant}
    >
      <h1
        className={cn(
          'heading--extra-large w-full text-pretty text-primary-400 laptop:container',
          h1Css
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <h2 className={cn('heading container -my-sm text-pretty text-black')}>{subtitle}</h2>
      )}
      <UiBreadcrumbs className="body break-words" element={element}></UiBreadcrumbs>
      {description && <p className="sub-heading max-w-[60ch] break-words pt-lg">{description}</p>}
    </div>
  );
}

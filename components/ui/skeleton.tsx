import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-xs bg-primary-100 grayscale-[80%]', className)}
      {...props}
    />
  );
}

export { Skeleton };

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Skeleton } from './skeleton';

interface ImagePulsingProps extends React.ComponentProps<typeof Image> {
  skeletoncss?: string;
}

export default function ImagePulsing({
  skeletoncss = 'h-full w-full object-cover absolute object-center',
  ...props
}: ImagePulsingProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {isLoading && <Skeleton className={skeletoncss} />}
      <Image
        onLoad={(_) => {
          setIsLoading(false);
        }}
        {...props}
      />
    </>
  );
}

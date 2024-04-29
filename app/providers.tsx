'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push} className="h-full  w-full ">
      {children}
    </NextUIProvider>
  );
}

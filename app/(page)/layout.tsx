import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import Header from '@/components/ui/header/header';
import HeaderWrapper from '@/components/ui/header/header-wrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acte 5 | Agence de Communication Événementielle à Strasbourg',
  description:
    'Acte 5 vous accompagne dans vos projets événementiels, spectacles et communication depuis notre agence à Strasbourg.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DivWrapper className="relative z-50" variant={ComingFromTopVariant}>
        <HeaderWrapper>
          <Header></Header>
        </HeaderWrapper>
      </DivWrapper>
      {/* <FramerMotionWrapper>{children}</FramerMotionWrapper> */}
      <>{children}</>
    </>
  );
}

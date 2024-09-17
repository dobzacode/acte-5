import Popup from '@/components/spectacle/popup';
import Footer from '@/components/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Popup />
      <Footer />
    </>
  );
}

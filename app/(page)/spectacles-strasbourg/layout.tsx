import LinkButton from '@/components/spectacle/popup/link-button';
import Popup from '@/components/spectacle/popup/popup';
import Footer from '@/components/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Popup>
        <LinkButton />
      </Popup>
      <Footer />
    </>
  );
}

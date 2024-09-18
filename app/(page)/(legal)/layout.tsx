import ContactSection from '@/components/spectacle/contact-section';
import Footer from '@/components/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ContactSection></ContactSection>
      <div className="w-full border-t">
        <Footer />
      </div>
    </>
  );
}

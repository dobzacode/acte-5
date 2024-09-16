import ContactSection from '@/components/spectacle/contact-section';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ContactSection></ContactSection>
    </>
  );
}

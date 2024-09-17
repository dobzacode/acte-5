import Footer from '@/components/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Footer />
    </>
  );
}

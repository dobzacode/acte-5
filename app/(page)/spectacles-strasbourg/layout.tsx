import SpectacleFooter from '@/components/ui/footer/spectacle-footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SpectacleFooter />
    </>
  );
}

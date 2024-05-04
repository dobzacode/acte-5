import EventFooter from '@/components/ui/footer/event-footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <EventFooter />
    </>
  );
}

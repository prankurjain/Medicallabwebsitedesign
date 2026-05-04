import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WhatsAppFAB } from '../components/WhatsAppFAB';

export function Root() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--soft-background)' }}>
      <Navigation />
      <Outlet />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

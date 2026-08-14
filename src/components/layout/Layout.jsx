import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingQuote from '@/components/layout/FloatingQuote';
import MobileBar from '@/components/layout/MobileBar';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingQuote />
      <MobileBar />
      <div className="md:hidden h-16" aria-hidden />
    </div>
  );
}
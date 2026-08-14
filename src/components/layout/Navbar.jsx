import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-foreground/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <Link to="/" aria-label="HALVOR — home">
          <Logo className="h-9" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm font-medium tracking-tight transition-colors hover:text-foreground ${
                  active ? 'text-foreground' : 'text-foreground/55'
                }`}
              >
                {l.label}
                {active && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-primary" />}
              </Link>
            );
          })}
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 -mr-2" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-background border-foreground/10">
            <div className="flex flex-col gap-6 mt-10">
              <Logo className="h-9" />
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild className="rounded-full mt-2">
                <Link to="/contact" onClick={() => setOpen(false)}>Get a Free Quote</Link>
              </Button>
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-sm text-foreground/60 mt-2">
                <Phone className="w-4 h-4" /> {COMPANY.phone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
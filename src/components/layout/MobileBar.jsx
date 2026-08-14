import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '@/lib/site';
import { Phone, FileText, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

export default function MobileBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 glass border-t border-foreground/10 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-3 h-16">
          <a href={COMPANY.phoneHref} className="flex flex-col items-center justify-center gap-0.5 text-foreground/70">
            <Phone className="w-5 h-5" /><span className="text-[11px] font-medium">Call</span>
          </a>
          <Link to="/contact" className="flex flex-col items-center justify-center gap-0.5 text-primary">
            <FileText className="w-5 h-5" /><span className="text-[11px] font-medium">Quote</span>
          </Link>
          <button onClick={() => setOpen(true)} className="flex flex-col items-center justify-center gap-0.5 text-foreground/70">
            <Menu className="w-5 h-5" /><span className="text-[11px] font-medium">Menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm animate-fade-in">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-foreground p-2" aria-label="Close menu">
            <X className="w-7 h-7" />
          </button>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Logo className="h-10" />
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-2xl font-heading text-foreground/90">
                {l.label}
              </Link>
            ))}
            <a href={COMPANY.phoneHref} className="mt-4 text-foreground/70 flex items-center gap-2">
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
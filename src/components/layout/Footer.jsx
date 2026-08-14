import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '@/lib/site';
import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background text-foreground border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo className="h-10" />
            <p className="mt-5 text-sm text-foreground/60 leading-relaxed">
              Pressure Washing &amp; Window Cleaning for Colorado homes.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Navigate</h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-foreground/60 hover:text-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Services</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/services#pressure-washing" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Pressure Washing</Link></li>
              <li><Link to="/services#window-cleaning" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Window Cleaning</Link></li>
              <li><span className="text-sm text-foreground/40">More services coming soon</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-foreground/60"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {COMPANY.serviceArea}</li>
              <li><a href={COMPANY.phoneHref} className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"><Phone className="w-4 h-4" /> {COMPANY.phone}</a></li>
              <li><a href={COMPANY.emailHref} className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"><Mail className="w-4 h-4" /> {COMPANY.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/50">© {year} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="text-xs text-foreground/50 hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-xs text-foreground/50 hover:text-foreground transition-colors">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
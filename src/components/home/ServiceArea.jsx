import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/site';
import Reveal from '@/components/Reveal';

export default function ServiceArea() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Service Area</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-balance">
            Proudly Serving Colorado
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            HALVOR provides pressure washing and window cleaning to homes across the Denver metro area. If your community isn't listed yet, reach out — we're expanding as we grow.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {COMPANY.serviceCities.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {c}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild className="rounded-full">
              <a href={COMPANY.phoneHref}><Phone className="w-4 h-4 mr-1" /> Call {COMPANY.phone}</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/contact">Request a Free Quote</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-lg border border-border shadow-lg">
            <iframe
              title="HALVOR service area map — Colorado"
              src={COMPANY.mapEmbed}
              className="w-full h-[360px] grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
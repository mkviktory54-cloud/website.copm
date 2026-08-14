import { Link } from 'react-router-dom';
import { ArrowRight, Check, Droplets, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/site';
import Reveal from '@/components/Reveal';

const ICONS = {
  'pressure-washing': Droplets,
  'window-cleaning': Sparkles,
};

export default function ServicesPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Our Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-xl text-balance">
            Pressure washing &amp; window cleaning for Colorado homes.
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.id] || Droplets;
            return (
              <Reveal key={s.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 sm:p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{s.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {it}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services#${s.id}`} className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary/20">
              <Link to="/contact">Get a Free Quote <ArrowRight className="w-4 h-4 ml-1.5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-sm font-semibold uppercase tracking-wide">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/site';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="hero-glow relative pt-40 pb-28 sm:pt-52 sm:pb-40 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" /> {COMPANY.tagline}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-7 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] text-balance">
            Professional Exterior Cleaning
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Pressure Washing &amp; Window Cleaning for Colorado Homes
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="rounded-full px-8 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary/20">
              <Link to="/contact">Get a Free Quote <ArrowRight className="w-4 h-4 ml-1.5" /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
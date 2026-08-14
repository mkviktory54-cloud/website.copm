import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

export default function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-card overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl font-semibold text-foreground text-balance leading-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-5 text-foreground/70 text-lg">
            Tell us what you need cleaned and we'll get back to you with a free quote.
          </p>
          <Button asChild size="lg" className="mt-9 rounded-full px-8 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary/20">
            <Link to="/contact">Get a Free Quote <ArrowRight className="w-4 h-4 ml-1.5" /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
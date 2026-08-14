import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Gallery() {
  return (
    <div className="pt-28 pb-20 sm:pb-28">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Camera className="w-12 h-12 text-primary" strokeWidth={1.5} />
            </div>
            <span className="mt-6 block text-xs font-medium uppercase tracking-[0.2em] text-primary">Our Work</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-balance">Real project photos, coming soon.</h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We are assembling a gallery of genuine before-and-after results from real HALVOR projects. In the meantime, request a quote and we will gladly share recent work in your area.
            </p>
            <Button asChild className="mt-8 rounded-full">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
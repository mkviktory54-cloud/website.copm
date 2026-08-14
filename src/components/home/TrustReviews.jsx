import { Quote } from 'lucide-react';
import { REVIEWS } from '@/lib/site';
import Reveal from '@/components/Reveal';

export default function TrustReviews() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Reviews</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-balance">What Our Customers Say</h2>
        </Reveal>

        {REVIEWS.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-lg border border-dashed border-border bg-card p-10 sm:p-16 text-center">
              <Quote className="w-8 h-8 text-muted-foreground mx-auto" strokeWidth={1.5} />
              <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
                Customer reviews will be added as we complete more projects.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <figure className="h-full rounded-lg border border-border bg-card p-7">
                  <Quote className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  <blockquote className="mt-4 text-sm text-foreground/80 leading-relaxed">"{r.text}"</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-medium">{r.name}</span>
                    {r.location && <span className="text-muted-foreground"> · {r.location}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
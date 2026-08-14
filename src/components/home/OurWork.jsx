import { ImagePlus } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { PROJECTS } from '@/lib/site';
import Reveal from '@/components/Reveal';

export default function OurWork() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
            Our Work
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
            Real results from HALVOR projects.
          </p>
        </Reveal>

        {PROJECTS.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mt-14 rounded-2xl border border-dashed border-border bg-card p-10 sm:p-16 text-center">
              <ImagePlus className="w-8 h-8 text-muted-foreground mx-auto" strokeWidth={1.5} />
              <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
                Project photos will be added as we complete more work. Check back for real before &amp; after results.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <article className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-[4/3]">
                      <Image src={p.before} alt={`Before — ${p.description}`} className="w-full h-full" fittingType="fill" />
                      <span className="absolute top-2 left-2 rounded bg-background/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">Before</span>
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image src={p.after} alt={`After — ${p.description}`} className="w-full h-full" fittingType="fill" />
                      <span className="absolute top-2 left-2 rounded bg-primary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">After</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">{p.service}</span>
                    <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{p.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
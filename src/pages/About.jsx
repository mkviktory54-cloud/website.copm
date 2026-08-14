import { ShieldCheck, MessagesSquare, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/site';
import Reveal from '@/components/Reveal';
import { Link } from 'react-router-dom';

const VALUES = [
  { icon: ShieldCheck, title: 'Professionalism', body: 'Uniformed, insured crews who treat your property with respect from arrival to cleanup.' },
  { icon: Sparkles, title: 'Quality', body: 'A detailing standard, not a checklist. We measure success by the results you can see.' },
  { icon: MessagesSquare, title: 'Communication', body: 'Transparent quotes, timely updates, and honest timelines — every step of the way.' },
  { icon: TrendingUp, title: 'Long-Term Relationships', body: 'Maintenance programs and repeat clients, not one-off jobs. We earn trust that lasts.' },
];

export default function About() {
  return (
    <div className="pt-28">
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">About HALVOR</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold max-w-3xl text-balance">
              We are redefining home maintenance as a precision service.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="text-muted-foreground leading-relaxed">
              HALVOR was founded on a simple belief: the exterior of a home deserves the same level of care and precision as its interior. We do not see cleaning as manual labor — we see it as restoration, returning every surface to its original, structural purity.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Today we focus on pressure washing and window cleaning, delivering each to an uncompromising standard. As we grow, we are expanding into additional home services — bringing the same engineering rigor to every surface we touch.
            </p>
            <Button asChild className="mt-8 rounded-full">
              <Link to="/contact">Work with us</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold max-w-2xl text-balance">What we stand for.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full bg-card p-7">
                  <v.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold text-balance">Growing, with intention.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              HALVOR is actively expanding into new home services — gutter care, roof soft-washing, solar panel cleaning, and more. Each new service is held to the same standard before it carries our name. If you are a contractor who shares our values, we would like to talk.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
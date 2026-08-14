import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SERVICES } from '@/lib/site';
import Reveal from '@/components/Reveal';
import PriceEstimator from '@/components/services/PriceEstimator';

function ServiceModule({ service }) {
  return (
    <article id={service.id} className="scroll-mt-28 py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-primary">{service.index}</span>
            <span className="micro-rule flex-1" />
          </div>
          <Reveal>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-balance">{service.name}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{service.short}</p>
            <Button asChild className="mt-8 rounded-full">
              <Link to={`/contact?service=${encodeURIComponent(service.name)}`}>Request Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Reveal delay={0.05}>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Overview</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{service.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Benefits</h3>
                <ul className="mt-3 space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
              {service.specs.map((s) => (
                <div key={s.label} className="bg-card p-5">
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="mt-1 text-sm font-medium">{s.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">FAQ</h3>
              <Accordion type="single" collapsible className="w-full">
                {service.faq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <div className="pt-28">
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Service Blueprint</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-balance">Exterior care, engineered.</h1>
            <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              Each service follows a modular spec sheet — equipment, method, and protocol documented for every surface. New services slot in as additional modules.
            </p>
          </Reveal>
        </div>
      </section>
      {SERVICES.map((s) => <ServiceModule key={s.id} service={s} />)}
      <PriceEstimator />
    </div>
  );
}
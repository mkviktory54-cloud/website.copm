import { Target, ShieldCheck, Clock, Heart } from 'lucide-react';
import Reveal from '@/components/Reveal';

const REASONS = [
  { icon: Target, title: 'Precision', body: 'Attention to the details that make a property look its best.' },
  { icon: ShieldCheck, title: 'Professional', body: 'A clean, organized, professional approach from quote to completion.' },
  { icon: Clock, title: 'Reliable', body: 'Clear communication and dependable scheduling.' },
  { icon: Heart, title: 'Customer Focused', body: 'Every project is approached with the goal of delivering a noticeable result.' },
];

export default function WhyChoose() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Why HALVOR</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-2xl text-balance">
            A higher standard of care for your home.
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                  <r.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
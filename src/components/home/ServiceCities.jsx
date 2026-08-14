import { MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';

const CITIES = [
  'Denver', 'Aurora', 'Lakewood', 'Littleton', 'Englewood', 'Centennial',
  'Highlands Ranch', 'Parker', 'Castle Rock', 'Arvada', 'Westminster',
  'Thornton', 'Broomfield', 'Golden', 'Wheat Ridge', 'Commerce City',
  'Northglenn', 'Lone Tree', 'Greenwood Village', 'Ken Caryl',
];

const NEIGHBORHOODS = [
  'Washington Park', 'Cherry Creek', 'LoHi / Highlands', 'LoDo', 'Capitol Hill',
  "Sloan's Lake", 'Central Park', 'Berkeley', 'Congress Park', 'Baker',
  'RiNo', 'Hilltop', 'Belcaro', 'Bonnie Brae', 'Stapleton',
];

export default function ServiceCities() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Communities We Serve</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-balance max-w-2xl">
            Pressure washing & window cleaning across the Denver metro.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
            From downtown Denver to the foothills, HALVOR brings precision exterior care to homes throughout the Front Range. If your community is not listed below, reach out — we are growing fast.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Cities</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {CITIES.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Denver Neighborhoods</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {NEIGHBORHOODS.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {n}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
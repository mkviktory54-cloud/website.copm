import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const SERVICES = {
  'Pressure Washing': {
    sizes: [
      { id: 'small', label: 'Small', sub: '1 story · < 1,500 sqft', base: 180 },
      { id: 'medium', label: 'Medium', sub: '2 story · 1,500–2,500 sqft', base: 320 },
      { id: 'large', label: 'Large', sub: '2,500+ sqft', base: 480 },
    ],
    addons: [
      { id: 'driveway', label: 'Driveway', price: 80 },
      { id: 'deck', label: 'Deck / Patio', price: 120 },
      { id: 'fence', label: 'Fence', price: 150 },
      { id: 'roof', label: 'Roof soft-wash', price: 250 },
    ],
  },
  'Window Cleaning': {
    sizes: [
      { id: 'small', label: 'Small', sub: '~10 windows', base: 150 },
      { id: 'medium', label: 'Medium', sub: '~20 windows', base: 260 },
      { id: 'large', label: 'Large', sub: '~30+ windows', base: 380 },
    ],
    addons: [
      { id: 'screens', label: 'Screen cleaning', price: 60 },
      { id: 'tracks', label: 'Track & sill detail', price: 90 },
      { id: 'interior', label: 'Interior panes', price: 120 },
      { id: 'skylights', label: 'Skylights', price: 45 },
    ],
  },
};

const fmt = (n) => '$' + Math.round(n).toLocaleString();

export default function PriceEstimator() {
  const [serviceKey, setServiceKey] = useState('Pressure Washing');
  const [sizeId, setSizeId] = useState('medium');
  const [addons, setAddons] = useState({});

  const service = SERVICES[serviceKey];

  const { low, high, total } = useMemo(() => {
    const size = service.sizes.find((s) => s.id === sizeId);
    let sum = size.base;
    service.addons.forEach((a) => {
      if (addons[a.id]) sum += a.price;
    });
    return { total: sum, low: sum * 0.85, high: sum * 1.15 };
  }, [service, sizeId, addons]);

  const toggleAddon = (id) => setAddons((p) => ({ ...p, [id]: !p[id] }));
  const switchService = (key) => {
    setServiceKey(key);
    setAddons({});
    setSizeId('medium');
  };

  return (
    <section className="py-20 sm:py-28 bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Rough Cost Estimator</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-balance max-w-2xl">
            Ballpark your project in seconds.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
            A quick estimate to help you plan. Final pricing depends on condition, access, and scope — confirmed in your free on-site quote.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {/* Controls */}
            <div className="lg:col-span-2 bg-card p-6 sm:p-8 space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Service</h3>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {Object.keys(SERVICES).map((key) => (
                    <button
                      key={key}
                      onClick={() => switchService(key)}
                      className={`rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
                        serviceKey === key
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-foreground/80 hover:border-foreground/30'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Property Size</h3>
                <div className="mt-3 grid sm:grid-cols-3 gap-2.5">
                  {service.sizes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSizeId(s.id)}
                      className={`rounded-md border px-4 py-3 text-left transition-colors ${
                        sizeId === s.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-background hover:border-foreground/30'
                      }`}
                    >
                      <div className="text-sm font-medium">{s.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Add-ons</h3>
                <div className="mt-3 grid sm:grid-cols-2 gap-2.5">
                  {service.addons.map((a) => {
                    const active = !!addons[a.id];
                    return (
                      <button
                        key={a.id}
                        onClick={() => toggleAddon(a.id)}
                        className={`flex items-center justify-between rounded-md border px-4 py-3 text-sm transition-colors ${
                          active ? 'border-primary bg-primary/10' : 'border-border bg-background hover:border-foreground/30'
                        }`}
                      >
                        <span className="flex items-center gap-2 text-foreground/80">
                          <span className={`flex items-center justify-center w-4 h-4 rounded border ${active ? 'border-primary bg-primary text-primary-foreground' : 'border-border'}`}>
                            {active && <Check className="w-3 h-3" />}
                          </span>
                          {a.label}
                        </span>
                        <span className="text-muted-foreground">+{fmt(a.price)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Estimate */}
            <div className="bg-background p-6 sm:p-8 flex flex-col">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Estimated Range</h3>
              <div className="mt-4 text-4xl font-semibold font-heading">
                {fmt(low)}–{fmt(high)}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Base {fmt(total)} · typical project varies ±15% by condition and access.
              </p>
              <div className="mt-auto pt-8">
                <Button asChild className="w-full rounded-full">
                  <Link to={`/contact?service=${encodeURIComponent(serviceKey)}`}>
                    Get an Exact Quote <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  Free, no-obligation on-site assessment.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
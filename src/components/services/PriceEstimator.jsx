import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const SERVICES = [
  {
    id: 'driveway',
    label: 'Driveway Cleaning',
    price: 150,
    description: 'Professional cleaning to restore the appearance of your driveway and improve curb appeal.',
  },
  {
    id: 'house',
    label: 'House Exterior Wash',
    price: 300,
    description: 'A professional soft wash designed to remove dirt, grime, algae, and organic buildup.',
  },
  {
    id: 'deck',
    label: 'Deck & Patio Cleaning',
    price: 175,
    description: 'Thorough cleaning for decks and patios to refresh your outdoor living spaces.',
  },
  {
    id: 'roof',
    label: 'Roof Soft Wash',
    price: 300,
    description: 'A gentle soft-wash approach designed for appropriate roof surfaces.',
  },
];

const PACKAGES = [
  {
    name: 'The Halvor Refresh',
    price: 400,
    description: 'House exterior + driveway',
  },
  {
    name: 'Curb Appeal',
    price: 475,
    description: 'House exterior + driveway + sidewalk',
  },
  {
    name: 'The Halvor',
    price: 550,
    description: 'Our most popular complete exterior package',
  },
  {
    name: 'The Halvor Signature',
    price: 750,
    description: 'Our most comprehensive exterior cleaning package',
  },
];

const fmt = (n) => '$' + Math.round(n).toLocaleString();

export default function PriceEstimator() {
  const [selected, setSelected] = useState('driveway');

  const service = SERVICES.find((item) => item.id === selected);

  return (
    <section className="py-20 sm:py-28 bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Pricing Guide
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-balance max-w-2xl">
            Simple starting prices. Exact quotes are always free.
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
            Use these prices as a starting point. Final pricing depends on
            property size, surface condition, staining, accessibility, and
            the overall scope of the job.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">

            {/* Services */}
            <div className="lg:col-span-2 bg-card p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </h3>

              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {SERVICES.map((item) => {
                  const active = selected === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelected(item.id)}
                      className={`rounded-lg border p-5 text-left transition-colors ${
                        active
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-background hover:border-foreground/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold">
                            {item.label}
                          </div>

                          <div className="mt-1 text-xs text-muted-foreground">
                            {item.description}
                          </div>
                        </div>

                        <div className="text-sm font-semibold whitespace-nowrap">
                          {fmt(item.price)}+
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Estimate */}
            <div className="bg-background p-6 sm:p-8 flex flex-col">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Starting Price
              </h3>

              <div className="mt-4 text-4xl font-semibold font-heading">
                {fmt(service.price)}+
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Final pricing depends on the size, condition, staining,
                accessibility, and scope of the job.
              </p>

              <div className="mt-auto pt-8">
                <Button asChild className="w-full rounded-full">
                  <Link
                    to={`/contact?service=${encodeURIComponent(
                      service.label
                    )}`}
                  >
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                <p className="mt-3 text-xs text-muted-foreground text-center">
                  No-obligation quote.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Packages */}
        <Reveal delay={0.15}>
          <div className="mt-16">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Package Pricing
              </span>

              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
                Get more done in one visit.
              </h3>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <h4 className="font-semibold">{pkg.name}</h4>

                  <div className="mt-3 text-2xl font-semibold">
                    {fmt(pkg.price)}+
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {pkg.description}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 w-full rounded-full"
                  >
                    <Link
                      to={`/contact?service=${encodeURIComponent(
                        pkg.name
                      )}`}
                    >
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

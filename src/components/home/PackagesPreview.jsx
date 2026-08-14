import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PACKAGES } from '@/lib/site';
import Reveal from '@/components/Reveal';

export default function PackagesPreview() {
  return (
    <section className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Packages
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-2xl text-balance">
            Exterior care, bundled around your property.
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Choose a package that fits your property and goals. Every package
            can be customized when we provide your final quote.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.05}>
              <div
                className={`relative h-full rounded-2xl border bg-card p-7 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/5 ${
                  pkg.featured
                    ? 'border-primary ring-1 ring-primary/30'
                    : 'border-border hover:border-primary/40'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                {pkg.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="rounded-full bg-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
                      Premium
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold">
                  {pkg.name}
                </h3>

                <div className="mt-4">
                  <span className="text-3xl font-semibold">
                    {pkg.price}
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={
                    pkg.featured || pkg.popular
                      ? 'default'
                      : 'outline'
                  }
                  className="mt-7 w-full rounded-full"
                >
                  <Link
                    to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
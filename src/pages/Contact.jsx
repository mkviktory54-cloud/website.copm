import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
  Sparkles,
  Calendar,
  Loader2,
} from 'lucide-react';
import { SERVICES, COMPANY } from '@/lib/site';
import Reveal from '@/components/Reveal';

const STEPS = ['Property', 'Service', 'Details'];

export default function Contact() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const presetService = params.get('service') || '';

  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    address: '',
    preferred_date: '',
    service_needed: presetService,
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [state, handleSubmit] = useForm('xwleknoj');

  const set = (key, value) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const canNext =
    step === 0
      ? form.address.trim().length > 3
      : step === 1
        ? !!form.service_needed
        : form.name.trim() &&
          /\S+@\S+\.\S+/.test(form.email) &&
          form.phone.trim();

  useEffect(() => {
    if (state.succeeded) {
      navigate('/quote-success');
    }
  }, [state.succeeded, navigate]);

  const nextStep = () => {
    if (canNext) {
      setStep((current) => current + 1);
    }
  };

  const previousStep = () => {
    setStep((current) => current - 1);
  };

  return (
    <div className="pt-28 pb-20 sm:pb-28">
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">

          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Request a Quote
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-balance">
              Let us preserve your property.
            </h1>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Three quick steps. We respond within one business day with a
              clear, no-pressure quote.
            </p>
          </Reveal>

          {/* Progress */}
          <div className="mt-10 flex items-center gap-3">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                    i <= step
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {i < step ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    i + 1
                  )}
                </div>

                <span
                  className={`text-sm hidden sm:inline ${
                    i === step
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {s}
                </span>

                {i < STEPS.length - 1 && (
                  <span className="micro-rule w-8 sm:w-12" />
                )}
              </div>
            ))}
          </div>

          {/* Quote Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-lg border border-border bg-card p-6 sm:p-8"
          >

            {/* Hidden fields ensure ALL steps are submitted to Formspree */}
            <input type="hidden" name="address" value={form.address} />
            <input
              type="hidden"
              name="preferred_date"
              value={form.preferred_date}
            />
            <input
              type="hidden"
              name="service_needed"
              value={form.service_needed}
            />
            <input type="hidden" name="name" value={form.name} />
            <input type="hidden" name="email" value={form.email} />
            <input type="hidden" name="phone" value={form.phone} />
            <input type="hidden" name="message" value={form.message} />

            {/* STEP 1 — PROPERTY */}
            {step === 0 && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />

                  <h2 className="text-lg font-semibold">
                    What property are we preserving?
                  </h2>
                </div>

                <div>
                  <Label htmlFor="address-display">
                    Property address
                  </Label>

                  <Input
                    id="address-display"
                    value={form.address}
                    onChange={(e) => set('address', e.target.value)}
                    placeholder="123 Main St, Commerce City, CO"
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="date-display">
                    Preferred date (optional)
                  </Label>

                  <Input
                    id="date-display"
                    type="date"
                    value={form.preferred_date}
                    onChange={(e) =>
                      set('preferred_date', e.target.value)
                    }
                    className="mt-1.5"
                  />

                  <p className="mt-1.5 text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    We will confirm availability.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 2 — SERVICE */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="w-5 h-5" />

                  <h2 className="text-lg font-semibold">
                    Which service do you need?
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">

                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() =>
                        set('service_needed', s.name)
                      }
                      className={`text-left rounded-lg border p-5 transition-all ${
                        form.service_needed === s.name
                          ? 'border-primary bg-primary/5 ring-1 ring-primary'
                          : 'border-border hover:border-foreground/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">
                          {s.name}
                        </span>

                        {form.service_needed === s.name && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </div>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {s.short}
                      </p>
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() =>
                      set('service_needed', 'Multiple Services')
                    }
                    className={`text-left rounded-lg border p-5 transition-all ${
                      form.service_needed === 'Multiple Services'
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-border hover:border-foreground/20'
                    }`}
                  >
                    <span className="font-medium">
                      Multiple Services
                    </span>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Bundle exterior care.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      set('service_needed', 'Other')
                    }
                    className={`text-left rounded-lg border p-5 transition-all ${
                      form.service_needed === 'Other'
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-border hover:border-foreground/20'
                    }`}
                  >
                    <span className="font-medium">
                      Other
                    </span>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Tell us in your message.
                    </p>
                  </button>

                </div>
              </div>
            )}

            {/* STEP 3 — DETAILS */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in">
                <h2 className="text-lg font-semibold">
                  Your details
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">

                  <div>
                    <Label htmlFor="name-display">
                      Full name
                    </Label>

                    <Input
                      id="name-display"
                      value={form.name}
                      onChange={(e) =>
                        set('name', e.target.value)
                      }
                      className="mt-1.5"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone-display">
                      Phone
                    </Label>

                    <Input
                      id="phone-display"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        set('phone', e.target.value)
                      }
                      className="mt-1.5"
                      required
                    />
                  </div>

                </div>

                <div>
                  <Label htmlFor="email-display">
                    Email
                  </Label>

                  <Input
                    id="email-display"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      set('email', e.target.value)
                    }
                    className="mt-1.5"
                    required
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <Label htmlFor="message-display">
                    Message (optional)
                  </Label>

                  <Textarea
                    id="message-display"
                    value={form.message}
                    onChange={(e) =>
                      set('message', e.target.value)
                    }
                    rows={4}
                    placeholder="Tell us about the surfaces, concerns, or goals..."
                    className="mt-1.5"
                  />
                </div>

                <ValidationError
                  prefix="Form"
                  errors={state.errors}
                />
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">

              {step > 0 ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={previousStep}
                  className="rounded-full -ml-3"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              ) : (
                <span />
              )}

              {step < 2 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!canNext}
                  className="rounded-full"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!canNext || state.submitting}
                  className="rounded-full"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                      Submitting
                    </>
                  ) : (
                    'Request My Free Quote'
                  )}
                </Button>
              )}

            </div>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Prefer to talk? Call{' '}
            <a
              href={COMPANY.phoneHref}
              className="text-primary font-medium"
            >
              {COMPANY.phone}
            </a>
          </p>

        </div>
      </section>
    </div>
  );
}
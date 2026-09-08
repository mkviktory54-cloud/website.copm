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
  Ruler,
  Camera,
} from 'lucide-react';
import { SERVICES, COMPANY } from '@/lib/site';
import Reveal from '@/components/Reveal';

const STEPS = ['Property', 'Service', 'Details'];

const SERVICE_OPTIONS = [
  {
    id: 'driveway',
    name: 'Driveway Cleaning',
    description: 'Clean and restore your driveway and improve curb appeal.',
  },
  {
    id: 'house',
    name: 'House Exterior Wash',
    description: 'Professional soft washing for your home exterior.',
  },
  {
    id: 'deck',
    name: 'Deck & Patio Cleaning',
    description: 'Refresh your outdoor living spaces.',
  },
  {
    id: 'roof',
    name: 'Roof Soft Wash',
    description: 'Gentle soft washing for appropriate roof surfaces.',
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const presetService =
    params.get('service') ||
    params.get('package') ||
    '';

  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    address: '',
    preferred_date: '',
    service_needed: presetService,
    square_footage: '',
    surface_condition: '',
    problem_areas: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [photos, setPhotos] = useState([]);

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

  const handlePhotoChange = (event) => {
    const files = Array.from(event.target.files || []);

    // Keep uploads manageable.
    const selectedFiles = files.slice(0, 5);

    setPhotos(selectedFiles);
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
              Three quick steps. Give us a few details about your property
              and we'll follow up with a clear, no-pressure quote.
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
            encType="multipart/form-data"
            className="mt-10 rounded-lg border border-border bg-card p-6 sm:p-8"
          >

            {/* Hidden fields */}
            <input
              type="hidden"
              name="address"
              value={form.address}
            />

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

            <input
              type="hidden"
              name="square_footage"
              value={form.square_footage}
            />

            <input
              type="hidden"
              name="surface_condition"
              value={form.surface_condition}
            />

            <input
              type="hidden"
              name="problem_areas"
              value={form.problem_areas}
            />

            <input
              type="hidden"
              name="name"
              value={form.name}
            />

            <input
              type="hidden"
              name="email"
              value={form.email}
            />

            <input
              type="hidden"
              name="phone"
              value={form.phone}
            />

            <input
              type="hidden"
              name="message"
              value={form.message}
            />

            {/* STEP 1 — PROPERTY */}
            {step === 0 && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />

                  <h2 className="text-lg font-semibold">
                    What property are we cleaning?
                  </h2>
                </div>

                <div>
                  <Label htmlFor="address-display">
                    Property address
                  </Label>

                  <Input
                    id="address-display"
                    value={form.address}
                    onChange={(e) =>
                      set('address', e.target.value)
                    }
                    placeholder="123 Main St, Commerce City, CO"
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="date-display">
                    Preferred date
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
                    We'll confirm availability with you.
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
                    What would you like cleaned?
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {SERVICE_OPTIONS.map((service) => {
                    const active =
                      form.service_needed === service.name;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() =>
                          set('service_needed', service.name)
                        }
                        className={`text-left rounded-lg border p-5 transition-all ${
                          active
                            ? 'border-primary bg-primary/5 ring-1 ring-primary'
                            : 'border-border hover:border-foreground/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">
                            {service.name}
                          </span>

                          {active && (
                            <Check className="w-4 h-4 text-primary" />
                          )}
                        </div>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {service.description}
                        </p>
                      </button>
                    );
                  })}

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
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        Multiple Services
                      </span>

                      {form.service_needed === 'Multiple Services' && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </div>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Bundle multiple exterior cleaning services.
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
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        Other
                      </span>

                      {form.service_needed === 'Other' && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </div>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Tell us what you need in the next step.
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 — DETAILS */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">

                <div>
                  <h2 className="text-lg font-semibold">
                    Tell us about the job
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    A few extra details help us prepare a more accurate quote.
                  </p>
                </div>

                {/* Size */}
                <div>
                  <Label htmlFor="square-footage">
                    Approximate square footage
                  </Label>

                  <div className="relative mt-1.5">
                    <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

                    <Input
                      id="square-footage"
                      type="number"
                      min="0"
                      value={form.square_footage}
                      onChange={(e) =>
                        set('square_footage', e.target.value)
                      }
                      placeholder="Example: 800"
                      className="pl-9"
                    />
                  </div>

                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Don't know? That's okay — just leave it blank.
                  </p>
                </div>

                {/* Condition */}
                <div>
                  <Label htmlFor="surface-condition">
                    Surface condition
                  </Label>

                  <select
                    id="surface-condition"
                    value={form.surface_condition}
                    onChange={(e) =>
                      set('surface_condition', e.target.value)
                    }
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">
                      Select an option
                    </option>
                    <option value="Light">
                      Light — mostly clean
                    </option>
                    <option value="Moderate">
                      Moderate — noticeable dirt/build-up
                    </option>
                    <option value="Heavy">
                      Heavy — significant buildup or staining
                    </option>
                    <option value="Severe">
                      Severe — extensive staining or growth
                    </option>
                    <option value="Not sure">
                      Not sure
                    </option>
                  </select>
                </div>

                {/* Problem areas */}
                <div>
                  <Label htmlFor="problem-areas">
                    Stains or problem areas
                  </Label>

                  <Textarea
                    id="problem-areas"
                    value={form.problem_areas}
                    onChange={(e) =>
                      set('problem_areas', e.target.value)
                    }
                    rows={3}
                    placeholder="Oil stains, rust, algae, heavy dirt, etc."
                    className="mt-1.5"
                  />
                </div>

                {/* Photos */}
                <div>
                  <Label htmlFor="photos">
                    Photos of the area
                  </Label>

                  <label
                    htmlFor="photos"
                    className="mt-1.5 flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-background px-4 py-6 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    <Camera className="w-5 h-5" />

                    <span>
                      {photos.length > 0
                        ? `${photos.length} photo${
                            photos.length === 1 ? '' : 's'
                          } selected`
                        : 'Upload up to 5 photos'}
                    </span>
                  </label>

                  <input
                    id="photos"
                    type="file"
                    name="photos"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoChange}
                    className="sr-only"
                  />

                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Photos help us understand the condition of the property.
                  </p>
                </div>

                {/* Contact */}
                <div className="pt-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Your contact information
                  </h3>
                </div>

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
                      placeholder="(720) 555-0123"
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
                    Anything else we should know?
                  </Label>

                  <Textarea
                    id="message-display"
                    value={form.message}
                    onChange={(e) =>
                      set('message', e.target.value)
                    }
                    rows={4}
                    placeholder="Tell us anything else about the property or the work you'd like done..."
                    className="mt-1.5"
                  />
                </div>

                <ValidationError
                  prefix="Form"
                  errors={state.errors}
                />

                <p className="text-xs text-muted-foreground leading-relaxed">
                  The Halvor team will provide your official final quote after
                  reviewing your exact job details.
                </p>

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

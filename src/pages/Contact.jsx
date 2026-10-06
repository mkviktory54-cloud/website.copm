import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@formspree/react';
import { ArrowLeft, ArrowRight, Check, MapPin } from 'lucide-react';
import { COMPANY, SERVICES } from '@/lib/site';

const STEPS = ['Property', 'Service', 'Details'];

const PROPERTY_TYPES = [
  'Single-family home',
  'Townhome',
  'Condo',
  'Multi-family property',
  'Commercial property',
  'Other',
];

const LIGHTING_OPTIONS = [
  {
    value: 'Labor-Only',
    title: 'Labor-Only',
    description: 'I already have the lighting equipment and need installation.',
  },
  {
    value: 'Turn-Key',
    title: 'Turn-Key',
    description: 'I need HALVOR to coordinate the lighting equipment and installation.',
  },
  {
    value: 'Not Sure',
    title: 'Not Sure',
    description: 'I would like help deciding which option makes sense.',
  },
];

const initialForm = {
  address: '',
  property_type: '',
  preferred_date: '',
  service_needed: '',
  lighting_kit: '',
  project_details: '',
  name: '',
  email: '',
  phone: '',
};

export default function Contact() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);

  const [state, handleSubmit] = useForm('xwleknoj');

  const isLighting = form.service_needed === 'Smart Permanent Lighting';

  const updateField = (key, value) => {
  setForm((current) => ({
    ...current,
    [key]: value,
  }));
};

  const canNext = () => {
    if (step === 0) {
      return Boolean(form.address && form.property_type);
    }

    if (step === 1) {
      if (!form.service_needed) return false;
      if (isLighting && !form.lighting_kit) return false;
      return true;
    }

    return Boolean(form.name && form.email && form.phone);
  };

  const nextStep = () => {
    if (canNext() && step < STEPS.length - 1) {
      setStep((current) => current + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

const submitForm = async (event) => {    event.preventDefault();

    await handleSubmit({
      ...form,
      company: 'HALVOR',
      lighting_kit: isLighting ? form.lighting_kit : '',
    });

    if (!state.errors) {
      navigate('/quote-success');
    }
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* Header */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {COMPANY.tagline}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Get a free quote.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Tell us a little about your property and what you need.
              We&apos;ll review the project and follow up with a clear,
              property-specific quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-20">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {STEPS.map((label, index) => (
              <React.Fragment key={label}>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
                      index === step
                        ? 'border-neutral-950 bg-neutral-950 text-white'
                        : index < step
                        ? 'border-neutral-950 bg-neutral-950 text-white'
                        : 'border-neutral-300 bg-white text-neutral-500'
                    }`}
                  >
                    {index < step ? <Check size={16} /> : index + 1}
                  </div>

                  <span
                    className={`hidden text-sm font-medium sm:block ${
                      index === step
                        ? 'text-neutral-950'
                        : 'text-neutral-500'
                    }`}
                  >
                    {label}
                  </span>
                </div>

                {index < STEPS.length - 1 && (
                  <div className="mx-3 h-px flex-1 bg-neutral-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={submitForm}>
          {/* STEP 1 */}
          {step === 0 && (
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Step 01
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  Tell us about the property.
                </h2>

                <p className="mt-3 text-neutral-600">
                  This helps us understand the scope before we prepare your
                  quote.
                </p>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium"
                >
                  Property address
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    id="address"
                    type="text"
                    value={form.address}
                    onChange={(event) =>
                      updateField('address', event.target.value)
                    }
                    placeholder="123 Main Street, Commerce City, CO"
                    required
                    className="w-full rounded-xl border border-neutral-300 bg-white py-4 pl-11 pr-4 outline-none transition focus:border-neutral-950"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="property_type"
                  className="mb-2 block text-sm font-medium"
                >
                  Property type
                </label>

                <select
                  id="property_type"
                  value={form.property_type}
                  onChange={(event) =>
                    updateField('property_type', event.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-4 outline-none transition focus:border-neutral-950"
                >
                  <option value="">Select property type</option>

                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="preferred_date"
                  className="mb-2 block text-sm font-medium"
                >
                  Preferred date
                  <span className="ml-2 font-normal text-neutral-400">
                    Optional
                  </span>
                </label>

                <input
                  id="preferred_date"
                  type="date"
                  value={form.preferred_date}
                  onChange={(event) =>
                    updateField('preferred_date', event.target.value)
                  }
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-4 outline-none transition focus:border-neutral-950"
                />
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Step 02
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  What can we help with?
                </h2>

                <p className="mt-3 text-neutral-600">
                  Select the service you&apos;re interested in.
                </p>
              </div>

              <div className="grid gap-4">
                {SERVICES.map((service) => {
                  const selected = form.service_needed === service.name;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        updateField('service_needed', service.name);

                        if (service.name !== 'Smart Permanent Lighting') {
                          updateField('lighting_kit', '');
                        }
                      }}
                      className={`w-full rounded-2xl border p-6 text-left transition ${
                        selected
                          ? 'border-neutral-950 bg-neutral-950 text-white'
                          : 'border-neutral-200 bg-white hover:border-neutral-400'
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                            selected
                              ? 'border-white/30 bg-white/10'
                              : 'border-neutral-200 bg-neutral-50'
                          }`}
                        >
                          {service.index}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold">
                            {service.name}
                          </h3>

                          <p
                            className={`mt-2 text-sm leading-6 ${
                              selected
                                ? 'text-neutral-300'
                                : 'text-neutral-600'
                            }`}
                          >
                            {service.short}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {isLighting && (
                <div className="border-t border-neutral-200 pt-8">
                  <label className="mb-4 block text-sm font-medium">
                    Lighting installation type
                  </label>

                  <div className="grid gap-3">
                    {LIGHTING_OPTIONS.map((option) => {
                      const selected = form.lighting_kit === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            updateField('lighting_kit', option.value)
                          }
                          className={`rounded-xl border p-5 text-left transition ${
                            selected
                              ? 'border-neutral-950 bg-neutral-50'
                              : 'border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`mt-1 h-4 w-4 rounded-full border ${
                                selected
                                  ? 'border-neutral-950 bg-neutral-950'
                                  : 'border-neutral-300'
                              }`}
                            />

                            <div>
                              <p className="font-semibold">
                                {option.title}
                              </p>

                              <p className="mt-1 text-sm leading-6 text-neutral-600">
                                {option.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Step 03
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  Final details.
                </h2>

                <p className="mt-3 text-neutral-600">
                  Give us enough information to reach you and understand the
                  project.
                </p>
              </div>

              <div>
                <label
                  htmlFor="project_details"
                  className="mb-2 block text-sm font-medium"
                >
                  Tell us about the project
                  <span className="ml-2 font-normal text-neutral-400">
                    Optional
                  </span>
                </label>

                <textarea
                  id="project_details"
                  value={form.project_details}
                  onChange={(event) =>
                    updateField('project_details', event.target.value)
                  }
                  rows={5}
                  placeholder="Anything we should know about the property, current condition, goals, access, or specific areas you want addressed?"
                  className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-4 outline-none transition focus:border-neutral-950"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      updateField('name', event.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-4 outline-none transition focus:border-neutral-950"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField('phone', event.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-4 outline-none transition focus:border-neutral-950"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    updateField('email', event.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-4 outline-none transition focus:border-neutral-950"
                />
              </div>

              {state.errors && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  Something went wrong while submitting the form. Please try
                  again or contact us directly.
                </div>
              )}
            </div>
          )}

          {/* Hidden fields for Formspree */}
          <input type="hidden" name="address" value={form.address} />
          <input
            type="hidden"
            name="property_type"
            value={form.property_type}
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
            name="lighting_kit"
            value={isLighting ? form.lighting_kit : ''}
          />
          <input
            type="hidden"
            name="project_details"
            value={form.project_details}
          />
          <input type="hidden" name="name" value={form.name} />
          <input type="hidden" name="email" value={form.email} />
          <input type="hidden" name="phone" value={form.phone} />

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
            {step > 0 ? (
              <button
                type="button"
                onClick={previousStep}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-neutral-950"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!canNext()}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canNext() || state.submitting}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {state.submitting ? 'Sending...' : 'Request Free Quote'}
                {!state.submitting && <ArrowRight size={16} />}
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Contact footer */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Prefer to talk?
              </p>

              <p className="mt-2 text-lg text-neutral-700">
                Reach HALVOR directly.
              </p>
            </div>

            <a
              href={COMPANY.phoneHref}
              className="text-xl font-semibold tracking-tight hover:underline"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
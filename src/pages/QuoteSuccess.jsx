import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/site';
import Reveal from '@/components/Reveal';

export default function QuoteSuccess() {
  return (
    <div className="pt-32 pb-20 sm:pb-28">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
        <Reveal>
          <div className="flex justify-center">
            <CheckCircle2 className="w-16 h-16 text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold text-balance">Request received.</h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Thank you. Your quote request has been submitted. A HALVOR specialist will review your details and respond within one business day with a clear, no-pressure estimate.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="rounded-full"><Link to="/">Back to home <ArrowRight className="w-4 h-4 ml-1" /></Link></Button>
            <Button asChild variant="outline" className="rounded-full"><a href={COMPANY.phoneHref}><Phone className="w-4 h-4 mr-1" /> Call {COMPANY.phone}</a></Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
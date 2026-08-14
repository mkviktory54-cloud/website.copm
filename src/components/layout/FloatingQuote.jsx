import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FloatingQuote() {
  return (
    <Link
      to="/contact"
      className="hidden md:flex fixed bottom-7 right-7 z-40 items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
    >
      Get Quote <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
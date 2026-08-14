import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className="lumen-glow group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/5"
    >
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono text-muted-foreground">{service.index}</span>
        <span className="micro-rule flex-1" />
      </div>
      <h3 className="mt-4 text-2xl font-semibold">{service.name}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.short}</p>
      <Link
        to={`/services#${service.id}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2"
      >
        Learn more <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
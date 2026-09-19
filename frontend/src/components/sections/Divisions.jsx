import { useSectionAnimation } from '../../hooks/useScrollAnimation';
import { Code2, Hammer, ArrowRight } from 'lucide-react';

/* Two overall divisions on the main page. Clicking a card jumps to that
   division's detailed section further down. Mirrors nexolash.com's
   "two divisions, one standard" framing. */
const divisions = [
  {
    index: '01',
    icon: Code2,
    title: 'Software Engineering',
    line: 'Custom applications · AI & automation · data platforms',
    services: ['Web applications', 'AI & automation', 'Data & integrations'],
    href: '#software',
    cta: 'View software',
    art: 'from-[#0B3E9E] via-[#1D5FD6] to-[#2979FF]',
  },
  {
    index: '02',
    icon: Hammer,
    title: 'Interiors & Construction',
    line: 'False ceiling · wooden works · granite · turnkey fit-out',
    services: ['False ceiling', 'Wooden works', 'Granite & stone', 'Turnkey fit-outs'],
    href: '#interiors',
    cta: 'Explore interiors',
    art: 'from-[#123A8F] via-[#2467E8] to-[#00B8D9]',
  },
];

export default function Divisions() {
  const sectionRef = useSectionAnimation();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="divisions"
      ref={sectionRef}
      data-testid="divisions-section"
      className="relative py-24 sm:py-32 section-glow-top"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-fade-up max-w-2xl">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100">
            What we do
          </h2>
          <p className="mt-4 font-body text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We build the software businesses run on, and finish the spaces they run it in. Pick a division to see the detail.
          </p>
        </div>

        {/* Two big division cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6" data-testid="divisions-grid">
          {divisions.map((d, i) => {
            const Icon = d.icon;
            return (
              <button
                key={d.title}
                type="button"
                onClick={() => scrollTo(d.href)}
                data-testid={`division-card-${d.index}`}
                className={`scroll-fade-up delay-${(i + 1) * 100} group text-left rounded-3xl overflow-hidden border border-zinc-900/10 dark:border-white/10 bg-white dark:bg-[#10131C] hover:border-nxAccent/50 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(41,121,255,0.20)] transition-all duration-300`}
              >
                {/* Visual band */}
                <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${d.art} overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <span className="absolute left-7 top-6 font-heading font-bold text-6xl text-white/25 leading-none">
                    {d.index}
                  </span>
                  <Icon
                    className="absolute -right-6 -bottom-8 w-40 h-40 text-white/20 rotate-[-12deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500"
                    strokeWidth={1.1}
                  />
                  <div className="absolute left-7 bottom-6 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-zinc-100 mb-2">
                    {d.title}
                  </h3>
                  <p className="font-body text-sm text-zinc-500 dark:text-zinc-400 mb-5">{d.line}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {d.services.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg border border-zinc-900/10 dark:border-white/10 font-body text-xs text-zinc-600 dark:text-zinc-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-nxAccent">
                    {d.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

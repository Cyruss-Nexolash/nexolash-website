import { useState, useEffect, useRef } from 'react';
import { useSectionAnimation } from '../../hooks/useScrollAnimation';
import { Users, ClipboardCheck, CalendarCheck, KeyRound, Workflow, ShieldCheck } from 'lucide-react';

const reasons = [
  { icon: Users, title: 'Our Own Teams', desc: 'Engineers, carpenters, ceiling crews and stone fabricators — all our own people, never subcontracted out.', art: 'from-[#0B3E9E] to-[#1D5FD6]' },
  { icon: ClipboardCheck, title: 'Fixed, Honest Scope', desc: 'Scope and pricing agreed up front, so there are no surprise costs midway through the job.', art: 'from-[#1D5FD6] to-[#2979FF]' },
  { icon: CalendarCheck, title: 'Dates That Hold', desc: 'Timelines we commit to and meet — whether it is a software deployment or a fit-out handover.', art: 'from-[#2979FF] to-[#00B8D9]' },
  { icon: KeyRound, title: 'You Own Everything', desc: 'The code, the systems, the finished space — it is all yours, documented and fully handed over.', art: 'from-[#123A8F] to-[#38BDF8]' },
  { icon: Workflow, title: 'End To End', desc: 'One team carries the whole project, from the first requirement to the final handover.', art: 'from-[#00A3D9] to-[#2979FF]' },
  { icon: ShieldCheck, title: 'Built To Last', desc: 'Software and spaces engineered to hold up — maintainable, durable, and future ready.', art: 'from-[#2467E8] to-[#00B8D9]' },
];

function CardContent({ icon: Icon, title, desc }) {
  return (
    <>
      <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="font-heading font-bold text-xl text-white mb-3">{title}</h3>
      <p className="font-body text-sm text-white/85 leading-relaxed">{desc}</p>
    </>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useSectionAnimation();
  const deckRef = useRef(null);
  const [shown, setShown] = useState(0);

  /* Deal the cards one by one once the deck scrolls into view. */
  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(reasons.length);
      return;
    }
    let interval;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          interval = setInterval(() => {
            setShown((s) => {
              if (s + 1 >= reasons.length) clearInterval(interval);
              return s + 1;
            });
          }, 380);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      data-testid="why-choose-section"
      className="relative py-24 sm:py-32 section-glow-top"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="scroll-fade-up text-center mb-4 max-w-2xl mx-auto">
          <h2
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100"
            data-testid="why-choose-title"
          >
            Why Clients Work With Us
          </h2>
        </div>

        {/* Desktop: ordered spread — 6 overlapping cards left to right, each showing
            a strip. Hovering a card keeps it in place and pushes only the cards
            AFTER it to the right, so the hovered one is fully revealed. */}
        <div
          ref={deckRef}
          className="hidden lg:block relative h-[290px] w-[940px] mx-auto mt-16"
          data-testid="why-deck"
        >
          {reasons.map((r, i) => {
            const settled = i < shown;
            return (
              <div
                key={r.title}
                className={`spread-card absolute top-0 w-[380px] h-[290px] rounded-2xl p-8 bg-gradient-to-br ${r.art} ${
                  settled ? 'spread-settled' : ''
                }`}
                style={{ left: `${i * 112}px`, zIndex: 10 + i }}
                data-testid={`why-deck-card-${i}`}
              >
                <CardContent icon={r.icon} title={r.title} desc={r.desc} />
              </div>
            );
          })}
        </div>
        <p className="hidden lg:block text-center mt-6 font-body text-xs text-zinc-500 dark:text-zinc-400">
          Hover a card to expand it
        </p>

        {/* Mobile / tablet: simple colored cards */}
        <div className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5" data-testid="why-grid-mobile">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`scroll-fade-up delay-${Math.min(i + 1, 7) * 100} rounded-2xl p-7 bg-gradient-to-br ${r.art}`}
              data-testid={`why-card-${i}`}
            >
              <CardContent icon={r.icon} title={r.title} desc={r.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

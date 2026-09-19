import { useSectionAnimation } from '../../hooks/useScrollAnimation';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

/* Full-bleed cinematic demo video for a project's right column */
function ProjectVideo({ src, testid }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-[360px] sm:h-[480px] lg:h-[560px] object-cover rounded-2xl shadow-xl"
      data-testid={testid}
    />
  );
}

/* ============ Section ============ */

const projects = [
  {
    id: 'receptionist',
    title: 'AI Receptionist',
    headline: 'Your front desk, awake at 2 AM.',
    para: "An AI answers every call, books the appointment straight into your calendar, and a matching chat agent handles the customers who'd rather type than talk — trained only on your own business, so it never invents an answer.",
    features: [
      {
        icon: Phone,
        title: 'Voice Receptionist',
        desc: 'Answers calls, books and reschedules appointments, quotes prices, sends a WhatsApp confirmation. For parlours, clinics, salons, gyms.',
      },
      {
        icon: MessageSquare,
        title: 'Front Desk Chat',
        desc: "Answers only from your real product docs and FAQs — grounded, not generic — and hands off to a human the moment it's unsure.",
      },
    ],
    cta: 'Get a Live Demo Call',
    video: '/Create_a_second_ultra_photo.mp4',
  },
];

export default function Projects() {
  const sectionRef = useSectionAnimation();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      data-testid="projects-section"
      className="relative py-24 sm:py-32 section-glow-top"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="scroll-fade-up font-heading font-bold text-4xl sm:text-5xl tracking-wide uppercase text-nxAccent"
          data-testid="projects-heading"
        >
          Key Project
        </h2>

        <div className="mt-16 space-y-24 lg:space-y-32">
          {projects.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              data-testid={`project-${p.id}`}
            >
              {/* Content — sweeps in from the left through a blur */}
              <div className="reveal-slide-left">
                {p.index && (
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-heading font-bold text-6xl leading-none index-outline">{p.index}</span>
                    <span className="font-body text-sm text-nxAccent font-medium tracking-widest uppercase">
                      {p.eyebrow}
                    </span>
                  </div>
                )}
                <p className="font-heading font-bold text-base text-zinc-900 dark:text-zinc-100 tracking-wide uppercase">
                  {p.title}
                </p>
                <h3 className="mt-2 font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                  {p.headline}
                </h3>
                <p className="mt-6 font-body text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                  {p.para}
                </p>

                {p.checks && (
                  <ul className="mt-8 space-y-3">
                    {p.checks.map((c) => (
                      <li key={c} className="font-body text-sm text-zinc-600 dark:text-zinc-400">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}

                {p.features && (
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {p.features.map(({ icon: Icon, title, desc }) => (
                      <div
                        key={title}
                        className="relative overflow-hidden rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-gradient-to-br from-nxAccent/[0.08] via-transparent to-transparent p-6 hover:border-nxAccent/50 hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="w-11 h-11 rounded-xl bg-nxAccent flex items-center justify-center mb-4 shadow-[0_6px_16px_rgba(41,121,255,0.35)]">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-heading font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">{title}</h4>
                        <p className="font-body text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {p.chips && (
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {p.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-3.5 py-2 rounded-lg border border-zinc-900/10 dark:border-white/10 font-body text-xs text-zinc-600 dark:text-zinc-400"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                {p.cta && (
                  <button
                    type="button"
                    onClick={() => scrollTo('#contact')}
                    data-testid={`project-cta-${p.id}`}
                    className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-nxAccent text-white font-body font-medium text-sm rounded-lg btn-glow hover:bg-[#1565C0] transition-colors duration-300"
                  >
                    {p.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Visual — swings in from the right (3D tilt) */}
              <div className="reveal-tilt-right">
                <ProjectVideo src={p.video} testid={`${p.id}-video`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

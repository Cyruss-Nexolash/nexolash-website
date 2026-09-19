import { useSectionAnimation } from '../../hooks/useScrollAnimation';
import { Search, PenTool, Hammer, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  { icon: Search, label: 'Discover', desc: 'We get specific about what you\'re building — the requirement, the site or system, the budget.' },
  { icon: PenTool, label: 'Propose', desc: 'A clear scope, honest fixed pricing, and a timeline you can hold us to.' },
  { icon: Hammer, label: 'Build', desc: 'Steady, visible progress delivered by our own engineers and craftspeople.' },
  { icon: Rocket, label: 'Hand Over', desc: 'Tested, finished and handed over — ready to run or ready to move in.' },
  { icon: TrendingUp, label: 'Support', desc: 'We stay on after handover with maintenance, iteration, and improvements.' },
];

export default function Process() {
  const sectionRef = useSectionAnimation();

  return (
    <section
      id="process"
      ref={sectionRef}
      data-testid="process-section"
      className="relative py-24 sm:py-32 section-glow-top"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="scroll-fade-up text-center mb-16">
          <h2
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100"
            data-testid="process-title"
          >
            How We Work
          </h2>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block" data-testid="process-timeline">
          <div className="relative">
            <div className="process-line" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className={`scroll-fade-up delay-${(i + 1) * 100} flex flex-col items-center text-center`}
                    data-testid={`process-step-${i}`}
                  >
                    <div className="process-node mb-5">
                      <Icon className="w-5 h-5 text-nxAccent" />
                    </div>
                    <div className={`reveal-blur-up delay-${Math.min(i + 2, 7) * 100}`}>
                      <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-zinc-100 mb-2">
                        {step.label}
                      </h3>
                      <p className="font-body text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[180px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-6" data-testid="process-timeline-mobile">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className={`scroll-fade-up delay-${(i + 1) * 100} flex items-start gap-4`}
                data-testid={`process-step-mobile-${i}`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-nxAccent/30 bg-nxCard dark:bg-[#10131C] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-nxAccent" />
                </div>
                <div>
                  <div className={`reveal-blur-up delay-${Math.min(i + 2, 7) * 100}`}>
                    <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                      {step.label}
                    </h3>
                    <p className="font-body text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

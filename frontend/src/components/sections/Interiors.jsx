import { useSectionAnimation } from '../../hooks/useScrollAnimation';
import { Layers, DoorOpen, Gem, Building2, ArrowRight } from 'lucide-react';

/* Second division — real interiors & construction work from nexolash.com.
   Cards mirror the Solutions layout so both divisions read as one brand.
   Drop a real photo at public/images/interiors/<slug>.jpg to replace the art. */
const services = [
  {
    slug: 'false-ceiling',
    icon: Layers,
    title: 'False Ceiling',
    description: 'Gypsum, POP and cove lighting — clean lines and concealed detailing for homes and offices.',
    art: 'from-[#1D5FD6] via-[#2979FF] to-[#00B8D9]',
  },
  {
    slug: 'wooden-works',
    icon: DoorOpen,
    title: 'Wooden Works',
    description: 'Doors, windows and panelling, built and finished by our own carpenters — not subcontracted out.',
    art: 'from-[#0B3E9E] via-[#1D5FD6] to-[#2979FF]',
  },
  {
    slug: 'granite-stone',
    icon: Gem,
    title: 'Granite, Marble & Stone',
    description: 'Cutting, polishing and fabrication for kitchens, floors and cladding, done by our own stone crews.',
    art: 'from-[#2979FF] via-[#00A3D9] to-[#00B8D9]',
  },
  {
    slug: 'turnkey-fitout',
    icon: Building2,
    title: 'Turnkey Fit-Outs',
    description: 'Full residential and commercial fit-outs — scoped, built and handed over ready to use.',
    art: 'from-[#123A8F] via-[#2467E8] to-[#38BDF8]',
  },
];

export default function Interiors() {
  const sectionRef = useSectionAnimation();

  return (
    <section
      id="interiors"
      ref={sectionRef}
      data-testid="interiors-section"
      className="relative py-24 sm:py-32 section-glow-top"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-fade-up max-w-2xl">
          <h2
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100"
            data-testid="interiors-title"
          >
            Interiors &amp; Construction
          </h2>
          <p className="mt-4 font-body text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Finishing work delivered by our own carpenters, ceiling crews and stone fabricators in Coimbatore and across Tamil Nadu.
          </p>
        </div>

        {/* Image-topped cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="interiors-grid">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.slug}
                className={`scroll-fade-up delay-${(i + 1) * 100} group rounded-2xl overflow-hidden border border-zinc-900/10 dark:border-white/10 bg-white dark:bg-[#10131C] hover:border-nxAccent/50 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(41,121,255,0.18)] transition-all duration-300`}
                data-testid={`interiors-card-${svc.slug}`}
              >
                {/* Visual third */}
                <div className={`relative h-40 bg-gradient-to-br ${svc.art} overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '14px 14px',
                    }}
                  />
                  <Icon
                    className="absolute -right-5 -bottom-6 w-32 h-32 text-white/20 rotate-[-12deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500"
                    strokeWidth={1.2}
                  />
                  <div className="absolute left-5 bottom-4 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <img
                    src={`/images/interiors/${svc.slug}.jpg`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Content */}
                <div className={`p-6 reveal-blur-up delay-${Math.min(i + 2, 7) * 100}`}>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                    {svc.title}
                  </h3>
                  <p className="font-body text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {svc.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-xs text-nxAccent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Get a quote <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

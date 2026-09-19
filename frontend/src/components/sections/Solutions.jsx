import { useSectionAnimation } from '../../hooks/useScrollAnimation';
import { Bot, Plug, Cloud, MessageSquare, Code2, Boxes, ArrowRight } from 'lucide-react';

/* Cards are one-third visual, two-thirds content. Drop a real image at
   public/images/solutions/<slug>.jpg and it replaces the gradient art. */
const solutions = [
  {
    slug: 'erp-supply-chain',
    icon: Boxes,
    title: 'ERP & Supply Chain',
    description: 'End-to-end order and inventory management — real-time stock, procurement, and fulfilment unified in one system that scales with your operations.',
    art: 'from-[#0B3E9E] via-[#1D5FD6] to-[#2979FF]',
  },
  {
    slug: 'ai-agents',
    icon: Bot,
    title: 'AI Agents',
    description: 'Autonomous agents that reason, plan, and execute complex multi-step workflows across enterprise environments.',
    art: 'from-[#1D5FD6] via-[#2979FF] to-[#00B8D9]',
  },
  {
    slug: 'ai-integration',
    icon: Plug,
    title: 'AI Integration',
    description: 'Seamless integration of foundation models into existing systems with custom fine-tuning and deployment pipelines.',
    art: 'from-[#0B3E9E] via-[#1D5FD6] to-[#2979FF]',
  },
  {
    slug: 'web-development',
    icon: Code2,
    title: 'Web Development',
    description: 'High-performance websites and web apps — from striking marketing sites to full-stack platforms — engineered to load fast, rank well, and convert visitors into customers.',
    art: 'from-[#2979FF] via-[#00A3D9] to-[#00B8D9]',
  },
  {
    slug: 'cloud-deployment',
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Cloud-native infrastructure with auto-scaling, edge computing, and cost-optimized deployment strategies.',
    art: 'from-[#123A8F] via-[#2467E8] to-[#38BDF8]',
  },
  {
    slug: 'chatbots-rag',
    icon: MessageSquare,
    title: 'Chatbots & RAG Systems',
    description: 'Knowledge-grounded conversational AI with retrieval-augmented generation for accurate, context-aware responses.',
    art: 'from-[#00B8D9] via-[#2979FF] to-[#1D5FD6]',
  },
];

export default function Solutions() {
  const sectionRef = useSectionAnimation();

  return (
    <section
      id="software"
      ref={sectionRef}
      data-testid="solutions-section"
      className="relative py-24 sm:py-32 section-glow-top"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-fade-up max-w-2xl">
          <h2
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100"
            data-testid="solutions-title"
          >
            Software Engineering
          </h2>
          <p className="mt-4 font-body text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Custom applications, AI &amp; automation, and data platforms — designed, built and deployed by our own engineers.
          </p>
        </div>

        {/* Image-topped cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="solutions-grid">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.slug}
                className={`scroll-fade-up delay-${(i + 1) * 100} group rounded-2xl overflow-hidden border border-zinc-900/10 dark:border-white/10 bg-white dark:bg-[#10131C] hover:border-nxAccent/50 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(41,121,255,0.18)] transition-all duration-300`}
                data-testid={`solution-card-${sol.slug}`}
              >
                {/* Visual third */}
                <div className={`relative h-40 bg-gradient-to-br ${sol.art} overflow-hidden`}>
                  {/* dotted texture */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '14px 14px',
                    }}
                  />
                  {/* oversized ghost icon */}
                  <Icon
                    className="absolute -right-5 -bottom-6 w-32 h-32 text-white/20 rotate-[-12deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500"
                    strokeWidth={1.2}
                  />
                  {/* icon chip */}
                  <div className="absolute left-5 bottom-4 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {/* optional real image overrides the art */}
                  <img
                    src={`/images/solutions/${sol.slug}.jpg`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Content */}
                <div className={`p-6 reveal-blur-up delay-${Math.min(i + 2, 7) * 100}`}>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                    {sol.title}
                  </h3>
                  <p className="font-body text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {sol.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-xs text-nxAccent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-3 h-3" />
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

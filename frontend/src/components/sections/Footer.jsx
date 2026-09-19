const footerColumns = [
  {
    title: 'Software',
    links: [
      { label: 'Web applications', href: '#software' },
      { label: 'AI & automation', href: '#software' },
      { label: 'Data & integrations', href: '#software' },
      { label: 'Technology', href: '#software' },
    ],
  },
  {
    title: 'Interiors',
    links: [
      { label: 'False ceiling', href: '#interiors' },
      { label: 'Wooden works', href: '#interiors' },
      { label: 'Granite & stone', href: '#interiors' },
      { label: 'Turnkey fit-outs', href: '#interiors' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'hello@nexolash.com', href: 'mailto:hello@nexolash.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer-section"
      className="relative pt-24 pb-8 border-t border-zinc-900/[0.06] dark:border-white/[0.08] bg-nxBgAlt dark:bg-[#0D1017]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-zinc-900/[0.06] dark:border-white/[0.08]">
          {/* Logo Column */}
          <div className="lg:col-span-4">
            <a href="#hero" className="inline-flex items-center" data-testid="footer-logo">
              <img src="/nexolash-logo-real-light.png" alt="Nexolash" className="h-14 w-auto dark:hidden" /><img src="/nexolash-logo-real-dark.png" alt="" aria-hidden="true" className="h-14 w-auto hidden dark:block" />
            </a>
            <p className="mt-4 font-body text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              Software engineering and interior construction. From systems to intelligence.
            </p>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2 lg:col-start-auto">
              <h4 className="font-heading font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-5 tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed brand wordmark */}
      <div className="mt-16 w-full overflow-hidden" data-testid="footer-wordmark">
        <h2 className="gradient-text-logo font-heading font-bold leading-none text-center tracking-tight select-none whitespace-nowrap text-[16vw]">
          Nexolash
        </h2>
      </div>

      {/* Legal strip — sits beneath the wordmark */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-center">
          <p className="font-body text-xs text-zinc-600 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Nexolash. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#software" className="font-body text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Software Engineering
            </a>
            <a href="#interiors" className="font-body text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Interiors &amp; Construction
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

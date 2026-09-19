import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Software', href: '#software' },
  { label: 'Interiors', href: '#interiors' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navbar"
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0A0C12]/85 backdrop-blur-xl border-b border-zinc-900/[0.06] dark:border-white/[0.08]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — official wave lockup, top-left */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            data-testid="navbar-logo"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img src="/nexolash-logo-real-light.png" alt="Nexolash" className="h-12 w-auto dark:hidden" />
            <img src="/nexolash-logo-real-dark.png" alt="" aria-hidden="true" className="h-12 w-auto hidden dark:block" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8" data-testid="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className="font-body text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-nxAccent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Theme toggle + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        data-testid="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-white/95 dark:bg-[#0A0C12]/95 backdrop-blur-xl border-b border-zinc-900/[0.06] dark:border-white/[0.08]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              className="block py-3 font-body text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 border-b border-zinc-900/[0.06] dark:border-white/[0.08] last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

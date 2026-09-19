import { useState, useEffect } from 'react';

const PRE = 'From systems to ';
const ACCENT = 'intelligence';
const END = '.';
const FULL = PRE + ACCENT + END;
const TYPE_MS = 55;

export default function Hero() {
  const [chars, setChars] = useState(0);
  const [logoDropped, setLogoDropped] = useState(false);
  const typingDone = chars >= FULL.length;

  // Respect reduced-motion: skip straight to the final state.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setChars(FULL.length);
      setLogoDropped(true);
    }
  }, []);

  // Type the headline letter by letter, then drop the logo in from the top.
  useEffect(() => {
    if (typingDone) {
      const t = setTimeout(() => setLogoDropped(true), 300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setChars((c) => c + 1), chars === 0 ? 500 : TYPE_MS);
    return () => clearTimeout(t);
  }, [chars, typingDone]);

  const typedPre = FULL.slice(0, Math.min(chars, PRE.length));
  const typedAccent =
    chars > PRE.length ? FULL.slice(PRE.length, Math.min(chars, PRE.length + ACCENT.length)) : '';
  const typedEnd = chars > PRE.length + ACCENT.length ? END : '';

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid + centered blue glow */}
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo drops in from the top once the headline finishes typing */}
        <div
          data-testid="hero-logo-wrap"
          className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            logoDropped ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
          }`}
        >
          <img
            src="/nexolash-logo-real-light.png"
            alt="Nexolash"
            data-testid="hero-logo"
            className="mx-auto h-28 sm:h-36 w-auto dark:hidden"
          />
          <img
            src="/nexolash-logo-real-dark.png"
            alt=""
            aria-hidden="true"
            className="mx-auto h-28 sm:h-36 w-auto hidden dark:block"
          />
        </div>

        {/* Headline types in left to right */}
        <h1
          className="mt-10 font-heading font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.06] text-zinc-900 dark:text-zinc-100 flex justify-center"
          data-testid="hero-headline"
          aria-label={FULL}
        >
          <span className="text-left" style={{ position: 'relative', display: 'inline-block' }} aria-hidden="true">
            {/* Invisible ghost reserves the final layout so nothing shifts while typing.
                Inline styles so a stale CSS build can never make the ghost visible. */}
            <span style={{ visibility: 'hidden' }}>
              {PRE}
              <span>{ACCENT}</span>
              {END}
            </span>
            <span style={{ position: 'absolute', inset: 0 }}>
              {typedPre}
              <span className="gradient-text-blue">{typedAccent}</span>
              {typedEnd}
              {!logoDropped && <span className="type-caret" />}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}

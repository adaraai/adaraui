/** Subtle dot-grid motif — sits behind header, top-right hero */
export function HeroTechPattern() {
  return (
    <div aria-hidden className="hero-tech-pattern pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-tech-pattern-svg"
        preserveAspectRatio="xMaxYMin meet"
      >
        <defs>
          <pattern id="hero-dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" className="hero-tech-dot" />
          </pattern>
          <pattern id="hero-line-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0H0V80" className="hero-tech-stroke" strokeWidth="0.65" />
          </pattern>
        </defs>

        <rect width="480" height="480" fill="url(#hero-dot-grid)" />
        <rect width="480" height="480" fill="url(#hero-line-grid)" opacity="0.72" />

        <path
          d="M360 72 H432 V144 H288 V216"
          className="hero-tech-trace"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M432 240 V312 H360"
          className="hero-tech-trace-dim"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="432" cy="72" r="3" className="hero-tech-node-core" />
        <circle cx="432" cy="144" r="2.5" className="hero-tech-node-core" />
        <circle cx="288" cy="216" r="2.5" className="hero-tech-node-core" />
      </svg>
    </div>
  );
}

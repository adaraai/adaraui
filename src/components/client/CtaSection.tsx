import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const stats = [
  { value: "2,000+", label: "African languages" },
  { value: "54", label: "Countries in scope" },
];

export function CtaSection() {
  return (
    <section id="cta" className="section-auto py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6">
        <div className="relative grid overflow-hidden rounded-[1.75rem] border border-[#1a2347] bg-[#0a0f2e] sm:rounded-[2rem] md:grid-cols-2 dark:border-border">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0c1230] via-[#0f1638] to-[#0a0f2e]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(ellipse_at_20%_0%,hsl(265_60%_55%/0.28),transparent_50%),radial-gradient(ellipse_at_80%_100%,hsl(195_90%_50%/0.15),transparent_45%)] dark:opacity-40"
          />
          <div
            aria-hidden
            className="cta-dot-grid pointer-events-none absolute inset-0"
          />

          <div className="relative z-10 flex flex-col justify-center p-6 text-white sm:p-8 md:p-14">
            <h2 className="text-balance text-[clamp(1.875rem,3.5vw,3rem)] font-semibold leading-tight tracking-tight text-white">
              Stop building AI that doesn't understand Africa
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              Start with pilot API access and documentation. Scale into corpus partnerships,
              fine tuned models, and applied products when you're ready.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/signup"
                className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-full bg-white px-7 text-base font-medium text-neutral-900 transition-colors hover:bg-white/90 sm:w-auto"
              >
                Partner with us
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/30 px-7 text-base font-medium text-white transition-colors hover:border-white/45 hover:bg-white/10 sm:w-auto"
              >
                View documentation
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-baseline gap-6 sm:mt-10 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-base text-white/75">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[240px] w-full sm:min-h-[280px] md:min-h-full">
            <img
              src="/assets/adara-cta.png"
              alt="ADARA context API on mobile"
              className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

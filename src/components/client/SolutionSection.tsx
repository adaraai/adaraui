import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "Close the blind spot",
    detail: "Western trained models miss African languages, idioms, and context.",
  },
  {
    title: "Build the foundation",
    detail: "Corpus, models, and a distributed network of local contributors.",
  },
  {
    title: "Ship to everyone",
    detail: "APIs and products any team can plug into.",
  },
];

const audiences = [
  {
    segment: "Global tech",
    model: "B2B",
    description: "Localize AI for African markets.",
  },
  {
    segment: "African startups",
    model: "API",
    description: "Language and context infrastructure.",
  },
  {
    segment: "Gov & NGOs",
    model: "B2G",
    description: "Public services in local languages.",
  },
];

const pilotCountries = [
  { code: "GH", name: "Ghana" },
  { code: "NG", name: "Nigeria" },
  { code: "KE", name: "Kenya" },
  { code: "ZA", name: "South Africa" },
  { code: "ET", name: "Ethiopia" },
  { code: "SN", name: "Senegal" },
];

function FlagMarquee() {
  return (
    <div className="relative w-full max-w-[200px] shrink-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee-flags gap-2">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-2" aria-hidden={copy === 1 ? true : undefined}>
            {pilotCountries.map(({ code, name }) => (
              <div
                key={`${code}-${copy}`}
                title={name}
                className="flex shrink-0 flex-col items-center gap-1.5"
              >
                <span className="inline-flex h-7 w-10 overflow-hidden rounded-md border border-border sm:h-8 sm:w-11">
                  <img
                    src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
                    alt={`${name} flag`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={44}
                    height={32}
                  />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {code}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SolutionSection() {
  return (
    <section id="solutions" className="section-auto bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.25rem,4.8vw,3.75rem)] font-normal leading-[1.06] tracking-[-0.035em] text-foreground">
            AI that understands Africans
            <br />
            <span className="text-muted-foreground">on their terms.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We make African language, culture, and daily life legible to any model, product, or institution.
          </p>
        </div>

        {/* How we build: horizontal steps */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-7"
            >
              <h3 className="text-xl font-normal tracking-[-0.02em] text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/about"
          className="mt-6 inline-flex items-center gap-1.5 text-base text-foreground underline-offset-4 transition-colors hover:underline"
        >
          Learn more about our approach
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        {/* Bento: audience + trust */}
        <div className="mt-16 overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 md:divide-x md:divide-border/50">
            {audiences.map((row) => (
              <div key={row.segment} className="border-b border-border/50 px-5 py-5 last:border-b-0 sm:px-8 sm:py-8 md:border-b-0">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-normal text-foreground">{row.segment}</h3>
                  <span className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {row.model}
                  </span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{row.description}</p>
              </div>
            ))}
          </div>

          <div className="grid border-t border-border/50 md:grid-cols-[1fr_1.4fr] md:divide-x md:divide-border/50">
            <div className="border-b border-border/50 px-5 py-6 sm:px-8 sm:py-8 md:border-b-0">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Governance
              </p>
              <p className="mt-4 text-3xl font-normal tracking-[-0.02em] text-foreground">
                Consent first
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Community benefit, local residency, ethical by design.
              </p>
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Coverage
                  </p>
                  <p className="mt-3 text-3xl font-normal tracking-[-0.03em] text-foreground sm:text-5xl">
                    54
                  </p>
                  <p className="mt-1 text-base text-muted-foreground">Countries in scope</p>
                </div>
                <FlagMarquee />
              </div>
              <p className="mt-6 text-base text-muted-foreground">
                Pilot markets across West, East, and Southern Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BentoCard } from "@/components/client/BentoCard";

const audiences = [
  {
    segment: "Global tech",
    model: "B2B",
    href: "/enterprise",
    description: "Localize AI for African markets.",
    note: "Context layer for global products entering West, East, and Southern Africa.",
  },
  {
    segment: "African startups",
    model: "API",
    href: "/api",
    description: "Language and context infrastructure.",
    note: "Plug African understanding into any stack without building a corpus from scratch.",
  },
  {
    segment: "Gov & NGOs",
    model: "B2G",
    href: "/government",
    description: "Public services in local languages.",
    note: "Health, agriculture, and civic tools that speak the way people actually speak.",
  },
];

const governanceItems = [
  { label: "Community benefit sharing", tag: "trust" },
  { label: "Local data residency", tag: "sovereignty" },
  { label: "Ethical by design", tag: "review" },
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
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-card to-transparent" />
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

export function ExploreBentoSection() {
  return (
    <section
      aria-label="Who ADARA serves"
      className="bg-background px-4 py-4 sm:px-6 sm:py-5 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:h-[540px] md:grid-cols-6 md:grid-rows-2">
        {audiences.map((row) => (
          <BentoCard
            key={row.segment}
            label={row.segment}
            href={row.href}
            className="h-full md:col-span-2"
          >
            <div className="flex h-full min-h-0 flex-col p-5 sm:p-6">
              <div className="mb-4 flex shrink-0 items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {row.model}
                </span>
                <span className="h-1 w-1 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex min-h-0 flex-1 flex-col justify-center gap-3">
                <div className="rounded-xl border border-border bg-muted/40 px-4 py-3">
                  <p className="text-sm leading-relaxed text-foreground">{row.description}</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/25 px-4 py-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">{row.note}</p>
                </div>
              </div>
            </div>
          </BentoCard>
        ))}

        <BentoCard label="Governance" href="/about" className="h-full md:col-span-3">
          <div className="flex h-full min-h-0 flex-col p-5 sm:p-6">
            <div className="mb-4 flex shrink-0 items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Consent first
              </span>
              <span className="h-1 w-1 rounded-full bg-emerald-500/80" />
            </div>
            <div className="min-h-0 flex-1 space-y-2">
              {governanceItems.map((item) => (
                <div
                  key={item.label}
                  className="flex h-10 items-center justify-between gap-3 rounded-lg border border-border bg-muted/30 px-3 font-mono text-[11px] sm:text-xs"
                >
                  <span className="truncate text-foreground/80">{item.label}</span>
                  <span className="shrink-0 text-muted-foreground">{item.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        <BentoCard label="Coverage" href="/customers" className="h-full md:col-span-3">
          <div className="flex h-full min-h-0 flex-col p-5 sm:p-6">
            <p className="shrink-0 whitespace-nowrap font-mono text-[10px] uppercase leading-none tracking-[0.08em] text-muted-foreground sm:text-[11px] sm:tracking-[0.12em]">
              Countries in scope
            </p>
            <p className="mt-2 shrink-0 text-4xl font-normal leading-none tracking-[-0.04em] text-foreground">
              54
            </p>
            <div className="mt-auto min-h-0 shrink-0 pt-4">
              <FlagMarquee />
              <p className="mt-3 text-sm leading-snug text-muted-foreground">
                Pilot markets across West, East, and Southern Africa.
              </p>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}

import { BentoCard } from "@/components/client/BentoCard";
import { BentoPromptCarousel } from "@/components/client/showcase/BentoPromptCarousel";
import { BentoCodeDemo } from "@/components/client/showcase/BentoCodeDemo";
import { SecurityImagineVisual } from "@/components/client/showcase/SecurityImagineVisual";

function ModelsPreview() {
  const models = [
    { name: "Twi-7B", status: "ready" },
    { name: "Yoruba-Speech", status: "ready" },
    { name: "Swahili-Context", status: "ready" },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden px-4 pt-3 pb-0">
      <p className="mb-1.5 shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        adara/models
      </p>
      <ul className="min-h-0 flex-1">
        {models.map((model) => (
          <li
            key={model.name}
            className="flex items-center justify-between border-b border-border/70 py-1.5 last:border-b-0"
          >
            <span className="text-[13px] text-foreground">{model.name}</span>
            <span className="font-mono text-[10px] text-muted-foreground">{model.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="section-auto py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.08] tracking-[-0.035em] text-foreground">
            One platform.
            <span className="text-gray-out"> Every modality.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-[13.5rem_16.5rem]">
          <BentoCard
            label="Corpus"
            href="/products"
            cta="Explore"
            compact
            className="min-h-[13.5rem] md:col-span-2 md:h-full"
          >
            <BentoPromptCarousel compact />
          </BentoCard>

          <BentoCard
            label="Models"
            href="/products"
            cta="Explore"
            compact
            className="min-h-[13.5rem] md:col-span-2 md:h-full"
          >
            <ModelsPreview />
          </BentoCard>

          <BentoCard
            label="Context API"
            href="/documentation"
            cta="Explore"
            compact
            className="min-h-[13.5rem] md:col-span-2 md:h-full"
          >
            <BentoCodeDemo compact />
          </BentoCard>

          <BentoCard
            label="Products"
            href="/products"
            cta="Explore"
            compact
            layout="imagine"
            image="/assets/adara-cta.png"
            imagePosition="center top"
            className="min-h-[16.5rem] md:col-span-3 md:h-full"
          />

          <BentoCard
            label="Security"
            href="/products"
            cta="Explore"
            layout="imagine"
            className="min-h-[16.5rem] md:col-span-3 md:h-full"
          >
            <SecurityImagineVisual />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

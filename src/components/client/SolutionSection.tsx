import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BentoCard } from "@/components/client/BentoCard";
import { BentoChatDemo } from "@/components/client/showcase/BentoChatDemo";
import { BentoPromptCarousel } from "@/components/client/showcase/BentoPromptCarousel";
import { BentoCodeDemo } from "@/components/client/showcase/BentoCodeDemo";
import { BentoAgentDemo } from "@/components/client/showcase/BentoAgentDemo";

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

export function SolutionSection() {
  return (
    <section id="solutions" className="section-auto bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.25rem,4.8vw,3.75rem)] font-normal leading-[1.06] tracking-[-0.035em] text-foreground">
            AI that understands Africans
            <br />
            <span className="text-gray-out">on their terms.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We make African language, culture, and daily life legible to any model, product, or institution.
          </p>
        </div>

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

        <div className="mt-16 grid grid-cols-1 gap-3 md:h-[540px] md:grid-cols-3 md:grid-rows-2">
          <BentoCard
            label="Chat"
            href="/products"
            className="h-full md:col-start-1 md:row-start-1 md:row-span-2"
          >
            <BentoChatDemo />
          </BentoCard>

          <BentoCard
            label="Corpus"
            href="/products"
            className="h-full md:col-start-2 md:row-start-1"
          >
            <BentoPromptCarousel />
          </BentoCard>

          <BentoCard
            label="API"
            href="/documentation"
            className="h-full md:col-start-2 md:row-start-2"
          >
            <BentoCodeDemo />
          </BentoCard>

          <BentoCard
            label="Build"
            href="/products"
            className="h-full md:col-start-3 md:row-start-1 md:row-span-2"
          >
            <BentoAgentDemo />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

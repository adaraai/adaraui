import type { ComponentType, SVGProps } from "react";
import {
  ApiIcon,
  CorpusIcon,
  GovernanceIcon,
  ModelsIcon,
  ProductsIcon,
  SecurityIcon,
} from "@/components/client/FeatureIcons";
import { BorderBeamCard } from "@/components/client/BorderBeamCard";

type FeatureIcon = ComponentType<SVGProps<SVGSVGElement>>;

const features: {
  icon: FeatureIcon;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    icon: CorpusIcon,
    title: "Data & Corpus",
    description:
      "African language corpora and cultural context datasets, including customs, idioms, and commerce patterns, built with local researchers and communities.",
    tags: ["Language corpus", "Cultural knowledge", "Annotation network"],
  },
  {
    icon: ModelsIcon,
    title: "Specialized Models",
    description:
      "Fine tuned LLMs and speech models for African languages, plus a cultural context layer that makes any base model more Africa aware.",
    tags: ["Fine tuned LLMs", "Speech", "Context layer"],
  },
  {
    icon: ApiIcon,
    title: "Africa Context API",
    description:
      "Developer tools that plug African understanding into any product: translation, localization, and culturally grounded responses.",
    tags: ["API", "Localization", "Developers"],
  },
  {
    icon: ProductsIcon,
    title: "Applied Products",
    description:
      "Flagship tools that prove value, from WhatsApp assistants for traders to voice first agricultural advice in local languages.",
    tags: ["SME tools", "Agriculture", "Education"],
  },
  {
    icon: SecurityIcon,
    title: "AI Security",
    description:
      "Fraud, scam, and deepfake detection tuned to African languages and mobile money patterns, protecting users where global tools fail.",
    tags: ["Fraud detection", "Deepfakes", "Moderation"],
  },
  {
    icon: GovernanceIcon,
    title: "Ethical Governance",
    description:
      "Consent first data collection, community benefit sharing, local data residency, and bias review for sensitive domains.",
    tags: ["Consent first", "Sovereignty", "Trust"],
  },
];

const cardVariants = [
  { duration: 5.5, direction: "normal" as const, delay: 0, accent: 2 },
  { duration: 7.2, direction: "reverse" as const, delay: 1.2, accent: 3 },
  { duration: 6.8, direction: "normal" as const, delay: 2.4, accent: 2 },
  { duration: 8.5, direction: "reverse" as const, delay: 0.8, accent: 3 },
  { duration: 5.9, direction: "normal" as const, delay: 3.1, accent: 2 },
  { duration: 7.8, direction: "reverse" as const, delay: 1.9, accent: 3 },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-auto py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <BorderBeamCard
                key={feature.title}
                variant={cardVariants[index]}
                className="cursor-pointer"
              >
                <div className="mb-5 flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
                  <Icon />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
                  {feature.title}
                </h3>
                <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </BorderBeamCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

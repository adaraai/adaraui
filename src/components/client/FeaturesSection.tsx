import { Database, Brain, Code2, Smartphone, Shield, Languages } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Data & Corpus",
    description:
      "African language corpora and cultural context datasets — customs, idioms, commerce patterns — built with local researchers and communities.",
    tags: ["Language corpus", "Cultural knowledge", "Annotation network"],
    accent: "blue",
  },
  {
    icon: Brain,
    title: "Specialized Models",
    description:
      "Fine-tuned LLMs and speech models for African languages — plus a cultural-context layer that makes any base model more Africa-aware.",
    tags: ["Fine-tuned LLMs", "Speech", "Context layer"],
    accent: "purple",
  },
  {
    icon: Code2,
    title: "Africa Context API",
    description:
      "Developer tools that plug African understanding into any product — translation, localization, and culturally grounded responses.",
    tags: ["API", "Localization", "Developers"],
    accent: "green",
  },
  {
    icon: Smartphone,
    title: "Applied Products",
    description:
      "Flagship tools that prove value — from WhatsApp assistants for traders to voice-first agricultural advice in local languages.",
    tags: ["SME tools", "Agriculture", "Education"],
    accent: "orange",
  },
  {
    icon: Shield,
    title: "AI Security",
    description:
      "Fraud, scam, and deepfake detection tuned to African languages and mobile-money patterns — protecting users where global tools fail.",
    tags: ["Fraud detection", "Deepfakes", "Moderation"],
    accent: "rose",
  },
  {
    icon: Languages,
    title: "Ethical Governance",
    description:
      "Consent-first data collection, community benefit-sharing, local data residency, and bias review for sensitive domains.",
    tags: ["Consent-first", "Sovereignty", "Trust"],
    accent: "teal",
  },
];

const accentMap: Record<string, { bg: string; icon: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   icon: "text-blue-600",   badge: "bg-blue-100 text-blue-700" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
  green:  { bg: "bg-green-50",  icon: "text-green-600",  badge: "bg-green-100 text-green-700" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
  rose:   { bg: "bg-rose-50",   icon: "text-rose-600",   badge: "bg-rose-100 text-rose-700" },
  teal:   { bg: "bg-teal-50",   icon: "text-teal-600",   badge: "bg-teal-100 text-teal-700" },
};

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">
            Products & services
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-950 leading-[1.1]">
            From foundation
            <br />
            <span className="text-blue-500">to applied AI</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Layered from data and models to APIs and products — so African
            language, culture, and daily life become legible to AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => {
            const colors = accentMap[feature.accent];
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${colors.badge}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {[
            { value: "2,000+", label: "African languages" },
            { value: "4", label: "Product layers" },
            { value: "54", label: "Countries" },
            { value: "1.5B", label: "People to serve" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-6 text-center">
              <p className="text-3xl font-bold text-gray-950">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Close the Africa-shaped blind spot",
    description:
      "Most AI is trained on Western data — so it mistranslates African languages, misreads local idioms, and fails everyday African users.",
  },
  {
    number: "02",
    title: "Build the foundation",
    description:
      "African-context datasets, fine-tuned models, and a distributed annotation network of local linguists and contributors.",
  },
  {
    number: "03",
    title: "Make understanding available to all",
    description:
      "APIs, localization services, and applied products so startups, enterprises, and governments can plug African fluency into their tools.",
  },
];

export function SolutionSection() {
  return (
    <section id="solutions" className="bg-[#FAFAFA] py-20 sm:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-12">
          Vision & mission
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-950 leading-[1.1] mb-6">
              AI that understands
              <br />
              <span className="text-gray-400 font-medium">Africans on their terms.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Vision: a world where AI serves Africans as well as anyone else —
              in their own languages. Mission: make African language, culture,
              and daily life available to any company or developer who needs it.
            </p>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex gap-5">
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 top-10 w-px h-full bg-gradient-to-b from-blue-300 to-blue-100" />
                  )}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center z-10 mt-0.5">
                    <span className="text-[11px] font-bold text-blue-500">{step.number}</span>
                  </div>
                  <div className="pb-10">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all duration-150"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Who we serve
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Hybrid R&D + product
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { user: "Global tech", task: "Localize AI for African markets", pct: "B2B" },
                  { user: "African startups", task: "Language & context infrastructure", pct: "API" },
                  { user: "Gov & NGOs", task: "Public services in local languages", pct: "B2G" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {row.user.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-700 truncate">{row.task}</p>
                      <p className="text-[11px] text-gray-400">{row.user}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full flex-shrink-0">
                      {row.pct}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-blue-500 text-white p-6 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold leading-tight">Consent-first</p>
                <p className="text-sm text-blue-100 mt-2 font-medium">Data governance</p>
                <p className="text-xs text-blue-200 mt-2 leading-relaxed">
                  Community benefit, local residency, ethical by design
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-1 mb-4">
                {["🇬🇭", "🇳🇬", "🇰🇪", "🇿🇦", "🇪🇹", "🇸🇳"].map((flag, i) => (
                  <span key={i} className="text-xl text-center">{flag}</span>
                ))}
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">54</p>
                <p className="text-sm text-gray-400 mt-1 font-medium">Countries in scope</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

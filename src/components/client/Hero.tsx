import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Languages, Globe2, Shield, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden bg-[#FAFAFA]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       

        <h1 className="text-[clamp(2.25rem,6.5vw,4.75rem)] font-semibold tracking-tight leading-[1.08] text-gray-950 max-w-4xl mx-auto">
          Data and tools that make AI
          <br />
          understand <span className="text-blue-500">Africa</span>.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Teaching AI to understand Africa  in its languages, its logic, and its lived reality.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all duration-150 shadow-lg shadow-gray-900/20"
          >
            Partner with us
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-700 text-sm font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-150"
          >
            Explore our layers
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            Built for
          </span>
          {["Startups", "Enterprises", "Governments", "NGOs", "Developers"].map((co) => (
            <span key={co} className="text-sm font-semibold text-gray-300 tracking-tight">
              {co}
            </span>
          ))}
        </div>

        <div className="relative mt-16 mx-auto max-w-5xl">
          <div className="relative mx-auto w-full rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/80 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="ml-3 flex-1 max-w-xs h-5 rounded-md bg-gray-200/60 text-xs text-gray-400 flex items-center px-3">
                adara.ai / africa-context
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-white min-h-[300px] sm:min-h-[380px]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Languages in focus", value: "2,000+", color: "text-blue-600" },
                  { label: "Pilot languages", value: "3–5", color: "text-green-600" },
                  { label: "Countries", value: "54", color: "text-purple-600" },
                  { label: "Product layers", value: "4", color: "text-orange-500" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4"
                  >
                    <p className={`text-lg sm:text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">What we're building</span>
                  <span className="text-xs text-blue-500 font-medium">Layered stack</span>
                </div>
                {[
                  { task: "African Language Corpus", labeler: "Layer 1 — Data", progress: 72, type: "Data" },
                  { task: "Fine-tuned African LLMs", labeler: "Layer 2 — Models", progress: 48, type: "Model" },
                  { task: "Africa Context API", labeler: "Layer 3 — Tools", progress: 35, type: "API" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-100 transition-colors"
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                        item.type === "Data"
                          ? "bg-blue-50 text-blue-600"
                          : item.type === "Model"
                          ? "bg-purple-50 text-purple-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {item.type.slice(0, 3).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{item.task}</p>
                      <p className="text-xs text-gray-400">{item.labeler}</p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <div className="w-20 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 font-medium w-8 text-right">
                        {item.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -left-4 sm:-left-10 top-20 hidden sm:flex flex-col gap-2 bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/80 p-4 w-44">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                <Languages className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <span className="text-xs font-semibold text-gray-700">Languages</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">2,000+</p>
            <p className="text-[11px] text-gray-400 leading-tight">
              African languages underrepresented in AI today
            </p>
          </div>

          <div className="absolute -right-4 sm:-right-10 top-20 hidden sm:flex flex-col gap-2 bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/80 p-4 w-44">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
              </div>
              <span className="text-xs font-semibold text-gray-700">Mission</span>
            </div>
            <p className="text-sm font-bold text-gray-900 leading-snug">
              Make African life legible to AI
            </p>
            <p className="text-[11px] text-gray-400 leading-tight">
              Consent-first. Community-powered.
            </p>
          </div>

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-3 bg-white rounded-full border border-gray-200 shadow-lg shadow-gray-200/80 px-5 py-3">
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-gray-800">Pan-African</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-800">Ethical by design</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-gray-800">Research + Product</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-8 sm:h-12" />
    </div>
  );
}

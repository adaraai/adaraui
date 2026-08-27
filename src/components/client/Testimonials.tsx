import { Star } from "lucide-react";

const testimonials1 = [
  {
    name: "Amara Okonkwo",
    title: "CTO",
    company: "Fintech Startup",
    quote:
      "Generic models fail our users in Pidgin and local finance contexts. ADARA's Africa Context layer is exactly the infrastructure we need.",
    rating: 5,
  },
  {
    name: "James Mwangi",
    title: "Product Lead",
    company: "AgriTech Kenya",
    quote:
      "Voice-first advice in Swahili for smallholder farmers changes everything. Western AI simply doesn't understand our crops or markets.",
    rating: 5,
  },
  {
    name: "Fatima Diallo",
    title: "Director",
    company: "Public Health NGO",
    quote:
      "Local-language health communication finally feels accurate and culturally safe. Consent-first data collection is non-negotiable for us.",
    rating: 5,
  },
  {
    name: "Kwesi Mensah",
    title: "Head of AI",
    company: "Regional Bank",
    quote:
      "Mobile-money fraud patterns look nothing like card fraud. Security tuned to African languages and USSD scams is a real differentiator.",
    rating: 5,
  },
  {
    name: "Amara Okonkwo",
    title: "CTO",
    company: "Fintech Startup",
    quote:
      "Generic models fail our users in Pidgin and local finance contexts. ADARA's Africa Context layer is exactly the infrastructure we need.",
    rating: 5,
  },
  {
    name: "James Mwangi",
    title: "Product Lead",
    company: "AgriTech Kenya",
    quote:
      "Voice-first advice in Swahili for smallholder farmers changes everything. Western AI simply doesn't understand our crops or markets.",
    rating: 5,
  },
];

const testimonials2 = [
  {
    name: "Sarah Chen",
    title: "Localization Lead",
    company: "Global Platform",
    quote:
      "Light UI translation was never enough. We need cultural and linguistic depth — ADARA is the partner we'd rather build with than against.",
    rating: 5,
  },
  {
    name: "Ibrahim Yusuf",
    title: "Researcher",
    company: "African NLP Lab",
    quote:
      "Commercializing African NLP with community trust and attribution is rare. ADARA's hybrid research-and-product model is the right path.",
    rating: 5,
  },
  {
    name: "Naledi Botha",
    title: "Policy Advisor",
    company: "Digital Ministry",
    quote:
      "AI sovereignty isn't a slogan — it's local data, local languages, and local partners. ADARA understands the terrain.",
    rating: 5,
  },
  {
    name: "Chidi Adebayo",
    title: "Founder",
    company: "EdTech Nigeria",
    quote:
      "Students learn better when AI tutors bridge local languages to English curricula. That's the gap ADARA is built to close.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    title: "Localization Lead",
    company: "Global Platform",
    quote:
      "Light UI translation was never enough. We need cultural and linguistic depth — ADARA is the partner we'd rather build with than against.",
    rating: 5,
  },
  {
    name: "Ibrahim Yusuf",
    title: "Researcher",
    company: "African NLP Lab",
    quote:
      "Commercializing African NLP with community trust and attribution is rare. ADARA's hybrid research-and-product model is the right path.",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials1)[0];
}) {
  return (
    <article className="shrink-0 w-[300px] sm:w-[360px] rounded-2xl border border-gray-100 bg-white shadow-sm p-5 flex flex-col gap-4">
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-400">
            {testimonial.title} · {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 sm:py-28 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Why it matters
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-950 leading-[1.1]">
              Built for builders
              <br />
              <span className="text-gray-400 font-medium">across Africa</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            From startups and banks to governments and NGOs — teams who need AI that actually understands Africa.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="py-4">
          <div className="flex gap-4 will-change-transform animate-marquee-ltr">
            {testimonials1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-50" />

        <div className="py-4">
          <div className="flex gap-4 will-change-transform animate-marquee-rtl">
            {testimonials2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

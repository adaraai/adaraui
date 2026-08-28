import { ChevronRight } from "lucide-react";
import { Marquee } from "@/components/client/Marquee";

const testimonials1 = [
  {
    name: "Amara Okonkwo",
    title: "CTO",
    company: "Fintech Startup",
    quote:
      "Generic models fail our users in Pidgin and local finance contexts. ADARA's Africa Context layer is exactly the infrastructure we need.",
  },
  {
    name: "James Mwangi",
    title: "Product Lead",
    company: "AgriTech Kenya",
    quote:
      "Voice first advice in Swahili for smallholder farmers changes everything. Western AI simply doesn't understand our crops or markets.",
  },
  {
    name: "Fatima Diallo",
    title: "Director",
    company: "Public Health NGO",
    quote:
      "Local language health communication finally feels accurate and culturally safe. Consent first data collection is essential for us.",
  },
  {
    name: "Kwesi Mensah",
    title: "Head of AI",
    company: "Regional Bank",
    quote:
      "Mobile money fraud patterns look nothing like card fraud. Security tuned to African languages and USSD scams is a real differentiator.",
  },
];

const testimonials2 = [
  {
    name: "Sarah Chen",
    title: "Localization Lead",
    company: "Global Platform",
    quote:
      "Light UI translation was never enough. We need cultural and linguistic depth. ADARA is the partner we'd rather build with than against.",
  },
  {
    name: "Ibrahim Yusuf",
    title: "Researcher",
    company: "African NLP Lab",
    quote:
      "Commercializing African NLP with community trust and attribution is rare. ADARA's hybrid research and product model is the right path.",
  },
  {
    name: "Naledi Botha",
    title: "Policy Advisor",
    company: "Digital Ministry",
    quote:
      "AI sovereignty isn't a slogan. It's local data, local languages, and local partners. ADARA understands the terrain.",
  },
  {
    name: "Chidi Adebayo",
    title: "Founder",
    company: "EdTech Nigeria",
    quote:
      "Students learn better when AI tutors bridge local languages to English curricula. That's the gap ADARA is built to close.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials1)[0];
}) {
  return (
    <article className="flex w-[min(calc(100vw-2.5rem),320px)] shrink-0 flex-col rounded-2xl border border-border bg-card p-5 sm:w-[380px] sm:p-6">
      <p className="flex-1 text-sm leading-relaxed text-foreground sm:text-base md:text-lg">
        {testimonial.quote}
      </p>
      <div className="mt-6 flex items-center justify-between pt-1">
        <div>
          <p className="text-base font-medium text-foreground">{testimonial.name}</p>
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">
            {testimonial.title} · {testimonial.company}
          </p>
        </div>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/30" />
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-20 sm:py-28">
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.03em] text-foreground">
              Built for builders
              <br />
              <span className="text-muted-foreground">across Africa</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
            From startups and banks to governments and NGOs, teams who need AI that
            actually understands Africa.
          </p>
        </div>
      </div>

      <div className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div className="py-2">
          <Marquee direction="ltr" duration={55}>
            {testimonials1.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </Marquee>
        </div>

        <div className="py-2">
          <Marquee direction="rtl" duration={50}>
            {testimonials2.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

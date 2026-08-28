import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is ADARA?",
    a: "ADARA builds data, models, and APIs that help AI understand African languages, culture, and daily life for startups, enterprises, governments, and NGOs.",
  },
  {
    q: "How does the Africa Context API work?",
    a: "Send text or speech through our API and get translation, localization, and culturally grounded responses tuned to African locales without training your own models from scratch.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We use consent first collection, local data residency where possible, and never sell partner data. Community benefit sharing is built into how we work.",
  },
  {
    q: "Do I need to fine tune my own models?",
    a: "No. Many teams start with our context layer and specialized models via API. Custom fine tuning and corpus partnerships are available as you scale.",
  },
  {
    q: "How do I get started?",
    a: "Join the pilot for free API access and documentation. Enterprise, research, and government partnerships get dedicated onboarding and SLA options.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-auto py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[880px] px-4 sm:px-6">
        <h2 className="text-center text-[clamp(1.875rem,3.5vw,3rem)] font-semibold tracking-tight text-foreground">
          Common questions
        </h2>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="mt-8 divide-y divide-border/50 md:mt-12"
        >
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-none">
              <AccordionTrigger className="py-5 pr-2 text-left text-base font-normal hover:no-underline sm:py-6 sm:text-lg md:text-xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import { lazy, Suspense } from "react";
import { Header } from "@/components/client/Header";
import { Hero } from "@/components/client/Hero";
import { ExploreBentoSection } from "@/components/client/ExploreBentoSection";
import { Reveal } from "@/components/client/Reveal";

const FeaturesSection = lazy(() =>
  import("@/components/client/FeaturesSection").then((m) => ({ default: m.FeaturesSection }))
);
const SolutionSection = lazy(() =>
  import("@/components/client/SolutionSection").then((m) => ({ default: m.SolutionSection }))
);
const Testimonials = lazy(() =>
  import("@/components/client/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const FAQSection = lazy(() =>
  import("@/components/client/FAQSection").then((m) => ({ default: m.FAQSection }))
);
const CtaSection = lazy(() =>
  import("@/components/client/CtaSection").then((m) => ({ default: m.CtaSection }))
);
const ContactForm = lazy(() =>
  import("@/components/client/ContactForm").then((m) => ({ default: m.ContactForm }))
);
const Footer = lazy(() =>
  import("@/components/client/Footer").then((m) => ({ default: m.Footer }))
);

function SectionFallback({ minHeight = "28rem" }: { minHeight?: string }) {
  return <div aria-hidden className="section-auto" style={{ minHeight }} />;
}

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <Hero />
      <ExploreBentoSection />
      <main className="adara-ambient">
        <Suspense fallback={<SectionFallback minHeight="32rem" />}>
          <Reveal>
            <FeaturesSection />
          </Reveal>
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="36rem" />}>
          <Reveal delay={60}>
            <SolutionSection />
          </Reveal>
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="24rem" />}>
          <Reveal delay={80} variant="fade">
            <Testimonials />
          </Reveal>
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="20rem" />}>
          <Reveal delay={100}>
            <FAQSection />
          </Reveal>
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="22rem" />}>
          <Reveal delay={120}>
            <CtaSection />
          </Reveal>
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="28rem" />}>
          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-48" aria-hidden />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

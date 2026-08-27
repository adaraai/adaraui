import { Header } from "@/components/client/Header";
import { Hero } from "@/components/client/Hero";
import { FeaturesSection } from "@/components/client/FeaturesSection";
import { SolutionSection } from "@/components/client/SolutionSection";
import { Testimonials } from "@/components/client/Testimonials";
import { ContactForm } from "@/components/client/ContactForm";
import { Footer } from "@/components/client/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <SolutionSection />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

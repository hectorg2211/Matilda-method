import { ContactSection } from "@/components/vsl/ContactSection";
import { FaqSection } from "@/components/vsl/FaqSection";
import { FinalCtaSection } from "@/components/vsl/FinalCtaSection";
import { FoundersSection } from "@/components/vsl/FoundersSection";
import { HeroSection } from "@/components/vsl/HeroSection";
import { LogosSection } from "@/components/vsl/LogosSection";
import { MechanismSection } from "@/components/vsl/MechanismSection";
import { PricingSection } from "@/components/vsl/PricingSection";
import { ProblemSection } from "@/components/vsl/ProblemSection";
import { ProcessSection } from "@/components/vsl/ProcessSection";
import { ResultsSection } from "@/components/vsl/ResultsSection";
import { SiteFooter } from "@/components/vsl/SiteFooter";
import { TestimonialsSection } from "@/components/vsl/TestimonialsSection";
import { WhoForSection } from "@/components/vsl/WhoForSection";

export default function Home() {
  return (
    <main className="page-texture min-h-full">
      {/* 1. Hook */}
      <HeroSection />
      {/* 2. Problem agitation */}
      <ProblemSection />
      {/* 3. Mechanism */}
      <MechanismSection />
      {/* 4. Credibility */}
      <FoundersSection />
      <LogosSection />
      {/* 5. Proof stack */}
      <ResultsSection />
      <TestimonialsSection />
      {/* 6. Offer path */}
      <ProcessSection />
      <PricingSection />
      {/* 7. Close */}
      <WhoForSection />
      <FaqSection />
      <ContactSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}

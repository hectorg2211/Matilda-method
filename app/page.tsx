import { FoundersSection } from "@/components/vsl/FoundersSection";
import { HeroSection } from "@/components/vsl/HeroSection";
import { MechanismSection } from "@/components/vsl/MechanismSection";
import { PricingSection } from "@/components/vsl/PricingSection";
import { ProblemSection } from "@/components/vsl/ProblemSection";
import { ResultsSection } from "@/components/vsl/ResultsSection";
import { SiteFooter } from "@/components/vsl/SiteFooter";
import { SiteNav } from "@/components/vsl/SiteNav";
import { StickyCta } from "@/components/vsl/StickyCta";

export default function Home() {
  return (
    <main className="page-texture min-h-full">
      <SiteNav />
      <HeroSection />
      <ProblemSection />
      <MechanismSection />
      <ResultsSection />
      <FoundersSection />
      <PricingSection />
      <SiteFooter />
      <StickyCta />
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ResultsSection from "@/components/ResultsSection";
import VipGroupSection from "@/components/VipGroupSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <ResultsSection />
      <VipGroupSection />
    </main>
  );
};

export default Index;

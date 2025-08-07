import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ResultsSection from "@/components/ResultsSection";
import ProofSection from "@/components/ProofSection";
import LaunchCaptureSection from "@/components/LaunchCaptureSection";
import VipGroupSection from "@/components/VipGroupSection";
import FloatingStats from "@/components/FloatingStats";
import AnimatedBadges from "@/components/AnimatedBadges";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <ResultsSection />
      <ProofSection />
      <LaunchCaptureSection />
      <VipGroupSection />
      
      {/* Visual stimulation elements */}
      <FloatingStats />
      <AnimatedBadges />
    </main>
  );
};

export default Index;

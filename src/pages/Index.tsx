import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";

import ProofSection from "@/components/ProofSection";
import LaunchCaptureSection from "@/components/LaunchCaptureSection";
import VipGroupSection from "@/components/VipGroupSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <HeroSection />
      <ProblemSection />
      
      <ProofSection />
      <LaunchCaptureSection />
      <VipGroupSection />
    </main>
  );
};

export default Index;

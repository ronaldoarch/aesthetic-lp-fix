import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import tradingHero from "@/assets/trading-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                  Método Comprovado
                </span>
              </div>
              
               <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Domine o{" "}
                <span className="text-gradient">REVERSHARE</span>{" "}
                e transforme jogadores em{" "}
                <span className="text-accent-gradient">MÁQUINAS DE DINHEIRO</span>{" "}
                24/7
               </h1>
               
               <p className="text-xl text-muted-foreground leading-relaxed">
                 O sistema BRUTAL que converte leads frios em HIGH-ROLLERS viciados.
                 CPA + Lifetime Value = Receita PASSIVA infinita. Zero concorrência.
               </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero text-lg relative overflow-hidden group">
                <span className="relative z-10">🚀 QUERO FATURAR R$ 50K/MÊS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="outline" size="lg" className="group border-accent/30 hover:border-accent/60">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform text-accent" />
                💰 Ver DEMONSTRAÇÃO
              </Button>
            </div>

             <div className="flex items-center gap-8 pt-4">
               <div className="text-center group cursor-pointer">
                 <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform">💸 R$ 287K</div>
                 <div className="text-sm text-muted-foreground">Última Comissão</div>
                 <div className="text-xs text-accent animate-pulse">COMPROVADO</div>
               </div>
               <div className="text-center group cursor-pointer">
                 <div className="text-3xl font-bold text-accent-gradient group-hover:scale-110 transition-transform">🔥 35%</div>
                 <div className="text-sm text-muted-foreground">RevShare</div>
                 <div className="text-xs text-warning animate-pulse">VITALÍCIO</div>
               </div>
               <div className="text-center group cursor-pointer">
                 <div className="text-3xl font-bold text-success group-hover:scale-110 transition-transform">⚡ ∞</div>
                 <div className="text-sm text-muted-foreground">Lifetime Value</div>
                 <div className="text-xs text-success animate-pulse">INFINITO</div>
               </div>
             </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img 
                src={tradingHero} 
                alt="Workspace de trading profissional" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full animate-float opacity-80 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-accent rounded-full animate-float opacity-60 flex items-center justify-center" style={{ animationDelay: '2s' }}>
              <span className="text-xl">🚀</span>
            </div>
            
            {/* Extra floating badges */}
            <div className="absolute top-1/4 -left-8 bg-gradient-to-r from-success/90 to-success p-3 rounded-lg shadow-glow animate-float opacity-90" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-lg font-bold text-success-foreground">💹 LIVE</div>
                <div className="text-xs text-success-foreground/80">GANHOS</div>
              </div>
            </div>
            
            <div className="absolute bottom-1/3 -right-8 bg-gradient-to-r from-warning/90 to-warning p-3 rounded-lg shadow-accent animate-float opacity-90" style={{ animationDelay: '3s' }}>
              <div className="text-center">
                <div className="text-lg font-bold text-warning-foreground">🎯 +300%</div>
                <div className="text-xs text-warning-foreground/80">ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
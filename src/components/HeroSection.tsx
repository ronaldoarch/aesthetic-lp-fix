import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import dashboardMobile from "/lovable-uploads/64bc738d-9617-4abf-ae09-8a93959ef6b6.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered text content */}
          <div className="space-y-8 text-center max-w-4xl">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                  Método Comprovado
                </span>
              </div>
              
               <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                🎯 MÉTODO{" "}
                <span className="text-gradient">AFILIADO</span>{" "}
                <span className="text-accent-gradient">LUCRATIVO</span>
                <br />
                <span className="text-4xl lg:text-5xl">O SEGREDO DOS R$ 246K</span>
               </h1>

               {/* VSL Space */}
               <div className="max-w-4xl mx-auto my-8">
                 <div className="relative aspect-video bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-2xl border border-accent/20 overflow-hidden">
                   <iframe
                     src="https://www.youtube.com/embed/VfUB4NFgm6M"
                     title="VSL Exclusiva - Método Afiliado Lucrativo"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                     className="absolute inset-0 w-full h-full"
                   ></iframe>
                 </div>
               </div>
               
               <p className="text-xl text-muted-foreground leading-relaxed">
                 🚨 VAGAS LIMITADAS: Apenas 100 pessoas terão acesso ao método que gera 
                 <span className="text-accent font-bold"> R$ 246.488,52 por mês</span> em comissões RevShare.
                 <span className="text-primary font-bold"> CPA R$ 50 + RevShare 25%</span> 
               </p>
            </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg" 
                  className="btn-hero text-lg relative overflow-hidden group"
                  onClick={() => {
                    const signupSection = document.getElementById('signup-section');
                    signupSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10">🔥 QUERO ENTRAR NA LISTA VIP</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-accent/30 hover:border-accent/60"
                  onClick={() => {
                    const proofSection = document.getElementById('proof-section');
                    proofSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform text-accent" />
                  💰 VER RESULTADOS REAIS
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4 justify-center">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform">💸 R$ 246K</div>
                  <div className="text-sm text-muted-foreground">RevShare Mensal</div>
                  <div className="text-xs text-accent animate-pulse">COMPROVADO</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-accent-gradient group-hover:scale-110 transition-transform">🎯 R$ 50</div>
                  <div className="text-sm text-muted-foreground">CPA Por Lead</div>
                  <div className="text-xs text-warning animate-pulse">IMEDIATO</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-success group-hover:scale-110 transition-transform">⚡ 25%</div>
                  <div className="text-sm text-muted-foreground">RevShare Vitalício</div>
                  <div className="text-xs text-success animate-pulse">PARA SEMPRE</div>
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
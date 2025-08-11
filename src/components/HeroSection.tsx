import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import dashboardMobile from "/lovable-uploads/64bc738d-9617-4abf-ae09-8a93959ef6b6.png";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
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
                <span className="text-4xl lg:text-5xl">O SEGREDO DOS AFILIADO</span>
               </h1>

               {/* VSL Space */}
               <div className="max-w-4xl mx-auto my-8">
                 <div className="relative aspect-video bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-2xl border border-accent/20 overflow-hidden">
                    <video controls autoPlay muted poster="/lovable-uploads/64bc738d-9617-4abf-ae09-8a93959ef6b6.png" className="w-full h-full object-cover">
                     <source src="/videos/vsl-video.mp4" type="video/mp4" />
                     <p className="text-center p-8 text-muted-foreground">
                       Seu navegador não suporta vídeo. 
                       <a href="/videos/vsl-video.mp4" className="text-accent underline ml-1">
                         Clique aqui para baixar o vídeo
                       </a>
                     </p>
                   </video>
                 </div>
               </div>
               
               <p className="text-xl text-muted-foreground leading-relaxed">
                 🚨 VAGAS LIMITADAS: Apenas 100 pessoas terão acesso ao método que gera 
                 <span className="text-accent font-bold"> R$ 246.488,52 por mês</span> em comissões.
                 <span className="text-primary font-bold"> </span> 
               </p>
            </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero text-lg relative overflow-hidden group" onClick={() => {
              const signupSection = document.getElementById('signup-section');
              signupSection?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                  <span className="relative z-10">🔥 QUERO ENTRAR NA LISTA VIP</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                
              </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;
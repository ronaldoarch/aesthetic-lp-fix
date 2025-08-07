import { Button } from "@/components/ui/button";
import { Gift, Users, BookOpen, Zap, MessageCircle, TrendingUp } from "lucide-react";
import mentorPortrait from "@/assets/mentor-portrait.jpg";

const VipGroupSection = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Programa de RevShare SECRETO",
      description: "Acesso EXCLUSIVO ao programa que paga 40% vitalício + bônus"
    },
    {
      icon: Users,
      title: "Network de afiliados MILIONÁRIOS",
      description: "Conecte-se com quem fatura R$ 500K+ por mês (apenas convidados)"
    },
    {
      icon: MessageCircle,
      title: "Suporte VIP no WhatsApp",
      description: "Acesso direto aos TOP AFILIADOS que faturam 7 dígitos"
    },
    {
      icon: TrendingUp,
      title: "Fórmula do TRÁFEGO MILIONÁRIO",
      description: "Como gastar R$ 10K e gerar R$ 100K+ com tráfego pago"
    },
    {
      icon: Zap,
      title: "Scripts que HIPNOTIZAM jogadores",
      description: "Copy testada que fez jogador depositar R$ 50K em 24h"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            <span>OFERTA LIMITADA</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            SEGREDOS Que Fazem Afiliados{" "}
            <span className="text-gradient">Faturarem R$ 1 MILHÃO+</span>
            <br />
            Revelados No <span className="text-accent-gradient">GRUPO SECRETO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Apenas 50 pessoas terão acesso aos métodos que geram R$ 300K+ por mês
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-feature group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-glow group-hover:scale-110 transition-transform flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <div className="card-premium bg-gradient-to-r from-success/10 to-accent/10 border-success/20 text-center">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-success mb-1">
                    GRÁTIS Por 24h
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Depois R$ 5.000 para entrar
                  </p>
                </div>
                
                <Button size="lg" className="btn-hero w-full">
                 QUERO FATURAR R$ 300K/MÊS
                </Button>
              </div>
            </div>
          </div>

          {/* Mentor Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img 
                src={mentorPortrait} 
                alt="Mentor especialista em marketing de afiliados" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-secondary p-4 rounded-xl shadow-card max-w-xs">
              <div className="mb-2">
                <div className="flex text-accent text-sm mb-1">
                  ★★★★★
                </div>
                 <p className="text-sm text-foreground">
                   "RevShare me trouxe R$ 847K em 6 meses. Método INSANO!"
                 </p>
              </div>
               <div className="text-xs text-muted-foreground">
                 - Bruno L., Afiliado Milionário
               </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-gradient-accent p-4 rounded-xl shadow-accent">
               <div className="text-center">
                 <div className="text-2xl font-bold text-accent-foreground">R$ 1M+</div>
                 <div className="text-xs text-accent-foreground/80">Faturamento Mês</div>
               </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-block card-premium bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              ÚLTIMAS 12 VAGAS Para Milionários
            </h3>
            <p className="text-muted-foreground mb-6">
              Depois disso, só entrará quem pagar R$ 50.000. 
              Esta é sua ÚNICA chance de entrar DE GRAÇA.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-destructive">12</div>
                <div className="text-xs text-muted-foreground">Vagas Restantes</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-destructive">05:47:23</div>
                <div className="text-xs text-muted-foreground">Para Fechar Para Sempre</div>
               </div>
            </div>

             <Button size="lg" className="btn-hero text-lg px-8">
               SIM! QUERO SER MILIONÁRIO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipGroupSection;
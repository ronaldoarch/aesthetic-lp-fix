import { Button } from "@/components/ui/button";
import { Gift, Users, BookOpen, Zap, MessageCircle, TrendingUp } from "lucide-react";
import relatoriGanhos from "/lovable-uploads/200ec8d4-361e-4f1e-b3d8-cebcbc2fc4c1.png";
const VipGroupSection = () => {
  const benefits = [{
    icon: BookOpen,
    title: "Programa de RevShare SECRETO",
    description: "Acesso EXCLUSIVO ao programa que paga 40% vitalício + bônus"
  }, {
    icon: Users,
    title: "Network de afiliados MILIONÁRIOS",
    description: "Conecte-se com quem fatura R$ 500K+ por mês (apenas convidados)"
  }, {
    icon: MessageCircle,
    title: "Suporte VIP no WhatsApp",
    description: "Acesso direto aos TOP AFILIADOS que faturam 7 dígitos"
  }, {
    icon: TrendingUp,
    title: "Fórmula do TRÁFEGO MILIONÁRIO",
    description: "Como gastar R$ 10K e gerar R$ 100K+ com tráfego pago"
  }, {
    icon: Zap,
    title: "Scripts que HIPNOTIZAM jogadores",
    description: "Copy testada que fez jogador depositar R$ 50K em 24h"
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <Gift className="h-16 w-16 text-accent" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              🎯 GRUPO VIP EXCLUSIVO
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre para o grupo mais seleto de afiliados milionários do Brasil
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-accent/20">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Icon className="h-12 w-12 text-accent" />
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-4" 
              onClick={() => {
                const signupSection = document.getElementById('signup-section');
                signupSection?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              🚀 QUERO ENTRAR NA LISTA VIP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VipGroupSection;
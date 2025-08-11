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
    <section id="signup-section" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <Gift className="h-16 w-16 text-accent" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              🎯 GARANTIR MINHA VAGA VIP
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insira seu melhor email e WhatsApp para receber acesso prioritário
            </p>
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto space-y-4">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-accent/20">
              <div className="space-y-4">
                <input
                  type="tel"
                  placeholder="📱 Seu WhatsApp (com DDD)"
                  className="w-full p-4 bg-background border border-accent/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="📧 Seu melhor email"
                  className="w-full p-4 bg-background border border-accent/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                <Button className="w-full btn-hero text-lg py-4">
                  🚀 ENTRAR NA LISTA VIP AGORA
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
                ✅ Seus dados estão 100% seguros. Jamais enviaremos spam.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
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
        </div>
      </div>
    </section>
  );
};
export default VipGroupSection;
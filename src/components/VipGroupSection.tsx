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
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🔥 GRUPO VIP <span className="text-gradient">EXCLUSIVO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre no círculo dos afiliados que faturam R$ 500K+ por mês
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="card-premium text-center">
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-accent mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="btn-hero text-lg" onClick={() => {
            const signupSection = document.getElementById('signup-section');
            signupSection?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
            🚀 QUERO ENTRAR NO GRUPO VIP
          </Button>
        </div>
      </div>
    </section>
  );
};
export default VipGroupSection;
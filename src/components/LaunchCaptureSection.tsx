import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Users, Target, Zap } from "lucide-react";

const LaunchCaptureSection = () => {
  return (
    <section id="signup-section" className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Countdown urgency */}
          <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/40 rounded-full px-6 py-3 mb-8">
            <Clock className="w-5 h-5 text-destructive animate-pulse" />
            <span className="text-destructive font-bold">⏰ LANÇAMENTO EM 48H</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🚨 LISTA VIP <span className="text-gradient">FECHANDO</span>
            <br />
            <span className="text-accent-gradient">ÚLTIMAS 23 VAGAS</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Seja um dos primeiros a ter acesso ao <span className="text-accent font-bold">MÉTODO AFILIADO LUCRATIVO</span> que já gerou 
            <span className="text-primary font-bold"> R$ 246.488,52</span> em apenas um mês
          </p>

          {/* Benefícios exclusivos */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-feature group cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">🎯 Acesso Vitalício</h3>
                <p className="text-muted-foreground text-sm">Método completo + atualizações para sempre</p>
              </div>
            </div>

            <div className="card-feature group cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-accent rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">👥 Grupo VIP</h3>
                <p className="text-muted-foreground text-sm">Telegram exclusivo com mentoria diária</p>
              </div>
            </div>

            <div className="card-feature group cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">⚡ Resultados em 7 dias</h3>
                <p className="text-muted-foreground text-sm">Primeiros CPA na primeira semana</p>
              </div>
            </div>
          </div>

          {/* Formulário de captura */}
          <div className="card-premium max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                🔥 GARANTIR MINHA VAGA VIP
              </h3>
              <p className="text-muted-foreground">
                Insira seu melhor email e WhatsApp para receber acesso prioritário
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="📱 Seu WhatsApp (com DDD)"
                  className="h-12 text-lg border-accent/20 focus:border-accent"
                />
                <Input 
                  type="email" 
                  placeholder="📧 Seu melhor email"
                  className="h-12 text-lg border-accent/20 focus:border-accent"
                />
              </div>
              
              <Button 
                size="lg" 
                className="w-full h-14 text-xl btn-hero animate-pulse-soft"
              >
                🚀 ENTRAR NA LISTA VIP AGORA
              </Button>
              
              <p className="text-xs text-muted-foreground">
                ✅ Seus dados estão 100% seguros. Jamais enviaremos spam.
              </p>
            </form>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">1.847</div>
              <div className="text-sm text-muted-foreground">Pessoas já na lista</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-gradient">R$ 56M</div>
              <div className="text-sm text-muted-foreground">Faturamento dos alunos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCaptureSection;
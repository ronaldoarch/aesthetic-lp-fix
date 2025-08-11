import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Users, BookOpen, Zap, MessageCircle, TrendingUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import relatoriGanhos from "/lovable-uploads/200ec8d4-361e-4f1e-b3d8-cebcbc2fc4c1.png";
type FormData = {
  whatsapp: string;
  email: string;
};
const VipGroupSection = () => {
  const {
    register,
    watch,
    reset,
    formState: {
      errors
    }
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const watchedFields = watch();
  const saveAndRedirect = async (data: FormData) => {
    if (isSubmitting || hasSubmitted) return;
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('vip_leads').insert([data]);
      if (error) throw error;
      setHasSubmitted(true);
      toast.success("🎉 Dados salvos! Redirecionando para o WhatsApp...");

      // Redireciona imediatamente
      setTimeout(() => {
        window.open('https://chat.whatsapp.com/Bv9jc95MJTR33RAirOzj4Q', '_blank');
      }, 500);
    } catch (error) {
      toast.error("❌ Erro ao salvar dados. Tente novamente.");
      console.error('Erro ao salvar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-submit quando ambos os campos estão preenchidos e válidos
  useEffect(() => {
    const {
      whatsapp,
      email
    } = watchedFields;
    if (whatsapp && email && whatsapp.trim() && email.trim()) {
      // Valida email
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (emailRegex.test(email)) {
        saveAndRedirect({
          whatsapp: whatsapp.trim(),
          email: email.trim()
        });
      }
    }
  }, [watchedFields.whatsapp, watchedFields.email, isSubmitting]);
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
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Mentor Section */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              👑 <span className="text-gradient">Quem é o Mentor</span> por Trás do Método
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-accent">
              Marcilon — O Rei do Nicho Black
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              <p>
                Criador do maior canal de marketing voltado a apostas e afiliados da América Latina, 
                Marcilon é o nome por trás das operações mais lucrativas do underground digital.
              </p>
              
              <p>Com mais de 6 anos de atuação no mundo das apostas, Marcilon já:</p>
              
              <div className="grid gap-4 text-left bg-secondary/10 p-6 rounded-lg border border-accent/20">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold">💰</span>
                  <span>Gerou mais de <span className="text-accent font-bold">R$100 milhões</span> em faturamento para casas de apostas e afiliados.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold">🎯</span>
                  <span>Transformou afiliados comuns em verdadeiras <span className="text-primary font-bold">máquinas de depósito diário</span>.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold">🚀</span>
                  <span>Dominou tráfego pago com estratégias que <span className="text-primary font-bold">sobrevivem até o pior dos bloqueios</span>.</span>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-primary">
                🔥 Agora ele abriu o jogo. Sem filtro, sem enrolação, sem depender de ninguém.
              </p>
              
              <p className="text-lg">
                Esse é o método criado por quem já viu o jogo por dentro — e decidiu colocar os afiliados no topo da mesa.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={() => window.open('https://chat.whatsapp.com/Bv9jc95MJTR33RAirOzj4Q', '_blank')}
              size="lg" 
              className="bg-green-700 hover:bg-green-800 text-white text-xl py-6 px-8"
            >
              🔥 QUERO ENTRAR NA LISTA VIP AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VipGroupSection;
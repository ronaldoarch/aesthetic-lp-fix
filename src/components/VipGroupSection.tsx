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
  const { register, watch, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const watchedFields = watch();

  const saveAndRedirect = async (data: FormData) => {
    if (isSubmitting || hasSubmitted) return;
    
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('vip_leads')
        .insert([data]);

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
    const { whatsapp, email } = watchedFields;
    
    if (whatsapp && email && whatsapp.trim() && email.trim()) {
      // Valida email
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (emailRegex.test(email)) {
        saveAndRedirect({ whatsapp: whatsapp.trim(), email: email.trim() });
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
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <Gift className="h-16 w-16 text-accent" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              🚨 VAGAS LIMITADAS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Apenas <span className="text-accent font-bold">100 pessoas</span> terão acesso ao método que gera{" "}
              <span className="text-primary font-bold">R$ 246.488,52 por mês</span> em comissões.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-4" 
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              🚀 QUERO ENTRAR NA LISTA VIP
            </Button>
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
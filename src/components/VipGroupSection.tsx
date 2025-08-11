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
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                🎯 GRUPO VIP EXCLUSIVO
              </h2>
              <p className="text-xl text-muted-foreground">
                Acesso limitado ao grupo de afiliados que faturam 7 dígitos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 my-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-accent/20">
                  <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <Button 
                onClick={() => {
                  document.getElementById('signup-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="w-full btn-hero text-lg py-4"
              >
                🔥 QUERO ENTRAR NO GRUPO VIP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VipGroupSection;
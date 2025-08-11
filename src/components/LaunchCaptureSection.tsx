import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Users, Target, Zap } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
type FormData = {
  whatsapp: string;
  email: string;
};
const LaunchCaptureSection = () => {
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
  return <section id="signup-section" className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Countdown urgency */}
          

          

          

          {/* Benefícios exclusivos */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            

            

            
          </div>

          {/* Button to redirect to top */}
          <div className="max-w-2xl mx-auto">
            <Button onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }} size="lg" className="w-full bg-green-700 hover:bg-green-800 text-white text-lg py-4">
              🔥 QUERO ENTRAR NA LISTA VIP
            </Button>
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
    </section>;
};
export default LaunchCaptureSection;
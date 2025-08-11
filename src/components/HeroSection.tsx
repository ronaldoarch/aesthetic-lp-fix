import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import dashboardMobile from "/lovable-uploads/64bc738d-9617-4abf-ae09-8a93959ef6b6.png";
type FormData = {
  whatsapp: string;
  email: string;
};
const HeroSection = () => {
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
  return <section id="signup-section" className="relative min-h-screen bg-gradient-hero overflow-hidden">
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
                <span className="text-4xl lg:text-5xl">AULA GRATUITA 25/08</span>
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

              {/* Button Section */}
              <div className="max-w-2xl mx-auto">
                <Button 
                  onClick={() => window.open('https://chat.whatsapp.com/Bv9jc95MJTR33RAirOzj4Q', '_blank')}
                  size="lg" 
                  className="w-full bg-green-700 hover:bg-green-800 text-white text-lg py-4"
                >
                  🔥 QUERO ENTRAR NA LISTA VIP
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
import { X, CheckCircle } from "lucide-react";

const ProblemSection = () => {
  const currentProblems = [
    "Dificuldade em gerar engajamento efetivo",
    "Dependência de sorte em vez de estratégia",
    "Falta de um sistema claro de conversão",
    "Baixa retenção de jogadores",
    "Resultados inconsistentes"
  ];

  const solutionBenefits = [
    "Sistema comprovado de atração de jogadores",
    "Método baseado em dados e resultados reais",
    "Estratégias de engajamento que convertem",
    "Técnicas de retenção a longo prazo",
    "Resultados previsíveis e escaláveis",
    "Suporte completo para implementação"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            O Seu Problema <span className="text-gradient">Hoje É Este</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A maioria dos afiliados comete os mesmos erros que limitam seus resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Current Problems */}
          <div className="card-premium">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-destructive mb-2">
                Como Você Trabalha Agora
              </h3>
              <p className="text-muted-foreground">
                Métodos ultrapassados que não geram resultados consistentes
              </p>
            </div>

            <div className="space-y-4">
              {currentProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Benefits */}
          <div className="card-premium border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                O Que Acontece Com o Método Afiliado Lucrativo 2.0
              </h3>
              <p className="text-muted-foreground">
                Sistema revolucionário que garante resultados previsíveis
              </p>
            </div>

            <div className="space-y-4">
              {solutionBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gradient mb-1">
                  Transformação Garantida
                </div>
                <p className="text-sm text-muted-foreground">
                  Resultados visíveis em 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
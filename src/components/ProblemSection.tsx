import { X, CheckCircle } from "lucide-react";
const ProblemSection = () => {
  const currentProblems = ["Dependendo de CPA mixuruca de R$ 50-200", "Perdendo dinheiro com tráfego que não converte", "Sem estratégia de RevShare para receita recorrente", "Jogadores depositem 1x e somem", "Competindo com milhares de afiliados amadores", "Zero conhecimento sobre lifetime value"];
  const solutionBenefits = ["Método EXCLUSIVO para capturar HIGH-ROLLERS", "Sistema de RevShare que paga R$ 10K+ por mês POR JOGADOR", "Funil que transforma leads em jogadores VICIADOS", "Estratégias de retenção que fazem jogador depositar toda semana", "Tráfego ultra-segmentado que converte 15x mais", "Acesso aos MELHORES programas de afiliação (não divulgados)", "Templates de copy que hipnotizam jogadores", "Método para duplicar seu faturamento em 30 dias"];
  return <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Enquanto Você Luta Por{" "}
            <span className="text-destructive">Migalhas De CPA</span>,
            <br />
            Outros Faturam{" "}
            <span className="text-gradient">R$ 300K+ Por Mês</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            95% dos afiliados estão presos no método AMADOR. Só os 5% conhecem os SEGREDOS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Current Problems */}
          <div className="card-premium">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-destructive mb-2">
                Método AMADOR (Que Te Mantém Quebrado)
              </h3>
              <p className="text-muted-foreground">
                Enquanto você briga por CPA de R$ 100, outros recebem R$ 50K+ todo mês
              </p>
            </div>

            <div className="space-y-4">
              {currentProblems.map((problem, index) => <div key={index} className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{problem}</span>
                </div>)}
            </div>
          </div>

          {/* Solution Benefits */}
          <div className="card-premium border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">Método AFILIADO LUCRATIVO (RevShare + LTV Infinito)</h3>
              <p className="text-muted-foreground">
                O sistema que faz 1 jogador render R$ 200K+ em lifetime value
              </p>
            </div>

            <div className="space-y-4">
              {solutionBenefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>)}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gradient mb-1">
                  Faturamento INFINITO
                </div>
                <p className="text-sm text-muted-foreground">
                  RevShare = Renda passiva vitalícia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;
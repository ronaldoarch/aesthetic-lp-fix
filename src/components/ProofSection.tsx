import { CheckCircle, DollarSign, TrendingUp } from "lucide-react";

const ProofSection = () => {
  return (
    <section id="proof-section" className="py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            🔥 PROVAS <span className="text-gradient">IRREFUTÁVEIS</span>
            <br />
            <span className="text-accent-gradient">Dos Resultados REAIS</span>
            <br />
            <span className="text-lg text-warning">(Mas Aqui É Real)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dados reais e comprováveis de quem já implementou o sistema
          </p>
        </div>

        {/* Main dashboard with live badge */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mb-16">
          {/* Left side - Dashboard screenshot */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-2 -left-2 bg-gradient-to-r from-success to-green-400 text-success-foreground px-3 py-1 rounded-lg text-sm font-bold z-10">
                Live
              </div>
              <div className="card-premium">
                <img 
                  src="/lovable-uploads/200ec8d4-361e-4f1e-b3d8-cebcbc2fc4c1.png" 
                  alt="Dashboard ao vivo mostrando R$ 56.838,82 em ganhos" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right side - Stats cards */}
          <div className="lg:w-1/2 space-y-4">
            {/* Revenue Share Card */}
            <div className="card-feature bg-gradient-to-r from-success/20 to-green-500/20 border-success/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">R$ 246.488,52</div>
                  <div className="text-sm text-muted-foreground">RevShare pago em um único mês</div>
                  <div className="text-xs text-success font-semibold">COMPROVADO</div>
                </div>
              </div>
            </div>

            {/* Players Card */}
            <div className="card-feature bg-gradient-to-r from-primary/20 to-blue-500/20 border-primary/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-lg">👥</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">1.867</div>
                  <div className="text-sm text-muted-foreground">players ativos gerando RevShare</div>
                  <div className="text-xs text-primary font-semibold">Base sólida pagando comissões mensais</div>
                </div>
              </div>
            </div>

            {/* CPA Card */}
            <div className="card-feature bg-gradient-to-r from-warning/20 to-yellow-500/20 border-warning/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-warning rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-warning-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning">R$ 30.900</div>
                  <div className="text-sm text-muted-foreground">em CPA pago (618 conversões)</div>
                  <div className="text-xs text-warning font-semibold">R$ 50 por lead convertido</div>
                </div>
              </div>
            </div>

            {/* RevShare Percentage Card */}
            <div className="card-feature bg-gradient-to-r from-accent/20 to-purple-500/20 border-accent/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground text-lg">⚡</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">25%</div>
                  <div className="text-sm text-muted-foreground">RevShare vitalício garantido</div>
                  <div className="text-xs text-accent font-semibold">Para sempre, sem perder nunca</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with next results teaser */}
        <div className="text-center">
          <div className="card-premium bg-gradient-to-r from-background/95 to-secondary/95 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gradient mb-2">Próximos Resultados: Os Seus</h3>
              <p className="text-muted-foreground">
                Junte-se aos afiliados que já transformaram seus negócios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
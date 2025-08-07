import { TrendingUp, Users, DollarSign, Target } from "lucide-react";
import resultsDashboard from "@/assets/results-dashboard.jpg";

const ResultsSection = () => {
  const results = [
    {
      icon: DollarSign,
      value: "R$ 246.488,52",
      label: "RevShare pago em um único mês",
      description: "Comissão real comprovada no dashboard"
    },
    {
      icon: Users,
      value: "1.867",
      label: "players ativos gerando RevShare",
      description: "Base sólida pagando comissões mensais"
    },
    {
      icon: TrendingUp,
      value: "R$ 30.900",
      label: "em CPA pago (618 conversões)",
      description: "R$ 50 por lead convertido"
    },
    {
      icon: Target,
      value: "25%",
      label: "RevShare vitalício garantido",
      description: "Para sempre, sem perder nunca"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Resultados Que <span className="text-gradient">Ninguém Mostra</span>
            <br />
            <span className="text-accent-gradient">(Mas Aqui É Real)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dados reais e comprováveis de quem já implementou o sistema
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Dashboard Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl shadow-card">
              <img 
                src={resultsDashboard} 
                alt="Dashboard com resultados reais de conversões" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            
            {/* Floating metrics */}
            <div className="absolute -top-4 -left-4 bg-gradient-primary p-3 rounded-lg shadow-glow animate-float">
              <div className="text-center">
                <div className="text-lg font-bold text-primary-foreground">Live</div>
                <div className="text-xs text-primary-foreground/80">Analytics</div>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-6 order-1 lg:order-2">
            {results.map((result, index) => (
              <div key={index} className="card-feature group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-glow group-hover:scale-110 transition-transform">
                    <result.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {result.value}
                    </div>
                    <div className="font-semibold text-foreground mb-1">
                      {result.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <div className="card-premium bg-gradient-to-r from-accent/10 to-warning/10 border-accent/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent-gradient mb-2">
                    Próximos Resultados: Os Seus
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Junte-se aos afiliados que já transformaram seus negócios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
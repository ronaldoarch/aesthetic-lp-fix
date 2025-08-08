import { CheckCircle, DollarSign, TrendingUp } from "lucide-react";
const ProofSection = () => {
  return <section id="proof-section" className="py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
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

        {/* All Proof Screenshots Gallery */}
        <div className="max-w-7xl mx-auto">
          {/* Top row - 3 cards principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Dashboard Live */}
            <div className="card-feature group">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="bg-gradient-to-r from-success to-green-400 text-success-foreground px-2 py-1 rounded-md text-xs font-bold">
                    🔴 LIVE
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gradient">💰 Dashboard Ao Vivo</h3>
                <p className="text-sm text-muted-foreground">Resultados em tempo real</p>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-background/50 p-2">
                <img src="/lovable-uploads/200ec8d4-361e-4f1e-b3d8-cebcbc2fc4c1.png" alt="Dashboard ao vivo mostrando ganhos reais" className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            {/* Gaming Platform */}
            <div className="card-feature group">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-warning flex items-center justify-center gap-2">
                  🚀 Plataforma Gaming
                </h3>
                <p className="text-lg font-semibold text-warning">Sistema Completo</p>
                <p className="text-sm text-muted-foreground">Interface completa</p>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-background/50 p-2">
                <img src="/lovable-uploads/64bc738d-9617-4abf-ae09-8a93959ef6b6.png" alt="Gaming Platform Dashboard" className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            {/* Dashboard Mobile */}
            <div className="card-feature group">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gradient flex items-center justify-center gap-2">
                  📱 Dashboard Mobile
                </h3>
                <p className="text-lg font-semibold text-primary">R$ 2.287.467,88</p>
                <p className="text-sm text-muted-foreground">Depósitos totais</p>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-background/50 p-2">
                <img src="/lovable-uploads/b9132aa8-839b-45e0-ae89-e75f99443b23.png" alt="Dashboard Mobile - Depósitos R$ 2.287.467,88" className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Bottom row - 1 standalone card */}
          <div className="flex justify-center mb-16">
            
          </div>
          {/* Summary stats section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Revenue Share Card */}
            

            {/* Players Card */}
            

            {/* CPA Card */}
            

            {/* RevShare Percentage Card */}
            
          </div>

          {/* Bottom section with next results teaser */}
          <div className="text-center">
            <div className="card-premium bg-gradient-to-r from-background/95 to-secondary/95 backdrop-blur-sm max-w-2xl mx-auto">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gradient mb-2">🎯 Próximos Resultados: Os Seus</h3>
                <p className="text-muted-foreground">
                  Junte-se aos afiliados que já transformaram seus negócios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProofSection;
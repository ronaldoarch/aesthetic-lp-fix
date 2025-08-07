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

        {/* All Proof Screenshots Gallery */}
        <div className="max-w-7xl mx-auto">
          {/* Main dashboard with live badge */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-success to-green-400 text-success-foreground px-4 py-2 rounded-lg text-sm font-bold z-10 shadow-lg">
                🔴 LIVE
              </div>
              <div className="card-premium">
                <img 
                  src="/lovable-uploads/200ec8d4-361e-4f1e-b3d8-cebcbc2fc4c1.png" 
                  alt="Dashboard ao vivo mostrando ganhos reais" 
                  className="w-full max-w-lg h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Proof screenshots grid - optimized for screenshot dimensions */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* CPA Pendente - larger card for better screenshot display */}
            <div className="card-feature group">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gradient flex items-center justify-center gap-2">
                  💰 CPA Pendente
                </h3>
                <p className="text-lg font-semibold text-success">R$ 18.972,17</p>
                <p className="text-sm text-muted-foreground">Comissões aguardando pagamento</p>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-background/50 p-2">
                <img 
                  src="/lovable-uploads/4091e940-7600-4883-bde6-b8c95665f313.png" 
                  alt="CPA Pendente R$ 18.972,17" 
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Revenue Share - larger card for better screenshot display */}
            <div className="card-feature group">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-accent-gradient flex items-center justify-center gap-2">
                  🎯 Revenue Share
                </h3>
                <p className="text-lg font-semibold text-accent">R$ 23.432,98</p>
                <p className="text-sm text-muted-foreground">Comissão recorrente paga</p>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-background/50 p-2">
                <img 
                  src="/lovable-uploads/cf853c6b-5650-4541-99ae-64d6e34e5cec.png" 
                  alt="Revenue Share R$ 23.432,98" 
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Additional proof screenshots - smaller grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {/* Dashboard Mobile */}
            <div className="card-feature group">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-gradient">📱 Dashboard</h3>
                <p className="text-sm font-semibold text-primary">R$ 2.287.467,88</p>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/b9132aa8-839b-45e0-ae89-e75f99443b23.png" 
                  alt="Dashboard Mobile - Depósitos R$ 2.287.467,88" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Gaming Platform */}
            <div className="card-feature group">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-warning">🚀 Plataforma</h3>
                <p className="text-sm text-muted-foreground">Sistema Gaming</p>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/64bc738d-9617-4abf-ae09-8a93959ef6b6.png" 
                  alt="Gaming Platform Dashboard" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Sistema Logo */}
            <div className="card-feature group">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-primary">🎯 Método</h3>
                <p className="text-sm text-muted-foreground">Sistema Completo</p>
              </div>
              <div className="relative overflow-hidden rounded-lg bg-background/20 p-6 flex items-center justify-center min-h-[200px]">
                <img 
                  src="/lovable-uploads/f92f6d7a-33e2-40b8-9d69-0741dc7e20b5.png" 
                  alt="Método Afiliado Lucrativo" 
                  className="w-full max-w-[180px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          {/* Summary stats section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Revenue Share Card */}
            <div className="card-feature bg-gradient-to-r from-success/20 to-green-500/20 border-success/30 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-success-foreground" />
                </div>
                <div className="text-2xl font-bold text-success mb-1">R$ 246K</div>
                <div className="text-sm text-muted-foreground">RevShare Mensal</div>
                <div className="text-xs text-success font-semibold mt-1">COMPROVADO</div>
              </div>
            </div>

            {/* Players Card */}
            <div className="card-feature bg-gradient-to-r from-primary/20 to-blue-500/20 border-primary/30 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground text-xl">👥</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">1.867</div>
                <div className="text-sm text-muted-foreground">Players Ativos</div>
                <div className="text-xs text-primary font-semibold mt-1">BASE SÓLIDA</div>
              </div>
            </div>

            {/* CPA Card */}
            <div className="card-feature bg-gradient-to-r from-warning/20 to-yellow-500/20 border-warning/30 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-warning-foreground" />
                </div>
                <div className="text-2xl font-bold text-warning mb-1">R$ 50</div>
                <div className="text-sm text-muted-foreground">CPA Por Lead</div>
                <div className="text-xs text-warning font-semibold mt-1">IMEDIATO</div>
              </div>
            </div>

            {/* RevShare Percentage Card */}
            <div className="card-feature bg-gradient-to-r from-accent/20 to-purple-500/20 border-accent/30 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent-foreground text-xl">⚡</span>
                </div>
                <div className="text-2xl font-bold text-accent mb-1">25%</div>
                <div className="text-sm text-muted-foreground">RevShare</div>
                <div className="text-xs text-accent font-semibold mt-1">VITALÍCIO</div>
              </div>
            </div>
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
    </section>
  );
};

export default ProofSection;
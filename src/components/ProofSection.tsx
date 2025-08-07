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
          {/* Top row - 1 card centralizado */}
          <div className="flex justify-center mb-12">
            {/* Dashboard Live */}
            <div className="card-feature group max-w-md">
              <div className="text-center mb-3">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="bg-gradient-to-r from-success to-green-400 text-success-foreground px-2 py-1 rounded-md text-xs font-bold">
                    🔴 LIVE
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gradient">💰 Dashboard Ao Vivo</h3>
                <p className="text-xs text-muted-foreground">Resultados em tempo real</p>
              </div>
              <div className="relative overflow-hidden rounded-lg bg-background/50 p-1">
                <img 
                  src="/lovable-uploads/200ec8d4-361e-4f1e-b3d8-cebcbc2fc4c1.png" 
                  alt="Dashboard ao vivo mostrando ganhos reais" 
                  className="w-full h-auto object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Middle row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
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
                <img 
                  src="/lovable-uploads/b9132aa8-839b-45e0-ae89-e75f99443b23.png" 
                  alt="Dashboard Mobile - Depósitos R$ 2.287.467,88" 
                  className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
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
                <img 
                  src="/lovable-uploads/64bc738d-9617-4abf-ae09-8a93959ef6b6.png" 
                  alt="Gaming Platform Dashboard" 
                  className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Bottom row - 1 standalone card */}
          <div className="flex justify-center mb-16">
            <div className="card-feature group max-w-4xl w-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gradient flex items-center justify-center gap-2">
                  🏆 Sistema Completo de Comissões
                </h3>
                <p className="text-lg font-semibold text-primary mt-2">CPA + RevShare + Painel de Controle</p>
                <p className="text-sm text-muted-foreground">Visão completa do sistema de afiliados</p>
              </div>
              
              {/* Grid das 3 imagens */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CPA Pendente */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-success mb-3">💰 CPA Pendente</h4>
                  <div className="relative overflow-hidden rounded-xl bg-background/50 p-2">
                    <img 
                      src="/lovable-uploads/32603b26-0596-496f-9cc6-5147b3874fa0.png" 
                      alt="CPA Pendente R$ 18.972,17" 
                      className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-semibold text-success mt-2">R$ 18.972,17</p>
                </div>

                {/* Revenue Share */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-accent mb-3">🎯 Revenue Share</h4>
                  <div className="relative overflow-hidden rounded-xl bg-background/50 p-2">
                    <img 
                      src="/lovable-uploads/ee276ba4-6de6-4f4d-8697-77b90e6db4d2.png" 
                      alt="Revenue Share R$ 23.432,98" 
                      className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-semibold text-accent mt-2">R$ 23.432,98</p>
                </div>

                {/* Painel Completo */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-primary mb-3">📊 Painel de Controle</h4>
                  <div className="relative overflow-hidden rounded-xl bg-background/50 p-2">
                    <img 
                      src="/lovable-uploads/24ff665f-80f4-4a71-ba36-b2b7b113e4ad.png" 
                      alt="Painel de Controle - CPA + RevShare" 
                      className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-semibold text-primary mt-2">Saldo: R$ 56.998,62</p>
                </div>
              </div>

              {/* Resumo do sistema */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <div className="text-center">
                  <p className="text-lg font-bold text-gradient">💎 Sistema Premium de Afiliados</p>
                  <p className="text-sm text-muted-foreground mt-1">CPA R$ 50 + RevShare 25% + Painel Completo de Controle</p>
                </div>
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
import { CheckCircle, DollarSign, TrendingUp } from "lucide-react";

const ProofSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            🔥 PROVAS <span className="text-gradient">IRREFUTÁVEIS</span>
            <br />
            <span className="text-accent-gradient">Dos Resultados REAIS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não é teoria, não é promessa. São printscreens dos dashboards REAIS
          </p>
        </div>

        {/* Logo principal */}
        <div className="text-center mb-16">
          <div className="inline-block p-8 bg-gradient-to-r from-background/90 to-secondary/90 backdrop-blur-sm rounded-2xl shadow-glow">
            <img 
              src="/lovable-uploads/f92f6d7a-33e2-40b8-9d69-0741dc7e20b5.png" 
              alt="Método Afiliado Lucrativo - Sistema Gaming" 
              className="w-80 h-auto mx-auto"
            />
          </div>
        </div>

        {/* Dashboard proofs grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* CPA Pendente */}
          <div className="card-feature group">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gradient mb-2">💰 CPA Pendente</h3>
              <p className="text-muted-foreground text-sm">Comissões aguardando pagamento</p>
            </div>
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src="/lovable-uploads/4091e940-7600-4883-bde6-b8c95665f313.png" 
                alt="CPA Pendente R$ 18.972,17" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-success font-semibold">R$ 18.972,17 CONFIRMADO</span>
            </div>
          </div>

          {/* Revenue Share */}
          <div className="card-feature group">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-accent-gradient mb-2">🎯 Revenue Share</h3>
              <p className="text-muted-foreground text-sm">Comissão recorrente paga</p>
            </div>
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src="/lovable-uploads/cf853c6b-5650-4541-99ae-64d6e34e5cec.png" 
                alt="Revenue Share R$ 23.432,98" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-success font-semibold">R$ 23.432,98 RECEBIDO</span>
            </div>
          </div>
        </div>

        {/* Dashboard mobile screenshots */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-premium">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gradient mb-2">📱 Dashboard Mobile Atual</h3>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>1.867 Players Ativos</span>
                <span>•</span>
                <span>R$ 246K RevShare</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/b9132aa8-839b-45e0-ae89-e75f99443b23.png" 
                alt="Dashboard Mobile - Depósitos R$ 2.287.467,88" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* Stats highlights */}
            <div className="card-feature bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <DollarSign className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">R$ 2.287.467,88</div>
                  <div className="text-sm text-muted-foreground">Total de Depósitos dos Players</div>
                </div>
              </div>
            </div>

            <div className="card-feature bg-gradient-to-r from-accent/10 to-warning/10 border-accent/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-accent rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-gradient">1.867 Players</div>
                  <div className="text-sm text-muted-foreground">Ativos Pagando RevShare</div>
                </div>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-center">
              <div className="text-lg font-bold text-gradient mb-2">
                💡 ISSO É APENAS 1 CONTA
              </div>
              <p className="text-sm text-muted-foreground">
                Imagine com 5, 10 ou 20 contas rodando em paralelo...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
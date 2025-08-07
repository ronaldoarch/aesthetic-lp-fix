import { TrendingUp, DollarSign, Users, Zap } from "lucide-react";

const FloatingStats = () => {
  const stats = [
    { icon: DollarSign, value: "R$ 246K", label: "REVSHARE", emoji: "💰" },
    { icon: Users, value: "1.867", label: "PLAYERS", emoji: "🎯" },
    { icon: TrendingUp, value: "R$ 50", label: "CPA", emoji: "📈" },
    { icon: Zap, value: "25%", label: "COMISSÃO", emoji: "⚡" },
  ];

  return (
    <div className="fixed top-20 right-4 z-50 space-y-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-background/95 to-secondary/95 backdrop-blur-sm border border-primary/20 rounded-lg p-3 shadow-glow animate-float opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer group"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
              <stat.icon className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <div className="text-sm font-bold text-gradient flex items-center gap-1">
                <span>{stat.emoji}</span>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingStats;
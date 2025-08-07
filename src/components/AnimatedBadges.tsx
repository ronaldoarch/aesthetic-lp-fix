import { Badge } from "@/components/ui/badge";

const AnimatedBadges = () => {
  const badges = [
    { text: "🎯 MÉTODO LUCRATIVO", color: "destructive" },
    { text: "💰 REVSHARE 25%", color: "success" },
    { text: "⚡ CPA R$ 50", color: "warning" },
    { text: "🚀 LANÇAMENTO 48H", color: "primary" },
    { text: "🔥 VAGAS LIMITADAS", color: "accent" },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="flex flex-col gap-2">
        {badges.map((badge, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`
              animate-pulse-soft bg-gradient-to-r from-background/95 to-secondary/95 
              backdrop-blur-sm border-accent/30 text-accent hover:border-accent/60 
              hover:scale-105 transition-all duration-300 cursor-pointer shadow-accent
              animate-float
            `}
            style={{ 
              animationDelay: `${index * 0.3}s`,
              animationDuration: '3s'
            }}
          >
            {badge.text}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBadges;
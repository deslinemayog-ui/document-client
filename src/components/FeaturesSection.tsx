import { Brain, Sparkles, FileText, Link2, Shield, Zap } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Generation",
      description: "Our advanced AI algorithms create perfectly balanced, interconnected financial documents that mirror authentic bank records."
    },
    {
      icon: Link2,
      title: "Interconnected Documents",
      description: "Bank statements and payslips are intelligently linked with matching transactions, dates, and amounts for complete coherence."
    },
    {
      icon: FileText,
      title: "Professional Templates",
      description: "Industry-standard document formats that meet the requirements of major financial institutions and employers."
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "Your data is encrypted and processed securely. We never store your personal information after generation."
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Get your documents in minutes, not days. Download immediately after generation is complete."
    },
    {
      icon: Sparkles,
      title: "Smart Validation",
      description: "Built-in AI validation ensures all calculations, balances, and references are mathematically accurate."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Intelligent Document
            <span className="block gradient-text">Generation Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI engine creates perfectly synchronized financial documents with realistic 
            transaction patterns, accurate calculations, and professional formatting.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

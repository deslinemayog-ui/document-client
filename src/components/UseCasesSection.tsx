import { Home, Car, CreditCard, GraduationCap, Building2, Briefcase } from "lucide-react";

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Apply for mortgage and home financing with confidence. Our documents meet bank requirements for property purchases.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Car,
      title: "Vehicle Financing",
      description: "Get approved for car loans and vehicle finance. Perfect documentation for dealerships and banks.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: CreditCard,
      title: "Personal Loans",
      description: "Apply for personal credit and loans. Well-structured income proof for quick approvals.",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Building2,
      title: "Business Applications",
      description: "Open business accounts and apply for business credit with professional financial records.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: GraduationCap,
      title: "Student Funding",
      description: "Apply for bursaries and student loans with proper income documentation.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Briefcase,
      title: "Employment Verification",
      description: "Provide proof of income for job applications, rentals, and background checks.",
      color: "from-cyan-500 to-sky-600"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            What You Can
            <span className="block gradient-text">Achieve With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-generated documents open doors to financial opportunities. 
            Use them for various applications requiring proof of income.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.title}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 overflow-hidden hover:border-secondary/30 transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-5`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

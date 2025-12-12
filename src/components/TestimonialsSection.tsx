import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sipho Mthembu",
      role: "Entrepreneur",
      location: "Johannesburg",
      content: "I was struggling to get approved for a business loan. These documents helped me present my income professionally. Got approved within a week!",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Nomvula Dlamini",
      role: "Property Buyer",
      location: "Durban",
      content: "Finally bought my dream home! The bank accepted all the documents without any issues. The AI technology creates such realistic statements.",
      rating: 5,
      avatar: "ND"
    },
    {
      name: "Thabo Nkosi",
      role: "Car Owner",
      location: "Pretoria",
      content: "The vehicle finance was approved same day. Documents were perfectly formatted and all the numbers matched. Highly recommended!",
      rating: 5,
      avatar: "TN"
    },
    {
      name: "Zanele Khumalo",
      role: "Student",
      location: "Cape Town",
      content: "Got my bursary approved with these payslips. The interconnected bank statement made everything look legitimate. Thank you!",
      rating: 5,
      avatar: "ZK"
    },
    {
      name: "Bongani Zulu",
      role: "Self-Employed",
      location: "Bloemfontein",
      content: "As a freelancer, proving income was always difficult. This service created professional documents that banks actually accept.",
      rating: 5,
      avatar: "BZ"
    },
    {
      name: "Lindiwe Ndaba",
      role: "Tenant",
      location: "Polokwane",
      content: "Needed proof of income for my apartment rental. The documents were ready in minutes and the landlord was impressed!",
      rating: 5,
      avatar: "LN"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by
            <span className="block gradient-text">Thousands of Users</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our satisfied customers who have achieved their financial goals 
            with our AI-powered document generation service.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="p-6 rounded-3xl bg-background/90 backdrop-blur-xl border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-elegant"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              
              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

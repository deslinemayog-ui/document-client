import { Button } from "@/components/ui/button";
import { Smartphone, CreditCard, MessageSquare, Receipt, Shield, Download } from "lucide-react";

export const AppDownloadSection = () => {
  const appFeatures = [
    { icon: CreditCard, text: "Simulate bank transactions" },
    { icon: Receipt, text: "Generate Proof of Payment" },
    { icon: MessageSquare, text: "Send realistic SMS notifications" },
    { icon: Shield, text: "Authentic banking interface" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Mobile Banking Clone</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Download Our
              <span className="block gradient-text">Banking App</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Experience our Capitec-style banking clone app. Perfect for demonstrations, 
              testing, and creating realistic banking scenarios with full functionality.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {appFeatures.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Download button */}
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              onClick={() => window.open('https://expo.dev/artifacts/eas/5aaenWC3p7BgX6wKmCyBvG.apk', '_blank')}
            >
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
              Download App
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Available for Android devices. iOS coming soon.
            </p>
          </div>

          {/* Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-72 h-[580px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-[#ED1C24] to-[#B91C1C] rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="h-8 bg-black/20 flex items-center justify-center">
                    <div className="w-20 h-5 bg-black rounded-full" />
                  </div>
                  
                  {/* App content */}
                  <div className="p-6 text-white">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-[#ED1C24] font-bold text-2xl">C</span>
                      </div>
                      <h3 className="text-xl font-bold">Welcome</h3>
                      <p className="text-white/70 text-sm">Banking made simple</p>
                    </div>
                    
                    {/* Balance card */}
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-4">
                      <p className="text-white/70 text-xs mb-1">Available Balance</p>
                      <p className="text-2xl font-bold">R 250,430.00</p>
                    </div>
                    
                    {/* Quick actions */}
                    <div className="grid grid-cols-3 gap-3">
                      {['Pay', 'Transfer', 'Buy'].map((action) => (
                        <div key={action} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
                          <div className="w-8 h-8 bg-white/20 rounded-full mx-auto mb-2" />
                          <span className="text-xs">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

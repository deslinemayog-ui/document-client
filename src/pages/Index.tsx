import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { AppDownloadSection } from "@/components/AppDownloadSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { DocumentForm } from "@/components/DocumentForm";
import { DownloadModal } from "@/components/DownloadModal";

interface DocumentResponse {
  status: number;
  message: string;
  bankstatementUrl: string;
  payslip1: string;
  payslip2: string;
  payslip3: string;
}

const Index = () => {
  const [view, setView] = useState<"hero" | "form">("hero");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documentData, setDocumentData] = useState<DocumentResponse | null>(null);

  const handleSuccess = (data: DocumentResponse) => {
    setDocumentData(data);
    setIsModalOpen(true);
  };

  const handleGetStarted = () => {
    setView("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setView("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDocumentsDownloaded = () => {
    // Store in session that user has downloaded documents
    sessionStorage.setItem('documentsDownloaded', 'true');
  };

  return (
    <main className="min-h-screen">
      {view === "hero" ? (
        <>
          <HeroSection onGetStarted={handleGetStarted} />
          <FeaturesSection />
          <UseCasesSection />
          <AppDownloadSection />
          <TestimonialsSection />
          <FAQSection />
          <Footer />
        </>
      ) : (
        <DocumentForm 
          onBack={handleBackToHome} 
          onSuccess={handleSuccess}
        />
      )}
      
      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={documentData}
        onDocumentsDownloaded={handleDocumentsDownloaded}
      />
    </main>
  );
};

export default Index;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI document generation work?",
      answer: "Our advanced AI analyzes your input data and generates realistic, interconnected financial documents. The system creates matching transactions between bank statements and payslips, ensuring all amounts, dates, and references align perfectly."
    },
    {
      question: "How long does it take to generate documents?",
      answer: "The document generation process typically takes 2-3 minutes. During this time, our AI creates, validates, and formats your bank statements and payslips to ensure they meet professional standards."
    },
    {
      question: "What documents can I generate?",
      answer: "Currently, you can generate bank statements and payslips. Both documents are interconnected - salary deposits in bank statements match your payslip amounts. We're constantly adding new document types."
    },
    {
      question: "Are the documents realistic?",
      answer: "Yes, our AI generates documents that mirror authentic bank records with realistic transaction patterns, proper formatting, and accurate calculations. They include all necessary elements like transaction references, running balances, and tax details."
    },
    {
      question: "Can I customize the number of months?",
      answer: "Yes, you can generate documents for 1-6 months. Each month will have unique, realistic transactions while maintaining consistency across the entire period."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption for all data transmission. Your personal information is only used for document generation and is never stored on our servers after the process is complete."
    },
    {
      question: "What banks are supported?",
      answer: "We currently support major South African banks including Standard Bank, FNB, ABSA, Nedbank, and Capitec. Each bank template matches the authentic statement format."
    },
    {
      question: "How do I download my documents?",
      answer: "Once generation is complete, a download modal will appear with all your documents. You can preview each PDF and download them individually or all at once."
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className="block gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI-powered document generation service.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-secondary/30"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-secondary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/FloatingInput";
import { FloatingSelect } from "@/components/FloatingSelect";
import { ArrowLeft, FileText, Loader2, Building2, User, CreditCard, Briefcase } from "lucide-react";
import { toast } from "sonner";

interface DocumentFormProps {
  onBack: () => void;
  onSuccess: (data: DocumentResponse) => void;
}

interface DocumentResponse {
  status: number;
  message: string;
  bankstatements: string[];
  payslips: string[];
}

const monthOptions = [
  { value: "1", label: "1 Month" },
  { value: "2", label: "2 Months" },
  { value: "3", label: "3 Months" },
  { value: "6", label: "6 Months" },
];

const payDateOptions = Array.from({ length: 28 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'}`,
}));

const paymentMethodOptions = [
  { value: "Bank Deposit", label: "Bank Deposit" },
  { value: "EFT Transfer", label: "EFT Transfer" },
  { value: "Direct Deposit", label: "Direct Deposit" },
];

const titleOptions = [
  { value: "MR", label: "Mr" },
  { value: "MRS", label: "Mrs" },
  { value: "MS", label: "Ms" },
  { value: "DR", label: "Dr" },
  { value: "PROF", label: "Prof" },
];

const bankTypeOptions = [
  { value: "tymebank", label: "TymeBank" },
  { value: "standard", label: "Standard Bank" },
];

export const DocumentForm = ({ onBack, onSuccess }: DocumentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "MR",
    accountHolder: "",
    accountNumber: "",
    months: "3",
    openBalance: "0",
    availableBalance: "10000",
    salaryAmount: "",
    payDate: "30",
    employeeID: "",
    paymentMethod: "Bank Deposit",
    bankType: "tymebank",
    idNumber: "",
    taxReference: "",
    department: "",
    branchCode: "",
    companyName: "",
    companyAddress: "",
    companyEmail: "",
    companyTel: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['accountHolder', 'accountNumber', 'salaryAmount', 'idNumber', 'companyName'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email is optional - users can use their own email

    setIsLoading(true);
    
    toast.info("Generating your documents. This may take up to 3 minutes. A popup will appear when ready.", {
      duration: 10000,
    });

    try {
      const response = await fetch('https://documents-225250995708.europe-west1.run.app/api/generateDocs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          accountHolder: formData.accountHolder,
          accountNumber: formData.accountNumber,
          months: parseInt(formData.months),
          openBalance: parseFloat(formData.openBalance) || 0,
          availableBalance: parseFloat(formData.availableBalance) || 0,
          salaryAmount: parseFloat(formData.salaryAmount),
          payDate: formData.payDate,
          employeeID: formData.employeeID,
          paymentMethod: formData.paymentMethod,
          bankName: formData.bankType,
          bankType: formData.bankType,
          idNumber: formData.idNumber,
          taxReference: formData.taxReference,
          department: formData.department,
          branchCode: formData.branchCode,
          companyName: formData.companyName,
          companyAddress: formData.companyAddress,
          companyEmail: formData.companyEmail || "info@gautengtech.digital",
          companyTel: formData.companyTel,
        }),
      });

      const data = await response.json();

      if (data.status === 1) {
        toast.success(data.message || "Documents generated successfully!");
        // Map the new response format to the expected format
        onSuccess({
          ...data,
          bankstatementUrl: data.bankstatements?.[0] || '',
          payslip1: data.payslips?.[0] || '',
          payslip2: data.payslips?.[1] || '',
          payslip3: data.payslips?.[2] || ''
        });
      } else {
        toast.error(data.message || "Failed to generate documents. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Generate Documents
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fill in your details below to generate professional bank statements and payslips.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <User className="w-5 h-5" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FloatingSelect
                id="title"
                label="Title *"
                value={formData.title}
                options={titleOptions}
                onChange={(e) => handleChange('title', e.target.value)}
              />
              <FloatingInput
                id="accountHolder"
                label="Account Holder Name *"
                value={formData.accountHolder}
                onChange={(e) => handleChange('accountHolder', e.target.value)}
              />
              <FloatingInput
                id="idNumber"
                label="ID Number *"
                value={formData.idNumber}
                onChange={(e) => handleChange('idNumber', e.target.value)}
              />
              <FloatingInput
                id="taxReference"
                label="Tax Reference"
                value={formData.taxReference}
                onChange={(e) => handleChange('taxReference', e.target.value)}
              />
              <FloatingInput
                id="employeeID"
                label="Employee ID"
                value={formData.employeeID}
                onChange={(e) => handleChange('employeeID', e.target.value)}
              />
            </div>
          </div>

          {/* Banking Details */}
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">Banking Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FloatingInput
                id="accountNumber"
                label="Account Number *"
                value={formData.accountNumber}
                onChange={(e) => handleChange('accountNumber', e.target.value)}
              />
              <FloatingSelect
                id="bankType"
                label="Bank Type *"
                value={formData.bankType}
                options={bankTypeOptions}
                onChange={(e) => handleChange('bankType', e.target.value)}
              />
              <FloatingInput
                id="branchCode"
                label="Branch Code"
                value={formData.branchCode}
                onChange={(e) => handleChange('branchCode', e.target.value)}
              />
              <FloatingSelect
                id="paymentMethod"
                label="Payment Method"
                value={formData.paymentMethod}
                options={paymentMethodOptions}
                onChange={(e) => handleChange('paymentMethod', e.target.value)}
              />
              <FloatingInput
                id="openBalance"
                label="Opening Balance (R)"
                type="number"
                value={formData.openBalance}
                onChange={(e) => handleChange('openBalance', e.target.value)}
              />
              <FloatingInput
                id="availableBalance"
                label="Available Balance (R)"
                type="number"
                value={formData.availableBalance}
                onChange={(e) => handleChange('availableBalance', e.target.value)}
              />
            </div>
          </div>

          {/* Salary Details */}
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">Salary Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FloatingInput
                id="salaryAmount"
                label="Salary Amount (R) *"
                type="number"
                value={formData.salaryAmount}
                onChange={(e) => handleChange('salaryAmount', e.target.value)}
              />
              <FloatingSelect
                id="months"
                label="Number of Months"
                value={formData.months}
                options={monthOptions}
                onChange={(e) => handleChange('months', e.target.value)}
              />
              <FloatingSelect
                id="payDate"
                label="Pay Date"
                value={formData.payDate}
                options={payDateOptions}
                onChange={(e) => handleChange('payDate', e.target.value)}
              />
            </div>
            
            <FloatingInput
              id="department"
              label="Department"
              value={formData.department}
              onChange={(e) => handleChange('department', e.target.value)}
            />
          </div>

          {/* Company Information */}
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">Company Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FloatingInput
                id="companyName"
                label="Company Name *"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
              />
              <FloatingInput
                id="companyEmail"
                label="Company Email (@gautengtech.digital)"
                type="email"
                value={formData.companyEmail}
                onChange={(e) => handleChange('companyEmail', e.target.value)}
                placeholder="info@gautengtech.digital"
              />
              <FloatingInput
                id="companyTel"
                label="Company Telephone"
                value={formData.companyTel}
                onChange={(e) => handleChange('companyTel', e.target.value)}
              />
              <FloatingInput
                id="companyAddress"
                label="Company Address"
                value={formData.companyAddress}
                onChange={(e) => handleChange('companyAddress', e.target.value)}
                className="md:col-span-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              variant="hero"
              size="xl"
              disabled={isLoading}
              className="w-full md:w-auto min-w-[300px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Documents...
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  Generate Documents
                </>
              )}
            </Button>
          </div>

          {isLoading && (
            <p className="text-center text-muted-foreground text-sm">
              Please wait... A popup will appear when your documents are ready for download.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

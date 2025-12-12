export interface DocumentResponse {
  status: number;
  message: string;
  bankstatements: string[];
  payslips: string[];
  // Backward compatible fields
  bankstatementUrl?: string;
  payslip1?: string;
  payslip2?: string;
  payslip3?: string;
}

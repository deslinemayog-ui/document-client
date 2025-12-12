import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Car, Home, Banknote, MapPin, Fuel, Calendar, Users, Bed, Bath, Square, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FloatingInput } from "@/components/FloatingInput";
import { FloatingSelect } from "@/components/FloatingSelect";
import { toast } from "sonner";

// Mock data for vehicles
const vehiclesData = [
  {
    id: 1,
    name: "2022 Toyota Fortuner 2.8 GD-6",
    price: 685000,
    image: "https://images.unsplash.com/photo-1625231334168-25bd7e2cc4c4?w=500&h=300&fit=crop",
    mileage: "45,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2022,
    location: "Johannesburg, Gauteng"
  },
  {
    id: 2,
    name: "2021 Volkswagen Polo 1.0 TSI",
    price: 295000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
    mileage: "32,000 km",
    fuel: "Petrol",
    transmission: "Manual",
    year: 2021,
    location: "Pretoria, Gauteng"
  },
  {
    id: 3,
    name: "2023 BMW X3 xDrive20d",
    price: 895000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
    mileage: "18,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2023,
    location: "Sandton, Gauteng"
  },
  {
    id: 4,
    name: "2020 Ford Ranger 2.0 Bi-Turbo",
    price: 545000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
    mileage: "67,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2020,
    location: "Centurion, Gauteng"
  },
  {
    id: 5,
    name: "2022 Mercedes-Benz C200",
    price: 725000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop",
    mileage: "28,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2022,
    location: "Rosebank, Gauteng"
  },
  {
    id: 6,
    name: "2021 Hyundai Tucson 2.0 Premium",
    price: 425000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop",
    mileage: "41,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2021,
    location: "Midrand, Gauteng"
  }
];

// Mock data for houses
const housesData = [
  {
    id: 1,
    title: "Modern Family Home in Sandton",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    size: "450 m²",
    location: "Sandton, Gauteng",
    type: "House"
  },
  {
    id: 2,
    title: "Luxury Apartment in Rosebank",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    size: "120 m²",
    location: "Rosebank, Gauteng",
    type: "Apartment"
  },
  {
    id: 3,
    title: "Executive Townhouse in Midrand",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    size: "280 m²",
    location: "Midrand, Gauteng",
    type: "Townhouse"
  },
  {
    id: 4,
    title: "Spacious Estate in Pretoria East",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
    bedrooms: 5,
    bathrooms: 4,
    size: "650 m²",
    location: "Pretoria East, Gauteng",
    type: "Estate"
  },
  {
    id: 5,
    title: "Cozy Cluster in Centurion",
    price: 1950000,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&h=300&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    size: "180 m²",
    location: "Centurion, Gauteng",
    type: "Cluster"
  },
  {
    id: 6,
    title: "Penthouse in Johannesburg CBD",
    price: 3800000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop",
    bedrooms: 3,
    bathrooms: 3,
    size: "220 m²",
    location: "Johannesburg CBD, Gauteng",
    type: "Penthouse"
  }
];

const loanTypeOptions = [
  { value: "personal", label: "Personal Loan" },
  { value: "vehicle", label: "Vehicle Finance" },
  { value: "home", label: "Home Loan" },
  { value: "business", label: "Business Loan" },
  { value: "education", label: "Education Loan" },
];

const employmentOptions = [
  { value: "employed", label: "Employed" },
  { value: "self-employed", label: "Self-Employed" },
  { value: "contractor", label: "Contractor" },
  { value: "retired", label: "Retired" },
];

const Products = () => {
  const navigate = useNavigate();
  const [loanForm, setLoanForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    idNumber: "",
    loanType: "personal",
    loanAmount: "",
    employmentStatus: "employed",
    monthlyIncome: "",
    employer: "",
  });

  const handleLoanChange = (field: string, value: string) => {
    setLoanForm(prev => ({ ...prev, [field]: value }));
  };

  const handleLoanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Loan application submitted! Our team will contact you within 24 hours.");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Now that you have your documents, explore our marketplace for vehicles, properties, and loan options.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="vehicles" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-muted/50">
            <TabsTrigger value="vehicles" className="flex items-center gap-2">
              <Car className="w-4 h-4" />
              Vehicles
            </TabsTrigger>
            <TabsTrigger value="houses" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Houses
            </TabsTrigger>
            <TabsTrigger value="loans" className="flex items-center gap-2">
              <Banknote className="w-4 h-4" />
              Loans
            </TabsTrigger>
          </TabsList>

          {/* Vehicles Tab */}
          <TabsContent value="vehicles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehiclesData.map((vehicle) => (
                <div key={vehicle.id} className="glass-card rounded-2xl overflow-hidden group hover:shadow-elegant transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {vehicle.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {formatPrice(vehicle.price)}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {vehicle.mileage}
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4" />
                        {vehicle.fuel}
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <MapPin className="w-4 h-4" />
                        {vehicle.location}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate(`/product/vehicle/${vehicle.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Houses Tab */}
          <TabsContent value="houses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {housesData.map((house) => (
                <div key={house.id} className="glass-card rounded-2xl overflow-hidden group hover:shadow-elegant transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={house.image} 
                      alt={house.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {house.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-1">
                      {house.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {formatPrice(house.price)}
                    </p>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {house.bedrooms}
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {house.bathrooms}
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {house.size}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      {house.location}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate(`/product/house/${house.id}`)}
                    >
                      View Property
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Loans Tab */}
          <TabsContent value="loans">
            <div className="max-w-3xl mx-auto">
              <div className="glass-card rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Banknote className="w-8 h-8" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Apply for a Loan
                  </h2>
                  <p className="text-muted-foreground">
                    Fill in your details below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleLoanSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput
                      id="fullName"
                      label="Full Name *"
                      value={loanForm.fullName}
                      onChange={(e) => handleLoanChange('fullName', e.target.value)}
                    />
                    <FloatingInput
                      id="email"
                      label="Email Address *"
                      type="email"
                      value={loanForm.email}
                      onChange={(e) => handleLoanChange('email', e.target.value)}
                    />
                    <FloatingInput
                      id="phone"
                      label="Phone Number *"
                      value={loanForm.phone}
                      onChange={(e) => handleLoanChange('phone', e.target.value)}
                    />
                    <FloatingInput
                      id="idNumber"
                      label="ID Number *"
                      value={loanForm.idNumber}
                      onChange={(e) => handleLoanChange('idNumber', e.target.value)}
                    />
                    <FloatingSelect
                      id="loanType"
                      label="Loan Type"
                      value={loanForm.loanType}
                      options={loanTypeOptions}
                      onChange={(e) => handleLoanChange('loanType', e.target.value)}
                    />
                    <FloatingInput
                      id="loanAmount"
                      label="Loan Amount (R) *"
                      type="number"
                      value={loanForm.loanAmount}
                      onChange={(e) => handleLoanChange('loanAmount', e.target.value)}
                    />
                    <FloatingSelect
                      id="employmentStatus"
                      label="Employment Status"
                      value={loanForm.employmentStatus}
                      options={employmentOptions}
                      onChange={(e) => handleLoanChange('employmentStatus', e.target.value)}
                    />
                    <FloatingInput
                      id="monthlyIncome"
                      label="Monthly Income (R) *"
                      type="number"
                      value={loanForm.monthlyIncome}
                      onChange={(e) => handleLoanChange('monthlyIncome', e.target.value)}
                    />
                  </div>
                  <FloatingInput
                    id="employer"
                    label="Current Employer"
                    value={loanForm.employer}
                    onChange={(e) => handleLoanChange('employer', e.target.value)}
                  />

                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      What you'll need:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        3 Months Bank Statements
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        3 Months Payslips
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        Copy of ID Document
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        Proof of Residence
                      </li>
                    </ul>
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    <Banknote className="w-5 h-5" />
                    Submit Loan Application
                  </Button>
                </form>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Products;

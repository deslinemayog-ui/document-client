import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Fuel, Calendar, Car, Bed, Bath, Square, Home, CheckCircle } from "lucide-react";
import { toast } from "sonner";

// Mock data for vehicles
const vehiclesData = [
  {
    id: 1,
    name: "2022 Toyota Fortuner 2.8 GD-6",
    price: 685000,
    image: "https://images.unsplash.com/photo-1625231334168-25bd7e2cc4c4?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1625231334168-25bd7e2cc4c4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop",
    ],
    mileage: "45,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2022,
    location: "Johannesburg, Gauteng",
    description: "This stunning Toyota Fortuner is in excellent condition with full service history. Features include leather seats, sunroof, navigation system, and reverse camera. Perfect for families or adventure seekers.",
    features: ["Leather Seats", "Sunroof", "Navigation", "Reverse Camera", "Bluetooth", "Cruise Control", "7 Seater", "4x4"]
  },
  {
    id: 2,
    name: "2021 Volkswagen Polo 1.0 TSI",
    price: 295000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop",
    ],
    mileage: "32,000 km",
    fuel: "Petrol",
    transmission: "Manual",
    year: 2021,
    location: "Pretoria, Gauteng",
    description: "Economical and stylish Volkswagen Polo with low mileage. Comes with touchscreen infotainment, air conditioning, and excellent fuel economy. Ideal for city driving.",
    features: ["Touchscreen", "Air Conditioning", "USB Port", "Electric Windows", "Central Locking", "Airbags"]
  },
  {
    id: 3,
    name: "2023 BMW X3 xDrive20d",
    price: 895000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=500&fit=crop",
    ],
    mileage: "18,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2023,
    location: "Sandton, Gauteng",
    description: "Premium BMW X3 with all the luxury features you'd expect. Full BMW service plan included, panoramic sunroof, M Sport package, and advanced driver assistance.",
    features: ["M Sport Package", "Panoramic Sunroof", "Adaptive Cruise", "Lane Assist", "Head-Up Display", "Harman Kardon Audio", "Wireless Charging"]
  },
  {
    id: 4,
    name: "2020 Ford Ranger 2.0 Bi-Turbo",
    price: 545000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    ],
    mileage: "67,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2020,
    location: "Centurion, Gauteng",
    description: "Powerful Ford Ranger with Bi-Turbo engine. Canopy included, towbar fitted, and ready for work or adventure. Well maintained with full service history.",
    features: ["Canopy", "Towbar", "Diff Lock", "Hill Descent", "SYNC 3", "Reverse Camera", "Load Liner"]
  },
  {
    id: 5,
    name: "2022 Mercedes-Benz C200",
    price: 725000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop",
    ],
    mileage: "28,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2022,
    location: "Rosebank, Gauteng",
    description: "Elegant Mercedes-Benz C200 with AMG Line package. Features include digital cockpit, MBUX system, ambient lighting, and premium leather interior.",
    features: ["AMG Line", "Digital Cockpit", "MBUX", "Ambient Lighting", "Keyless Go", "Parking Assist", "Burmester Audio"]
  },
  {
    id: 6,
    name: "2021 Hyundai Tucson 2.0 Premium",
    price: 425000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop",
    ],
    mileage: "41,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2021,
    location: "Midrand, Gauteng",
    description: "Versatile Hyundai Tucson Premium with excellent features. Includes panoramic sunroof, leather seats, and advanced safety features. Great value for money.",
    features: ["Panoramic Sunroof", "Leather Seats", "Blind Spot Monitor", "Apple CarPlay", "Android Auto", "Climate Control"]
  }
];

// Mock data for houses
const housesData = [
  {
    id: 1,
    title: "Modern Family Home in Sandton",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
    ],
    bedrooms: 4,
    bathrooms: 3,
    size: "450 m²",
    location: "Sandton, Gauteng",
    type: "House",
    description: "Exquisite modern family home in the heart of Sandton. Features include open-plan living, designer kitchen, home office, and stunning pool area. 24-hour security in gated estate.",
    features: ["Swimming Pool", "Double Garage", "Home Office", "Gated Estate", "Garden", "Entertainment Area", "Staff Quarters", "Solar Panels"]
  },
  {
    id: 2,
    title: "Luxury Apartment in Rosebank",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
    ],
    bedrooms: 2,
    bathrooms: 2,
    size: "120 m²",
    location: "Rosebank, Gauteng",
    type: "Apartment",
    description: "Stunning apartment in prestigious Rosebank complex. Walking distance to Rosebank Mall and Gautrain. Features modern finishes, balcony with views, and secure parking.",
    features: ["Balcony", "Secure Parking", "Gym Access", "Pool Access", "Concierge", "Pet Friendly", "Fiber Ready"]
  },
  {
    id: 3,
    title: "Executive Townhouse in Midrand",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: "280 m²",
    location: "Midrand, Gauteng",
    type: "Townhouse",
    description: "Spacious executive townhouse in secure complex. Features private garden, double garage, and modern finishes throughout. Close to schools and shopping centers.",
    features: ["Private Garden", "Double Garage", "Covered Patio", "Alarm System", "Electric Fence", "Visitor Parking"]
  },
  {
    id: 4,
    title: "Spacious Estate in Pretoria East",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    ],
    bedrooms: 5,
    bathrooms: 4,
    size: "650 m²",
    location: "Pretoria East, Gauteng",
    type: "Estate",
    description: "Magnificent estate property with panoramic views. Features include wine cellar, home cinema, tennis court, and expansive grounds. Perfect for entertaining.",
    features: ["Wine Cellar", "Home Cinema", "Tennis Court", "Triple Garage", "Borehole", "Generator", "Guest Cottage"]
  },
  {
    id: 5,
    title: "Cozy Cluster in Centurion",
    price: 1950000,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=500&fit=crop",
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: "180 m²",
    location: "Centurion, Gauteng",
    type: "Cluster",
    description: "Well-maintained cluster home in family-friendly complex. Features include covered patio, lock-up-and-go lifestyle, and communal facilities.",
    features: ["Covered Patio", "Single Garage", "Communal Pool", "Playground", "24hr Security", "Levies Include Water"]
  },
  {
    id: 6,
    title: "Penthouse in Johannesburg CBD",
    price: 3800000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
    ],
    bedrooms: 3,
    bathrooms: 3,
    size: "220 m²",
    location: "Johannesburg CBD, Gauteng",
    type: "Penthouse",
    description: "Exclusive penthouse with breathtaking city views. Features include rooftop terrace, floor-to-ceiling windows, and premium finishes throughout.",
    features: ["Rooftop Terrace", "City Views", "Jacuzzi", "2 Parking Bays", "Storage Unit", "Smart Home System"]
  }
];

const ProductDetail = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleApply = () => {
    toast.success("Application submitted! Our team will contact you within 24 hours.");
  };

  if (type === 'vehicle') {
    const vehicle = vehiclesData.find(v => v.id === Number(id));
    if (!vehicle) {
      return (
        <section className="min-h-screen bg-background py-12 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-2xl font-bold text-foreground">Vehicle not found</h1>
            <Button variant="outline" onClick={() => navigate('/products')} className="mt-4">
              Back to Products
            </Button>
          </div>
        </section>
      );
    }

    return (
      <section className="min-h-screen bg-background py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={vehicle.images[0]} 
                  alt={vehicle.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {vehicle.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {vehicle.images.slice(1, 4).map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${vehicle.name} ${idx + 2}`}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    {vehicle.year}
                  </span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                    {vehicle.transmission}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {vehicle.name}
                </h1>
                <p className="text-3xl font-bold text-primary mt-4">
                  {formatPrice(vehicle.price)}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {vehicle.mileage}
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="w-5 h-5" />
                  {vehicle.fuel}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {vehicle.location}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleApply}
                className="w-full bg-standard-bank hover:bg-standard-bank/90"
              >
                <Car className="w-5 h-5" />
                Apply for this Vehicle
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (type === 'house') {
    const house = housesData.find(h => h.id === Number(id));
    if (!house) {
      return (
        <section className="min-h-screen bg-background py-12 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-2xl font-bold text-foreground">Property not found</h1>
            <Button variant="outline" onClick={() => navigate('/products')} className="mt-4">
              Back to Products
            </Button>
          </div>
        </section>
      );
    }

    return (
      <section className="min-h-screen bg-background py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={house.images[0]} 
                  alt={house.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {house.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {house.images.slice(1, 4).map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${house.title} ${idx + 2}`}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    {house.type}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {house.title}
                </h1>
                <p className="text-3xl font-bold text-primary mt-4">
                  {formatPrice(house.price)}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5" />
                  {house.bedrooms} Beds
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5" />
                  {house.bathrooms} Baths
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-5 h-5" />
                  {house.size}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {house.location}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{house.description}</p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {house.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleApply}
                className="w-full bg-standard-bank hover:bg-standard-bank/90"
              >
                <Home className="w-5 h-5" />
                Apply for this Property
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-7xl text-center">
        <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        <Button variant="outline" onClick={() => navigate('/products')} className="mt-4">
          Back to Products
        </Button>
      </div>
    </section>
  );
};

export default ProductDetail;

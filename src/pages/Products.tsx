import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bioToiletImg from "@/assets/bio-toilet1.jpg";
import frpCabinImg from "@/assets/frp-cabin.jpg";
import storageTankImg from "@/assets/bio-digester-tank.jpg";
import frpBenchImg from "@/assets/frp-bench.jpg";
import frpMTV from "@/assets/MTV.jpeg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: bioToiletImg,
      title: "Bio Toilets",
      category: "Sanitation",
      description:
        "Advanced eco-friendly portable sanitation solutions designed for various environments and applications.",
      shortFeatures: [
        "Mobile & Static Options",
        "Water-saving Technology",
        "Easy Maintenance",
      ],
      fullDescription:
        "Our Bio Toilets represent the pinnacle of portable sanitation technology, featuring advanced waste treatment systems that are both environmentally friendly and highly efficient. These units are perfect for construction sites, events, parks, and remote locations.",
      specifications: [
        "Capacity: 1-10 users per day",
        "Material: High-grade FRP",
        "Dimensions: Customizable",
        "Weight: 50-150 kg",
        "Installation: Portable/Fixed",
      ],
      useCases: [
        "Construction Sites",
        "Public Parks",
        "Events & Festivals",
        "Rural Areas",
        "Emergency Relief",
      ],
      customizations: [
        "Size variations",
        "Color options",
        "Accessibility features",
        "Solar power integration",
        "Hand wash stations",
      ],
    },
    {
      id: 2,
      image: frpCabinImg,
      title: "FRP Cabins",
      category: "Structures",
      description:
        "Durable prefabricated structures suitable for office spaces, residential units, and specialized applications.",
      shortFeatures: [
        "Weather Resistant",
        "Quick Installation",
        "Customizable Design",
      ],
      fullDescription:
        "Our FRP Cabins are engineered for durability and versatility, offering quick deployment solutions for temporary or permanent structures. Built with high-quality FRP materials, these cabins provide excellent insulation and weather resistance.",
      specifications: [
        "Size: 8x8 ft to 20x40 ft",
        "Height: 8-12 ft",
        "Wall Thickness: 4-6 inches",
        "Load Capacity: Up to 500 kg/m²",
        "Assembly Time: 2-4 hours",
      ],
      useCases: [
        "Site Offices",
        "Security Cabins",
        "Residential Units",
        "Storage Facilities",
        "Emergency Shelters",
      ],
      customizations: [
        "Internal partitions",
        "Electrical fittings",
        "Plumbing ready",
        "HVAC provisions",
        "Custom layouts",
      ],
    },
    {
      id: 3,
      image: storageTankImg,
      title: "Storage Tanks",
      category: "Storage",
      description:
        "High-capacity FRP tanks designed for water storage, chemical storage, and various industrial applications.",
      shortFeatures: ["Corrosion Resistant", "Long Lasting", "Various Sizes"],
      fullDescription:
        "Our Storage Tanks are manufactured using premium FRP materials that offer superior resistance to corrosion, chemicals, and weather conditions. These tanks are ideal for both residential and industrial applications.",
      specifications: [
        "Capacity: 500L to 50,000L",
        "Material: Food-grade FRP",
        "Shape: Cylindrical/Rectangular",
        "Pressure Rating: Up to 10 bar",
        "Temperature Range: -20°C to 80°C",
      ],
      useCases: [
        "Water Storage",
        "Chemical Storage",
        "Wastewater Treatment",
        "Industrial Processes",
        "Agricultural Applications",
      ],
      customizations: [
        "Capacity variations",
        "Inlet/outlet configurations",
        "Level indicators",
        "Heating elements",
        "Special coatings",
      ],
    },
    {
      id: 4,
      image: frpBenchImg,
      title: "FRP Benches",
      category: "Furniture",
      description:
        "Modern outdoor furniture that combines aesthetic appeal with exceptional durability and comfort.",
      shortFeatures: ["Weather Proof", "Low Maintenance", "Ergonomic Design"],
      fullDescription:
        "Our FRP Benches are designed to withstand harsh outdoor conditions while providing comfortable seating solutions. These benches require minimal maintenance and retain their appearance for years.",
      specifications: [
        "Length: 4-8 ft",
        "Seating Capacity: 2-4 persons",
        "Weight: 25-45 kg",
        "Load Capacity: 300 kg",
        "Material Thickness: 8-12 mm",
      ],
      useCases: [
        "Public Parks",
        "Bus Stops",
        "Shopping Centers",
        "Educational Institutions",
        "Residential Complexes",
      ],
      customizations: [
        "Length variations",
        "Color options",
        "Backrest designs",
        "Armrest configurations",
        "Anti-vandal features",
      ],
    },

    {
      id: 5,
      image: frpMTV,
      title: "FRP Mobile Toilet Vans",
      category: "Sanitation",
      description:
        "Fully equipped FRP Mobile Toilet Vans designed for large gatherings, events, and on-the-go sanitation needs.",
      shortFeatures: [
        "Portable & Mobile",
        "Multiple Cabins",
        "Hygienic & Durable",
      ],
      fullDescription:
        "Our FRP Mobile Toilet Vans are the ultimate solution for mobile sanitation. Built on sturdy FRP structures, they feature multiple cabins with advanced waste management systems, ensuring hygiene and convenience at outdoor events, highways, and temporary sites.",
      specifications: [
        "Cabins: 2-8 units",
        "Material: Premium FRP body",
        "Vehicle Chassis: Compatible with multiple bases",
        "Dimensions: Customizable",
        "Waste Disposal: Advanced treatment system",
      ],
      useCases: [
        "Large Events",
        "Highways",
        "Railway Stations",
        "Construction Sites",
        "Emergency Camps",
      ],
      customizations: [
        "Cabin count",
        "Internal fittings",
        "Color options",
        "Separate male/female units",
        "Water storage integration",
      ],
    },
  ];

  const categories = [
    "All",
    "Sanitation",
    "Structures",
    "Storage",
    "Furniture",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Product Range
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive collection of FRP-based infrastructure
              products designed for durability, sustainability, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-brand-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "cta" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-24">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="relative">
                <Badge className="absolute top-4 left-4 z-10 bg-brand-green text-white">
                  {product.category}
                </Badge>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  onViewMore={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-brand-grey-dark">
                  {selectedProduct.title}
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.fullDescription}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Specifications */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand-grey-dark mb-4">
                      Specifications
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.specifications.map((spec, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="w-4 h-4 text-brand-green mr-2 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand-grey-dark mb-4">
                      Use Cases
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.useCases.map((useCase, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Customizations */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand-grey-dark mb-4">
                      Available Customizations
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.customizations.map((custom, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3 flex-shrink-0" />
                          {custom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link to="/contact">
                      <Button variant="cta" className="w-full group">
                        Request Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our engineering team can design and manufacture products tailored to
            your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="group">
                Discuss Requirements
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-green">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-brand-grey-dark text-white py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          Design & Developed by{" "}
          <span className="font-semibold">Aditi Dhariwal</span>
        </div>
      </footer>
    </div>
  );
};

export default Products;

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import bioToiletImg from "@/assets/bio-toilet.jpg";
import frpCabinImg from "@/assets/frp-cabin.jpg";
import storageTankImg from "@/assets/storage-tank.jpg";
import frpBenchImg from "@/assets/frp-bench.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const galleryImages = [
    {
      id: 1,
      src: bioToiletImg,
      title: "Bio Toilet Installation",
      category: "Bio Toilets",
      description: "Modern bio toilet installed at construction site"
    },
    {
      id: 2,
      src: frpCabinImg,
      title: "FRP Security Cabin",
      category: "FRP Cabins",
      description: "Portable security cabin for industrial use"
    },
    {
      id: 3,
      src: storageTankImg,
      title: "Industrial Storage Tank",
      category: "Storage Tanks",
      description: "Large capacity water storage tank"
    },
    {
      id: 4,
      src: frpBenchImg,
      title: "Park Bench Installation",
      category: "FRP Benches",
      description: "Durable outdoor seating solution"
    },
    {
      id: 5,
      src: manufacturingImg,
      title: "Manufacturing Facility",
      category: "Manufacturing",
      description: "State-of-the-art FRP production line"
    },
    {
      id: 6,
      src: bioToiletImg,
      title: "Mobile Bio Toilet Unit",
      category: "Bio Toilets",
      description: "Portable sanitation for events"
    },
    {
      id: 7,
      src: frpCabinImg,
      title: "Office Cabin Complex",
      category: "FRP Cabins",
      description: "Modular office solution"
    },
    {
      id: 8,
      src: storageTankImg,
      title: "Chemical Storage System",
      category: "Storage Tanks",
      description: "Corrosion-resistant storage solution"
    },
    {
      id: 9,
      src: frpBenchImg,
      title: "Bus Stop Seating",
      category: "FRP Benches",
      description: "Weather-resistant public seating"
    },
    {
      id: 10,
      src: manufacturingImg,
      title: "Quality Control Lab",
      category: "Manufacturing",
      description: "Advanced testing and quality assurance"
    },
    {
      id: 11,
      src: bioToiletImg,
      title: "Rural Area Installation",
      category: "Bio Toilets",
      description: "Sanitation solution for remote locations"
    },
    {
      id: 12,
      src: frpCabinImg,
      title: "Emergency Shelter",
      category: "FRP Cabins",
      description: "Rapid deployment emergency housing"
    }
  ];

  const categories = ["All", "Bio Toilets", "FRP Cabins", "Storage Tanks", "FRP Benches", "Manufacturing"];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Project Gallery
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Explore our completed projects and see the quality of our FRP-based infrastructure solutions in action.
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
                className="min-w-24"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group cursor-pointer overflow-hidden border-brand-grey hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-green text-white">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedImage && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-brand-green text-white">
                    {selectedImage.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-brand-grey-dark">
                    {selectedImage.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Manufacturing Section */}
      <section className="py-20 bg-brand-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-grey-dark mb-6">
              Our Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look behind the scenes at our state-of-the-art manufacturing facility 
              where quality and precision meet innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-brand-grey">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-grey-dark mb-3">
                  Advanced Equipment
                </h3>
                <p className="text-muted-foreground">
                  Modern machinery and tools ensure precision manufacturing and consistent quality in every product.
                </p>
              </div>
            </Card>
            <Card className="border-brand-grey">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-grey-dark mb-3">
                  Quality Control
                </h3>
                <p className="text-muted-foreground">
                  Rigorous testing and inspection processes guarantee that every product meets our high standards.
                </p>
              </div>
            </Card>
            <Card className="border-brand-grey">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-grey-dark mb-3">
                  Skilled Workforce
                </h3>
                <p className="text-muted-foreground">
                  Our experienced team of engineers and technicians bring expertise to every project.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your requirements and see how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Request Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-green">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
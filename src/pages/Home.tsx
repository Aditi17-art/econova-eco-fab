import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, Wrench, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import bioToiletImg from "@/assets/bio-toilet1.jpg";
import frpCabinImg from "@/assets/frp-cabin.jpg";
import storageTankImg from "@/assets/bio-digester-tank.jpg";
import frpBenchImg from "@/assets/frp-bench.jpg";
import frpMTV from "@/assets/MTV.jpeg";
import frpOC from "@/assets/Office-Container.jpg";
import frpurinal from "@/assets/frp-urinal.jpg";
import MSToilet from "@/assets/MS Portable Toilet.jpeg";
import IS from "@/assets/Industrial Shed.jpeg";

import { title } from "process";

const Home = () => {
  const products = [
    {
      image: bioToiletImg,
      title: "Bio Toilets",
    },
    {
      image: frpCabinImg,
      title: "FRP Cabins",
    },
    {
      image: storageTankImg,
      title: "Bio-Digester Tanks",
    },
    {
      image: frpBenchImg,
      title: "FRP Benches",
    },
    {
      image: frpMTV,
      title: "FRP Mobile Toilet Vans",
    },
    {
      image: frpOC,
      title: "Office Container",
    },
    {
      image: frpurinal,
      title: "FRP Urinal Cabin",
    },
    {
      image: MSToilet,
      title: "MS Portable Toilet",
    },
    {
      image: IS,
      title: "Industrial Shed",
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-brand-green" />,
      title: "Quality Assured",
      description:
        "ISO certified manufacturing with rigorous quality control processes.",
    },
    {
      icon: <Users className="w-8 h-8 text-brand-green" />,
      title: "Expert Team",
      description:
        "Experienced engineers and technicians dedicated to excellence.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-brand-green" />,
      title: "Custom Solutions",
      description:
        "Tailored products to meet your specific requirements and needs.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-brand-green" />,
      title: "Eco-Friendly",
      description:
        "Sustainable manufacturing processes and environmentally conscious designs.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Engineering delivered exceptional FRP cabins that exceeded our expectations. The quality and durability are outstanding.",
      author: "Rajesh Kumar",
      company: "Construction Solutions Ltd.",
    },
    {
      quote:
        "Their bio toilets have been a game-changer for our outdoor events. Reliable, clean, and easy to maintain.",
      author: "Priya Sharma",
      company: "Event Management Pro",
    },
    {
      quote:
        "The storage tanks we purchased have been performing flawlessly for over 3 years. Great investment!",
      author: "Amit Patel",
      company: "Industrial Works Inc.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-brand-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-grey-dark mb-6">
              Leading FRP Infrastructure Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With years of expertise in FRP manufacturing, Econova Engineering
              has established itself as a trusted partner for portable
              infrastructure solutions across India. Based in Greater Noida, we
              combine advanced technology with sustainable practices to deliver
              products that last.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-brand-grey hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-brand-grey-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-grey-dark mb-6">
              Our Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of FRP-based infrastructure
              products designed for durability and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} onViewMore={() => {}} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="cta" size="lg" className="group">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-green-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-grey-dark mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses across India for quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-brand-grey">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-brand-grey-dark">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our experts to discuss your requirements and
            receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="group">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-green">
                Browse Products
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

export default Home;

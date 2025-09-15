import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, Factory, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import manufacturingImg from "@/assets/manufacturing.jpg";
import about from "@/assets/Eco-about .png";
const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-brand-green" />,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in manufacturing and quality control to ensure superior products.",
    },
    {
      icon: <Users className="w-8 h-8 text-brand-green" />,
      title: "Customer First",
      description:
        "Our customers' success is our priority. We provide tailored solutions and exceptional service.",
    },
    {
      icon: <Factory className="w-8 h-8 text-brand-green" />,
      title: "Innovation",
      description:
        "Continuous innovation in FRP technology and manufacturing processes drives our growth.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-brand-green" />,
      title: "Reliability",
      description:
        "Dependable products and services that our customers can trust for their critical infrastructure needs.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team Members" },
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </section>
      <section className="relative w-full h-[800px]">
        <img
          src={about}
          alt="About Econova Engineering"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-grey-dark mb-6">
                Building the Future of Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to revolutionize portable infrastructure,
                Econova Engineering has grown from a small manufacturing unit to
                one of India's leading FRP product manufacturers. Based in
                Greater Noida, we serve clients across the nation with our
                comprehensive range of durable and eco-friendly solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to quality, innovation, and sustainability has
                earned us the trust of hundreds of clients across various
                industries. From bio toilets for smart cities to storage tanks
                for industrial applications, we deliver solutions that stand the
                test of time.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={manufacturingImg}
                alt="Manufacturing facility"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-brand-grey hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-brand-green mr-4" />
                  <h3 className="text-2xl font-bold text-brand-grey-dark">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide innovative, sustainable, and high-quality FRP-based
                  infrastructure solutions that meet the evolving needs of our
                  customers while contributing to environmental conservation and
                  social development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brand-grey hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-10 h-10 text-brand-green mr-4" />
                  <h3 className="text-2xl font-bold text-brand-grey-dark">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading manufacturer of FRP infrastructure
                  products in India, recognized for our innovation, quality
                  excellence, and commitment to sustainable development
                  practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-grey-dark mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment
              to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-brand-grey hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-brand-grey-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Achievement in Numbers
            </h2>
            <p className="text-xl opacity-90">
              Years of dedication and hard work reflected in our success
              metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-grey-dark mb-6">
            Partner with Econova Engineering
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to discuss your infrastructure needs? Let's build something
            great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="cta" size="lg">
                View Our Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="cta-outline" size="lg">
                Contact Us
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

export default About;

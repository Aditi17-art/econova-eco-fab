import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-grey-dark/90 to-brand-grey-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Tomorrow's
            <span className="block text-brand-green">Infrastructure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Econova Engineering delivers premium FRP-based portable infrastructure solutions 
            that combine durability, sustainability, and innovation.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Durable FRP Construction",
              "Eco-Friendly Solutions", 
              "Portable & Modular",
              "Custom Manufacturing"
            ].map((feature) => (
              <div key={feature} className="flex items-center text-white/80">
                <CheckCircle className="w-5 h-5 text-brand-green mr-2" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button variant="cta" size="lg" className="group">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="cta-outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-brand-grey-dark">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
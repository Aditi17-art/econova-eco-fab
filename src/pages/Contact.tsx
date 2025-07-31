import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productInterest: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-brand-green" />,
      title: "Address",
      details: ["Plot No. 45, Sector 63", "Greater Noida, UP 201301", "India"]
    },
    {
      icon: <Phone className="w-6 h-6 text-brand-green" />,
      title: "Phone",
      details: ["+91 99999 88888", "+91 88888 77777"]
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-green" />,
      title: "Email",
      details: ["info@econovaengineering.com", "sales@econovaengineering.com"]
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-green" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your infrastructure needs? Get in touch with our expert team 
              for personalized solutions and competitive quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-brand-grey shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-grey-dark">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-brand-grey focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-brand-grey focus:ring-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-brand-grey focus:ring-brand-green"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="border-brand-grey focus:ring-brand-green"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Product Interest</Label>
                    <Select onValueChange={(value) => handleInputChange("productInterest", value)}>
                      <SelectTrigger className="border-brand-grey focus:ring-brand-green">
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bio-toilets">Bio Toilets</SelectItem>
                        <SelectItem value="frp-cabins">FRP Cabins</SelectItem>
                        <SelectItem value="storage-tanks">Storage Tanks</SelectItem>
                        <SelectItem value="frp-benches">FRP Benches</SelectItem>
                        <SelectItem value="custom-solution">Custom Solution</SelectItem>
                        <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="border-brand-grey focus:ring-brand-green"
                      placeholder="Please describe your requirements, project details, or any questions you have..."
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-grey-dark mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Have questions about our products or need a custom solution? Our experienced team 
                  is here to help you find the perfect FRP infrastructure solution for your needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-brand-grey hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-grey-dark mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="bg-brand-green-light/20 border-brand-green">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-brand-grey-dark mb-4">
                    Why Choose Econova Engineering?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "15+ years of industry experience",
                      "ISO certified manufacturing processes",
                      "Custom solutions for unique requirements",
                      "Nationwide delivery and installation",
                      "Comprehensive after-sales support",
                      "Competitive pricing and quality assurance"
                    ].map((item, index) => (
                      <li key={index} className="text-sm text-brand-grey-dark flex items-center">
                        <div className="w-2 h-2 bg-brand-green rounded-full mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-brand-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-grey-dark mb-6">
              Visit Our Facility
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Greater Noida's industrial zone, our facility is easily accessible 
              and equipped with the latest manufacturing technology.
            </p>
          </div>

          {/* Map Placeholder */}
          <Card className="border-brand-grey overflow-hidden">
            <div className="h-96 bg-brand-grey/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-grey-dark mb-2">
                  Econova Engineering
                </h3>
                <p className="text-muted-foreground">
                  Plot No. 45, Sector 63<br />
                  Greater Noida, UP 201301
                </p>
                <Button variant="cta-outline" className="mt-4">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust Econova Engineering for their infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Request Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-green">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
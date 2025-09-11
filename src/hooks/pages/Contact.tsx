import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_5h6yclr", // replace with your service ID
        "template_9ul1qw7", // replace with your template ID
        {
          to_name: "Econova Engineering",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone.trim() || "not filled",
          company: formData.company.trim() || "not filled",
          productInterest: formData.productInterest || "not filled",
          message: formData.message.trim() || "not filled",
        },
        "PkX8u4zWw8N9djP65" // replace with your public key
      );

      toast({
        title: "Message Sent!",
        description:
          "Thank you for your inquiry. Our team will contact you within 24 hours.",
      });

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productInterest: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-brand-green" />,
      title: "Factory Address",
      details: [
        "BH-025, Boraki Extension, Greater Noida, Gautam budh nagar, UP 203207",
      ],
    },
    {
      icon: <Phone className="w-6 h-6 text-brand-green" />,
      title: "Phone",
      details: ["+91 78383 97387"],
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-green" />,
      title: "Email",
      details: ["econovaeng01@gmail.com"],
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-green" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your infrastructure needs? Get in touch with our
            expert team for personalized solutions and competitive quotes.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-brand-grey shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-brand-grey-dark">
                Send Us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible.
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
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
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
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Product Interest</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("productInterest", value)
                    }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bio-toilets">Bio Toilets</SelectItem>
                      <SelectItem value="frp-cabins">FRP Cabins</SelectItem>
                      <SelectItem value="storage-tanks">
                        Storage Tanks
                      </SelectItem>
                      <SelectItem value="frp-benches">FRP Benches</SelectItem>
                      <SelectItem value="custom-solution">
                        Custom Solution
                      </SelectItem>
                      <SelectItem value="general-inquiry">
                        General Inquiry
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    rows={5}
                    placeholder="Please describe your requirements, project details, or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-brand-grey-dark mb-6">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-brand-grey hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    {info.icon}
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

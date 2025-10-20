import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+27 71 234 5678"],
      description: "Call or WhatsApp us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@solarquench.co.za"],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["17 Olea Road", "Midrand"],
      description: "Our location"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Mon-Fri: 7AM-5PM", "Sat: 8AM-1PM", "Sun & Public Holidays: Closed"],
      description: "We're here to help"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Contact SOLARQUENCH - Get Expert Solar Consultation | Midrand, South Africa"
        description="Contact SOLARQUENCH for expert solar consultation. Located in Midrand, South Africa. Call +27 71 234 5678 or email info@solarquench.co.za for immediate assistance."
        keywords="contact solarquench, solar consultation, solar expert, midrand south africa, solar contact, solar phone number"
        url="https://solarquench.com/contact"
      />
      <Navbar />
      
      {/* Fixed Background with Text */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961787/WhatsApp_Image_2025-10-19_at_19.55.48_fb2mns.jpg')"
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your solar journey? Contact our expert team for a 
              personalized consultation and free quote.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section Spacer */}
      <div className="min-h-screen"></div>

      {/* Contact Information */}
      <section className="py-20 bg-background relative z-10" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach our solar experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group premium-glow"
                data-scroll
                data-scroll-speed={0.3 + (index % 2) * 0.2}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => {
                      // Make email clickable
                      if (info.title === "Email") {
                        return (
                          <a 
                            key={idx} 
                            href={`mailto:${detail}`}
                            className="text-sm text-primary hover:text-accent transition-colors hover:underline block"
                          >
                            {detail}
                          </a>
                        );
                      }
                      // Make phone clickable
                      if (info.title === "Phone & WhatsApp") {
                        return (
                          <a 
                            key={idx} 
                            href={`tel:${detail.replace(/\s/g, '')}`}
                            className="text-sm text-primary hover:text-accent transition-colors hover:underline block"
                          >
                            {detail}
                          </a>
                        );
                      }
                      // Regular text for other details
                      return (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30 relative z-10" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Send us a Message</h2>
              <p className="text-xl text-black font-bold">
                Fill out the form below and we'll get back to you <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">immediately</span>
              </p>
            </div>

            <Card className="border-border shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="Enter your email"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your solar needs..."
                      className="border-border focus:border-primary min-h-[120px]"
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, DollarSign, ArrowRight, CheckCircle2, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import solarHero from "@/assets/solar-hero.jpg";

const Home = () => {
  const services = [
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Premium solar panels with industry-leading conversion rates for maximum energy output.",
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Comprehensive warranty coverage on all installations for complete peace of mind.",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Professional installation completed in days, not weeks. Minimal disruption guaranteed.",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce energy bills by up to 70% and increase your property value significantly.",
    },
  ];

  const benefits = [
    "Free consultation and site assessment",
    "Custom solar solutions tailored to your needs",
    "Government incentives and tax credit assistance",
    "24/7 monitoring and support system",
    "Clean, renewable energy for a better future",
    "Professional installation by certified technicians",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="SOLARQUENCH - Premium Solar Energy Solutions | Reduce Energy Bills by 70%"
        description="Transform your home or business with SOLARQUENCH's premium solar energy solutions. Expert installation, 25-year warranty, and up to 70% savings on energy bills. Serving South Africa since 2015."
        keywords="solar energy south africa, solar panels johannesburg, renewable energy, solar installation midrand, solar power cape town, clean energy solutions, residential solar, commercial solar, solar quotes, energy savings"
        url="https://solarquench.com"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden" 
        data-scroll-section
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${solarHero})` }}
          data-scroll
          data-scroll-speed="-2"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl" data-scroll data-scroll-speed="1">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">
              Power Your Future with{" "}
              <span className="text-gradient-premium drop-shadow-2xl">
                Clean Energy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Transform sunlight into savings. SOLARQUENCH delivers premium solar solutions 
              that reduce costs and protect our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all text-lg px-8 py-6 shadow-lg hover:shadow-xl group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 bg-secondary-foreground/10 backdrop-blur-sm border-secondary-foreground/20 hover:bg-secondary-foreground/20 text-secondary-foreground"
                >
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SOLARQUENCH
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the renewable energy revolution with cutting-edge technology and unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group bg-card/50 backdrop-blur-sm premium-glow"
                data-scroll
                data-scroll-speed={0.5 + index * 0.1}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Solar Solutions for Every Need
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From residential homes to large commercial installations, we provide 
                end-to-end solar solutions that maximize your investment and minimize 
                your carbon footprint.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative" data-scroll data-scroll-speed="0.5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Card className="relative border-border shadow-xl overflow-hidden premium-glow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Average Savings</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          70%
                        </p>
                      </div>
                      <DollarSign className="w-12 h-12 text-primary" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Installations</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          2,500+
                        </p>
                      </div>
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Customer Rating</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          4.9/5
                        </p>
                      </div>
                      <Shield className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Added Services Section */}
      <section className="py-20 bg-muted/30" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Value Added{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to keep your solar system running at peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "System Monitoring",
              "System Maintenance", 
              "Solar Panel Cleaning",
              "SSEG Application",
              "Bird Proofing",
              "System Upgrades"
            ].map((service, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group text-center bg-card/50 backdrop-blur-sm premium-glow"
                data-scroll
                data-scroll-speed={0.5 + index * 0.1}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gradient-to-r from-muted/20 via-background to-muted/20 relative overflow-hidden" data-scroll-section>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partnering with the world's most innovative solar technology companies
            </p>
          </div>

          {/* Premium Company Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { name: "SolarEdge", description: "Smart Energy Technologies" },
              { name: "Enphase", description: "Microinverter Solutions" },
              { name: "Canadian Solar", description: "Global Solar Manufacturing" },
              { name: "JinkoSolar", description: "Premium Solar Panels" },
              { name: "Trina Solar", description: "Advanced Technology" }
            ].map((company, index) => (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                data-scroll
                data-scroll-speed={0.3 + index * 0.1}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {company.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground relative overflow-hidden" 
        data-scroll-section
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" data-scroll data-scroll-speed="-1" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Saving with Solar?
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Join thousands of satisfied customers who have made the switch to clean, 
              renewable energy. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg"
                >
                  Request Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-secondary-foreground/20 text-secondary-foreground"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

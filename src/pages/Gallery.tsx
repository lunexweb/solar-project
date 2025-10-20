import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      image: gallery1,
      title: "Residential Solar Installation",
      description: "5kW system for modern family home",
      category: "Residential",
    },
    {
      image: gallery2,
      title: "Commercial Solar Farm",
      description: "Large-scale solar energy production",
      category: "Commercial",
    },
    {
      image: gallery3,
      title: "Premium Solar Panels",
      description: "High-efficiency panel installation",
      category: "Technology",
    },
    {
      image: gallery4,
      title: "Professional Installation",
      description: "Certified technicians at work",
      category: "Installation",
    },
    {
      image: gallery1,
      title: "Urban Solar Solution",
      description: "Compact system for city living",
      category: "Residential",
    },
    {
      image: gallery2,
      title: "Industrial Scale Project",
      description: "Mega-watt solar installation",
      category: "Commercial",
    },
  ];

  const stats = [
    { number: "2,500+", label: "Projects Completed" },
    { number: "15MW", label: "Total Capacity Installed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "10,000+", label: "Tons CO₂ Saved" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Project Gallery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful solar installations. From residential 
              rooftops to large commercial projects, see the quality and precision we 
              bring to every installation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-secondary via-secondary/95 to-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-secondary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer overflow-hidden premium-glow"
                onClick={() => setSelectedImage(project.image)}
                data-scroll
                data-scroll-speed={0.3 + (index % 3) * 0.2}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-secondary-foreground/90">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Project detail"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want to See Your Project Here?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's create your success story together. Contact us today for a free 
              consultation and join our growing list of satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium shadow-lg">
                  Get Free Quote
                </button>
              </a>
              <a href="/contact">
                <button className="px-8 py-4 border-2 border-border hover:border-primary/50 rounded-lg transition-colors font-medium">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

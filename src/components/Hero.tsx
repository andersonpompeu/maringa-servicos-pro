import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-handyman.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <span 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-secondary/30 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Atendemos toda Maringá e região
          </span>
          
          {/* Main Heading with Text Reveal */}
          <div className="overflow-hidden mb-6">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              }`}
            >
              Marido de Aluguel{" "}
              <span className="text-secondary">em Maringá</span>
            </h1>
          </div>
          
          {/* Description */}
          <p 
            className={`text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Reparos, instalações e manutenções para sua casa ou empresa. 
            Profissionalismo, pontualidade e preço justo em todos os serviços.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("orcamento")}
              className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento Grátis
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm group"
            >
              Ver Serviços
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits */}
          <div 
            className={`flex flex-wrap gap-6 transition-all duration-700 delay-[400ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              "Orçamento Grátis",
              "Atendimento Rápido",
              "Garantia de Serviço",
            ].map((item, index) => (
              <div 
                key={item} 
                className="flex items-center gap-2 text-primary-foreground/90"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
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
    <section id="hero" className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-screen flex items-center pt-14 md:pt-16 lg:pt-20">
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
            className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-secondary/20 text-primary-foreground rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm border border-secondary/30 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary animate-pulse" />
            Atendemos toda Maringá e região
          </span>
          
          {/* Main Heading with Text Reveal */}
          <div className="overflow-hidden mb-4 md:mb-6">
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              }`}
            >
              Marido de Aluguel{" "}
              <span className="text-secondary">em Maringá</span>
            </h1>
          </div>
          
          {/* Description */}
          <p 
            className={`text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-6 md:mb-8 leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Reparos, instalações e manutenções para sua casa ou empresa. 
            Profissionalismo, pontualidade e preço justo em todos os serviços.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("orcamento")}
              className="text-base md:text-lg px-6 py-4 md:px-8 md:py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Solicitar Orçamento Grátis
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="text-base md:text-lg px-6 py-4 md:px-8 md:py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm group"
            >
              Ver Serviços
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits */}
          <div 
            className={`flex flex-wrap gap-4 md:gap-6 transition-all duration-700 delay-[400ms] ${
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
                className="flex items-center gap-1.5 md:gap-2 text-primary-foreground/90"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                <span className="text-sm md:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-1.5 md:pt-2">
          <div className="w-1 h-2.5 md:h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
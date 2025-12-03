import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-handyman.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
            🔧 Atendemos toda Maringá e região
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-card mb-6 leading-tight">
            Marido de Aluguel em Maringá
          </h1>
          
          <p className="text-lg md:text-xl text-card/90 mb-8 leading-relaxed">
            Reparos, instalações e manutenções para sua casa ou empresa. 
            Profissionalismo, pontualidade e preço justo em todos os serviços.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              onClick={() => scrollToSection("orcamento")}
              className="text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento Grátis
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="text-lg px-8 py-6 bg-card/10 border-card/30 text-card hover:bg-card/20 hover:text-card"
            >
              Ver Serviços
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              "Orçamento Grátis",
              "Atendimento Rápido",
              "Garantia de Serviço",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-card/90">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

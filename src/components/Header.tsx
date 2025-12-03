import { useState } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-lg md:text-xl font-bold text-foreground">
              Marido de Aluguel
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <Button onClick={() => scrollToSection("orcamento")} size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
              >
                FAQ
              </button>
              <Button onClick={() => scrollToSection("orcamento")} className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

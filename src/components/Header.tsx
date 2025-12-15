import { useState, useEffect } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-base md:text-lg lg:text-xl font-bold text-foreground">
              Marido de Aluguel
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {["Serviços", "Sobre", "Regiões", "Galeria", "Depoimentos", "FAQ"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="relative px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-1/2 transition-all duration-300" />
              </button>
            ))}
            
            <DarkModeToggle />
            
            <Button 
              onClick={() => scrollToSection("orcamento")} 
              size="lg"
              className="ml-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Orçamento
            </Button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <DarkModeToggle />
            <button
              className="p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-200 ${
            isMenuOpen ? "max-h-96 pb-3" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-3 border-t border-border">
            {["Serviços", "Sobre", "Regiões", "Galeria", "Depoimentos", "FAQ"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-foreground/80 hover:text-foreground hover:bg-muted transition-all text-sm font-medium text-left py-2.5 px-3 rounded-md"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("orcamento")} 
              className="w-full mt-2 bg-gradient-to-r from-primary to-primary/90"
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
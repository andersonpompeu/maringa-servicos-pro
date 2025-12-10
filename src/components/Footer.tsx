import { Wrench, Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                <Wrench className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">
                Marido de Aluguel
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Soluções completas em reparos e manutenção para sua casa em Maringá e região.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Serviços", "Sobre", "Galeria", "Depoimentos", "FAQ"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="hover:text-secondary transition-colors cursor-default">Hidráulica</li>
              <li className="hover:text-secondary transition-colors cursor-default">Elétrica</li>
              <li className="hover:text-secondary transition-colors cursor-default">Pintura</li>
              <li className="hover:text-secondary transition-colors cursor-default">Montagem de Móveis</li>
              <li className="hover:text-secondary transition-colors cursor-default">Reparos em Geral</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <a 
                href="tel:+5544999999999" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                (44) 99999-9999
              </a>
              <a 
                href="mailto:contato@maridodealuguel.com" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                contato@maridodealuguel.com
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                Maringá - PR e região
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                Seg-Sáb: 07h - 18h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} Marido de Aluguel Maringá. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
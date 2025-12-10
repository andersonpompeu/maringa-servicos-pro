import { 
  Wrench, 
  Droplets, 
  Zap, 
  PaintBucket, 
  DoorOpen, 
  Tv,
  Hammer,
  Settings
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import toolsImage from "@/assets/tools.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Droplets,
    title: "Hidráulica",
    description: "Vazamentos, torneiras, chuveiros, caixa d'água e encanamentos.",
  },
  {
    icon: Zap,
    title: "Elétrica",
    description: "Tomadas, interruptores, disjuntores, lustres e instalações elétricas.",
  },
  {
    icon: PaintBucket,
    title: "Pintura",
    description: "Pintura de paredes, portas, janelas e retoques em geral.",
  },
  {
    icon: DoorOpen,
    title: "Portas e Janelas",
    description: "Instalação, ajustes e reparos em portas, janelas e fechaduras.",
  },
  {
    icon: Tv,
    title: "Montagem de Móveis",
    description: "Montagem e desmontagem de móveis, prateleiras e painéis de TV.",
  },
  {
    icon: Hammer,
    title: "Reparos em Geral",
    description: "Pequenos reparos e manutenções preventivas em sua casa.",
  },
  {
    icon: Settings,
    title: "Instalações",
    description: "Instalação de acessórios, suportes, varais e cortinas.",
  },
  {
    icon: Wrench,
    title: "Manutenção Predial",
    description: "Serviços completos de manutenção para condomínios e empresas.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Soluções Completas para{" "}
            <span className="text-primary">Sua Casa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma ampla variedade de serviços para resolver qualquer problema 
            na sua residência ou empresa com qualidade e rapidez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover-lift border-border/50 bg-card overflow-hidden"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 100}ms`
              }}
            >
              <CardContent className="p-6 relative">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={toolsImage} 
            alt="Ferramentas profissionais para reparos residenciais" 
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 flex items-center">
            <div className="container mx-auto px-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-2">
                Equipamentos Profissionais
              </h3>
              <p className="text-primary-foreground/90 max-w-md text-lg">
                Trabalhamos com ferramentas de qualidade para garantir o melhor resultado em cada serviço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
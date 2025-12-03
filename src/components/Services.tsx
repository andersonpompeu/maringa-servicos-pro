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
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Soluções Completas para Sua Casa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma ampla variedade de serviços para resolver qualquer problema 
            na sua residência ou empresa com qualidade e rapidez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src={toolsImage} 
            alt="Ferramentas profissionais para reparos residenciais" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
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

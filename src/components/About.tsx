import { Shield, Clock, ThumbsUp, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Shield,
    title: "Garantia de Serviço",
    description: "Todos os serviços com garantia de qualidade e satisfação.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Cumprimos horários e prazos combinados com você.",
  },
  {
    icon: ThumbsUp,
    title: "Preço Justo",
    description: "Orçamentos transparentes e sem surpresas no final.",
  },
  {
    icon: Award,
    title: "Experiência",
    description: "Mais de 5 anos atendendo famílias em Maringá.",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div>
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Seu Parceiro de Confiança em Maringá
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Somos especializados em serviços de manutenção e reparos residenciais. 
              Com mais de 5 anos de experiência, atendemos toda Maringá e região com 
              profissionalismo, qualidade e preço justo.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa missão é resolver seus problemas de forma rápida e eficiente, 
              oferecendo um atendimento personalizado e garantia em todos os serviços. 
              Conte conosco para cuidar da sua casa!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 100}ms`
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

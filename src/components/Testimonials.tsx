import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Zona 7, Maringá",
    rating: 5,
    text: "Excelente profissional! Resolveu o problema da minha torneira rapidamente e com um preço justo. Super recomendo!",
  },
  {
    name: "João Santos",
    location: "Jardim Alvorada",
    rating: 5,
    text: "Precisei de urgência para trocar uma tomada que estava com problema. Atendimento rápido e serviço impecável.",
  },
  {
    name: "Ana Costa",
    location: "Zona 3, Maringá",
    rating: 5,
    text: "Montou todos os móveis do meu apartamento novo. Muito organizado, pontual e deixou tudo perfeito!",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é nossa maior recompensa. Confira alguns depoimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-card-foreground relative z-10 pl-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Serviços Realizados" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "5+", label: "Anos de Experiência" },
            { value: "24h", label: "Resposta Rápida" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

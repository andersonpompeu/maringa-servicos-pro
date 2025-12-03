import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

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
  {
    name: "Carlos Oliveira",
    location: "Zona 5, Maringá",
    rating: 5,
    text: "Contratei para pintar minha sala e o resultado ficou incrível. Profissional atencioso e trabalho de qualidade.",
  },
  {
    name: "Patricia Lima",
    location: "Jardim Paris",
    rating: 5,
    text: "Resolveu um vazamento que eu já tinha tentado arrumar várias vezes. Agora não vaza mais. Muito obrigada!",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
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

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0">
                  <Card className="border-border bg-background hover:shadow-lg transition-shadow duration-300 h-full">
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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
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

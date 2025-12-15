import { useState } from "react";
import { MapPin, Search, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const neighborhoodData = [
  {
    region: "Centro",
    icon: "🏛️",
    neighborhoods: [
      "Zona 01", "Zona 02", "Zona 03", "Zona 04", "Zona 05", 
      "Zona 06", "Zona 07", "Zona 08", "Zona 09", "Zona 10"
    ]
  },
  {
    region: "Zona Norte",
    icon: "⬆️",
    neighborhoods: [
      "Jardim Alvorada", "Jardim Paris", "Parque Industrial", 
      "Conjunto Inocente Vila Nova Jr.", "Jardim Canadá", 
      "Jardim Paulista", "Parque das Bandeiras", "Jardim Aclimação"
    ]
  },
  {
    region: "Zona Sul",
    icon: "⬇️",
    neighborhoods: [
      "Jardim Novo Horizonte", "Vila Esperança", "Jardim Universo", 
      "Parque das Laranjeiras", "Jardim Guaporé", "Vila Santo Antônio",
      "Jardim Oásis", "Parque Residencial Cidade Nova"
    ]
  },
  {
    region: "Zona Leste",
    icon: "➡️",
    neighborhoods: [
      "Vila Morangueira", "Jardim Mandacaru", "Conjunto Parigot de Souza",
      "Jardim Alvorada II", "Jardim Liberdade", "Vila Operária",
      "Jardim Higienópolis", "Parque das Grevíleas"
    ]
  },
  {
    region: "Zona Oeste",
    icon: "⬅️",
    neighborhoods: [
      "Jardim Dias", "Jardim América", "Parque Tarumã", 
      "Jardim Imperial", "Jardim Internorte", "Parque Itaipu",
      "Jardim Universitário", "Jardim Monte Carlo"
    ]
  },
  {
    region: "Região Metropolitana",
    icon: "🌆",
    neighborhoods: [
      "Sarandi", "Paiçandu", "Marialva", "Mandaguari", 
      "Mandaguaçu", "Iguaraçu", "Floresta", "Astorga"
    ]
  }
];

const ServiceAreas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { ref, isVisible } = useScrollAnimation();

  const filteredData = neighborhoodData.map(region => ({
    ...region,
    neighborhoods: region.neighborhoods.filter(n =>
      n.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(region => region.neighborhoods.length > 0);

  const totalNeighborhoods = neighborhoodData.reduce(
    (acc, r) => acc + r.neighborhoods.length, 0
  );

  return (
    <section id="regioes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              {totalNeighborhoods}+ bairros atendidos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Área de Atendimento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos toda Maringá e região metropolitana. Encontre seu bairro abaixo.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar seu bairro..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Accordion by Region */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" defaultValue={["Centro"]} className="space-y-3">
            {filteredData.map((region) => (
              <AccordionItem
                key={region.region}
                value={region.region}
                className="bg-background rounded-lg border border-border px-4 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{region.icon}</span>
                    <span className="font-semibold text-foreground">
                      {region.region}
                    </span>
                    <Badge variant="secondary" className="ml-2">
                      {region.neighborhoods.length}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="flex flex-wrap gap-2">
                    {region.neighborhoods.map((neighborhood) => (
                      <Badge
                        key={neighborhood}
                        variant="outline"
                        className="cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary hover:scale-105"
                      >
                        {neighborhood}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredData.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              Nenhum bairro encontrado para "{searchTerm}"
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Não encontrou seu bairro? Entre em contato!
          </p>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="https://wa.me/5544999999999" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;

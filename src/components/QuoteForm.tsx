import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Hidráulica",
  "Elétrica", 
  "Pintura",
  "Portas e Janelas",
  "Montagem de Móveis",
  "Reparos em Geral",
  "Instalações",
  "Manutenção Predial",
  "Outro",
];

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="orcamento" className="py-20 md:py-28 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Orçamento Grátis
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Solicite Seu Orçamento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Preencha o formulário abaixo e retornaremos o mais rápido possível com um orçamento sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Entre em Contato
              </h3>
              <p className="text-muted-foreground mb-8">
                Estamos prontos para atender você. Entre em contato pelo formulário ou pelos nossos canais diretos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground">(44) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Área de Atendimento</h4>
                  <p className="text-muted-foreground">Maringá e região metropolitana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Segunda a Sábado: 7h às 18h</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary rounded-2xl">
              <h4 className="font-bold text-primary-foreground mb-2">
                Atendimento de Emergência
              </h4>
              <p className="text-primary-foreground/90 text-sm">
                Problemas urgentes? Ligue agora e resolva hoje mesmo!
              </p>
            </div>
          </div>

          {/* Form */}
          <Card className="border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Formulário de Orçamento</CardTitle>
              <CardDescription>
                Todos os campos com * são obrigatórios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(44) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Tipo de serviço *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Descrição do serviço *</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva o que você precisa..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Solicitação
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

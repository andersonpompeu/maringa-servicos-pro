import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Vocês fazem orçamento grátis?",
    answer: "Sim! Oferecemos orçamento gratuito e sem compromisso. Basta entrar em contato pelo WhatsApp ou formulário e descrever o serviço que precisa.",
  },
  {
    question: "Qual a área de atendimento?",
    answer: "Atendemos toda a cidade de Maringá e região metropolitana, incluindo Sarandi, Paiçandu e Mandaguaçu.",
  },
  {
    question: "Aceitam cartão de crédito?",
    answer: "Sim, aceitamos cartões de crédito e débito, além de PIX e dinheiro. Parcelamos em até 3x sem juros.",
  },
  {
    question: "Qual o prazo para atendimento?",
    answer: "Para serviços urgentes, tentamos atender no mesmo dia. Para serviços agendados, combinamos o melhor dia e horário para você.",
  },
  {
    question: "Os serviços têm garantia?",
    answer: "Sim! Todos os nossos serviços possuem garantia de 90 dias. Se houver qualquer problema relacionado ao serviço realizado, voltamos sem custo adicional.",
  },
  {
    question: "Vocês trabalham aos finais de semana?",
    answer: "Atendemos de segunda a sábado das 7h às 18h. Para emergências, consulte disponibilidade pelo WhatsApp.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tire suas principais dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

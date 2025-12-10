import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "5544999999999";
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para serviços de manutenção.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full right-0 mb-2 px-4 py-2 bg-card text-card-foreground rounded-lg shadow-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        Fale conosco pelo WhatsApp!
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-card rotate-45" />
      </div>
      
      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
    </div>
  );
};

export default WhatsAppButton;
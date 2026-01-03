import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Bella Fornace
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pizzaria artesanal italiana com mais de 15 anos de
              tradição. Oferecemos a autêntica experiência napolitana
              com ingredientes selecionados e técnicas tradicionais.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">
              Horário de Funcionamento
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Segunda</span>
                <span>Fechado</span>
              </div>
              <div className="flex justify-between">
                <span>Terça a Sexta</span>
                <span>18h às 23h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado e Domingo</span>
                <span>12h às 23h</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">
              Newsletter
            </h4>
            <p className="text-muted-foreground mb-4">
              Inscreva-se para receber nossas promoções e novidades.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-background"
              />
              <Button variant="cta">Inscrever</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Bella Fornace Pizzaria. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Este é um cardápio digital demonstrativo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

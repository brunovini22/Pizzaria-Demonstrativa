import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  return (
    <section id="reservas" className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Reservas
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Garanta sua mesa e desfrute de uma experiência gastronômica única
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-info flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                  Endereço
                </h4>
                <p className="text-muted-foreground">
                  Av. Batel, 1750 - Batel
                  <br />
                  Curitiba, PR
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-info flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                  Horário de Funcionamento
                </h4>
                <p className="text-muted-foreground">
                  Terça a Sexta: 18h às 23h
                  <br />
                  Sábado e Domingo: 12h às 23h
                  <br />
                  Segunda: Fechado
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-info flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                  Reservas
                </h4>
                <p className="text-muted-foreground">
                  (41) 98765-4321
                  <br />
                  contato@bellafornace.com.br
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5374872467086!2d-49.29201492414835!3d-25.44216927753771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46f3f4e3a7b%3A0x7e9a3c5b4e8d9f2a!2sAv.%20do%20Batel%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1704307200000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Bella Fornace"
              />
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-card p-6 md:p-8 rounded-lg border border-border space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Data
                  </label>
                  <Input type="date" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Hora
                  </label>
                  <Input type="time" className="bg-background" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Número de Pessoas
                </label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 pessoa</SelectItem>
                    <SelectItem value="2">2 pessoas</SelectItem>
                    <SelectItem value="3">3 pessoas</SelectItem>
                    <SelectItem value="4">4 pessoas</SelectItem>
                    <SelectItem value="5">5 pessoas</SelectItem>
                    <SelectItem value="6">6 pessoas</SelectItem>
                    <SelectItem value="7+">7 ou mais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Observações
                </label>
                <Textarea
                  placeholder="Alguma observação especial?"
                  className="bg-background resize-none"
                  rows={3}
                />
              </div>

              <Button variant="cta" size="xl" className="w-full">
                Solicitar Reserva
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

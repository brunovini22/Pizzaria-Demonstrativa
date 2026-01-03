import { motion } from "framer-motion";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-pizza.jpg";

const stats = [
  { value: "15+", label: "Anos de Tradição" },
  { value: "25", label: "Tipos de Pizza" },
  { value: "72h", label: "Fermentação" },
  { value: "5", label: "Avaliação", icon: Star },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossa História
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden aspect-video"
          >
            <img
              src={heroImage}
              alt="Nosso forno a lenha"
              className="w-full h-full object-cover"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="w-0 h-0 border-l-[16px] border-l-primary-foreground border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Paixão pela Pizza desde 2009
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Bella Fornace nasceu da paixão do chef Marcelo Fontana, que após anos
                estudando na região de Nápoles, trouxe para Curitiba a autêntica arte da pizza.
              </p>
              <p>
                Nosso forno a lenha foi projetado especialmente para alcançar 500°C,
                proporcionando uma massa leve e crocante em menos de 2 minutos, com aquele
                sabor defumado característico.
              </p>
              <p>
                Trabalhamos com produtores locais e importamos ingredientes selecionados
                da Itália, como a farinha Caputo, o tomate San Marzano DOP e o azeite
                extra virgem da Toscana.
              </p>
            </div>

            <blockquote className="mt-6 italic text-foreground/80 border-l-2 border-primary pl-4">
              "Cada pizza conta uma história, e a nossa é feita com amor e dedicação." -
              <span className="font-semibold not-italic"> Chef Marcelo Fontana</span>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-display text-2xl md:text-4xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    {stat.icon && <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-primary fill-primary" />}
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

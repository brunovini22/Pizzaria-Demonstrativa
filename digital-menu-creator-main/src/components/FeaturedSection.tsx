import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import pizzaTartufo from "@/assets/pizza-tartufo.jpg";

const FeaturedSection = () => {
  return (
    <section id="destaques" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={pizzaTartufo}
          alt="Pizza Tartufo e Funghi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic mb-6">
            Tartufo e Funghi
          </h2>
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8">
            Uma experiência gourmet com cogumelos porcini, azeite trufado e 
            lascas de parmesão envelhecido 24 meses.
          </p>
          <Button variant="hero" asChild>
            <a href="#especiais">Ver no Cardápio</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;

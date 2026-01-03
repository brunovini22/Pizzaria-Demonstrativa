import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import FeaturedSection from "@/components/FeaturedSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import pizzaQuatroQueijos from "@/assets/pizza-quatro-queijos.jpg";
import pizzaTartufo from "@/assets/pizza-tartufo.jpg";
import pizzaParma from "@/assets/pizza-parma.jpg";
import tiramisu from "@/assets/tiramisu.jpg";
import pannaCotta from "@/assets/panna-cotta.jpg";

const tradicionais = [
  {
    image: pizzaMargherita,
    name: "Margherita",
    description: "A clássica pizza napolitana com molho de tomate San Marzano, mussarela de búfala, manjericão fresco e azeite extra virgem.",
    price: "R$ 39,90",
    badges: [
      { text: "Vegetariana", type: "vegetarian" as const },
      { text: "Clássica", type: "classic" as const },
    ],
  },
  {
    image: pizzaCalabresa,
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa artesanal fatiada, cebola roxa e orégano. Finalizada com azeite de alho.",
    price: "R$ 42,90",
    badges: [
      { text: "Mais Pedida", type: "popular" as const },
    ],
  },
  {
    image: pizzaQuatroQueijos,
    name: "Quatro Queijos",
    description: "Molho de tomate, mussarela, gorgonzola, parmesão e provolone. Finalizada com orégano e azeite extra virgem.",
    price: "R$ 46,90",
    badges: [
      { text: "Vegetariana", type: "vegetarian" as const },
    ],
  },
  {
    image: pizzaParma,
    name: "Napolitana",
    description: "Molho de tomate, mussarela, anchova, alcaparras, azeitonas pretas e alho. Uma receita tradicional do sul da Itália.",
    price: "R$ 44,90",
    badges: [
      { text: "Clássica", type: "classic" as const },
    ],
  },
];

const especiais = [
  {
    image: pizzaTartufo,
    name: "Tartufo",
    description: "Base branca com mussarela de búfala, cogumelos porcini, azeite trufado e lascas de parmesão. Finalizada com rúcula fresca.",
    price: "R$ 62,90",
    badges: [
      { text: "Vegetariana", type: "vegetarian" as const },
      { text: "Premium", type: "premium" as const },
    ],
  },
  {
    image: pizzaParma,
    name: "Parma",
    description: "Molho de tomate, mussarela de búfala e, após assada, coberta com presunto de Parma, rúcula fresca e lascas de parmesão.",
    price: "R$ 56,90",
    badges: [
      { text: "Mais Pedida", type: "popular" as const },
    ],
  },
  {
    image: pizzaCalabresa,
    name: "Diavola Piccante",
    description: "Molho de tomate, mussarela, salame picante italiano, pimentões assados, pimenta calabresa e mel de pimenta.",
    price: "R$ 48,90",
    badges: [
      { text: "Picante", type: "spicy" as const },
    ],
  },
  {
    image: pizzaMargherita,
    name: "Caprese",
    description: "Base branca com mussarela de búfala, tomates cereja confitados, pesto de manjericão caseiro e finalizada com redução de balsâmico.",
    price: "R$ 52,90",
    badges: [
      { text: "Vegetariana", type: "vegetarian" as const },
      { text: "Fresca", type: "fresh" as const },
    ],
  },
];

const sobremesas = [
  {
    image: tiramisu,
    name: "Tiramisù della Casa",
    description: "Clássica sobremesa italiana com camadas de biscoito champagne embebido em café, creme de mascarpone e cacau em pó.",
    price: "R$ 24,90",
    badges: [
      { text: "Mais Pedido", type: "popular" as const },
    ],
  },
  {
    image: pannaCotta,
    name: "Panna Cotta",
    description: "Delicada sobremesa de creme cozido com baunilha, servida com calda de frutas vermelhas frescas.",
    price: "R$ 22,90",
    badges: [
      { text: "Vegetariana", type: "vegetarian" as const },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedSection />
      <MenuSection
        id="tradicionais"
        title="Pizzas Tradicionais"
        subtitle="Receitas clássicas italianas preparadas com ingredientes selecionados"
        items={tradicionais}
      />
      <MenuSection
        id="especiais"
        title="Pizzas Especiais"
        subtitle="Criações exclusivas do nosso chef com ingredientes premium"
        items={especiais}
      />
      <MenuSection
        id="sobremesas"
        title="Dolci"
        subtitle="Sobremesas italianas autênticas para finalizar sua experiência"
        items={sobremesas}
      />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

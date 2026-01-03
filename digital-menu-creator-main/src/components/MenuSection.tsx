import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

type BadgeType = "vegetarian" | "classic" | "premium" | "spicy" | "popular" | "fresh";

interface MenuItemData {
  image: string;
  name: string;
  description: string;
  price: string;
  badges?: { text: string; type: BadgeType }[];
}

interface MenuSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItemData[];
}

const MenuSection = ({ id, title, subtitle, items }: MenuSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

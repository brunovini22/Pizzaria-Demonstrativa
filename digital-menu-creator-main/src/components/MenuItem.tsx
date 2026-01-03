import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type BadgeType = "vegetarian" | "classic" | "premium" | "spicy" | "popular" | "fresh";

interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  price: string;
  badges?: { text: string; type: BadgeType }[];
  index?: number;
}

const MenuItem = ({ image, name, description, price, badges = [], index = 0 }: MenuItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-4 md:gap-6 group"
    >
      <div className="relative overflow-hidden rounded-lg w-full md:w-72 h-48 md:h-52 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3 flex-wrap">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground italic">
            {name}
          </h3>
          <Badge variant="price">{price}</Badge>
        </div>
        
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
          {description}
        </p>
        
        {badges.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-1">
            {badges.map((badge, i) => (
              <Badge key={i} variant={badge.type}>
                {badge.text}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItem;

import { motion } from "motion/react";
import { Category, type Product } from "../backend.d";

const FLOWER_IMAGES = [
  "/assets/generated/product-flower-1.dim_600x600.jpg",
  "/assets/generated/product-flower-2.dim_600x600.jpg",
];

const KEYCHAIN_IMAGES = [
  "/assets/generated/product-keychain-1.dim_600x600.jpg",
  "/assets/generated/product-keychain-2.dim_600x600.jpg",
];

function getProductImage(product: Product, index: number): string {
  if (product.category === Category.flower) {
    return FLOWER_IMAGES[index % FLOWER_IMAGES.length];
  }
  return KEYCHAIN_IMAGES[index % KEYCHAIN_IMAGES.length];
}

function formatPrice(priceInCents: bigint): string {
  const dollars = Number(priceInCents) / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const CATEGORY_STYLES: Record<
  Category,
  { label: string; bg: string; text: string; emoji: string }
> = {
  [Category.flower]: {
    label: "Flower",
    bg: "bg-primary/10",
    text: "text-primary",
    emoji: "🌸",
  },
  [Category.keychain]: {
    label: "Keychain",
    bg: "bg-accent/30",
    text: "text-accent-foreground",
    emoji: "🔑",
  },
};

export function ProductCard({ product, index }: ProductCardProps) {
  const imageSrc = getProductImage(product, index);
  const categoryStyle =
    CATEGORY_STYLES[product.category] ?? CATEGORY_STYLES[Category.flower];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-card rounded-3xl overflow-hidden shadow-petal hover:shadow-float transition-shadow duration-300 cursor-pointer"
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Availability badge */}
        {!product.available && (
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
            <span className="px-4 py-2 bg-background/90 text-muted-foreground font-heading font-semibold text-sm rounded-full border border-border">
              Sold Out
            </span>
          </div>
        )}

        {/* Category badge */}
        <div
          className={`absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-heading font-semibold backdrop-blur-sm border border-white/20 ${categoryStyle.bg} ${categoryStyle.text}`}
        >
          <span>{categoryStyle.emoji}</span>
          <span>{categoryStyle.label}</span>
        </div>

        {/* Available badge */}
        {product.available && (
          <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-accent shadow-sm">
            <div className="w-3 h-3 rounded-full bg-accent animate-ping opacity-75" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-card-foreground leading-tight mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-heading font-black text-xl text-primary">
            {formatPrice(product.price)}
          </span>

          <button
            type="button"
            disabled={!product.available}
            className={`px-4 py-2 rounded-full font-heading font-semibold text-sm transition-all ${
              product.available
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-craft hover:-translate-y-0.5 active:translate-y-0"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
            }`}
          >
            {product.available ? "Add to Bag ✿" : "Sold Out"}
          </button>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-secondary/20 pointer-events-none" />
    </motion.article>
  );
}

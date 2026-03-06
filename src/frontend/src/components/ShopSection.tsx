import { Loader2, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Category } from "../backend.d";
import {
  useGetAllProducts,
  useGetProductsByCategory,
} from "../hooks/useQueries";
import { ProductCard } from "./ProductCard";

type FilterTab = "all" | Category;

const FILTER_TABS: { key: FilterTab; label: string; emoji: string }[] = [
  { key: "all", label: "All", emoji: "✨" },
  { key: Category.flower, label: "Flowers", emoji: "🌸" },
  { key: Category.keychain, label: "Keychains", emoji: "🔑" },
];

// Fallback sample products shown when backend is loading/empty
const SAMPLE_PRODUCTS = [
  {
    id: BigInt(1),
    name: "Sunset Rose Bouquet",
    description:
      "A beautiful arrangement of handcrafted pipe cleaner roses in warm sunset hues — perfect for gifting or home decoration.",
    price: BigInt(1299),
    category: Category.flower,
    available: true,
  },
  {
    id: BigInt(2),
    name: "Lavender Dream Flower",
    description:
      "Soft purple and lavender pipe cleaner petals twisted into a stunning dahlia-style bloom that never wilts.",
    price: BigInt(999),
    category: Category.flower,
    available: true,
  },
  {
    id: BigInt(3),
    name: "Rainbow Star Keychain",
    description:
      "A cheerful rainbow-colored star made from twisted pipe cleaners — a fun and colorful addition to any set of keys.",
    price: BigInt(599),
    category: Category.keychain,
    available: true,
  },
  {
    id: BigInt(4),
    name: "Mini Flower Keychain",
    description:
      "A tiny, adorable flower keychain crafted from bright pink and yellow pipe cleaners with a silver metal ring.",
    price: BigInt(499),
    category: Category.keychain,
    available: true,
  },
  {
    id: BigInt(5),
    name: "Wildflower Medley",
    description:
      "A whimsical mix of small wildflowers in multiple colors — daisies, tulips, and poppies all made from pipe cleaners.",
    price: BigInt(1599),
    category: Category.flower,
    available: false,
  },
  {
    id: BigInt(6),
    name: "Butterfly Keychain",
    description:
      "A delicate butterfly keychain with outstretched wings in teal and blue, handcrafted from premium chenille wire.",
    price: BigInt(699),
    category: Category.keychain,
    available: true,
  },
];

function useFilteredProducts(filter: FilterTab) {
  const allProducts = useGetAllProducts();
  const flowerProducts = useGetProductsByCategory(Category.flower);
  const keychainProducts = useGetProductsByCategory(Category.keychain);

  if (filter === "all") return allProducts;
  if (filter === Category.flower) return flowerProducts;
  return keychainProducts;
}

export function ShopSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const {
    data: products,
    isLoading,
    isError,
  } = useFilteredProducts(activeFilter);

  const displayProducts =
    products && products.length > 0
      ? products
      : SAMPLE_PRODUCTS.filter(
          (p) => activeFilter === "all" || p.category === activeFilter,
        );

  return (
    <section id="shop" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-10 text-6xl opacity-10 pointer-events-none select-none rotate-12">
        ✿
      </div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-10 pointer-events-none select-none -rotate-12">
        ❀
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-heading font-semibold text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            ✿ The Collection ✿
          </span>
          <h2
            className="font-display text-5xl md:text-6xl text-foreground mb-4"
            style={{ fontStyle: "italic" }}
          >
            Shop Our{" "}
            <span className="font-heading not-italic font-black text-primary">
              Creations
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
            Every piece is lovingly handcrafted from premium pipe cleaners — no
            two are exactly alike.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex gap-2 p-1.5 bg-muted rounded-2xl border border-border">
            {FILTER_TABS.map((tab) => (
              <button
                type="button"
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`relative px-5 py-2.5 rounded-xl font-heading font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === tab.key
                    ? "bg-card text-foreground shadow-craft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeFilter === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-card rounded-xl shadow-craft"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.emoji}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Loading state */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="relative">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <div className="absolute inset-0 w-10 h-10 text-2xl flex items-center justify-center">
                🌸
              </div>
            </div>
            <p className="font-body text-muted-foreground">
              Loading beautiful creations...
            </p>
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🌷</div>
            <p className="font-heading font-semibold text-foreground mb-2">
              Oops! Something went wrong
            </p>
            <p className="font-body text-muted-foreground">
              Couldn't load products. Here are some of our favorites!
            </p>
          </div>
        )}

        {/* Product Grid */}
        {!isLoading &&
          (displayProducts.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🌱</div>
              <p className="font-heading font-semibold text-xl text-foreground mb-2">
                No {activeFilter !== "all" ? `${activeFilter}s` : "products"}{" "}
                yet
              </p>
              <p className="font-body text-muted-foreground">
                We're busy crafting new pieces. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {displayProducts.map((product, index) => (
                <ProductCard
                  key={product.id.toString()}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-14"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-secondary/30 rounded-2xl border border-secondary/50">
            <ShoppingBag className="w-5 h-5 text-secondary-foreground" />
            <span className="font-body text-secondary-foreground text-sm">
              Each order is lovingly packaged & shipped with care 💛
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

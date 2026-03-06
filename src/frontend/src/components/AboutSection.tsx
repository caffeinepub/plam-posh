import { Heart, Leaf, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every single flower and keychain is handcrafted with care, patience, and a whole lot of love.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Unique Creations",
    description:
      "No two pieces are identical — each item has its own personality and character.",
    color: "text-secondary-foreground",
    bg: "bg-secondary/40",
  },
  {
    icon: Leaf,
    title: "Eco Conscious",
    description:
      "We use sustainable packaging and mindful production to reduce our environmental footprint.",
    color: "text-accent-foreground",
    bg: "bg-accent/30",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-heading font-semibold text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            ❀ Our Story ❀
          </span>
          <h2
            className="font-display text-5xl md:text-6xl text-foreground mb-4"
            style={{ fontStyle: "italic" }}
          >
            Crafted From the{" "}
            <span className="font-heading not-italic font-black text-primary">
              Heart
            </span>
          </h2>
        </motion.div>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/30 to-primary/20 rounded-[3rem] blur-xl" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-float">
              <img
                src="/assets/generated/pipe-cleaner-flowers.dim_800x600.jpg"
                alt="A beautiful arrangement of colorful handmade pipe cleaner flowers"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              {/* Image overlay text badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-4 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🌸</div>
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">
                        Handmade in every detail
                      </p>
                      <p className="font-body text-muted-foreground text-xs">
                        Each petal twisted by hand with love
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-2xl shadow-craft-yellow flex items-center justify-center text-2xl animate-float-gentle">
              ✿
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-xl animate-float-gentle-delayed">
              ❀
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3
              className="font-display text-3xl text-foreground mb-6 leading-tight"
              style={{ fontStyle: "italic" }}
            >
              Where every twist tells{" "}
              <span className="text-primary">a story</span>
            </h3>

            <div className="space-y-5 font-body text-foreground/80 leading-relaxed">
              <p>
                Plam Posh was born from a simple passion: turning humble pipe
                cleaners into something extraordinary. What started as a hobby
                quickly blossomed into a labor of love — one colorful creation
                at a time.
              </p>
              <p>
                Each flower is carefully designed and twisted by hand, drawing
                inspiration from real blooms, seasonal colors, and the pure joy
                of making something beautiful from the simplest materials.
              </p>
              <p>
                Our keychains are equally thoughtful — small enough to carry
                everywhere, charming enough to make anyone smile. They make
                perfect gifts, accessories, or just a little daily reminder to
                embrace color.
              </p>
            </div>

            <div className="mt-8 p-5 bg-secondary/20 rounded-2xl border border-secondary/40">
              <p
                className="font-display text-xl text-foreground"
                style={{ fontStyle: "italic" }}
              >
                "I want every piece to feel like a little bloom of happiness —
                something you can hold in your hands and smile at."
              </p>
              <p className="font-heading font-semibold text-sm text-primary mt-3">
                — The Plam Posh Maker
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card rounded-3xl shadow-petal hover:shadow-float transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-4`}
              >
                <feature.icon
                  className={`w-6 h-6 ${feature.color}`}
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="font-heading font-bold text-lg text-card-foreground mb-2">
                {feature.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

export function HeroSection() {
  const handleShopClick = () => {
    const el = document.querySelector("#shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x500.jpg"
          alt="Colorful handmade pipe cleaner flowers and keychains"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-secondary/30 blur-2xl animate-float-gentle pointer-events-none" />
      <div className="absolute bottom-32 right-[25%] w-24 h-24 rounded-full bg-primary/20 blur-xl animate-float-gentle-delayed pointer-events-none" />
      <div className="absolute top-1/3 right-[10%] w-16 h-16 rounded-full bg-accent/40 blur-lg animate-float-gentle pointer-events-none" />

      {/* Floating decorative flowers */}
      <div className="absolute top-28 left-[5%] text-4xl animate-float-gentle opacity-60 pointer-events-none select-none">
        ✿
      </div>
      <div className="absolute top-1/2 right-[8%] text-3xl animate-float-gentle-delayed opacity-50 pointer-events-none select-none">
        ❀
      </div>
      <div className="absolute bottom-40 left-[12%] text-2xl animate-float-gentle opacity-40 pointer-events-none select-none">
        ✾
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-20">
        <div className="max-w-xl">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-heading font-medium mb-6 backdrop-blur-sm border border-secondary"
          >
            <span>🌸</span>
            <span>Handmade with love</span>
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl md:text-8xl lg:text-9xl leading-none mb-4 text-foreground"
          >
            <span
              className="block text-primary"
              style={{ fontStyle: "italic" }}
            >
              Plam
            </span>
            <span className="block font-heading font-black text-foreground tracking-tight -mt-2">
              Posh
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-body text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-sm"
          >
            Handmade with love,{" "}
            <span className="font-display italic text-primary">
              one pipe cleaner
            </span>{" "}
            at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              type="button"
              onClick={handleShopClick}
              className="group px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-base rounded-full hover:bg-primary/90 transition-all hover:shadow-craft-lg hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
            >
              <span>Shop Now</span>
              <span className="text-lg group-hover:rotate-12 transition-transform inline-block">
                ✿
              </span>
            </button>

            <a
              href="#about"
              className="px-8 py-4 bg-background/70 backdrop-blur-sm text-foreground font-heading font-semibold text-base rounded-full border border-border hover:bg-background/90 transition-all hover:-translate-y-0.5"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex gap-8 mt-12 pt-8 border-t border-border/50"
          >
            {[
              { value: "100%", label: "Handmade" },
              { value: "♻️", label: "Eco Friendly" },
              { value: "✨", label: "Unique Pieces" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-2xl text-primary">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 80H1440V40C1440 40 1200 0 720 0C240 0 0 40 0 40V80Z"
            fill="oklch(0.97 0.01 80)"
          />
        </svg>
      </div>
    </section>
  );
}

import { Flower, Heart, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiPinterest } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "#",
    isLucide: true,
  },
  {
    icon: SiFacebook,
    label: "Facebook",
    href: "#",
    isLucide: false,
  },
  {
    icon: SiPinterest,
    label: "Pinterest",
    href: "#",
    isLucide: false,
  },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-foreground text-background"
    >
      {/* Top wave */}
      <div className="w-full overflow-hidden leading-none rotate-180">
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
            fill="oklch(0.22 0.04 60)"
          />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-5xl opacity-10 pointer-events-none select-none">
        ✿
      </div>
      <div className="absolute top-20 right-10 text-4xl opacity-10 pointer-events-none select-none">
        ❀
      </div>
      <div className="absolute bottom-20 left-1/4 text-3xl opacity-10 pointer-events-none select-none">
        ✾
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Flower className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <span
                className="font-display text-2xl"
                style={{ fontStyle: "italic" }}
              >
                <span className="text-primary">Plam</span>{" "}
                <span className="font-heading not-italic font-bold text-background">
                  Posh
                </span>
              </span>
            </div>
            <p className="font-body text-background/70 text-sm leading-relaxed mb-6">
              Handmade pipe cleaner flowers and keychains, crafted with love and
              whimsy. Each piece is a tiny work of art.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/60 hover:bg-background/10 transition-all duration-200"
                >
                  {social.isLucide ? (
                    <social.icon className="w-4 h-4" />
                  ) : (
                    <social.icon className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-background mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-body text-background/60 hover:text-background text-sm transition-colors hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact/Newsletter column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-background mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="font-body text-background/60 text-sm mb-4">
              Have a custom order idea or just want to say hello? We'd love to
              hear from you!
            </p>

            <div className="space-y-2 text-sm font-body text-background/60">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>hello@plamposh.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Made with love, everywhere</span>
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl border border-background/15 bg-background/5">
              <p className="font-heading font-semibold text-sm text-background mb-1">
                Custom Orders Welcome! ✿
              </p>
              <p className="font-body text-xs text-background/60">
                Want a specific color or design? Just ask!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/15 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body text-background/50">
            <p>© {currentYear} Plam Posh. All rights reserved. 🌸</p>
            <p className="flex items-center gap-1">
              Built with{" "}
              <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

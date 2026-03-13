import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      // If we're not on home, navigate there first
      if (window.location.pathname !== "/") {
        onNavigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      onNavigate(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "apple-blur" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            onNavigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity cursor-pointer"
        >
          Bruno Amoretti
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm text-black/60 hover:text-black transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick("#contact")}
            className="bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-black/80 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 cursor-pointer"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden apple-blur px-6 pb-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm text-black/60 hover:text-black transition-colors text-left cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick("#contact")}
              className="bg-black text-white text-sm px-5 py-2.5 rounded-full hover:bg-black/80 transition-all w-full cursor-pointer"
            >
              Get in touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

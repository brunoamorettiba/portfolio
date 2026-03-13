import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-6">
            Video Editor & Filmmaker
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.05]">
            Bruno{" "}
            <span className="text-black/40">Amoretti</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-black/60 mt-8 max-w-2xl mx-auto leading-relaxed">
            Video editor for YouTube channels, freelance filmmaker, strategist,
            huge River Plate fan, and coffee lover.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-black text-white text-sm px-6 py-3 rounded-full hover:bg-black/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-black/10 text-sm px-6 py-3 rounded-full hover:bg-black/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact me
            </a>
          </div>
        </FadeIn>

        {/* Animated bars decoration */}
        <FadeIn delay={0.4}>
          <div className="flex items-end justify-center gap-1 mt-16 h-16">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-emerald-500/30 rounded-full"
                animate={{ height: [12, 32, 8, 48, 12] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

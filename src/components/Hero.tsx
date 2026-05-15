"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "I build SaaS products.",
  "I solve real problems.",
  "I ship in days, not months.",
  "I create value."
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 px-6 sm:px-12 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10"
      >
        <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-[96px] leading-[1.1] tracking-tighter mb-4 text-glow text-white">
          Manan Speaks
        </h1>
        <h2 className="text-xl md:text-3xl font-mono text-accent mb-6 font-semibold">
          Building Products That Create Value
        </h2>
        <p className="text-gray-400 text-lg mb-8 font-mono max-w-2xl">
          Indie Founder &middot; SaaS Builder &middot; Young Builder from India 🇮🇳
        </p>

        <div className="h-16 mb-10 font-mono text-xl md:text-2xl text-gray-300">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentPhrase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="inline-block border-r-2 border-accent pr-1"
              style={{ animation: "blink 1s step-end infinite" }}
            >
              {phrases[currentPhrase]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 font-mono">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,230,118,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              See My Work <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border border-accent/50 text-accent font-bold rounded-lg hover:bg-accent/10 transition-all hover:shadow-[0_0_20px_rgba(0,230,118,0.2)]"
          >
            <span className="flex items-center justify-center gap-2">
              Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </div>
        <a 
          href="https://speaksstudio.vercel.app"
          target="_blank"
          className="group inline-flex w-max mt-6 px-6 py-3 border border-accent/50 text-accent font-bold rounded-full hover:bg-accent/10 transition-all hover:shadow-[0_0_20px_rgba(0,230,118,0.2)]"
        >
          🇮🇳 Work with me → Speaks Studio
        </a>
      </motion.div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #00e676; }
        }
      `}} />
    </section>
  );
}

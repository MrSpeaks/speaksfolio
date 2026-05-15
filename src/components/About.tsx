"use client";

import { motion } from "framer-motion";

const lines = [
  "Started in the wrong direction.",
  "2 years preparing for medical.",
  "Realized in February it wasn't me.",
  "Pivoted to tech. Taught myself to build.",
  "Shipped first SaaS in 17 days.",
  "",
  "Now building bulletproof backends",
  "for Indian SaaS founders through",
  "Speaks Studio.",
  "",
  "Not waiting for college to start.",
  "Not waiting for permission.",
  "",
  "This is just the beginning."
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 md:px-24 bg-surface/30">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-mono font-bold text-3xl md:text-5xl text-white mb-4">
            The Story
          </h2>
        </motion.div>

        <div className="font-sans text-xl md:text-2xl text-gray-300 space-y-2 leading-relaxed">
          {lines.map((line, index) => {
            if (line === "") return <div key={index} className="h-6" />;
            
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={line.includes("This is just the beginning") ? "text-accent font-mono font-bold pt-6" : ""}
              >
                {line}
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

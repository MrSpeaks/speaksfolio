"use client";

import { motion, Variants } from "framer-motion";

const skills = [
  "Next.js", "React", "Supabase", "PostgreSQL",
  "Vercel", "Google APIs", "Chrome Extensions",
  "Dodo Payments", "Upstash QStash", "TypeScript",
  "Node.js", "REST APIs", "Claude", "Antigravity"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="font-mono font-bold text-3xl md:text-5xl text-white mb-4">
          My Stack
        </h2>
        <p className="text-gray-400 text-lg font-mono">
          Tools I ship real products with
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            className="px-6 py-3 bg-surface border border-primary/20 rounded-lg text-white font-mono hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,230,118,0.3)] transition-all cursor-default select-none group"
          >
            <span className="relative z-10">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

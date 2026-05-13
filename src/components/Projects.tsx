"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronDown, ExternalLink, Lock } from "lucide-react";

export default function Projects() {
  const [isSpeedSpeaksOpen, setIsSpeedSpeaksOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 md:px-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="font-mono font-bold text-3xl md:text-5xl text-white mb-4">
          Things I've Shipped
        </h2>
        <p className="text-gray-400 text-lg font-mono whitespace-pre-line">
          Real products. Real problems.{"\n"}Real solutions.
        </p>
      </motion.div>

      <div className="relative">
        {/* Animated timeline line */}
        <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-[2px] bg-white/10" />
        <motion.div 
          className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-[2px] bg-accent origin-top"
          style={{ scaleY }}
        />

        <div className="space-y-16 relative">
          {/* SpeedSpeaks Project */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 group"
          >
            <div className="flex-shrink-0 z-10 hidden md:block">
              <div className="w-20 h-20 rounded-full bg-surface border-4 border-surface flex items-center justify-center relative shadow-[0_0_20px_rgba(0,230,118,0.2)]">
                 <div className="w-4 h-4 bg-accent rounded-full absolute -right-2 top-1/2 -translate-y-1/2" />
                 <span className="font-mono font-bold text-accent">SS</span>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="bg-surface border-l-4 border-accent p-6 md:p-8 rounded-r-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,230,118,0.2)]">
                <div className="flex flex-wrap gap-3 items-center mb-4">
                  <h3 className="font-mono font-bold text-2xl text-white">SpeedSpeaks</h3>
                  <span className="px-3 py-1 bg-primary/20 text-accent text-xs font-mono font-bold rounded-full border border-primary/30">
                    LIVE ✓
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-mono rounded-full border border-white/10">
                    SaaS + Chrome Extension
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6 font-sans">
                  Shopify speed audit tool that finds exactly which apps are draining store revenue and calculates exact monthly revenue loss.
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm font-mono text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">●</span> 17 days
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">●</span> 2 platforms
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">●</span> Full SaaS + Chrome Extension
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Next.js", "Supabase", "Google PageSpeed API", "Dodo Payments"].map(tech => (
                    <span key={tech} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://speed-speaks.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-mono font-bold rounded hover:bg-primary/80 transition-colors">
                    Visit Site <ExternalLink size={16} />
                  </a>
                  <button 
                    onClick={() => setIsSpeedSpeaksOpen(!isSpeedSpeaksOpen)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-mono rounded hover:bg-white/5 transition-colors"
                  >
                    Details <ChevronDown size={16} className={`transition-transform duration-300 ${isSpeedSpeaksOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <AnimatePresence>
                  {isSpeedSpeaksOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-8 border-t border-white/10 font-sans">
                        <h4 className="text-white font-mono font-bold mb-3">Features built:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-400 mb-6">
                          <li>Full speed audit mobile + desktop</li>
                          <li>Revenue loss calculator</li>
                          <li>Exact app detection</li>
                          <li>Competitor tracking</li>
                          <li>Weekly auto monitoring</li>
                          <li>PDF report generation</li>
                          <li>Chrome Extension</li>
                        </ul>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                          <h4 className="text-accent font-mono font-bold mb-2">Key learning:</h4>
                          <p className="text-gray-300 italic">"Distribution is harder than building. Ship fast. Learn faster."</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Future Projects */}
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12"
            >
              <div className="flex-shrink-0 z-10 hidden md:block">
                <div className="w-20 h-20 rounded-full bg-surface border-4 border-surface flex items-center justify-center relative">
                   <div className="w-4 h-4 bg-gray-600 rounded-full absolute -right-2 top-1/2 -translate-y-1/2" />
                   <Lock size={24} className="text-gray-600" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="bg-surface/50 border border-white/5 p-6 md:p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-xl transition-all duration-1000 animate-pulse pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs font-mono font-bold rounded-full border border-gray-700">
                      Coming Soon
                    </span>
                  </div>
                  
                  <h3 className="font-mono font-bold text-2xl text-gray-300 mb-2">Next Build →</h3>
                  <p className="text-gray-500 font-sans">
                    Something bigger is coming
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

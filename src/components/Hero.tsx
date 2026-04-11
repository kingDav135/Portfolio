"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide glass rounded-full text-primary"
        >
          Available for Freelance & Full-time Roles
        </motion.span>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Building <span className="text-gradient">Fast, User-Focused</span> Web Applications
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Based in Lagos, Nigeria. I specialize in crafting high-conversion digital experiences that combine stunning design with flawless performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 premium-shadow"
          >
            View My Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 glass text-foreground rounded-full font-semibold flex items-center gap-2 transition-all hover:bg-foreground/5 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/40 font-medium">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}

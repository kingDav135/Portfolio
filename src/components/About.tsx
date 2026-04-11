"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square glass rounded-[2.5rem] overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent group-hover:opacity-50 transition-opacity" />
            <div className="flex flex-col items-center justify-center h-full p-12 text-center">
               <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">👨‍💻</span>
               </div>
               <h3 className="text-xl font-bold mb-2">Frontend Specialist</h3>
               <p className="text-sm text-foreground/40">Optimizing digital performance in Lagos</p>
            </div>
          </motion.div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                As a Frontend Developer based in Lagos, I am passionate about bridging the gap between design and development. I don&apos;t just write code; I craft digital experiences that resonate with users and drive business growth.
              </p>
              <p>
                My approach is rooted in clean, scalable code and a deep understanding of user psychology. I specialize in the modern React ecosystem, with a focus on performance optimization and sleek animations.
              </p>
              
              <div className="pt-6">
                <p className="text-foreground font-bold mb-4 uppercase tracking-widest text-xs">My Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Node.js", "PostgreSQL"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:border-primary/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

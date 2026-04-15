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
            className="aspect-[4/5] w-full max-w-sm mx-auto glass rounded-[2.5rem] overflow-hidden relative group bg-white/5"
          >
            <img 
              src="/IMG-20260411-WA0001.jpg" 
              alt="David Olowookere" 
              className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
               <p className="text-sm font-medium text-white/90">Frontend Developer in Lagos</p>
            </div>
          </motion.div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                As a Frontend Developer based in Lagos, I (David) am passionate about bridging the gap between design and development. I don&apos;t just write code; I craft digital experiences that resonate with users and drive business growth.
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

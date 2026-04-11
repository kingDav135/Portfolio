"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Code2, Users } from "lucide-react";

const goals = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High Performance",
    description: "I build responsive, lightning-fast interfaces optimized for speed and Lighthouse scores."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Conversion Focused",
    description: "Focusing on clean UX and strategic design to turn visitors into leads and customers."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Scalable Code",
    description: "Writing maintainable, enterprise-grade frontend code that scales with your growth."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User Centric",
    description: "Designing with the end-user in mind to ensure intuitive and accessible experiences."
  }
];

export default function ValueProp() {
  return (
    <section className="py-24 px-4 bg-surface-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass rounded-3xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {goal.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

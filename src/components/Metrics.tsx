import { motion } from "motion/react";
import { RulerX } from "./Crosshair";

const stats = [
  { value: "2.5M", unit: "SQM", label: "Engineered Area" },
  { value: "140+", unit: "PROJ", label: "Completed Structures" },
  { value: "42m", unit: "MAX", label: "Longest Cantilever" },
  { value: "12", unit: "ZONES", label: "Seismic Environments" }
];

export function Metrics() {
  return (
    <section className="relative py-24 border-b border-border bg-canvas overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02]"></div>
      <RulerX className="absolute top-0 left-0 right-0 opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-canvas p-8 md:p-12 flex flex-col items-center justify-center text-center relative group"
            >
              <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tighter text-glow group-hover:text-accent transition-colors duration-500">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-accent">
                  {stat.unit}
                </span>
              </div>
              
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted mt-4">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <RulerX className="absolute bottom-0 left-0 right-0 opacity-20" />
    </section>
  );
}

import { motion } from "motion/react";
import { Crosshair } from "./Crosshair";

const quotes = [
  {
    text: "M. Faramawy doesn't just calculate loads; he understands architectural intent. His solutions enhance the aesthetic rather than compromising it.",
    author: "Elena Rostova",
    role: "Lead Architect, Studio Rostova"
  },
  {
    text: "The diagrid system engineered for the Apex Tower was nothing short of revolutionary. It saved 15% in material costs while exceeding seismic requirements.",
    author: "James Chen",
    role: "Director, Chen & Partners Global"
  },
  {
    text: "When other engineers told us the cantilever was impossible, Structura delivered a mathematical proof within a week, followed by a flawless execution.",
    author: "Sarah Jenkins",
    role: "Principal, Jenkins Design Lab"
  }
];

export function Testimonials() {
  return (
    <section className="relative py-32 border-b border-border bg-canvas overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.03]"></div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex items-center gap-4 font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-16">
          <span className="w-8 h-[1px] bg-border"></span>
          Architect Endorsements
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative bg-surface border border-border p-8 md:p-10 flex flex-col justify-between"
            >
              <Crosshair className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-border" />
              <Crosshair className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-border" />
              
              <div className="font-mono text-4xl text-accent/30 leading-none mb-6">"</div>
              
              <p className="text-sm font-light leading-relaxed text-white mb-12 flex-grow">
                {quote.text}
              </p>
              
              <div className="mt-auto">
                <div className="font-mono text-xs text-white uppercase tracking-wider mb-1">
                  {quote.author}
                </div>
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                  {quote.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

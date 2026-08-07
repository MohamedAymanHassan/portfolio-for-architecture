import { motion } from "motion/react";

const tools = [
  "Rhinoceros 3D", "Grasshopper", "Karamba3D", "ETABS", 
  "SAP2000", "SAFE", "Tekla Structures", "Revit", 
  "Dynamo", "Python", "C#", "ANSYS", "SOFiSTiK"
];

export function TechStack() {
  return (
    <section className="py-16 border-b border-border bg-surface overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10"></div>

      <div className="container mx-auto px-6 lg:px-24 mb-8">
        <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] text-center">
          Computational Arsenal & Analysis Software
        </div>
      </div>

      <div className="flex whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500">
        <motion.div
          animate={{ x: [0, -1035] }} // Adjust based on content width, roughly half
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 font-mono text-sm tracking-widest uppercase items-center"
        >
          {/* Double array to create seamless loop */}
          {[...tools, ...tools].map((tool, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span className="text-white">{tool}</span>
              <span className="text-accent text-xs">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

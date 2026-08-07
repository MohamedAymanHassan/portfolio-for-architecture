import { motion } from "motion/react";
import { Crosshair } from "./Crosshair";

const competencies = [
  {
    title: "Seismic & Dynamics",
    desc: "Advanced base isolation, tuned mass dampers, and non-linear dynamic analysis for extreme tectonic environments.",
    spec: "Performance-Based Design"
  },
  {
    title: "Parametric Geometry",
    desc: "Algorithmic generation of complex structural forms, optimizing material distribution via computational load-path finding.",
    spec: "Grasshopper / Rhino / API"
  },
  {
    title: "High-Rise Systems",
    desc: "Lateral stiffness innovation, diagrid frameworks, and wind engineering for supertall and megatall structures.",
    spec: "Core & Outrigger Topologies"
  },
  {
    title: "Advanced Materials",
    desc: "Engineering hybrids using Ultra-High-Performance Concrete (UHPC), carbon fiber, and engineered mass timber (CLT/Glulam).",
    spec: "Sustainable Integration"
  }
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-32 border-b border-border bg-canvas">
      <div className="absolute inset-0 blueprint-grid-fine opacity-[0.03]"></div>
      
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-4">
              <span className="w-8 h-[1px] bg-border"></span>
              Core Competencies
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Structural <span className="font-medium text-white">Disciplines.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-text-muted font-light">
            Specialized engineering capabilities tailored for unprecedented architectural ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border p-px">
          {competencies.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-surface p-12 hover:bg-canvas transition-colors duration-500 overflow-hidden"
            >
              <Crosshair className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-accent" />
              
              <div className="relative z-10">
                <div className="font-mono text-[10px] text-accent tracking-widest uppercase mb-8 border border-accent/20 inline-block px-3 py-1">
                  {comp.spec}
                </div>
                
                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-accent transition-colors duration-500">
                  {comp.title}
                </h3>
                
                <p className="text-sm text-text-muted font-light leading-relaxed max-w-sm">
                  {comp.desc}
                </p>
              </div>

              {/* Decorative hover background effect */}
              <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

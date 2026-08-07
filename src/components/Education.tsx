import { motion } from "motion/react";
import { Crosshair } from "./Crosshair";

const educationData = [
  {
    id: "01",
    year: "2018 — 2020",
    degree: "M.Sc. Structural Engineering",
    institution: "ETH Zürich, Switzerland",
    details: "Thesis: Non-linear Dynamic Analysis of Parametric Diagrid Structures under Seismic Loads. Focus on advanced computational mechanics."
  },
  {
    id: "02",
    year: "2014 — 2018",
    degree: "B.Sc. Civil Engineering",
    institution: "Delft University of Technology (TU Delft)",
    details: "Major in Structural Design and Applied Mechanics. Capstone Project: Topology Optimization of Cable-Stayed Bridge Pylons."
  }
];

export function Education() {
  return (
    <section id="education" className="relative py-32 border-b border-border bg-surface overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02]"></div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-4">
              <span className="w-8 h-[1px] bg-border"></span>
              Academic Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Educational <span className="font-medium text-white">Trajectory.</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Vertical Timeline Axis */}
          <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-border hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative md:pl-20 flex flex-col md:flex-row gap-6 md:gap-16 group"
              >
                {/* Node Marker */}
                <div className="hidden md:flex absolute left-[11px] top-1.5 w-[9px] h-[9px] bg-surface border border-accent group-hover:bg-accent transition-colors duration-300 z-10"></div>
                
                {/* Timeline Year */}
                <div className="font-mono text-xs text-accent tracking-widest pt-1 shrink-0 w-32">
                  [{edu.year}]
                </div>

                {/* Content Box */}
                <div className="relative bg-canvas border border-border p-8 md:p-10 flex-grow hover:border-accent/50 transition-colors duration-500">
                  <Crosshair className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-border group-hover:text-accent/50 transition-colors" />
                  <Crosshair className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-border group-hover:text-accent/50 transition-colors" />
                  
                  <h3 className="text-2xl font-light text-white mb-2">{edu.degree}</h3>
                  <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-6">
                    // {edu.institution}
                  </div>
                  
                  <p className="text-sm text-text-muted font-light leading-relaxed max-w-2xl">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

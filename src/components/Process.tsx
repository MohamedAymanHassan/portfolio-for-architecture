import { motion } from "motion/react";

const steps = [
  {
    id: "01",
    phase: "Conceptual Analysis",
    title: "Topological Optimization",
    desc: "Defining the most efficient material distribution based on load paths, environmental constraints, and spatial requirements."
  },
  {
    id: "02",
    phase: "Computational Design",
    title: "Parametric Modeling",
    desc: "Translating architectural intent into rigorous, adjustable mathematical models to rapidly test structural variants."
  },
  {
    id: "03",
    phase: "Rigorous Simulation",
    title: "Finite Element Analysis",
    desc: "Subjecting the digital twin to extreme stress scenarios, including seismic, thermal, and non-linear wind loads."
  },
  {
    id: "04",
    phase: "Physical Translation",
    title: "Detailing & Execution",
    desc: "Designing microscopic tolerances for structural nodes and overseeing the on-site assembly for absolute fidelity."
  }
];

export function Process() {
  return (
    <section id="process" className="relative py-32 border-b border-border bg-surface overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-16 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-border"></span>
          Methodology
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-light sticky top-32"
            >
              The <span className="font-medium text-white">Algorithm</span> <br /> of Stability.
            </motion.h2>
          </div>

          <div className="lg:col-span-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-border hidden md:block"></div>

            <div className="space-y-16">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative md:pl-16 flex flex-col md:flex-row gap-6 md:gap-12"
                >
                  {/* Step Node */}
                  <div className="hidden md:flex absolute left-0 top-0 w-8 h-8 bg-surface border border-border items-center justify-center font-mono text-[10px] text-accent z-10">
                    {step.id}
                  </div>

                  <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest pt-2 md:w-48 shrink-0">
                    // Phase {step.id}
                    <div className="text-white mt-1">{step.phase}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-white mb-4">{step.title}</h3>
                    <p className="text-sm text-text-muted font-light leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

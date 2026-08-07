import { motion } from "motion/react";
import { projects } from "../data";
import { Crosshair } from "./Crosshair";

export function Projects() {
  return (
    <section id="projects" className="relative py-32 border-b border-border bg-surface">
      <div className="absolute inset-0 blueprint-grid-fine opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 relative z-10">
          <div>
            <div className="flex items-center gap-4 font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-4">
              <span className="w-8 h-[1px] bg-border"></span>
              Selected Works
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Structural <span className="font-medium text-white">Manifestos</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-text-muted font-light">
            An archive of complex geometrical challenges solved through rigorous engineering logic and material innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border p-px">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-canvas overflow-hidden flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700">
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                
                {/* Blueprint overlay that appears on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none flex items-center justify-center">
                  <div className="w-full h-full border-[1px] border-accent/40 m-4 relative">
                     <Crosshair className="-top-2 -left-2 text-accent" />
                     <Crosshair className="-bottom-2 -right-2 text-accent" />
                  </div>
                </div>
              </div>

              {/* Data Container */}
              <div className="p-8 md:p-12 relative z-20 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-light">{project.title}</h3>
                    <span className="font-mono text-xs text-accent border border-accent/30 px-2 py-1">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-6 flex gap-4">
                    <span>// {project.category}</span>
                    <span>// {project.location}</span>
                  </div>

                  <p className="text-sm text-text-muted font-light mb-8 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-border pt-6 grid grid-cols-2 gap-4 font-mono text-[10px]">
                  <div>
                    <div className="text-text-muted mb-1 uppercase">Structural Type</div>
                    <div className="text-white">{project.specs.structuralType}</div>
                  </div>
                  <div>
                    <div className="text-text-muted mb-1 uppercase">Scale</div>
                    <div className="text-white">{project.specs.area}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

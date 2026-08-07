import { motion } from "motion/react";
import { Crosshair, RulerX } from "./Crosshair";

export function BlueprintSection() {
  return (
    <section id="philosophy" className="relative py-32 overflow-hidden border-b border-border">
      <div className="absolute inset-0 blueprint-grid opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Abstract Data Viz / Schematic */}
          <div className="relative aspect-square w-full max-w-lg mx-auto border border-border bg-surface p-8">
            <RulerX className="absolute top-0 left-0 right-0 opacity-30" />
            <Crosshair className="-top-2 -left-2" />
            <Crosshair className="-bottom-2 -right-2" />
            
            <div className="w-full h-full relative overflow-hidden flex items-center justify-center border border-white/5">
              <svg viewBox="0 0 200 200" className="w-[90%] h-[90%] text-accent opacity-80">
                <defs>
                  <pattern id="blueprint-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 2"/>
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#blueprint-grid)" opacity="0.3" />

                {/* Villa Structural Elevation */}
                <motion.g
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Foundation / Grade line */}
                  <line x1="10" y1="160" x2="190" y2="160" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="10" y1="165" x2="190" y2="165" stroke="currentColor" strokeWidth="0.2" strokeDasharray="4 2" />

                  {/* Main structural frame - Ground Floor */}
                  <rect x="40" y="100" width="120" height="60" fill="none" stroke="currentColor" strokeWidth="0.6" />
                  
                  {/* Structural columns (Core) */}
                  <rect x="40" y="100" width="6" height="60" fill="currentColor" opacity="0.3" />
                  <rect x="97" y="100" width="6" height="60" fill="currentColor" opacity="0.3" />
                  <rect x="154" y="100" width="6" height="60" fill="currentColor" opacity="0.3" />

                  {/* First Floor Frame */}
                  <rect x="50" y="50" width="110" height="50" fill="none" stroke="currentColor" strokeWidth="0.6" />
                  
                  {/* Overhanging Roof / Slabs */}
                  <rect x="30" y="45" width="140" height="5" fill="currentColor" opacity="0.6" />
                  <rect x="35" y="95" width="130" height="5" fill="currentColor" opacity="0.5" />

                  {/* Glazing / Windows with mullions */}
                  <rect x="50" y="110" width="40" height="50" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <line x1="60" y1="110" x2="60" y2="160" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="70" y1="110" x2="70" y2="160" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="80" y1="110" x2="80" y2="160" stroke="currentColor" strokeWidth="0.2" />
                  
                  <rect x="110" y="110" width="40" height="50" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <line x1="120" y1="110" x2="120" y2="160" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="130" y1="110" x2="130" y2="160" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="140" y1="110" x2="140" y2="160" stroke="currentColor" strokeWidth="0.2" />
                  
                  {/* First floor wide window */}
                  <rect x="55" y="55" width="100" height="40" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <line x1="80" y1="55" x2="80" y2="95" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="105" y1="55" x2="105" y2="95" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="130" y1="55" x2="130" y2="95" stroke="currentColor" strokeWidth="0.2" />

                  {/* Elevation measurement lines */}
                  <line x1="20" y1="45" x2="20" y2="160" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="15" y1="45" x2="25" y2="45" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="15" y1="100" x2="25" y2="100" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="15" y1="160" x2="25" y2="160" stroke="currentColor" strokeWidth="0.2" />

                  {/* Dimension Text */}
                  <text x="-75" y="18" fill="currentColor" fontSize="5" fontFamily="monospace" transform="rotate(-90)">LVL +2</text>
                  <text x="-135" y="18" fill="currentColor" fontSize="5" fontFamily="monospace" transform="rotate(-90)">LVL +1</text>
                  <text x="-158" y="18" fill="currentColor" fontSize="5" fontFamily="monospace" transform="rotate(-90)">GRND</text>
                </motion.g>

                {/* Scanning laser line effect */}
                <motion.line
                  x1="0" y1="0" x2="200" y2="0"
                  stroke="currentColor" strokeWidth="0.3"
                  animate={{ y1: [0, 200, 0], y2: [0, 200, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  opacity="0.5"
                  strokeDasharray="4 2"
                />
              </svg>

              <div className="absolute bottom-4 right-4 font-mono text-[8px] text-accent text-right">
                FIG. 1A <br />
                VILLA ELEVATION
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-8">
                Engineering Philosophy
              </div>
              
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                Form does not follow function.<br />
                <span className="font-medium text-white">They are synthesized.</span>
              </h2>

              <div className="space-y-6 text-sm text-text-muted font-light max-w-md">
                <p>
                  True structural engineering is invisible. It is the silent guarantee that a soaring cantilever will hold, that a glass facade will flex with the wind, and that gravity is respected but ultimately outsmarted.
                </p>
                <p>
                  We operate at the intersection of advanced mathematics and architectural vision, utilizing parametric modeling and non-linear analysis to optimize every node and connection.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <div className="font-mono text-3xl font-medium text-white mb-2">0.00%</div>
                  <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Failure Rate</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-medium text-white mb-2">12+</div>
                  <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Global Awards</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

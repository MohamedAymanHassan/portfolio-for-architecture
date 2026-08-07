import { motion } from "motion/react";
import { Crosshair, RulerX, RulerY } from "./Crosshair";
import { ArrowUpRight, ShieldCheck, Activity, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [liveData, setLiveData] = useState({
    tension: 45.2,
    compression: 12.8,
    shear: 8.4,
    frequency: 2.45
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData({
        tension: +(45 + Math.random() * 2).toFixed(1),
        compression: +(12 + Math.random() * 1.5).toFixed(1),
        shear: +(8 + Math.random() * 1).toFixed(1),
        frequency: +(2.4 + Math.random() * 0.1).toFixed(3),
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 border-b border-border bg-canvas text-white selection:bg-accent selection:text-white">
      {/* Deep Background Grid & Texture */}
      <div className="absolute inset-0 blueprint-grid opacity-30"></div>
      <div className="absolute inset-0 blueprint-grid-fine opacity-10"></div>
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent rounded-full blur-[120px] pointer-events-none opacity-20"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.02, 0.08, 0.02] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500 rounded-full blur-[150px] pointer-events-none opacity-10"
      />

      {/* Grid Rulers */}
      <RulerX className="absolute top-24 left-0 right-0 opacity-50" />
      <RulerY className="absolute top-0 bottom-0 left-8 opacity-40 hidden md:block" />
      <RulerY className="absolute top-0 bottom-0 right-8 opacity-40 hidden md:block" />

      {/* Scanning Laser Line */}
      <motion.div
        animate={{ y: [0, 1000, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-accent/50 shadow-[0_0_15px_rgba(255,69,0,0.8)] z-0 pointer-events-none"
      />

      {/* Massive Background Typography Marquee */}
      <div className="absolute top-[40%] left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none z-0">
        <motion.div 
          animate={{ x: [0, -2000] }} 
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap font-sans font-bold text-[18vw] leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.02)]"
        >
          STRUCTURAL ENGINEER STRUCTURAL ENGINEER STRUCTURAL ENGINEER
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-5rem)]">
        
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center py-20 lg:py-0 relative">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex items-center gap-3 font-mono text-[10px] text-white tracking-[0.2em] uppercase bg-surface/80 backdrop-blur-md border border-border px-4 py-2 relative overflow-hidden group"
          >
            <motion.div 
              className="absolute inset-0 bg-accent/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="w-1.5 h-1.5 bg-accent animate-pulse rounded-full shadow-[0_0_8px_rgba(255,69,0,0.8)]"></div>
            Systems Online // Analysis Ready
          </motion.div>
          
          <div className="mb-6 overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[0.95] text-glow"
            >
              Engineering <br />
              <span className="font-sans font-semibold text-white">Masterpieces.</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-text-muted text-sm md:text-base leading-relaxed mb-10 font-sans font-light border-l-2 border-accent pl-6 bg-gradient-to-r from-surface/50 to-transparent py-2 backdrop-blur-sm"
          >
            Hi, I'm <strong className="text-white font-medium">M. Faramawy</strong>. I engineer the invisible backbones of ambitious structural designs. Precision calculated, immaculately executed from blueprint to realization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto"
          >
            <a href="#projects" className="relative overflow-hidden bg-white text-black font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2 group w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,69,0,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>
            
            <a href="#expertise" className="font-mono text-xs uppercase tracking-widest text-text-muted hover:text-white transition-colors flex items-center gap-2 group">
              <span className="p-2 border border-border group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                <ShieldCheck className="w-4 h-4 text-accent" />
              </span>
              Core Competencies
            </a>
          </motion.div>

          {/* Mini Data readout below CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap gap-8 font-mono text-[10px] uppercase text-text-muted tracking-widest"
          >
            <div>
              <div className="mb-1">Active Projects</div>
              <div className="text-white text-lg">04</div>
            </div>
            <div>
              <div className="mb-1">Simulations Run</div>
              <div className="text-white text-lg">1,248</div>
            </div>
            <div>
              <div className="mb-1">Uptime</div>
              <div className="text-accent text-lg">99.9%</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Advanced Holographic Schematic */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full hidden md:flex items-center justify-center">
          
          {/* HUD Element 1: Global Analysis */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-[15%] -right-4 lg:-right-12 bg-surface/80 backdrop-blur-xl border border-white/10 p-4 font-mono text-[10px] uppercase text-text-muted z-20 shadow-2xl min-w-[200px]"
          >
            <div className="text-white mb-3 flex items-center gap-2 border-b border-border pb-2">
              <Activity className="w-3 h-3 text-accent" />
              Live Telemetry
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center gap-8">
                <span>Tension</span>
                <span className="text-accent flex items-center gap-1">
                  {liveData.tension.toFixed(1)} <span className="text-[8px] text-text-muted">kN</span>
                </span>
              </div>
              <div className="flex justify-between items-center gap-8">
                <span>Compression</span>
                <span className="text-white flex items-center gap-1">
                  {liveData.compression.toFixed(1)} <span className="text-[8px] text-text-muted">kN</span>
                </span>
              </div>
              <div className="flex justify-between items-center gap-8">
                <span>Nat. Freq.</span>
                <span className="text-white flex items-center gap-1">
                  {liveData.frequency.toFixed(3)} <span className="text-[8px] text-text-muted">Hz</span>
                </span>
              </div>
            </div>
            
            {/* Mini live chart */}
            <div className="mt-3 h-8 flex items-end gap-[2px] opacity-70">
              {Array.from({length: 20}).map((_, i) => (
                <motion.div 
                  key={i}
                  className="w-full bg-accent/50"
                  animate={{ height: ['20%', `${20 + Math.random() * 80}%`, '20%'] }}
                  transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </motion.div>

          {/* HUD Element 2: Material Specs */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-[20%] -left-4 lg:-left-12 bg-surface/80 backdrop-blur-xl border border-white/10 p-4 font-mono text-[10px] uppercase text-text-muted z-20 shadow-2xl"
          >
            <div className="text-white mb-3 flex items-center gap-2 border-b border-border pb-2">
              <Cpu className="w-3 h-3 text-accent" />
              Material Matrix
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <div className="flex-grow">UHPC Concrete</div>
                <div className="text-white">C80/95</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="flex-grow">Rebar Yield</div>
                <div className="text-white">500 MPa</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-text-muted"></div>
                <div className="flex-grow">Carbon Fiber</div>
                <div className="text-white">T300</div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Corner Markers */}
          <Crosshair className="absolute top-[10%] left-[10%] text-accent/50" />
          <Crosshair className="absolute bottom-[10%] right-[10%] text-accent/50" />
          <Crosshair className="absolute top-[50%] left-[50%] text-white/10 -translate-x-1/2 -translate-y-1/2 scale-[3]" />

          {/* Advanced Animated SVG 3D Representation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none drop-shadow-[0_0_25px_rgba(255,69,0,0.15)]">
            <svg viewBox="-200 -200 400 400" className="w-[180%] h-[180%] max-w-[900px] max-h-[900px] text-accent">
              
              {/* Counter-rotating outer analytical rings */}
              <motion.g animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                <circle cx="0" cy="0" r="160" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 10" />
                <circle cx="0" cy="0" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="30 15 5 15" />
                <circle cx="0" cy="0" r="140" fill="none" stroke="currentColor" strokeWidth="0.1" />
                {/* Orbital nodes */}
                <circle cx="0" cy="-150" r="3" fill="currentColor" />
                <circle cx="0" cy="150" r="3" fill="currentColor" />
                <circle cx="-150" cy="0" r="3" fill="currentColor" />
                <circle cx="150" cy="0" r="3" fill="currentColor" />
              </motion.g>

              {/* Main Complex Geometric Structure (Toroidal / Geodesic feel) */}
              <motion.g animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}>
                
                {/* Generate overlapping star polygons for a dense structural mesh look */}
                {Array.from({ length: 8 }).map((_, layerIdx) => {
                   const radius = 40 + (layerIdx * 12);
                   const sides = 12;
                   const points = [];
                   for(let i=0; i<sides; i++) {
                       const angle = (i * Math.PI * 2) / sides + (layerIdx * 0.1);
                       points.push(`${Math.cos(angle)*radius},${Math.sin(angle)*radius}`);
                   }
                   
                   return (
                     <motion.polygon 
                        key={layerIdx}
                        points={points.join(' ')}
                        fill="none" 
                        stroke={layerIdx % 2 === 0 ? "currentColor" : "white"} 
                        strokeWidth={layerIdx % 2 === 0 ? 0.3 : 0.1}
                        opacity={0.3 + (layerIdx * 0.05)}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 2, delay: layerIdx * 0.1, ease: "backOut" }}
                     />
                   )
                })}

                {/* Connecting web / Struts */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * Math.PI * 2) / 24;
                  return (
                    <motion.line 
                      key={i}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 + i * 0.05 }}
                      x1={Math.cos(angle)*40} y1={Math.sin(angle)*40} 
                      x2={Math.cos(angle)*124} y2={Math.sin(angle)*124} 
                      stroke="currentColor" strokeWidth="0.2" opacity="0.6"
                    />
                  )
                })}
                
                {/* Diagonal Bracing (Diagrid) */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle1 = (i * Math.PI * 2) / 12;
                  const angle2 = ((i+1) * Math.PI * 2) / 12;
                  return (
                    <g key={`bracing-${i}`}>
                      <line x1={Math.cos(angle1)*88} y1={Math.sin(angle1)*88} x2={Math.cos(angle2)*112} y2={Math.sin(angle2)*112} stroke="white" strokeWidth="0.1" opacity="0.4" />
                      <line x1={Math.cos(angle1)*112} y1={Math.sin(angle1)*112} x2={Math.cos(angle2)*88} y2={Math.sin(angle2)*88} stroke="white" strokeWidth="0.1" opacity="0.4" />
                    </g>
                  )
                })}

              </motion.g>

              {/* Pulsing Core */}
              <motion.circle 
                animate={{ r: [15, 25, 15], opacity: [0.8, 0.2, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                cx="0" cy="0" r="15" fill="currentColor" 
              />
              <circle cx="0" cy="0" r="10" fill="currentColor" className="text-canvas" />
              <circle cx="0" cy="0" r="4" fill="currentColor" />

            </svg>
          </div>
        </div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-text-muted [writing-mode:vertical-rl] rotate-180">
          Scroll to explore
        </div>
        <div className="w-[1px] h-16 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

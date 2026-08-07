import { motion } from "motion/react";
import { Hexagon } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mix-blend-difference"
    >
      <div className="flex items-center gap-3">
        <Hexagon className="w-5 h-5 text-accent" strokeWidth={1.5} />
        <span className="font-mono text-sm tracking-widest uppercase">M. Faramawy</span>
      </div>

      <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest text-text-muted">
        <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
        <a href="#details" className="hover:text-accent transition-colors">Details</a>
      </div>

      <div className="font-mono text-xs tracking-widest">
        <a href="#contact" className="border border-border px-4 py-2 hover:bg-white hover:text-black transition-all">
          Initiate Contact
        </a>
      </div>
    </motion.nav>
  );
}

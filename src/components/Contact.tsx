import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, FileText } from "lucide-react";
import { Crosshair } from "./Crosshair";

const socialLinks = [
  { name: "LinkedIn", url: "#", icon: Linkedin, desc: "Professional Network" },
  { name: "ResearchGate", url: "#", icon: FileText, desc: "Academic Publications" },
  { name: "Instagram", url: "#", icon: Instagram, desc: "Visual Portfolio" },
  { name: "GitHub", url: "#", icon: Github, desc: "Parametric Scripts" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 border-b border-border bg-canvas overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-fine opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-8">
              <span className="w-8 h-[1px] bg-border"></span>
              Communication Interface
            </div>

            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Initiate <br/> <span className="font-medium text-white">Project.</span>
            </h2>
            <p className="text-sm text-text-muted max-w-sm mb-12 leading-relaxed">
              For commissions, technical consultations, or to request a full portfolio of detailed engineering blueprints.
            </p>

            <a 
              href="mailto:contact@mfaramawy.com" 
              className="inline-flex items-center gap-4 bg-white text-black px-8 py-5 font-mono text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all group"
            >
              <Mail className="w-4 h-4" />
              Establish Connection
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="mt-16 font-mono text-xs text-text-muted space-y-2">
              <div className="uppercase text-white tracking-widest mb-4">Coordinates</div>
              <p>47°22'40.0"N 8°32'15.1"E</p>
              <p>Zürich, Switzerland</p>
            </div>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border p-px h-fit"
          >
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.url}
                  className="group relative bg-surface p-8 hover:bg-canvas transition-colors duration-500 block h-full"
                >
                  <Crosshair className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-accent scale-75" />
                  
                  <Icon className="w-6 h-6 text-text-muted mb-6 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                  
                  <div className="font-mono text-sm text-white mb-2 group-hover:text-accent transition-colors duration-500 flex items-center justify-between">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                  <div className="text-xs text-text-muted font-light">
                    {link.desc}
                  </div>
                </a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

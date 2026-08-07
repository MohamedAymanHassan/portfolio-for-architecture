import { Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-8 bg-surface border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center font-mono text-[10px] uppercase tracking-widest text-text-muted">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Hexagon className="w-4 h-4 text-accent" strokeWidth={1} />
            <span>© {new Date().getFullYear()} M. Faramawy</span>
          </div>
          <div>All Systems Nominal</div>
        </div>
      </div>
    </footer>
  );
}

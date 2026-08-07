export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute w-4 h-4 flex items-center justify-center opacity-30 ${className}`}>
      <div className="absolute w-full h-[1px] bg-white"></div>
      <div className="absolute h-full w-[1px] bg-white"></div>
    </div>
  );
}

export function RulerX({ className = "" }: { className?: string }) {
  return (
    <div className={`h-[1px] bg-white/10 relative ${className}`}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute top-0 w-[1px] bg-white/20" 
          style={{ left: `${i * 5}%`, height: i % 2 === 0 ? '6px' : '3px' }}
        />
      ))}
    </div>
  );
}

export function RulerY({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[1px] bg-white/10 relative ${className}`}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute left-0 h-[1px] bg-white/20" 
          style={{ top: `${i * 5}%`, width: i % 2 === 0 ? '6px' : '3px' }}
        />
      ))}
    </div>
  );
}

export function DataStream() {
  return (
    <div className="fixed left-0 top-0 h-full w-8 pointer-events-none z-20 overflow-hidden opacity-30">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-neon-green text-xs font-mono animate-matrix"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        >
          {Math.random().toString(2).substring(2, 10)}
        </div>
      ))}
    </div>
  );
}

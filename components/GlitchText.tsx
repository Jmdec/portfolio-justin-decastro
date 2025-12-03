import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute top-0 left-0 text-neon-cyan opacity-70"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
          animation: "glitch-top 2.5s infinite",
        }}
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 text-neon-pink opacity-70"
        style={{
          clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
          animation: "glitch-bottom 2.5s infinite",
        }}
      >
        {text}
      </span>
      
      <style>{`
        @keyframes glitch-top {
          0%, 100% { transform: translate(0); }
          2% { transform: translate(2px, -2px); }
          4% { transform: translate(-2px, 2px); }
          6% { transform: translate(0); }
          20% { transform: translate(0); }
          22% { transform: translate(3px, -1px); }
          24% { transform: translate(-3px, 1px); }
          26% { transform: translate(0); }
        }
        @keyframes glitch-bottom {
          0%, 100% { transform: translate(0); }
          2% { transform: translate(-2px, 2px); }
          4% { transform: translate(2px, -2px); }
          6% { transform: translate(0); }
          20% { transform: translate(0); }
          22% { transform: translate(-3px, 1px); }
          24% { transform: translate(3px, -1px); }
          26% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
}

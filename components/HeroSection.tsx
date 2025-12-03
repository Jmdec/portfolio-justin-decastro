import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Eye } from "lucide-react";

const typingTexts = [
  "FULL STACK DEVELOPER",
  "LARAVEL",
  "REACT",
  "NEXT.JS",
  "WEB SOLUTIONS",
];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const currentFullText = typingTexts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentFullText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, isDeleting]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

      {/* Scanning Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan"
          style={{ top: "30%" }}
        />
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"
          style={{ top: "60%", animation: "scan 6s linear infinite reverse" }}
        />
      </div>

      <div className="container mx-auto text-center relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Loading Animation */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4">
              {">"} INITIALIZING WEB DEVELOPER INTERFACE...
            </div>
            <div className="w-48 sm:w-64 h-1 bg-muted rounded-full mx-auto mb-3 sm:mb-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-2000"
                style={{ width: isLoaded ? "100%" : "0%" }}
              />
            </div>
          </div>

          {/* Glitch Name */}
          <div className="mb-6 sm:mb-8">
            <h1
              className={`text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display mb-4 sm:mb-6 transition-all duration-1000 animate-glitch text-glow-cyan ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                background: "linear-gradient(45deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-pink)), hsl(var(--neon-cyan)))",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradient-shift 3s ease infinite",
              }}
            >
              JUSTIN DE CASTRO
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="relative mb-8 sm:mb-12">
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 font-mono">
              <span className="text-primary">{">"} </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {currentText || "FULL STACK DEVELOPER"}
              </span>
              <span className="animate-blink text-primary">|</span>
            </div>
          </div>

          {/* Terminal Card */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="cyber-border rounded-lg shadow-xl px-6 py-8 sm:px-10 sm:py-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold font-display text-primary leading-tight">
                  Full Stack Web Developer
                </h2>
                <p className="text-muted-foreground mt-1 text-base">
                  Specializing in modern web technologies
                </p>
              </div>

              <div className="mb-10 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold font-display text-primary mb-3">
                    Tech Stack
                  </h3>
                  <div className="space-y-2 text-foreground/80 text-base leading-relaxed text-left">
                    <p>
                      <span className="font-semibold text-primary">Backend:</span>{" "}
                      Laravel, CodeIgniter 4, PHP, MySQL
                    </p>
                    <p>
                      <span className="font-semibold text-primary">Frontend:</span>{" "}
                      Next.js, React, Hero UI
                    </p>
                    <p>
                      <span className="font-semibold text-primary">Tools:</span>{" "}
                      Axios, JavaScript, Tailwind CSS, Bootstrap
                    </p>
                    <p>
                      <span className="font-semibold text-primary">Focus:</span>{" "}
                      Modern Web Applications
                    </p>
                  </div>
                </div>

                <div className="cyber-border rounded-lg px-6 py-4">
                  <p className="text-neon-green font-semibold text-base">
                    ✅ Available for Projects
                  </p>
                  <p className="text-neon-green/80 animate-bounce mt-1 text-base">
                    🚀 Ready to Build Amazing Websites
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button
              variant="cyber"
              size="xl"
              onClick={() => scrollToSection("projects")}
              className="relative group overflow-hidden"
            >
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>VIEW MY PROJECTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/0 via-foreground/30 to-foreground/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>

            <Button
              variant="cyber-outline"
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              <Eye className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary-foreground transition-colors" />
              <span className="group-hover:text-primary-foreground transition-colors">LET'S WORK TOGETHER</span>
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 -z-10" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

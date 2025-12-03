import { skills } from "@/data/projects";
import { ScrollReveal } from "@/components/ScrollReveal";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              TECHNOLOGY STACK
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {skills.map((skill, index) => (
              <ScrollReveal
                key={skill.name}
                delay={index * 100}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="group relative">
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">{skill.icon}</span>
                      <span className="text-muted-foreground font-semibold text-lg sm:text-xl group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm sm:text-base text-right text-foreground/60 font-mono capitalize">
                      {skill.level}
                    </span>
                  </div>

                  <div className="relative h-3 sm:h-4 bg-muted/50 rounded-full overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />

                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{
                        width: skill.level === "Intermediate" ? "65%" : "90%",
                        boxShadow: `0 0 15px hsl(var(--neon-cyan) / 0.4)`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <div className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-foreground rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${1 + i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

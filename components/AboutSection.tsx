import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code2, Zap, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const expertiseItems = [
  {
    icon: Code2,
    title: "FULL STACK MASTERY",
    desc: "Expert in both frontend and backend development with Laravel, Next.js, and modern web technologies for complete web solutions.",
    color: "from-primary to-blue-600",
    stats: ["21+ Projects Live", "Modern Stack", "Full Cycle"],
  },
  {
    icon: Zap,
    title: "PERFORMANCE FOCUSED",
    desc: "Building fast, responsive applications with optimized code, efficient APIs, and modern development practices.",
    color: "from-secondary to-accent",
    stats: ["Fast Loading", "Optimized", "Responsive"],
  },
  {
    icon: Globe,
    title: "PRODUCTION READY",
    desc: "Delivering enterprise-level applications that are scalable, maintainable, and ready for real-world deployment.",
    color: "from-neon-green to-teal-600",
    stats: ["Enterprise Level", "Scalable", "Production"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DEVELOPMENT EXPERTISE
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {expertiseItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="scale">
                <Card
                  className="group relative overflow-hidden transform hover:scale-105 transition-all duration-700 h-full"
                >
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  />

                  {/* Scanning Line */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <CardHeader className="relative z-10 pb-3 sm:pb-4">
                    <div className="mb-4 sm:mb-6 relative">
                      <item.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary group-hover:text-foreground transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12" />
                      <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl group-hover:text-foreground transition-colors duration-500 mb-3 sm:mb-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {item.desc}
                    </p>

                    <div className="space-y-2">
                      {item.stats.map((stat, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                          <span className="text-muted-foreground text-xs sm:text-sm font-mono">
                            {stat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

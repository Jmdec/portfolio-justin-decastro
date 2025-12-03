import { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const categories = ["All", ...new Set(projects.map(p => p.category))];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-8xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-center mb-4 bg-gradient-to-r from-neon-green to-primary bg-clip-text text-transparent">
              LIVE PROJECTS
            </h2>
            <p className="text-center text-muted-foreground mb-8 sm:mb-12 font-mono">
              {projects.length}+ Production Applications Deployed
            </p>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {categories.slice(0, 8).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowAll(false);
                  }}
                  className={`px-4 py-2 rounded-full font-mono text-xs sm:text-sm transition-all duration-300 border ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground border-primary cyber-glow"
                      : "bg-transparent text-muted-foreground border-primary/30 hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {displayedProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <Card
                  className="group relative overflow-hidden transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 h-full"
                >
                  {/* Holographic Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700`}
                  />

                  {/* Scanning Lines */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="live" className="font-mono text-xs px-3 py-1">
                        {project.status}
                      </Badge>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-primary hover:text-foreground hover:bg-primary/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                        asChild
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative">
                        <project.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-foreground transition-all duration-500 transform group-hover:scale-110" />
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl group-hover:text-foreground transition-colors duration-500 leading-tight">
                          {project.title}
                        </CardTitle>
                        <span className="text-xs text-muted-foreground font-mono">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={tech}
                          variant="tech"
                          className="text-xs hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/30 to-transparent transform rotate-45 translate-x-12 -translate-y-12" />
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Show More/Less Button */}
          {filteredProjects.length > 6 && (
            <ScrollReveal delay={400}>
              <div className="flex justify-center mt-12">
                <Button
                  variant="cyber-outline"
                  size="lg"
                  onClick={() => setShowAll(!showAll)}
                  className="group"
                >
                  {showAll ? (
                    <>
                      <ChevronUp className="w-5 h-5" />
                      <span>Show Less</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" />
                      <span>View All {filteredProjects.length} Projects</span>
                    </>
                  )}
                </Button>
              </div>
            </ScrollReveal>
          )}

          {/* Stats */}
          <ScrollReveal delay={600}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Live Projects", value: projects.length },
                { label: "Technologies", value: 10 },
                { label: "Categories", value: categories.length - 1 },
                { label: "Success Rate", value: 100, suffix: "%" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-4 cyber-border rounded-lg group hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-primary group-hover:text-glow-cyan transition-all">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix || "+"} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const contactLinks = [
  {
    href: "mailto:decastrojustin321@gmail.com",
    icon: Mail,
    text: "SEND_EMAIL",
    color: "from-primary to-blue-600",
  },
  {
    href: "https://www.linkedin.com/in/justin-de-castro-381483366",
    icon: Linkedin,
    text: "LINKEDIN_CONNECT",
    color: "from-secondary to-accent",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              LET'S BUILD TOGETHER
            </h2>
          </ScrollReveal>

          {/* Terminal Interface */}
          <ScrollReveal delay={200}>
            <div className="cyber-border rounded-lg overflow-hidden shadow-2xl shadow-primary/20 mb-12 sm:mb-16 relative">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/30">
                <div className="flex space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-destructive rounded-full animate-pulse" />
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 bg-neon-yellow rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 bg-neon-green rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <span className="text-primary font-mono text-xs sm:text-sm">
                  contact_developer.exe
                </span>
                <div className="text-primary text-xs sm:text-sm font-mono hidden sm:block">
                  AVAILABLE • READY • RESPONSIVE
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 sm:p-8 lg:p-10 font-mono text-left space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base">
                <div className="text-primary mb-2 sm:mb-3 flex items-center">
                  <span className="animate-pulse mr-2">▶</span>
                  {"$ ./check_availability.sh"}
                </div>
                <div className="text-neon-green mb-2 sm:mb-3 pl-4">
                  {">"} Developer status: AVAILABLE FOR NEW PROJECTS
                </div>
                <div className="text-secondary mb-2 sm:mb-3 pl-4">
                  {">"} Specialization: Full Stack Web Development
                </div>
                <div className="text-neon-yellow mb-2 sm:mb-3 pl-4">
                  {">"} Response time: Within 24 hours
                </div>
                <div className="text-primary mb-2 sm:mb-3 flex items-center">
                  <span className="animate-pulse mr-2">▶</span>
                  {"$ cat services.txt"}
                </div>
                <div className="text-neon-green flex flex-wrap items-center gap-1 sm:gap-2 pl-4">
                  <span>{">"}</span>
                  <span className="px-2 py-1 bg-neon-green/10 rounded animate-pulse">CUSTOM WEB APPLICATIONS</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="px-2 py-1 bg-primary/10 rounded">MODERN UI/UX DESIGN</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="px-2 py-1 bg-secondary/10 rounded animate-pulse">SEO OPTIMIZATION</span>
                </div>
              </div>

              {/* Scanning Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-8 sm:h-12 pointer-events-none"
                style={{ animation: "terminal-scan 4s linear infinite" }}
              />
            </div>
          </ScrollReveal>

          {/* Contact Buttons */}
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
              {contactLinks.map((contact, index) => (
                <div key={index} className="group">
                  <Button
                    size="xl"
                    className={`relative bg-gradient-to-r ${contact.color} hover:scale-110 text-primary-foreground border-0 px-6 sm:px-8 lg:px-10 py-6 text-lg sm:text-xl font-bold overflow-hidden transition-all duration-500 transform hover:rotate-1 w-full sm:w-auto cyber-glow`}
                    asChild
                  >
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="relative z-10 flex flex-col items-center gap-2"
                    >
                      <contact.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                      <span className="text-sm sm:text-base lg:text-lg">{contact.text}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-foreground/0 via-foreground/30 to-foreground/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

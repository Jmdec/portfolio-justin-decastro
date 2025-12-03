import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Contact"];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-primary/30 z-40 shadow-lg shadow-primary/10">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
            <div className="relative">
              <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-foreground transition-all duration-300" />
              <div className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full animate-ping" />
            </div>
            <span
              className="text-lg sm:text-2xl font-bold font-display bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: "200% 200%" }}
            >
              {"<JUSTIN.DEV />"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group text-muted-foreground hover:text-primary transition-all duration-300 font-mono text-sm lg:text-base"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{`${item.toLowerCase()}.exe`}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary hover:text-foreground transition-colors duration-300 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/30 animate-fade-in">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-mono text-lg py-2 px-4 rounded hover:bg-primary/10 text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {`${item.toLowerCase()}.exe`}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-primary/20 shadow-2xl shadow-primary/10"
          : "bg-background/10 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            SR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group text-sm font-medium tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 group-hover:w-full rounded-full" />
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 group-hover:w-full rounded-full blur-sm opacity-50" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="relative bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:shadow-xl font-semibold px-6 overflow-hidden group"
            >
              <span className="relative z-10">Let's Talk</span>
              <span className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-primary/20 pt-6 space-y-3 animate-in fade-in slide-in-from-top-5 duration-300">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:translate-x-2 font-medium"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 font-semibold mt-4"
            >
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer Animated Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated Gradient Orbs - Using design system colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/15 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* Dynamic Grid Pattern - Subtle and consistent */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      {/* Refined Particle System */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              opacity: 0.4 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Status Badge */}
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/90 backdrop-blur-xl border border-primary/20 mb-8 animate-scale-in hover:scale-105 transition-transform duration-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">Available for opportunities</span>
          </div>
        </div>

        {/* Main Title with Advanced Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="block mb-4 text-muted-foreground font-light tracking-wide">Hey, I'm</span>
          <span className="relative inline-block">
            <span className="text-gradient glow relative z-10">Sohaib Rizwan</span>
            <div className="absolute inset-0 blur-2xl opacity-50 text-gradient animate-pulse-slow">Sohaib Rizwan</div>
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <p className="text-xl md:text-3xl text-foreground mb-6 max-w-4xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          I build interfaces that{" "}
          <span className="relative inline-block">
            <span className="text-primary font-bold relative z-10">think</span>
            <span className="absolute inset-0 blur-lg bg-primary/50 animate-glow-pulse"></span>
          </span>
          {" "}and{" "}
          <span className="relative inline-block">
            <span className="text-accent font-bold relative z-10">perform</span>
            <span className="absolute inset-0 blur-lg bg-accent/50 animate-glow-pulse" style={{ animationDelay: "0.5s" }}></span>
          </span>
        </p>

        {/* Role Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          {["Frontend Architect", "WordPress Pro", "AI Workflow Builder"].map((role, i) => (
            <span 
              key={role}
              className="px-4 py-2 rounded-full bg-card/70 backdrop-blur-sm border border-border text-sm font-medium text-muted-foreground hover:border-primary/40 hover:bg-card/90 hover:text-foreground transition-all duration-300"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              {role}
            </span>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <Button
            size="lg"
            className="relative overflow-hidden group bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg px-10 py-6 shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
            onClick={() => scrollToSection("projects")}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Work
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="relative overflow-hidden group border-2 border-border bg-card/60 backdrop-blur-sm hover:bg-card hover:border-primary/40 text-lg px-10 py-6 hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            <span className="relative z-10">Let's Collaborate</span>
          </Button>
        </div>

        {/* Animated Tech Stack */}
        <div className="flex flex-wrap gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          {[
            { name: "React", color: "primary" },
            { name: "TypeScript", color: "primary" },
            { name: "Node.js", color: "accent" },
            { name: "WordPress", color: "accent" },
            { name: "AI Automation", color: "primary" }
          ].map((tech, i) => (
            <div
              key={tech.name}
              className="group relative px-6 py-3 rounded-xl bg-card/70 backdrop-blur-md border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${0.7 + i * 0.1}s` }}
            >
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Enhanced Social Links */}
        <div className="flex gap-4 justify-center mt-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:contact@example.com", label: "Email" }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="group relative p-4 rounded-full bg-card/70 backdrop-blur-md border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: "1s" }}>
          <div className="relative w-8 h-14 border-2 border-border rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-card/50">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

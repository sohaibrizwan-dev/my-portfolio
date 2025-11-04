import { Code2, Zap, Sparkles, Layers } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Architecture",
      description: "Expert in React, TypeScript, Next.js, and modern web standards",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Layers,
      title: "WordPress Mastery",
      description: "Headless WP, REST API, WooCommerce, and custom theme development",
      gradient: "from-accent to-primary"
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description: "n8n, Flowise, LangChain, and intelligent workflow orchestration",
      gradient: "from-primary to-accent"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lighthouse scores 95+, Core Web Vitals, and speed optimization",
      gradient: "from-primary-glow to-primary"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle background effects matching Hero */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Building the <span className="text-gradient">Future of Web</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            5+ years crafting performant, accessible, and beautiful digital experiences.
            From pixel-perfect interfaces to AI-powered workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.gradient} mb-4 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground">My Journey</h3>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
            
            <div className="space-y-12">
              {[
                { year: "2019", title: "Started Web Development", description: "Discovered passion for creating interactive experiences" },
                { year: "2021", title: "Specialized in React", description: "Mastered modern frontend frameworks and TypeScript" },
                { year: "2023", title: "WordPress & Headless CMS", description: "Built scalable content solutions for enterprises" },
                { year: "2025", title: "AI Integration Expert", description: "Leading AI workflow automation and intelligent systems" }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-6 rounded-xl bg-card/70 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:bg-card">
                      <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                      <h4 className="text-xl font-bold mt-2 mb-1 text-foreground">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Headless WooCommerce with React frontend, achieving 95+ Lighthouse score",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      tags: ["React", "WordPress", "WooCommerce"],
      category: "wordpress",
      demo: "#",
      github: "#"
    },
    {
      title: "AI Content Generator",
      description: "LangChain-powered content automation with n8n workflows",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["AI", "n8n", "LangChain"],
      category: "ai",
      demo: "#",
      github: "#"
    },
    {
      title: "SaaS Dashboard",
      description: "Real-time analytics dashboard with React Query and TypeScript",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind"],
      category: "react",
      demo: "#",
      github: "#"
    },
    {
      title: "Portfolio CMS",
      description: "Custom WordPress theme with ACF Pro and Gutenberg blocks",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tags: ["WordPress", "ACF", "PHP"],
      category: "wordpress",
      demo: "#",
      github: "#"
    },
    {
      title: "Performance Audit Tool",
      description: "Automated Lighthouse testing and Core Web Vitals monitoring",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Performance", "SEO", "Node.js"],
      category: "optimization",
      demo: "#",
      github: "#"
    },
    {
      title: "Marketing Automation",
      description: "Multi-channel automation with Zapier, Make, and custom webhooks",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
      tags: ["Zapier", "Automation", "APIs"],
      category: "ai",
      demo: "#",
      github: "#"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React" },
    { id: "wordpress", label: "WordPress" },
    { id: "ai", label: "AI & Automation" },
    { id: "optimization", label: "Performance" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            A showcase of recent work spanning frontend development, WordPress, and AI automation.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
          >
            View More on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

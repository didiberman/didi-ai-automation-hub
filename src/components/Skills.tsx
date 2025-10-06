import { Code2, Cloud, Brain, GitBranch } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Custom AI integrations with Azure, Claude, Gemini, and Perplexity for intelligent automation",
    },
    {
      icon: Code2,
      title: "Automation Systems",
      description: "Expert in n8n and Zapier for building sophisticated workflow automation",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "DevOps and MLOps expertise with production-ready deployments",
    },
    {
      icon: GitBranch,
      title: "API Integration",
      description: "Custom API integrations connecting business systems seamlessly",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">Core Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

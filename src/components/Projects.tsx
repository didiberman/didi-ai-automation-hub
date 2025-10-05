import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Languages, TrendingUp, Instagram } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Instagram,
      title: "Instagram Lead Warmer",
      company: "World-Leading Instagram Marketing Expert",
      description: "Built an intelligent lead warming system that automatically analyzes prospects' Instagram accounts and sends personalized, data-driven emails. The automation combines Instagram API data with AI-powered insights to craft highly relevant outreach messages, significantly improving response rates and conversion.",
      tags: ["n8n", "Instagram API", "AI Analysis", "Email Automation", "Personalization"],
      gradient: "from-pink-500/10 to-rose-500/10",
    },
    {
      icon: ShoppingCart,
      title: "eCommerce Invoice Automation",
      company: "Large German eCommerce Brand",
      description: "Automated manual invoice processing with custom AI integrations to Microsoft Azure, automatically creating Shopify orders from scanned invoices. Reduced processing time by 90% and eliminated manual data entry errors.",
      tags: ["n8n", "Azure AI", "Shopify API", "Document Processing"],
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Languages,
      title: "Brand-Aware Translation Agent",
      company: "German eCommerce Brand",
      description: "Developed an intelligent translation system that automatically refines its prompts based on feedback, maintaining brand voice consistency across multiple languages. Implemented continuous learning for improved accuracy.",
      tags: ["AI/ML", "n8n", "Natural Language Processing", "Feedback Loop"],
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: TrendingUp,
      title: "Lead Enrichment Automation",
      company: "UK Capital Funding & VC Introductions Firm",
      description: "Created comprehensive lead enrichment system integrating ZohoCRM with Perplexity, Gemini, and Claude APIs. Automatically enriches lead database with up-to-date company and employee-level information, improving sales efficiency by 60%.",
      tags: ["n8n", "ZohoCRM", "Perplexity API", "Gemini", "Claude"],
      gradient: "from-green-500/10 to-emerald-500/10",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world automation solutions that streamline business processes and drive results
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </div>
        
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border hover:border-primary/50 bg-gradient-to-br ${project.gradient} backdrop-blur-sm animate-fade-in-up overflow-hidden hover:scale-[1.02] hover:-translate-y-1`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-muted-foreground/80">
                      {project.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

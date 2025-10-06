import { Sparkles, Code, Brain, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main intro with emphasis */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Hi! I'm <span className="text-primary">Didi</span>, a developer passionate about building real-world solutions at the intersection of{" "}
              <span className="text-primary">automation</span>, <span className="text-primary">AI</span>, and{" "}
              <span className="text-primary">MLOps/DevOps</span>.
            </p>
          </div>

          {/* Key areas with icons */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Technical Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in designing and deploying <span className="text-foreground font-medium">end-to-end machine learning solutions</span>, from model refinement to production deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-up [animation-delay:100ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Intelligent Automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating <span className="text-foreground font-medium">intelligent automation systems</span> that solve real business problems and streamline workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-up [animation-delay:200ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Unique Perspective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My background spans <span className="text-foreground font-medium">MLOps, cloud infrastructure, and trauma-informed systems thinking</span> for human-centered automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-up [animation-delay:300ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Community Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Committed to <span className="text-foreground font-medium">learning in public</span> and sharing knowledge through open-source contributions and educational content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current work */}
          <div className="mt-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 animate-fade-in-up [animation-delay:400ms]">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-semibold text-primary">Currently:</span> Training in MLOps and DevOps while actively working with clients on{" "}
              <span className="text-primary font-medium">n8n and Zapier integrations</span>,{" "}
              <span className="text-primary font-medium">custom API development</span>, and{" "}
              <span className="text-primary font-medium">business process automation</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm Didi, a developer passionate about building real-world solutions at the 
              intersection of automation, AI, and MLOps/DevOps.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in designing and deploying end-to-end machine learning solutions, 
              from model refinement to production deployment, while creating intelligent automation 
              systems that solve real business problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My background spans MLOps, cloud infrastructure, and trauma-informed systems thinking. 
              I bring a unique blend of technical expertise and psychological understanding to create 
              meaningful automation that respects human needs and workflows.
            </p>
          </div>
          
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm training in MLOps and DevOps while actively working with clients on 
              n8n and Zapier integrations, custom API development, and business process automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm committed to learning in public and sharing knowledge with the community through 
              open-source contributions and educational content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

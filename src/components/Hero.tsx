import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="block text-foreground animate-fade-in">Didi Berman</span>
              <span className="block bg-gradient-text bg-clip-text text-transparent mt-2 pb-2 animate-fade-in [animation-delay:200ms]">
                AI Automation Engineer
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-medium">
              DevOps / MLOps Specialist
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              2+ years of experience deploying intelligent automation systems, cloud infrastructure, 
              and full-stack AI workflows. Specializing in n8n, Zapier, and custom API integrations 
              to automate manual business processes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Germany (Remote-Friendly)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:didi@didiberman.com" className="hover:text-primary transition-colors">
                  didi@didiberman.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Profile image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-glow-pulse" />
              <img
                src={profileImage}
                alt="Didi Berman"
                className="relative rounded-full w-80 h-80 object-cover shadow-2xl ring-4 ring-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

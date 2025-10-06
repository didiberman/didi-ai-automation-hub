import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight, Video, User, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useState, useEffect } from "react";
import FallingRobots from "./FallingRobots";

const Hero = () => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show image after brief delay
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 300);

    // Show rest of content after image appears
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Falling robots background */}
      <FallingRobots />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile image at top - fades in first */}
          <div className={`relative transition-all duration-1000 ${showImage ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-3xl opacity-40 animate-glow-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-60" />
            <img
              src={profileImage}
              alt="Didi Berman - AI Automation Engineer"
              className="relative rounded-full w-64 h-64 object-cover shadow-2xl ring-4 ring-primary/30"
            />
          </div>
          
          {/* Text content - explodes into view */}
          <div className={`space-y-4 ${showContent ? 'animate-explode-scale' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-primary">Didi Berman</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-foreground font-semibold">
              AI Automation Engineer
            </p>
            
            <p className="text-xl md:text-2xl text-primary font-medium">
              DevOps / MLOps
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto pt-4">
              2+ years of experience deploying intelligent automation systems, cloud infrastructure,
              and full-stack AI workflows
            </p>
          </div>
          
          {/* Buttons - explode with slight delay */}
          <div className={`flex flex-wrap justify-center gap-4 pt-4 ${showContent ? 'animate-explode-scale [animation-delay:200ms]' : 'opacity-0'}`}>
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
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Video className="mr-2 h-5 w-5" />
              Testimonial
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <User className="mr-2 h-5 w-5" />
              About Me
            </Button>
          </div>
          
          {/* Location and email - explode with more delay */}
          <div className={`flex flex-wrap justify-center gap-6 pt-6 text-primary ${showContent ? 'animate-explode-scale [animation-delay:400ms]' : 'opacity-0'}`}>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Germany (Remote-Friendly)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:didi@didiberman.com" className="hover:text-primary/80 transition-colors">
                didi@didiberman.com
              </a>
            </div>
          </div>
          
          {/* Social icons - explode last */}
          <div className={`flex gap-4 pt-4 ${showContent ? 'animate-explode-scale [animation-delay:600ms]' : 'opacity-0'}`}>
            <button
              onClick={() => window.open('https://github.com/didiberman', '_blank')}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={() => window.open('https://linkedin.com/in/didiberman', '_blank')}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

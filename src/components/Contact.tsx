import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      id="contact" 
      className={`py-24 px-4 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 animate-slide-in-bottom' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/30 to-background" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Looking to automate your business processes? I'd love to hear about your project.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="text-muted-foreground">
                Available for freelance projects and consulting opportunities
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = 'mailto:didi@didiberman.com'}
                className="w-full sm:w-auto"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/didiberman', '_blank')}
                className="w-full sm:w-auto"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => window.open('https://github.com/didiberman', '_blank')}
                className="w-full sm:w-auto"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-muted-foreground">
        <p className="mb-2">© 2025 Didi Berman. All rights reserved.</p>
        <p className="text-sm">Built with React, TypeScript, and Tailwind CSS</p>
      </footer>
    </section>
  );
};

export default Contact;

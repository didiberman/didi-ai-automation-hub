import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">Client Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from clients who've transformed their businesses with automation
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </div>
        
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up">
          <div className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sam Eye Am</h3>
                <p className="text-muted-foreground">World-Leading Instagram Marketing Expert</p>
              </div>
            </div>
          </div>
          
          <div className="aspect-video w-full bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/G3ppd-TGkpY"
              title="Sam Eye Am - Testimonial for Didi Berman"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed text-center italic">
              "Didi's Instagram Lead Warmer automation has completely transformed how I connect with potential clients. 
              The personalized approach and attention to detail in analyzing Instagram accounts is unmatched."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

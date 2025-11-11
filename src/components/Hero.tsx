import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/work/real-time-inference.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>
      
      <div className="relative max-w-4xl text-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          We build and explore machine-learning systems and ideas
        </h1>
        
        <p className="text-sm md:text-base text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          Student-run organization producing prototypes, reproducible demos, and experimental essays.
        </p>
        
        <div className="pt-8">
          <button
            onClick={() => scrollToSection("products")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-md transition-colors"
          >
            See work
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

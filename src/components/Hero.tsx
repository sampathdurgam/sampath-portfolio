
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const roles = ["Full-Stack Java Developer", "Frontend Developer"];
  const typingSpeed = isDeleting ? 60 : 100; // faster delete

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      // Add or remove characters
      setText(prev =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      // When typing completes
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } 
      // When deleting completes
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // move to next role
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 text-center animate-fade-in">
        {/* <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-glow-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div> */}
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-gradient">Sampath Durgam</span> 👋
        </h1>
        
        <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary glow-text">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building scalable web apps with Spring Boot, Hibernate, and MySQL. 
          Passionate about clean, maintainable code and real-world problem-solving.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="group" onClick={() => scrollToSection("contact")}>
            Hire Me
            <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")}>
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="https://github.com/sampathdurgam" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all hover:scale-110">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/sampath-durgam-5b4327259" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all hover:scale-110">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:durgamsampath2003@gmail.com"
            className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all hover:scale-110">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;

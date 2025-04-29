
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-white to-peach-light">
      <div className="section-container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Hi, I'm <span className="text-peach-dark">Pratiksha</span> —
          <br className="md:hidden" /> A Passionate MERN Stack Developer
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          I build full-stack applications that are performant and user-friendly.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button className="bg-peach hover:bg-peach-dark text-foreground">
            View Resume
          </Button>
          <Button variant="outline" className="border-peach text-foreground hover:bg-peach-light">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

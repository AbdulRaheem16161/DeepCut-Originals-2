import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCharacter from '@/assets/hero-character-new.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gaming-pattern"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 pt-24 pb-16">
          {/* Left side - Text and Button */}
          <div className="flex-1 text-center lg:text-left lg:animate-slide-up space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-inter font-bold leading-tight text-foreground">
              Indie Game{' '}
              <span className="text-primary">Studio</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Crafting original worlds — where rip-offs come to die.
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <Button
                className="btn-gaming text-lg px-10 py-7 lg:hover:scale-105 lg:transition-transform lg:duration-300"
                size="lg"
                onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Games
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Right side - Character Image */}
          <div className="flex-1 flex justify-center lg:justify-end lg:animate-float">
            <img
              src={heroCharacter}
              alt="Game character showcase"
              className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[330px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

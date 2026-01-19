import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6 text-foreground">
            About <span className="text-primary">DeepCut Originals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2024, we began as six young creators with a shared passion for
            game development, working together to bring our ideas to life.
          </p>
        </div>

        {/* Team Stats */}
        <div className="mb-20 bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto shadow-sm">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-inter font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground text-sm">Members</div>
            </div>
            <div>
              <div className="text-3xl font-inter font-bold text-primary mb-2">1</div>
              <div className="text-muted-foreground text-sm">Year Experience</div>
            </div>
            <div>
              <div className="text-3xl font-inter font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground text-sm">Games Released</div>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-card border border-border rounded-lg p-12 max-w-4xl mx-auto text-center shadow-sm">
          <h3 className="text-3xl md:text-4xl font-inter font-bold mb-6 text-foreground">
            <span className="text-primary">Join</span> Our Team
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We are a small indie studio of 6, always ready to welcome new people — especially beginners
            who want to learn, grow, and start their game dev journey with us. If you have passion, you belong here.
          </p>
          <Button
            className="btn-gaming text-base px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

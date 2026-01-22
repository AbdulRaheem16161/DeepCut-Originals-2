import { Button } from '@/components/ui/button';
import { UserPlus, Users, Gamepad2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6 text-foreground">
            About <span className="text-[#e0a929]">DeepCut Originals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build complete fully functional games from programming to final polish. Our work includes 3D models animations environments VFX and cinematic post processing. We also create 2D art character designs concept art and illustrations. Whether you need a single asset or a complete game we focus on delivering quality work done right.
          </p>
        </div>

        {/* Team Stats - Redesigned */}
        <div className="mb-20 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            {/* Members */}
            <div className="flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-4xl font-inter font-bold text-foreground">6</div>
                <div className="text-muted-foreground text-sm font-medium">Team Members</div>
              </div>
            </div>

            {/* Games Released */}
            <div className="flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Gamepad2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-4xl font-inter font-bold text-foreground">3</div>
                <div className="text-muted-foreground text-sm font-medium">Games Released</div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="border border-border rounded-lg p-12 max-w-4xl mx-auto text-center shadow-sm bg-primary-foreground">
          <h3 className="text-3xl md:text-4xl font-inter font-bold mb-6 text-foreground">
            <span className="text-[#e0a929]">Join</span> Our Team
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We are a small indie studio of six and we are always open to welcoming new people. We especially enjoy working with beginners who want to learn grow and start their game development journey with us. If you have passion and a willingness to improve, you belong here.
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
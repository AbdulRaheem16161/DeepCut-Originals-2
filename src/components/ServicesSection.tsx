import { MessageCircle, Gamepad2, Code, Palette, Box, Film, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Gamepad2,
    title: 'Full Game Development (Unity)',
    description: 'Complete game creation from concept to final polish'
  },
  {
    icon: Code,
    title: 'Gameplay Programming & Systems',
    description: 'Robust mechanics and interactive game systems'
  },
  {
    icon: Palette,
    title: '2D Art, Characters & Concept Art',
    description: 'Stunning character designs and illustrations'
  },
  {
    icon: Box,
    title: '3D Models, Environments & Animation',
    description: 'Game-ready assets, environments, and animations'
  },
  {
    icon: Film,
    title: 'Trailers & Cinematics',
    description: 'Compelling video content for your games'
  },
  {
    icon: Package,
    title: 'Single Assets or Full Projects',
    description: 'From individual assets to complete game packages'
  }
];

const steps = [
  {
    number: '1',
    title: 'Message us on WhatsApp or Email',
    description: "Tell us what you want to build, even if it's just an idea."
  },
  {
    number: '2',
    title: 'Discuss scope and options',
    description: "We'll talk through timelines, features, and what's involved."
  },
  {
    number: '3',
    title: 'Receive a clear plan and cost',
    description: 'You decide, no pressure.'
  },
  {
    number: '4',
    title: 'We build, deliver, and revise',
    description: "On time, with updates and revisions until it's right."
  }
];

const ServicesSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923364518167', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with indie developers, creators, and studios.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto italic">
          Even if your idea is just a rough concept, we'll help shape it and make it real.
        </p>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-inter font-bold text-center mb-12 text-foreground">
            How It <span className="text-primary">Works</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="btn-gaming text-lg px-8 py-6 gap-3"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-6 h-6" />
              Start a Project on WhatsApp – 03364518167
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

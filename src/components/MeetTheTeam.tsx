import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

// Custom social media icons
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FiverrIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h1.527v1.316zm-6.786 1.501h-3.39c.07.576.454.865 1.057.865.43 0 .727-.164.91-.492l1.378.616c-.455.854-1.31 1.302-2.397 1.302-1.705 0-2.673-1.114-2.673-2.653 0-1.54.968-2.653 2.673-2.653s2.442 1.114 2.442 2.653v.362zm-1.625-1.025c-.07-.492-.392-.78-.887-.78-.548 0-.868.288-.94.78h1.827zm-4.26.56c0 .947-.726 1.678-1.775 1.678-.63 0-1.163-.293-1.417-.8v.66h-1.616v-6.853h1.616v2.619c.254-.507.787-.8 1.417-.8 1.049 0 1.775.731 1.775 1.678v1.818zm-1.775-.168c.455 0 .787-.347.787-.775v-1.023c0-.428-.332-.775-.787-.775s-.787.347-.787.775v1.023c0 .428.332.775.787.775zm-3.307-1.65v3.558H2.645v-3.558h-.992v-1.316h.992v-1.54h1.61v1.54h1.162v1.316H4.255zm-4.255.18c0-1.54.968-2.653 2.673-2.653.846 0 1.518.293 1.973.87l-1.163.9c-.254-.345-.516-.454-.81-.454-.548 0-.94.41-.94 1.092v.49c0 .682.392 1.092.94 1.092.294 0 .556-.109.81-.454l1.163.9c-.455.577-1.127.87-1.973.87-1.705 0-2.673-1.114-2.673-2.653z"/>
  </svg>
);

const UpworkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </svg>
);

const teamMembers = [
  {
    name: 'AbdulRaheem',
    role: 'Lead Programmer',
    intro: 'I build immersive gaming experiences with clean, efficient code.',
    initials: 'AR',
    socials: {
      linkedin: 'https://linkedin.com',
      upwork: 'https://upwork.com',
    },
  },
  {
    name: 'Snek RB',
    role: '3D Modeler & Animator',
    intro: 'I bring characters and worlds to life through 3D art and animation.',
    initials: 'SR',
    socials: {
      youtube: 'https://youtube.com',
      fiverr: 'https://fiverr.com',
    },
  },
  {
    name: 'Ali Khan',
    role: 'Programmer',
    intro: 'I craft robust game mechanics and interactive systems.',
    initials: 'AK',
    socials: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Faris',
    role: '3D Modeler',
    intro: 'I make detailed game-ready 3D assets and environments.',
    initials: 'FA',
    socials: {
      fiverr: 'https://fiverr.com',
      upwork: 'https://upwork.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Raptor Bot',
    role: 'Game Designer',
    intro: 'I design engaging gameplay loops and memorable experiences.',
    initials: 'RB',
    socials: {
      youtube: 'https://youtube.com',
    },
  },
  {
    name: 'Kaires',
    role: 'Digital Artist',
    intro: 'I make stunning character designs and concept art.',
    initials: 'KA',
    socials: {},
  },
];

const SocialButton = ({
  type,
  url
}: {
  type: 'youtube' | 'linkedin' | 'fiverr' | 'upwork';
  url: string;
}) => {
  const icons = {
    youtube: <YoutubeIcon />,
    linkedin: <LinkedInIcon />,
    fiverr: <FiverrIcon />,
    upwork: <UpworkIcon />,
  };

  const labels = {
    youtube: 'YouTube',
    linkedin: 'LinkedIn',
    fiverr: 'Fiverr',
    upwork: 'Upwork',
  };

  const colors = {
    youtube: 'hover:bg-red-600 hover:text-white',
    linkedin: 'hover:bg-blue-600 hover:text-white',
    fiverr: 'hover:bg-green-500 hover:text-white',
    upwork: 'hover:bg-green-600 hover:text-white',
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className={`gap-2 transition-colors ${colors[type]}`}
      onClick={() => window.open(url, '_blank')}
    >
      {icons[type]}
      <span className="hidden sm:inline">{labels[type]}</span>
    </Button>
  );
};

const MeetTheTeam = () => {
  return (
    <section id="team" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4 text-foreground">
            Meet The <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The talented individuals behind DeepCut Originals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                {/* Avatar */}
                <Avatar className="w-24 h-24 border-4 border-primary/30">
                  <AvatarFallback className="bg-muted text-xl font-semibold">
                    <User className="w-12 h-12 text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>

                {/* Name and Role */}
                <div>
                  <h3 className="text-xl font-semibold font-orbitron mb-1 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {member.role}
                  </p>
                </div>

                {/* Intro */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.intro}
                </p>

                {/* Social Links */}
                {Object.keys(member.socials).length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {member.socials.youtube && (
                      <SocialButton type="youtube" url={member.socials.youtube} />
                    )}
                    {member.socials.linkedin && (
                      <SocialButton type="linkedin" url={member.socials.linkedin} />
                    )}
                    {member.socials.fiverr && (
                      <SocialButton type="fiverr" url={member.socials.fiverr} />
                    )}
                    {member.socials.upwork && (
                      <SocialButton type="upwork" url={member.socials.upwork} />
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

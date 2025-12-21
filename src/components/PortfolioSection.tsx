import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Download, Play, Film, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

// Import game screenshots
import cureInfection1 from '@/assets/cure-infection-screenshot-1.png';
import cureInfection2 from '@/assets/cure-infection-screenshot-2.png';
import cureInfection3 from '@/assets/cure-infection-screenshot-3.png';
import cureInfection4 from '@/assets/cure-infection-screenshot-4.png';
import cureInfection5 from '@/assets/cure-infection-screenshot-5.png';
import cureInfection6 from '@/assets/cure-infection-screenshot-6.png';
import raptorHunter1 from '@/assets/raptor-hunter-screenshot-1.png';
import raptorHunter2 from '@/assets/raptor-hunter-screenshot-2.png';
import raptorHunter3 from '@/assets/raptor-hunter-screenshot-3.png';
import raptorHunter4 from '@/assets/raptor-hunter-screenshot-4.png';
import raptorHunter5 from '@/assets/raptor-hunter-screenshot-5.png';
import raptorHunter6 from '@/assets/raptor-hunter-screenshot-6.png';
import findImposter1 from '@/assets/find-imposter-screenshot-1.png';
import findImposter2 from '@/assets/find-imposter-screenshot-2.png';
import findImposter3 from '@/assets/find-imposter-screenshot-3.png';
import findImposter4 from '@/assets/find-imposter-screenshot-4.png';
import findImposter5 from '@/assets/find-imposter-screenshot-5.png';
import findImposter6 from '@/assets/find-imposter-screenshot-6.png';
import findImposterIcon from '@/assets/find-the-imposter-icon.png';
import cureInfectionIcon from '@/assets/cure-infection-icon.png';
import raptorHunterIcon from '@/assets/raptor-hunter-icon.png';

// Game data
const games = [
  {
    id: 0,
    title: 'Cure and Infection',
    genre: 'Survival Shooting',
    description: 'A survival FPS developed in just six days, where you help Dr. Cure and his nurse fight a viral outbreak caused by his brother.',
    icon: cureInfectionIcon,
    gifPlaceholder: 'https://via.placeholder.com/640x360/1a1a1a/d4af37?text=GIF+Placeholder',
    link: 'https://goncal0.itch.io/cure-and-infection',
    trailerVideoId: 'Xmvg2rPg59Q',
    screenshots: [
      cureInfection1, cureInfection2, cureInfection3, cureInfection4, cureInfection5, cureInfection6
    ],
  },
  {
    id: 2,
    title: 'Raptor Hunter',
    genre: 'Shooter',
    description: 'Armed with a shotgun and pistol, you must hunt fast and relentless raptors in a survival challenge.',
    icon: raptorHunterIcon,
    gifPlaceholder: 'https://via.placeholder.com/640x360/1a1a1a/d4af37?text=GIF+Placeholder',
    link: 'https://raptorbot.itch.io/raptor-hunter',
    trailerVideoId: 'vbHF9V5M4Dk',
    screenshots: [
      raptorHunter1, raptorHunter2, raptorHunter3, raptorHunter4, raptorHunter5, raptorHunter6
    ],
  },
  {
    id: 4,
    title: 'Find The Imposter',
    genre: 'Role-Playing / Social Deduction',
    description: 'Uncover and eliminate the imposter before they eliminate the crew. (Among Us Fan-Game)',
    icon: findImposterIcon,
    gifPlaceholder: 'https://via.placeholder.com/640x360/1a1a1a/d4af37?text=GIF+Placeholder',
    link: 'https://raptorbot.itch.io/find-the-imposter',
    trailerVideoId: 'tg1A09S3Puo',
    btsVideo: '/videos/find-the-imposter-bts.mkv',
    screenshots: [
      findImposter1, findImposter2, findImposter3, findImposter4, findImposter5, findImposter6
    ],
  }
];

// 3D Models data
const models3DVideos = [
  { id: 1, video: '/videos/3d-model-featured.mp4', featured: true },
  { id: 6, video: '/videos/3d-model-5.mp4' },
  { id: 2, video: '/videos/3d-model-1.mp4' },
  { id: 3, video: '/videos/3d-model-2.mp4' },
  { id: 4, video: '/videos/3d-model-3.mp4' },
  { id: 5, video: '/videos/3d-model-4.mp4' },
];

// Art data
const artCategories = {
  featured: { id: 1, image: '/images/env-featured.png' },
  characterDesigns: Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    image: `https://via.placeholder.com/300x300/1a1a1a/d4af37?text=Character+${i + 1}`
  })),
  digitalPortraits: [
    { id: 1, image: '/images/portrait-1.png' },
    { id: 2, image: '/images/portrait-2.png' },
    { id: 3, image: '/images/portrait-3.png' },
    { id: 4, image: '/images/portrait-4.png' },
    { id: 5, image: '/images/portrait-5.png' },
    { id: 6, image: '/images/portrait-6.jpg' },
    { id: 7, image: '/images/portrait-7.jpg' },
    { id: 8, image: '/images/portrait-8.jpg' },
    { id: 9, image: '/images/portrait-9.jpg' },
    { id: 10, image: '/images/portrait-10.jpg' },
    { id: 11, image: '/images/portrait-11.jpg' },
    { id: 12, image: '/images/portrait-12.jpg' },
    { id: 13, image: '/images/portrait-13.jpg' },
  ],
  environments: [
    { id: 1, image: '/images/env-1.png' },
    { id: 2, image: '/images/env-2.png' },
    { id: 3, image: '/images/env-3.png' },
    { id: 4, image: '/images/env-4.png' },
    { id: 5, image: '/images/env-5.png' },
    { id: 6, image: '/images/env-6.png' },
    { id: 7, image: '/images/env-7.png' },
    { id: 8, image: '/images/env-8.png' },
  ],
  comicsGameTrailers: Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    image: `https://via.placeholder.com/300x300/1a1a1a/d4af37?text=Comic+${i + 1}`
  })),
};

// Animation Clips data
const animationClipsArt = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  gif: `https://via.placeholder.com/300x200/1a1a1a/d4af37?text=Animation+${i + 1}`
}));

// Video with Thumbnail Component
const VideoWithThumbnail = ({ src, featured = false }: { src: string; featured?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => setIsLoaded(true);
      video.addEventListener('canplaythrough', handleCanPlay);
      return () => video.removeEventListener('canplaythrough', handleCanPlay);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

// Game Card Component
const GameCard = ({ game }: { game: typeof games[0] }) => {
  const [showGameplay, setShowGameplay] = useState(false);
  const [showBTS, setShowBTS] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <Card className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-4 md:p-6">
        {/* Screenshots (2x3 grid) + GIF side by side */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left: Screenshots 2x3 Grid */}
          <div className="lg:flex-1">
            <div className="grid grid-cols-3 gap-2">
              {game.screenshots.slice(0, 6).map((screenshot, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden cursor-pointer border-2 border-border/30 hover:border-primary/50 transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
                  onClick={() => setZoomedImage(screenshot)}
                >
                  <img
                    src={screenshot}
                    alt={`${game.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: GIF Thumbnail */}
          <div className="lg:w-[40%]">
            <div className="h-full rounded-lg overflow-hidden bg-muted border border-border/30">
              <img
                src={game.gifPlaceholder}
                alt={`${game.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Control Row */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border/30">
          {/* Game Icon */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
            <img
              src={game.icon}
              alt={`${game.title} icon`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Game Title */}
          <div className="flex-1 min-w-0">
            <h3 className="font-orbitron font-bold text-lg text-foreground">{game.title}</h3>
            <p className="text-sm text-primary">{game.genre}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              onClick={() => window.open(game.link, '_blank')}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>

            <Collapsible open={showGameplay} onOpenChange={setShowGameplay}>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="outline" className="gap-2">
                  <Play className="h-4 w-4" />
                  View Gameplay
                  {showGameplay ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </Button>
              </CollapsibleTrigger>
            </Collapsible>

            {game.btsVideo && (
              <Button
                size="sm"
                variant="outline"
                className="gap-2"
                onClick={() => setShowBTS(true)}
              >
                <Film className="h-4 w-4" />
                Behind the Scenes
              </Button>
            )}
          </div>
        </div>

        {/* Gameplay Video Dropdown */}
        <Collapsible open={showGameplay} onOpenChange={setShowGameplay}>
          <CollapsibleContent>
            <div className="aspect-video rounded-lg overflow-hidden bg-black border border-border/30 mt-4">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${game.trailerVideoId}?autoplay=1`}
                title={`${game.title} Gameplay`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Zoomed Image Dialog */}
        <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {zoomedImage && (
              <img
                src={zoomedImage}
                alt="Zoomed screenshot"
                className="w-full h-full object-contain"
              />
            )}
          </DialogContent>
        </Dialog>

        {/* BTS Video Dialog */}
        <Dialog open={showBTS} onOpenChange={setShowBTS}>
          <DialogContent className="max-w-4xl p-0 bg-black">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {game.btsVideo && (
              <video
                src={game.btsVideo}
                controls
                autoPlay
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

// Section Header Component
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8">
    <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-primary">{title}</h3>
    {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
  </div>
);

// Category Grid Component
const CategoryGrid = ({
  title,
  items,
  isGif = false,
  isVideo = false
}: {
  title: string;
  items: { id: number; image?: string; gif?: string; video?: string }[];
  isGif?: boolean;
  isVideo?: boolean;
}) => (
  <div className="mb-10">
    <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">{title}</h4>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-colors"
        >
          {isVideo && item.video ? (
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={isGif ? item.gif : item.image}
              alt={`${title} ${item.id}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-3 text-foreground">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our creative work across games, 3D models, environments, and art
          </p>
        </div>

        {/* 1. GAMES SECTION */}
        <div id="games" className="mb-20">
          <SectionHeader title="Games" subtitle="Our collection of indie games" />
          <div className="space-y-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* 2. 3D MODELS SECTION */}
        <div className="mb-20">
          <SectionHeader title="3D Models" subtitle="High-quality 3D assets and animations" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {/* Featured large video - spans 2 columns */}
            {models3DVideos.filter(item => item.featured).map((item) => (
              <div
                key={item.id}
                className="aspect-video rounded-lg overflow-hidden bg-muted border-2 border-primary/50 hover:border-primary md:col-span-2 md:row-span-2"
              >
                <VideoWithThumbnail src={item.video} featured={true} />
              </div>
            ))}
            {/* First small video on right */}
            {models3DVideos.filter(item => !item.featured).slice(0, 1).map((item) => (
              <div
                key={item.id}
                className="aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-colors"
              >
                <VideoWithThumbnail src={item.video} />
              </div>
            ))}
            {/* Bottom row - 3 small videos */}
            {models3DVideos.filter(item => !item.featured).slice(1, 4).map((item) => (
              <div
                key={item.id}
                className="aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-colors"
              >
                <VideoWithThumbnail src={item.video} />
              </div>
            ))}
          </div>
        </div>

        {/* 4. ART SECTION */}
        <div className="mb-20">
          <SectionHeader title="Art" subtitle="Digital art and illustrations" />

          {/* Featured */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-primary mb-4">Featured</h4>
            <div className="max-w-2xl">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted border-2 border-primary/30 hover:border-primary transition-colors">
                <img
                  src={artCategories.featured.image}
                  alt="Featured art"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <CategoryGrid title="Character Designs" items={artCategories.characterDesigns} />
          
          {/* Digital Portraits */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">Digital Portraits</h4>
            <div className="columns-2 md:columns-4 lg:columns-6 gap-3 space-y-3">
              {artCategories.digitalPortraits.map((portrait) => (
                <div
                  key={portrait.id}
                  className="break-inside-avoid rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-colors"
                >
                  <img src={portrait.image} alt={`Portrait ${portrait.id}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>

          <CategoryGrid title="Environments" items={artCategories.environments} />
          <CategoryGrid title="Comics / Game Trailers" items={artCategories.comicsGameTrailers} />
        </div>

        {/* 5. ANIMATION CLIPS SECTION */}
        <div>
          <SectionHeader title="Animation Clips" subtitle="Motion and animated sequences" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {animationClipsArt.map((item) => (
              <div
                key={item.id}
                className="aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-colors"
              >
                <img
                  src={item.gif}
                  alt={`Animation ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
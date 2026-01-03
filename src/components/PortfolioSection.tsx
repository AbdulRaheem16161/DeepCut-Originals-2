import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Download, Play, Film, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { CharacterDesignsGrid } from '@/components/CharacterDesignsGrid';
import { DigitalPortraitsGrid } from '@/components/DigitalPortraitsGrid';

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

// Import character designs
import characterDesign1 from '@/assets/character-design-1.jpg';
import characterDesign2 from '@/assets/character-design-2.jpg';
import characterDesign3 from '@/assets/character-design-3.jpg';
import characterDesign4 from '@/assets/character-design-4.jpg';
import characterDesign5 from '@/assets/character-design-5.jpg';
import characterDesign6 from '@/assets/character-design-6.jpg';

// Import portraits
import portrait1 from '@/assets/portrait-1.png';
import portrait2 from '@/assets/portrait-2.png';
import portrait3 from '@/assets/portrait-3.png';
import portrait4 from '@/assets/portrait-4.png';
import portrait5 from '@/assets/portrait-5.png';
import portrait6 from '@/assets/portrait-6.jpg';
import portrait7 from '@/assets/portrait-7.jpg';
import portrait8 from '@/assets/portrait-8.jpg';
import portrait9 from '@/assets/portrait-9.jpg';
import portrait10 from '@/assets/portrait-10.jpg';
import portrait11 from '@/assets/portrait-11.jpg';
import portrait12 from '@/assets/portrait-12.jpg';
import portrait13 from '@/assets/portrait-13.jpg';

// Import environments
import envFeatured from '@/assets/env-featured.png';
import env1 from '@/assets/env-1.png';
import env2 from '@/assets/env-2.png';
import env3 from '@/assets/env-3.png';
import env4 from '@/assets/env-4.png';
import env5 from '@/assets/env-5.png';
import env6 from '@/assets/env-6.png';
import env7 from '@/assets/env-7.png';
import env8 from '@/assets/env-8.png';

// Game data
const games = [{
  id: 0,
  title: 'Cure and Infection',
  genre: 'Survival Shooting',
  description: 'A survival FPS developed in just six days, where you help Dr. Cure and his nurse fight a viral outbreak caused by his brother.',
  icon: cureInfectionIcon,
  gifPlaceholder: 'https://via.placeholder.com/640x360/1a1a1a/d4af37?text=GIF+Placeholder',
  link: 'https://goncal0.itch.io/cure-and-infection',
  trailerVideoId: 'Xmvg2rPg59Q',
  screenshots: [cureInfection1, cureInfection2, cureInfection3, cureInfection4, cureInfection5, cureInfection6]
}, {
  id: 2,
  title: 'Raptor Hunter',
  genre: 'Shooter',
  description: 'Armed with a shotgun and pistol, you must hunt fast and relentless raptors in a survival challenge.',
  icon: raptorHunterIcon,
  gifPlaceholder: 'https://via.placeholder.com/640x360/1a1a1a/d4af37?text=GIF+Placeholder',
  link: 'https://raptorbot.itch.io/raptor-hunter',
  trailerVideoId: 'vbHF9V5M4Dk',
  screenshots: [raptorHunter1, raptorHunter2, raptorHunter3, raptorHunter4, raptorHunter5, raptorHunter6]
}, {
  id: 4,
  title: 'Find The Imposter',
  genre: 'Role-Playing / Social Deduction',
  description: 'Uncover and eliminate the imposter before they eliminate the crew. (Among Us Fan-Game)',
  icon: findImposterIcon,
  gifPlaceholder: 'https://via.placeholder.com/640x360/1a1a1a/d4af37?text=GIF+Placeholder',
  link: 'https://raptorbot.itch.io/find-the-imposter',
  trailerVideoId: 'tg1A09S3Puo',
  btsVideo: '/videos/find-the-imposter-bts.mkv',
  screenshots: [findImposter1, findImposter2, findImposter3, findImposter4, findImposter5, findImposter6]
}];

// 3D Models data
// NOTE: Only include videos that actually exist in /public/videos to avoid broken previews.
import model3DPlaceholder from '@/assets/3d-model-placeholder.png';

const models3DVideos = [
  { id: 1, video: '/videos/3d-model-alosaurus.mp4', title: 'Alosaurus', featured: true },
  { id: 2, video: '/videos/3d-model-6-upload.mp4', placeholder: model3DPlaceholder },
  { id: 3, video: '/videos/3d-model-trex.mp4', title: 'T-Rex' },
  { id: 4, video: '/videos/3d-model-car.mp4', title: 'Car' },
  { id: 5, video: '/videos/3d-model-compressed.mp4', title: 'Character' },
  { id: 6, video: '/videos/3d-model-huts.mp4', title: 'Huts' },
  { id: 7, video: '/videos/3d-model-japanese-house.mp4', title: 'Japanese House' },
];

// Art data
const artCategories = {
  characterDesigns: [{
    id: 1,
    image: characterDesign1
  }, {
    id: 2,
    image: characterDesign2
  }, {
    id: 3,
    image: characterDesign3
  }, {
    id: 4,
    image: characterDesign4
  }, {
    id: 5,
    image: characterDesign5
  }, {
    id: 6,
    image: characterDesign6
  }],
  digitalPortraits: [{
    id: 1,
    image: portrait1
  }, {
    id: 2,
    image: portrait2
  }, {
    id: 3,
    image: portrait3
  }, {
    id: 4,
    image: portrait4
  }, {
    id: 5,
    image: portrait5
  }, {
    id: 6,
    image: portrait6
  }, {
    id: 7,
    image: portrait7
  }, {
    id: 8,
    image: portrait8
  }, {
    id: 9,
    image: portrait9
  }, {
    id: 10,
    image: portrait10
  }, {
    id: 11,
    image: portrait11
  }, {
    id: 12,
    image: portrait12
  }, {
    id: 13,
    image: portrait13
  }]
};

// Environments data (separate section)
const environmentsData = [{
  id: 1,
  image: env1
}, {
  id: 2,
  image: env2
}, {
  id: 3,
  image: env3
}, {
  id: 4,
  image: env4
}, {
  id: 5,
  image: env5
}, {
  id: 6,
  image: env6
}, {
  id: 7,
  image: env7
}, {
  id: 8,
  image: env8
}];


// 3D Model Card with Placeholder
const Model3DCard = ({
  model,
  featured = false
}: {
  model: { id: number; video: string; placeholder?: string; title?: string; featured?: boolean };
  featured?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => setIsVideoLoaded(true);
      video.addEventListener('canplaythrough', handleCanPlay);
      // Check if already loaded
      if (video.readyState >= 3) {
        setIsVideoLoaded(true);
      }
      return () => video.removeEventListener('canplaythrough', handleCanPlay);
    }
  }, []);

  return (
    <div className={`aspect-video rounded-lg overflow-hidden bg-muted border transition-all relative group ${
      featured 
        ? 'border-primary/50 hover:border-primary ring-2 ring-primary/20 hover:ring-primary/40' 
        : 'border-border/30 hover:border-primary/50'
    }`}>
      {/* Placeholder image - shown until video loads */}
      {model.placeholder && (
        <img
          src={model.placeholder}
          alt="Loading preview..."
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />
      )}
      {/* Video - fades in when loaded */}
      <video
        ref={videoRef}
        src={model.video}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Title overlay */}
      {model.title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className={`font-orbitron font-semibold ${featured ? 'text-primary' : 'text-foreground'}`}>
            {model.title}
            {featured && <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">Featured</span>}
          </p>
        </div>
      )}
    </div>
  );
};

// Game Card Component
const GameCard = ({
  game
}: {
  game: (typeof games)[0];
}) => {
  const [showGameplay, setShowGameplay] = useState(false);
  const [showBTS, setShowBTS] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  return <Card className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-4 md:p-6">
        {/* Screenshots (2x3 grid) + GIF side by side */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left: Screenshots 2x3 Grid */}
          <div className="lg:flex-1">
            <div className="grid grid-cols-3 gap-2">
              {game.screenshots.slice(0, 6).map((screenshot, index) => <div key={index} className="aspect-video rounded-lg overflow-hidden cursor-pointer border-2 border-border/30 hover:border-primary/50 transition-all hover:scale-[1.02] shadow-md hover:shadow-lg" onClick={() => setZoomedImage(screenshot)}>
                  <img src={screenshot} alt={`${game.title} screenshot ${index + 1}`} className="w-full h-full object-cover" />
                </div>)}
            </div>
          </div>

          {/* Right: GIF Thumbnail */}
          <div className="lg:w-[40%]">
            <div className="h-full rounded-lg overflow-hidden bg-muted border border-border/30">
              <img src={game.gifPlaceholder} alt={`${game.title} preview`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Control Row */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border/30">
          {/* Game Icon */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
            <img src={game.icon} alt={`${game.title} icon`} className="w-full h-full object-cover" />
          </div>

          {/* Game Title */}
          <div className="flex-1 min-w-0">
            <h3 className="font-orbitron font-bold text-lg text-foreground">{game.title}</h3>
            <p className="text-sm text-primary">{game.genre}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={() => window.open(game.link, '_blank')} className="gap-2">
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

            {game.btsVideo && <Button size="sm" variant="outline" className="gap-2" onClick={() => setShowBTS(true)}>
                <Film className="h-4 w-4" />
                Behind the Scenes
              </Button>}
          </div>
        </div>

        {/* Gameplay Video Dropdown */}
        <Collapsible open={showGameplay} onOpenChange={setShowGameplay}>
          <CollapsibleContent>
            <div className="aspect-video rounded-lg overflow-hidden bg-black border border-border/30 mt-4">
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${game.trailerVideoId}?autoplay=1`} title={`${game.title} Gameplay`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Zoomed Image Dialog */}
        <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {zoomedImage && <img src={zoomedImage} alt="Zoomed screenshot" className="w-full h-full object-contain" />}
          </DialogContent>
        </Dialog>

        {/* BTS Video Dialog */}
        <Dialog open={showBTS} onOpenChange={setShowBTS}>
          <DialogContent className="max-w-4xl p-0 bg-black">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {game.btsVideo && <video src={game.btsVideo} controls autoPlay className="w-full h-auto" />}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>;
};

// Section Header Component
const SectionHeader = ({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) => <div className="mb-8">
    <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-primary">{title}</h3>
    {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
  </div>;

// Category Grid Component
const CategoryGrid = ({
  title,
  items,
  isGif = false,
  isVideo = false,
  onImageClick
}: {
  title: string;
  items: {
    id: number;
    image?: string;
    gif?: string;
    video?: string;
  }[];
  isGif?: boolean;
  isVideo?: boolean;
  onImageClick?: (image: string) => void;
}) => <div className="mb-10">
    <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">{title}</h4>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {items.map(item => <div key={item.id} className={`aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all ${onImageClick ? 'cursor-pointer hover:scale-[1.02]' : ''}`} onClick={() => onImageClick && (isGif ? item.gif : item.image) && onImageClick(isGif ? item.gif! : item.image!)}>
          {isVideo && item.video ? <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover" /> : <img src={isGif ? item.gif : item.image} alt={`${title} ${item.id}`} className="w-full h-full object-cover" />}
        </div>)}
    </div>
  </div>;
const PortfolioSection = () => {
  const [zoomedArtImage, setZoomedArtImage] = useState<string | null>(null);
  return <section id="portfolio" className="py-20 bg-background">
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
          <div className="space-y-6">{games.map(game => <GameCard key={game.id} game={game} />)}</div>
        </div>

        {/* 2. 3D MODELS SECTION */}
        <div id="3d-models" className="mb-20">
          <SectionHeader title="3D Models" subtitle="High-quality 3D assets and animations" />
          
          {/* Featured Alosaurus - Full Width */}
          {models3DVideos.filter(m => m.featured).map(model => (
            <div key={model.id} className="mb-6">
              <Model3DCard model={model} featured />
            </div>
          ))}
          
          {/* Other Models - Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {models3DVideos.filter(m => !m.featured).map(model => (
              <Model3DCard key={model.id} model={model} />
            ))}
          </div>
        </div>

        {/* 4. ENVIRONMENTS SECTION */}
        <div id="environments" className="mb-20">
          <SectionHeader title="Environments" subtitle="Environment art and world design" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {environmentsData.map(item => (
              <div key={item.id} className="aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all cursor-pointer hover:scale-[1.02]" onClick={() => setZoomedArtImage(item.image)}>
                <img src={item.image} alt={`Environment ${item.id}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 5. ART SECTION */}
        <div id="art" className="mb-20">
          <SectionHeader title="Art" subtitle="Digital art and illustrations" />

          {/* Character Designs */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">Character Designs</h4>
            <CharacterDesignsGrid items={artCategories.characterDesigns} onImageClick={setZoomedArtImage} />
          </div>

          {/* Digital Portraits */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">Digital Portraits</h4>
            <DigitalPortraitsGrid items={artCategories.digitalPortraits} onImageClick={setZoomedArtImage} />
          </div>
        </div>

        {/* Zoomed Art Image Dialog */}
        <Dialog open={!!zoomedArtImage} onOpenChange={() => setZoomedArtImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {zoomedArtImage && <img src={zoomedArtImage} alt="Zoomed art" className="w-full h-full object-contain" />}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default PortfolioSection;
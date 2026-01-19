import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Download, Play, Film, X, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '@/hooks/use-mobile';
import { games, type Game } from '@/data/games';

// Game Card Component
const GameCard = ({
  game,
}: {
  game: Game;
}) => {
  const [showGameplay, setShowGameplay] = useState(false);
  const [showBTS, setShowBTS] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(50);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => setIsVideoLoaded(true);
      const handleWaiting = () => setIsBuffering(true);
      const handlePlaying = () => setIsBuffering(false);
      
      video.addEventListener('canplaythrough', handleCanPlay);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);
      
      if (video.readyState >= 3) {
        setIsVideoLoaded(true);
      }
      
      return () => {
        video.removeEventListener('canplaythrough', handleCanPlay);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('playing', handlePlaying);
      };
    }
  }, []);

  const showLoading = !isVideoLoaded || isBuffering;

  const toggleMute = () => {
    setIsMuted(prev => {
      const newState = !prev;
      if (videoRef.current) {
        videoRef.current.muted = newState;
        if (!newState) {
          videoRef.current.volume = volume / 100;
        }
      }
      return newState;
    });
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
      if (newVolume > 0 && isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      if (newVolume === 0 && !isMuted) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <Card className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-4 md:p-6">
        {/* Screenshots (2x3 grid) + Video Preview side by side */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left: Screenshots 2x3 Grid - larger on mobile */}
          <div className="lg:flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2">
              {game.screenshots.slice(0, 6).map((screenshot, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-md sm:rounded-lg overflow-hidden cursor-pointer border-2 border-border/30 hover:border-primary/50 transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
                  onClick={() => setZoomedImage(screenshot)}
                >
                  <img
                    src={screenshot}
                    alt={`${game.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="low"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Video Preview with Placeholder */}
          <div className="lg:w-[40%]">
            <div
              className="h-full rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all relative group"
            >
              {/* Placeholder Image - shown until video loads */}
              {game.previewPlaceholder && !isVideoLoaded && (
                <div className="absolute inset-0 z-10">
                  <img
                    src={game.previewPlaceholder}
                    alt={`${game.title} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Always visible loading overlay when loading or buffering */}
              {showLoading && (
                <div className="absolute inset-0 bg-background/50 flex flex-col items-center justify-center gap-3 z-20">
                  <Loader2 className="h-8 w-8 md:h-10 md:w-10 text-primary animate-spin" />
                  <span className="text-foreground font-orbitron text-sm md:text-base">
                    Loading Video...
                  </span>
                </div>
              )}

              {/* Video - click toggles mute instead of fullscreen */}
              <video
                ref={videoRef}
                src={game.previewVideo}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                onClick={toggleMute}
              />

              {/* Volume Controls */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
                {/* Volume Slider - Desktop only */}
                {!isMobile && !isMuted && (
                  <div className="w-20 h-8 flex items-center bg-background/80 rounded-md px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Slider
                      value={[volume]}
                      onValueChange={handleVolumeChange}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                )}
                {/* Mute/Unmute Toggle */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="opacity-80 hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
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

            {game.btsVideo && (
              <Button size="sm" variant="outline" className="gap-2" onClick={() => setShowBTS(true)}>
                <Film className="h-4 w-4" />
                Behind the Scenes
              </Button>
            )}
          </div>
        </div>

        {/* Gameplay Video Dropdown */}
        <Collapsible open={showGameplay} onOpenChange={setShowGameplay}>
          <CollapsibleContent>
            <div className="mt-4 pt-4 border-t border-border/30">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${game.trailerVideoId}`}
                  title={`${game.title} Gameplay`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
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
              <img src={zoomedImage} alt="Zoomed screenshot" className="w-full h-full object-contain" />
            )}
          </DialogContent>
        </Dialog>


        {/* BTS Video Dialog */}
        {game.btsVideo && (
          <Dialog open={showBTS} onOpenChange={setShowBTS}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
              <DialogClose className="absolute right-4 top-4 z-10">
                <X className="h-6 w-6 text-white" />
              </DialogClose>
              <video src={game.btsVideo} autoPlay loop controls className="w-full h-full object-contain" />
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  );
};

const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-primary">Games</h3>
          <p className="text-muted-foreground mt-2">Our collection of indie games</p>
        </div>

        {/* Game Cards */}
        <div className="space-y-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

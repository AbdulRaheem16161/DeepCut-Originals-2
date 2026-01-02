import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trailerVideos = [
  { id: 1, src: '/videos/trailer-1.mp4' },
  { id: 2, src: '/videos/trailer-2.mp4' },
  { id: 3, src: '/videos/trailer-3.mp4' },
];

const ComicsTrailersSection = () => {
  const [mutedStates, setMutedStates] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const toggleMute = (id: number) => {
    setMutedStates((prev) => {
      const newState = { ...prev, [id]: !prev[id] };
      const video = videoRefs.current[id];
      if (video) {
        video.muted = newState[id];
      }
      return newState;
    });
  };

  return (
    <section id="comics-trailers" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-primary">
            Comics / Game Trailers
          </h3>
          <p className="text-muted-foreground mt-2">
            Cinematic trailers and comic-style content
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trailerVideos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all group"
            >
              <video
                ref={(el) => {
                  videoRefs.current[video.id] = el;
                }}
                src={video.src}
                autoPlay
                loop
                muted={mutedStates[video.id]}
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Mute/Unmute Toggle */}
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-3 right-3 opacity-80 hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                onClick={() => toggleMute(video.id)}
              >
                {mutedStates[video.id] ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComicsTrailersSection;

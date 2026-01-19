import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GamesSection from '@/components/GamesSection';
import ComicsTrailersSection from '@/components/ComicsTrailersSection';
import PortfolioSection from '@/components/PortfolioSection';
import MeetTheTeam from '@/components/MeetTheTeam';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useCriticalMediaReady } from '@/hooks/use-critical-media';

const Index = () => {
  const criticalReady = useCriticalMediaReady();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* Order: 1. Games, 2. Trailers, 3. Art, 4. Environments, 5. 3D Models */}
        <GamesSection />

        {/* Defer the rest of the page until critical media is warmed in cache */}
        {criticalReady && (
          <>
            <ComicsTrailersSection />
            <PortfolioSection />
            <MeetTheTeam />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

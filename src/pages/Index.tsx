import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GamesSection from '@/components/GamesSection';
import ComicsTrailersSection from '@/components/ComicsTrailersSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import MeetTheTeam from '@/components/MeetTheTeam';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import VerticalNav from '@/components/VerticalNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <VerticalNav />
      <main>
        <Hero />
        {/* Order: 1. Games, 2. Trailers, 3. Art, 4. Environments, 5. 3D Models */}
        <GamesSection />
        <ComicsTrailersSection />
        <PortfolioSection />
        <ServicesSection />
        <MeetTheTeam />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PortfolioSection from '@/components/PortfolioSection';
import ComicsTrailersSection from '@/components/ComicsTrailersSection';
import MeetTheTeam from '@/components/MeetTheTeam';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PortfolioSection />
        <ComicsTrailersSection />
        <MeetTheTeam />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

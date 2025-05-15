
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Orcamento from '@/components/Orcamento';
import Footer from '@/components/Footer';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';

const Index = () => {
  const { handleScroll } = useRevealAnimation();
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load to reveal elements already in view
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-hkgrotesk">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactForm />
        <Orcamento />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

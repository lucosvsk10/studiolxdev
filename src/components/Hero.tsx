
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const elements = [headlineRef.current, subheadlineRef.current, buttonRef.current];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    elements.forEach(el => {
      if (el) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return <section id="home" className="pt-44 pb-24 md:pt-96 md:pb-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 ref={headlineRef} style={{
          transitionDelay: '100ms'
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase font-opensauce">
            <span className="text-inherit">Designs digitais</span> que geram resultados reais
          </h1>
          <p ref={subheadlineRef} className="text-xl md:text-2xl mb-12 max-w-2xl font-museo" style={{
          transitionDelay: '300ms'
        }}>
            Criação de sites, landing pages e páginas de vendas com estratégia e personalidade
          </p>
          <a ref={buttonRef} href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20personalizado%20para%20meu%20projeto." target="_blank" rel="noopener noreferrer" className="border-2 border-foreground bg-transparent text-foreground px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all hover:border-gold hover:text-gold font-museo uppercase" style={{
          transitionDelay: '500ms'
        }}>
            Falar com Studio LX
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;

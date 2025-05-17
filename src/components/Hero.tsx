
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headlineRef.current, subheadlineRef.current, buttonRef.current, backgroundRef.current];
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
  
  return (
    <section id="home" className="relative pt-44 pb-24 md:pt-60 md:pb-32 overflow-hidden bg-background">
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-gold/5 to-background z-0"
        style={{
          transitionDelay: '50ms'
        }}
      ></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="relative mb-6">
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-gold text-5xl opacity-20">
              Studio LX
            </span>
            <h1 
              ref={headlineRef} 
              style={{
                transitionDelay: '100ms'
              }} 
              className="text-4xl md:text-5xl mb-8 uppercase font-opensauce font-extrabold lg:text-6xl"
            >
              <span className="text-inherit relative">Designs digitais</span>{' '}
              <span className="relative">
                que geram resultados
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold"></span>
              </span>{' '}
              <span className="text-gold">reais</span>
            </h1>
          </div>
          
          <p 
            ref={subheadlineRef} 
            className="text-xl md:text-2xl mb-12 max-w-2xl font-museo leading-relaxed"
            style={{
              transitionDelay: '300ms'
            }}
          >
            Criação de sites, landing pages e páginas de vendas com 
            <span className="text-gold font-bold"> estratégia</span> e 
            <span className="text-gold font-bold"> personalidade</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              ref={buttonRef} 
              href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20personalizado%20para%20meu%20projeto." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-gold bg-gold text-background px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-transparent hover:text-gold font-opensauce uppercase font-bold shadow-lg hover:shadow-gold/20"
              style={{
                transitionDelay: '500ms'
              }}
            >
              Falar com Studio LX
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

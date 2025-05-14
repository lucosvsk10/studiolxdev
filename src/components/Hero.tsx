
import { useEffect, useRef } from 'react';

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elements = [headlineRef.current, subheadlineRef.current, buttonRef.current];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      if (el) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-gold">Designs digitais</span> que geram resultados reais
          </h1>
          <p 
            ref={subheadlineRef}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            style={{ transitionDelay: '300ms' }}
          >
            Criação de sites, landing pages e páginas de vendas com estratégia e personalidade
          </p>
          <a 
            ref={buttonRef}
            href="#services" 
            className="btn-primary text-lg"
            style={{ transitionDelay: '500ms' }}
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

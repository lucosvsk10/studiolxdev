
import { useEffect, useRef } from 'react';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, contentRef.current, imageRef.current];
    
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
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-dark/90">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title">Sobre o <span className="text-gold">Studio LX</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={contentRef} style={{ transitionDelay: '200ms' }}>
            <p className="text-xl md:text-2xl mb-6">
              Sou o criador do <span className="text-gold font-bold">Studio LX</span>, e ajudo marcas e pessoas a se posicionarem online com sites rápidos, bonitos e funcionais.
            </p>
            <p className="text-lg mb-6">
              Com anos de experiência na indústria digital, me especializei em criar experiências web que não apenas impressionam visualmente, mas também geram resultados concretos para seus negócios.
            </p>
            <p className="text-lg">
              Entendo que cada projeto é único e merece uma abordagem personalizada. Por isso, trabalho próximo aos meus clientes para entender suas necessidades e transformá-las em soluções digitais eficazes.
            </p>
          </div>
          
          <div 
            ref={imageRef} 
            style={{ transitionDelay: '400ms' }}
            className="rounded-2xl overflow-hidden h-[400px] shadow-lg card-hover bg-light dark:bg-dark/50"
          >
            {/* Placeholder for designer image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gold/20 to-gold/5">
              <span className="text-gold font-museo text-5xl font-bold">
                Studio LX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

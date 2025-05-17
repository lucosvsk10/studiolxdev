
import { useEffect, useRef } from 'react';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, contentRef.current, imageRef.current];
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
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre Nós
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div ref={contentRef} className="md:w-1/2">
            <p className="mb-6 text-lg">
              Studio LX é um estúdio de design especializado em criar sites bonitos e funcionais para pequenas empresas
              e profissionais liberais que querem fazer sucesso online.
            </p>
            <p className="mb-6 text-lg">
              Com um foco em designs modernos e responsivos, nós transformamos suas ideias em uma presença digital
              impactante que atrai e converte visitantes em clientes.
            </p>
            <p className="text-lg">
              Nossa missão é simplificar tecnologia para que você possa focar no que faz de melhor: o seu negócio.
            </p>
          </div>
          <div ref={imageRef} className="md:w-1/2">
            <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl p-6 aspect-square flex items-center justify-center">
              <div className="text-2xl font-bold text-center text-gold">
                Transformando ideias em experiências digitais memoráveis desde 2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

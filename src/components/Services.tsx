
import { useEffect, useRef } from 'react';
import { LayoutTemplate, Home, Briefcase, List, Phone } from 'lucide-react';

const Services = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const elements = [titleRef.current, cardsRef.current];
    elements.forEach((el) => {
      if (el) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });

    // Also add animation to each card individually
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        card.classList.add('reveal');
        // Use HTMLElement type assertion to fix the TypeScript error
        (card as HTMLElement).style.transitionDelay = `${200 + index * 100}ms`;
        observer.observe(card);
      });
    }

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card');
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  const services = [
    {
      icon: <LayoutTemplate size={40} className="text-gold" />,
      title: 'LANDING PAGES',
      description: 'Conversão rápida e eficaz para suas campanhas e lançamentos'
    },
    {
      icon: <Home size={40} className="text-gold" />,
      title: 'SITE INSTITUCIONAL',
      description: 'Presença completa e profissional na web para sua marca'
    },
    {
      icon: <Briefcase size={40} className="text-gold" />,
      title: 'PÁGINA DE VENDAS',
      description: 'Foco em infoprodutos, cursos e vendas diretas'
    },
    {
      icon: <List size={40} className="text-gold" />,
      title: 'LINK NA BIO',
      description: 'Solução simples e eficiente para redes sociais'
    },
    {
      icon: <Phone size={40} className="text-gold" />,
      title: 'MANUTENÇÃO MENSAL',
      description: 'Atualizações e suporte contínuo para seu site'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title">NOSSOS <span className="text-gold">SERVIÇOS</span></h2>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white dark:bg-dark/80 p-6 rounded-2xl shadow-md card-hover"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 uppercase">{service.title}</h3>
              <p className="text-dark/80 dark:text-light/80 font-extralight">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

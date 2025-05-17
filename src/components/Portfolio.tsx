
import { useEffect, useRef } from 'react';

const Portfolio = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = [titleRef.current, gridRef.current];
    elements.forEach(el => {
      if (el) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });

    // Also add animation to each project individually
    if (gridRef.current) {
      const projects = gridRef.current.querySelectorAll('.project-card');
      projects.forEach((project, index) => {
        project.classList.add('reveal');
        // Use HTMLElement type assertion to fix the TypeScript error
        (project as HTMLElement).style.transitionDelay = `${200 + index * 100}ms`;
        observer.observe(project);
      });
    }

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
      if (gridRef.current) {
        const projects = gridRef.current.querySelectorAll('.project-card');
        projects.forEach(project => {
          observer.unobserve(project);
        });
      }
    };
  }, []);

  const projects = [{
    title: 'LUMINA',
    type: 'Landing Page',
    description: 'Página de destino para estúdio de fotografia',
    bg: 'from-blue-400/20 to-purple-400/20'
  }, {
    title: 'ECOVIDA',
    type: 'Site Institucional',
    description: 'Site completo para empresa de produtos sustentáveis',
    bg: 'from-green-400/20 to-teal-400/20'
  }, {
    title: 'MENTORPRO',
    type: 'Página de Vendas',
    description: 'Página de vendas para curso online de mentoria',
    bg: 'from-orange-400/20 to-amber-400/20'
  }, {
    title: 'ARCHITEX',
    type: 'Site Institucional',
    description: 'Site para escritório de arquitetura premium',
    bg: 'from-gray-400/20 to-gray-600/20'
  }, {
    title: 'FITLIFE',
    type: 'Link na Bio',
    description: 'Página para personal trainer com links para serviços',
    bg: 'from-red-400/20 to-orange-400/20'
  }, {
    title: 'DIGIART',
    type: 'Portfolio',
    description: 'Portfólio para artista digital com galeria',
    bg: 'from-purple-400/20 to-pink-400/20'
  }];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Portfólio
        </h2>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`project-card rounded-xl overflow-hidden bg-gradient-to-br ${project.bg} p-6 flex flex-col h-64`}>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm uppercase text-foreground/70 mb-4">{project.type}</p>
              <p className="text-foreground/80">{project.description}</p>
              <div className="mt-auto">
                <button className="text-gold hover:underline">Ver projeto</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

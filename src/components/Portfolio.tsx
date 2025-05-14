
import { useEffect, useRef } from 'react';

const Portfolio = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

    const elements = [titleRef.current, gridRef.current];
    elements.forEach((el) => {
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
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      
      if (gridRef.current) {
        const projects = gridRef.current.querySelectorAll('.project-card');
        projects.forEach((project) => {
          observer.unobserve(project);
        });
      }
    };
  }, []);

  const projects = [
    {
      title: 'LUMINA',
      type: 'Landing Page',
      description: 'Página de destino para estúdio de fotografia',
      bg: 'from-blue-400/20 to-purple-400/20'
    },
    {
      title: 'ECOVIDA',
      type: 'Site Institucional',
      description: 'Site completo para empresa de produtos sustentáveis',
      bg: 'from-green-400/20 to-teal-400/20'
    },
    {
      title: 'MENTORPRO',
      type: 'Página de Vendas',
      description: 'Página de vendas para curso online de mentoria',
      bg: 'from-orange-400/20 to-amber-400/20'
    },
    {
      title: 'ARCHITEX',
      type: 'Site Institucional',
      description: 'Site para escritório de arquitetura premium',
      bg: 'from-gray-400/20 to-gray-600/20'
    },
    {
      title: 'FITLIFE',
      type: 'Link na Bio',
      description: 'Página para personal trainer com links para serviços',
      bg: 'from-red-400/20 to-orange-400/20'
    },
    {
      title: 'DIGIART',
      type: 'Portfolio',
      description: 'Portfólio para artista digital com galeria',
      bg: 'from-purple-400/20 to-pink-400/20'
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title">
          <span className="text-gold">PORTFÓLIO</span> DE PROJETOS
        </h2>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-background border border-border rounded-2xl overflow-hidden shadow-md card-hover"
            >
              {/* Project image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.bg} flex items-center justify-center`}>
                <span className="font-hkgrotesk text-3xl font-bold text-foreground/70 uppercase">
                  {project.title}
                </span>
              </div>
              
              {/* Project details */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold uppercase">{project.title}</h3>
                  <span className="text-sm bg-gold/20 text-gold px-2 py-1 rounded-full uppercase">
                    {project.type}
                  </span>
                </div>
                <p className="text-foreground/80">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

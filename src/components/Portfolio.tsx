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
  return;
};
export default Portfolio;
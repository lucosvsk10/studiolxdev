import { useEffect, useRef } from 'react';
const Testimonials = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
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
    const elements = [titleRef.current, testimonialsRef.current];
    elements.forEach(el => {
      if (el) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });

    // Also add animation to each testimonial individually
    if (testimonialsRef.current) {
      const testimonials = testimonialsRef.current.querySelectorAll('.testimonial-card');
      testimonials.forEach((testimonial, index) => {
        testimonial.classList.add('reveal');
        // Use HTMLElement type assertion to fix the TypeScript error
        (testimonial as HTMLElement).style.transitionDelay = `${200 + index * 150}ms`;
        observer.observe(testimonial);
      });
    }
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
      if (testimonialsRef.current) {
        const testimonials = testimonialsRef.current.querySelectorAll('.testimonial-card');
        testimonials.forEach(testimonial => {
          observer.unobserve(testimonial);
        });
      }
    };
  }, []);
  const testimonials = [{
    text: "Super profissional e entrega impecável. Meu site ficou exatamente como eu queria e os clientes adoraram!",
    author: "Carla F.",
    role: "Proprietária de Loja"
  }, {
    text: "Meu site ficou lindo e já estou tendo mais clientes. O Studio LX entendeu exatamente o que eu precisava.",
    author: "Paulo S.",
    role: "Coach Executivo"
  }, {
    text: "Design de primeira, recomendo demais. Atendimento excelente do início ao fim e processo super transparente.",
    author: "Juliana M.",
    role: "Fotógrafa"
  }];
  return;
};
export default Testimonials;
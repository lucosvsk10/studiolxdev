
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

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Depoimentos
        </h2>
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-background/80 p-6 rounded-xl shadow-sm border border-gold/10">
              <p className="mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center text-gold font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

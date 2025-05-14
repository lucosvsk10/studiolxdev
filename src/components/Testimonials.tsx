
import { useEffect, useRef } from 'react';

const Testimonials = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    const elements = [titleRef.current, testimonialsRef.current];
    elements.forEach((el) => {
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
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      
      if (testimonialsRef.current) {
        const testimonials = testimonialsRef.current.querySelectorAll('.testimonial-card');
        testimonials.forEach((testimonial) => {
          observer.unobserve(testimonial);
        });
      }
    };
  }, []);

  const testimonials = [
    {
      text: "Super profissional e entrega impecável. Meu site ficou exatamente como eu queria e os clientes adoraram!",
      author: "Carla F.",
      role: "Proprietária de Loja"
    },
    {
      text: "Meu site ficou lindo e já estou tendo mais clientes. O Studio LX entendeu exatamente o que eu precisava.",
      author: "Paulo S.",
      role: "Coach Executivo"
    },
    {
      text: "Design de primeira, recomendo demais. Atendimento excelente do início ao fim e processo super transparente.",
      author: "Juliana M.",
      role: "Fotógrafa"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title">O QUE NOSSOS <span className="text-gold">CLIENTES DIZEM</span></h2>
        
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-white dark:bg-dark/80 p-6 rounded-2xl shadow-md relative"
            >
              {/* Quotation mark */}
              <div className="absolute top-4 right-4 text-6xl text-gold/20 font-serif">"</div>
              
              <p className="mb-6 text-lg relative z-10 font-extralight">
                {testimonial.text}
              </p>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex items-center">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gold mr-3 flex items-center justify-center">
                  <span className="text-dark font-bold uppercase">
                    {testimonial.author[0]}
                  </span>
                </div>
                
                <div>
                  <p className="font-bold uppercase">{testimonial.author}</p>
                  <p className="text-dark/60 dark:text-light/60 text-sm font-extralight">{testimonial.role}</p>
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


import { useState, useRef, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    siteType: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

    const elements = [titleRef.current, formRef.current];
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        siteType: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-dark/90">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title">
          <span className="text-gold">Pronto</span> pra tirar seu projeto do papel?
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="bg-light dark:bg-dark/50 p-8 rounded-2xl shadow-md"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-bold">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark/80 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-bold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark/80 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="siteType" className="block mb-2 font-bold">
                Tipo de site
              </label>
              <select
                id="siteType"
                name="siteType"
                value={formData.siteType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark/80 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">Selecione o tipo de projeto</option>
                <option value="landing-page">Landing Page</option>
                <option value="site-institucional">Site Institucional</option>
                <option value="pagina-vendas">Página de Vendas</option>
                <option value="link-bio">Link na Bio</option>
                <option value="manutencao">Manutenção Mensal</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-bold">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark/80 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center group"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Enviando...</span>
              ) : (
                <span>Enviar mensagem</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

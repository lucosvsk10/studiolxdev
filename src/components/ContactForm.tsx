
import { useState, useRef, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from 'lucide-react';

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
  const contactInfoRef = useRef<HTMLDivElement>(null);

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

    const elements = [titleRef.current, formRef.current, contactInfoRef.current];
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
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title">
          <span className="text-gold">PRONTO</span> PRA TIRAR SEU PROJETO DO PAPEL?
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div ref={contactInfoRef} className="md:col-span-3 bg-background p-6 rounded-2xl shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4 uppercase">Entre em contato</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
                <a 
                  href="https://wa.me/5582998328966" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Phone className="text-gold" />
                  <span>WhatsApp: (82) 99832-8966</span>
                </a>
                <a 
                  href="mailto:studiolxdev@gmail.com" 
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Mail className="text-gold" />
                  <span>Email: studiolxdev@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="bg-background border border-border p-8 rounded-2xl shadow-md"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-bold uppercase">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-bold uppercase">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="siteType" className="block mb-2 font-bold uppercase">
                Tipo de site
              </label>
              <select
                id="siteType"
                name="siteType"
                value={formData.siteType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-gold"
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
              <label htmlFor="message" className="block mb-2 font-bold uppercase">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center group uppercase"
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

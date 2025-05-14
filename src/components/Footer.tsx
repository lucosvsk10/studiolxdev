
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/3bcecddd-55cf-4630-8314-e45f9987a071.png" 
                alt="Studio LX" 
                className="h-12 mb-3"
              />
            </div>
            <p className="mb-4 font-extralight">
              Designs digitais que geram resultados reais para o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/40 transition-colors"
              >
                <i className="fab fa-instagram text-gold"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/40 transition-colors"
              >
                <i className="fab fa-linkedin-in text-gold"></i>
              </a>
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/40 transition-colors"
              >
                <i className="fab fa-behance text-gold"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 uppercase">Links</h3>
            <ul className="space-y-2 font-extralight">
              <li>
                <a href="#home" className="hover:text-gold transition-colors uppercase">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors uppercase">Sobre</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors uppercase">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold transition-colors uppercase">Portfólio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors uppercase">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 uppercase">Contato</h3>
            <div className="space-y-3 font-extralight">
              <div className="flex items-center">
                <Mail size={20} className="text-gold mr-2" />
                <a href="mailto:contato@studiolx.com.br" className="hover:text-gold transition-colors">
                  contato@studiolx.com.br
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-gold mr-2" />
                <a href="tel:+5511999999999" className="hover:text-gold transition-colors">
                  +55 11 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center font-extralight">
          <p>Feito com 💻 e propósito por Studio LX</p>
          <p className="text-sm text-gray-500 mt-1">
            © {new Date().getFullYear()} Studio LX. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

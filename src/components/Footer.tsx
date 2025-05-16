
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/3bcecddd-55cf-4630-8314-e45f9987a071.png" 
              alt="Studio LX" 
              className="h-16 mb-3 block dark:hidden"
            />
            <img 
              src="/lovable-uploads/f5917519-8b48-4fd4-b513-97907b219090.png" 
              alt="Studio LX" 
              className="h-16 mb-3 hidden dark:block"
            />
          </div>
          
          <p className="mb-6 text-center max-w-md font-museo">
            Designs digitais que geram resultados reais para o seu negócio.
          </p>
          
          <a 
            href="https://www.instagram.com/lucasilva.zz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-12 w-12 rounded-full border-2 border-gold flex items-center justify-center hover:bg-gold/20 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="text-gold" size={24} />
          </a>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="font-museo">Feito com 💻 e propósito por Studio LX</p>
          <p className="text-sm text-gray-500 mt-1 font-museo">
            © {currentYear} Studio LX. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

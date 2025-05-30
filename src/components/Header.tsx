
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Por que ter um site?', href: '#why-website' },
    { name: 'Serviços & Investimentos', href: '#orcamento' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md py-3' : 'py-5'} bg-background`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/3bcecddd-55cf-4630-8314-e45f9987a071.png" 
              alt="Studio LX" 
              className="h-10 md:h-12 block dark:hidden"
            />
            <img 
              src="/lovable-uploads/f5917519-8b48-4fd4-b513-97907b219090.png" 
              alt="Studio LX" 
              className="h-10 md:h-12 hidden dark:block"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-foreground hover:text-gold transition-colors uppercase"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20personalizado%20para%20meu%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground bg-transparent text-foreground px-4 py-2 rounded-lg transition-all hover:border-gold hover:text-gold uppercase flex items-center gap-2"
                >
                  <Phone size={16} />
                  Falar com Studio LX
                </a>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-foreground"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-background py-4 border-t border-gold/30">
          <ul className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-foreground block py-2 text-lg uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20personalizado%20para%20meu%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-foreground bg-transparent text-foreground px-4 py-2 rounded-lg block text-center uppercase flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={16} />
                Falar com Studio LX
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

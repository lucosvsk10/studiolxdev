import { useEffect, useRef } from 'react';
import { Store, Scissors, Dumbbell, Stethoscope, MapPin, Phone } from 'lucide-react';

const WhyWebsite = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
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

    const elements = [titleRef.current, introRef.current, cardsRef.current];
    elements.forEach(el => {
      if (el) {
        el.classList.add('reveal');
        observer.observe(el);
      }
    });

    // Also add animation to each card individually
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.niche-card');
      cards.forEach((card, index) => {
        card.classList.add('reveal');
        // Use HTMLElement type assertion to fix the TypeScript error
        (card as HTMLElement).style.transitionDelay = `${200 + index * 100}ms`;
        observer.observe(card);
      });
    }

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
      
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.niche-card');
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  const niches = [
    {
      icon: <Scissors size={40} className="text-gold" />,
      title: 'BARBEARIAS',
      description: 'Mostre fotos dos cortes, agendamentos online e avaliações de clientes. Um site bem feito transmite profissionalismo e atrai clientes com estilo.'
    },
    {
      icon: <Store size={40} className="text-gold" />,
      title: 'LOJAS DE ROUPAS',
      description: 'Catálogo online com botão do WhatsApp, link na bio organizado e página leve pro celular. Aumenta o alcance sem depender só do Instagram.'
    },
    {
      icon: <Dumbbell size={40} className="text-gold" />,
      title: 'PERSONAL TRAINERS',
      description: 'Agenda de treinos, depoimentos, antes e depois. Isso gera autoridade e confiança — ajuda a fechar mais alunos.'
    },
    {
      icon: <Stethoscope size={40} className="text-gold" />,
      title: 'DENTISTAS OU CLÍNICAS',
      description: 'Informações sobre especialidades, localização, e botão direto para marcar consultas. Isso passa seriedade e facilita o contato.'
    },
    {
      icon: <MapPin size={40} className="text-gold" />,
      title: 'COMÉRCIOS LOCAIS',
      description: 'Mesmo sem entregas, um site ajuda sua loja a ser encontrada no Google, e você ainda pode mostrar os produtos com botão pro WhatsApp.'
    }
  ];

  return (
    <section id="why-website" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-center font-museo">
          Por que sua marca <span className="text-gold">precisa</span> de um site?
        </h2>
        
        <p ref={introRef} className="text-xl text-center max-w-3xl mx-auto mb-16 font-museo">
          Um bom site não é luxo, é ferramenta. Ele aumenta a confiança, melhora sua presença digital e atrai novos clientes — mesmo quando você está dormindo.
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {niches.map((niche, index) => (
            <div 
              key={index} 
              className="niche-card bg-background border border-foreground/30 p-6 rounded-lg transition-all hover:border-gold"
            >
              <div className="mb-4">{niche.icon}</div>
              <h3 className="text-2xl font-bold mb-2 uppercase font-museo">{niche.title}</h3>
              <p className="font-museo">{niche.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-xl font-bold mb-8 font-museo">
            📊 Resultado: Um site bem feito te poupa tempo, melhora sua imagem e te coloca à frente da concorrência.
          </p>
          
          <a 
            href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20personalizado%20para%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-foreground bg-transparent text-foreground px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-all hover:border-gold hover:text-gold font-museo"
          >
            <Phone size={18} />
            Falar com Studio LX
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;

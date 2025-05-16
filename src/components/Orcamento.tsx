
import { Phone } from 'lucide-react';

const Orcamento = () => {
  return (
    <section id="orcamento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 font-museo">
            Serviços & Investimentos
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-museo">
            Soluções digitais para sua marca se destacar online.
            <br/>
            Sem burocracia. Sem enrolação. Só resultado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="border border-foreground/30 rounded-lg p-8 transition-all hover:border-gold reveal">
            <h3 className="text-2xl font-bold uppercase mb-2 font-museo">Landing Page Simples</h3>
            <p className="text-3xl font-bold text-gold mb-4">R$ 350</p>
            <p className="mb-6 font-museo">Ideal para promoções, divulgação rápida ou links na bio do Instagram.</p>
            <a 
              href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20para%20uma%20Landing%20Page%20Simples."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-transparent text-foreground px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all hover:border-gold hover:text-gold w-full justify-center font-museo"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </a>
          </div>
          
          <div className="border border-foreground/30 rounded-lg p-8 transition-all hover:border-gold reveal">
            <h3 className="text-2xl font-bold uppercase mb-2 font-museo">Site Institucional</h3>
            <p className="text-3xl font-bold text-gold mb-4">A partir de R$ 497</p>
            <p className="mb-6 font-museo">Perfeito para empresas que querem presença online profissional e confiável.</p>
            <a 
              href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20para%20um%20Site%20Institucional."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-transparent text-foreground px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all hover:border-gold hover:text-gold w-full justify-center font-museo"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </a>
          </div>
          
          <div className="border border-foreground/30 rounded-lg p-8 transition-all hover:border-gold reveal">
            <h3 className="text-2xl font-bold uppercase mb-2 font-museo">Site Completo com SEO + Blog</h3>
            <p className="text-3xl font-bold text-gold mb-4">A partir de R$ 897</p>
            <p className="mb-6 font-museo">Para marcas que desejam autoridade digital e estratégias de tráfego orgânico.</p>
            <a 
              href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20para%20um%20Site%20Completo%20com%20SEO%20+%20Blog."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-transparent text-foreground px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all hover:border-gold hover:text-gold w-full justify-center font-museo"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </a>
          </div>
          
          <div className="border border-foreground/30 rounded-lg p-8 transition-all hover:border-gold reveal">
            <h3 className="text-2xl font-bold uppercase mb-2 font-museo">Catálogo Online</h3>
            <p className="text-3xl font-bold text-gold mb-4">A partir de R$ 697</p>
            <p className="mb-6 font-museo">Mostre seus produtos com um visual limpo e com botão direto pro WhatsApp.</p>
            <a 
              href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20para%20um%20Catálogo%20Online."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-transparent text-foreground px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all hover:border-gold hover:text-gold w-full justify-center font-museo"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </a>
          </div>
          
          <div className="border border-foreground/30 rounded-lg p-8 transition-all hover:border-gold reveal">
            <h3 className="text-2xl font-bold uppercase mb-2 font-museo">Redesign de site antigo</h3>
            <p className="text-3xl font-bold text-gold mb-4">Sob consulta</p>
            <p className="mb-6 font-museo">Vamos transformar seu site antigo em algo moderno, rápido e atrativo.</p>
            <a 
              href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20para%20um%20Redesign%20de%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-transparent text-foreground px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all hover:border-gold hover:text-gold w-full justify-center font-museo"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </a>
          </div>
          
          <div className="border border-foreground/30 rounded-lg p-8 transition-all hover:border-gold reveal">
            <h3 className="text-2xl font-bold uppercase mb-2 font-museo">Manutenção Mensal</h3>
            <p className="text-3xl font-bold text-gold mb-4">R$ 49/mês</p>
            <p className="mb-6 font-museo">Edições e atualizações contínuas para manter seu site sempre atualizado.</p>
            <a 
              href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20serviço%20de%20Manutenção%20Mensal."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-transparent text-foreground px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all hover:border-gold hover:text-gold w-full justify-center font-museo"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </a>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 font-museo">Informações Adicionais</h3>
            <p className="mb-4 font-museo">📍 Prazo médio de entrega: <span className="font-bold">5 a 7 dias úteis</span></p>
            
            <a 
              href="https://wa.me/558298328966?text=Oi!%20Vim%20pelo%20site%20e%20quero%20um%20orçamento%20personalizado%20para%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gold bg-transparent text-foreground px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-gold/10 font-museo"
            >
              <Phone size={18} className="text-gold" />
              Quero um orçamento personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orcamento;

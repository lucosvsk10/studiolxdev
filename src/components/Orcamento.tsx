
import { Phone } from 'lucide-react';
import OrcamentoForm from './OrcamentoForm';

const Orcamento = () => {
  return (
    <section id="orcamento" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
            Pronto para criar seu site profissional?
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-extralight">
            Preencha o formulário abaixo e receba uma proposta sob medida.
            <br/>
            Sem burocracia. Sem enrolação. Só resultado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 reveal">
            <OrcamentoForm />
          </div>
          
          <div className="lg:col-span-1">
            <div className="border border-gold/50 rounded-lg p-6 mb-8 reveal">
              <h3 className="text-xl font-bold uppercase mb-4">Valores médios</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Landing Page:</span> 
                  <span className="font-medium">a partir de R$ 350</span>
                </li>
                <li className="flex justify-between">
                  <span>Site Institucional:</span> 
                  <span className="font-medium">a partir de R$ 700</span>
                </li>
                <li className="flex justify-between">
                  <span>Manutenção mensal:</span> 
                  <span className="font-medium">a partir de R$ 100</span>
                </li>
              </ul>
              <p className="text-sm mt-4 opacity-70">
                <em>*(Valores podem variar conforme a complexidade do projeto)*</em>
              </p>
            </div>
            
            <div className="text-center reveal">
              <h3 className="text-xl font-bold uppercase mb-2">Prefere um papo direto?</h3>
              <p className="mb-4">Me chama no WhatsApp clicando aqui:</p>
              <a 
                href="https://wa.me/5582998328966" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold text-dark font-bold py-3 px-6 rounded-lg transition-all hover:bg-gold/80 hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <Phone size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orcamento;

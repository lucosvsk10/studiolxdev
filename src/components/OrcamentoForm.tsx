
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const OrcamentoForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    tipoSite: '',
    ideia: '',
    estiloVisual: '',
    assets: '',
    prazo: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Orçamento solicitado com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        tipoSite: '',
        ideia: '',
        estiloVisual: '',
        assets: '',
        prazo: ''
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp com DDD</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              placeholder="(00) 00000-0000"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tipoSite">Tipo de site</Label>
            <Select
              onValueChange={(value) => handleSelectChange('tipoSite', value)}
              value={formData.tipoSite}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="landing-page">Landing Page</SelectItem>
                <SelectItem value="site-institucional">Site Institucional</SelectItem>
                <SelectItem value="pagina-vendas">Página de Vendas</SelectItem>
                <SelectItem value="link-bio">Link na Bio</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="ideia">Descreva sua ideia</Label>
          <Textarea
            id="ideia"
            name="ideia"
            placeholder="Conte-nos um pouco sobre o seu projeto..."
            rows={4}
            value={formData.ideia}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="estiloVisual">Estilo visual desejado</Label>
          <Input
            id="estiloVisual"
            name="estiloVisual"
            placeholder="Ex: Minimalista, Moderno, Colorido..."
            value={formData.estiloVisual}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="assets">Já tem logo e textos?</Label>
            <Select
              onValueChange={(value) => handleSelectChange('assets', value)}
              value={formData.assets}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim</SelectItem>
                <SelectItem value="nao">Não</SelectItem>
                <SelectItem value="criando">Ainda estou criando</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="prazo">Prazo desejado</Label>
            <Select
              onValueChange={(value) => handleSelectChange('prazo', value)}
              value={formData.prazo}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7-dias">Em até 7 dias</SelectItem>
                <SelectItem value="15-dias">Em até 15 dias</SelectItem>
                <SelectItem value="sem-urgencia">Sem urgência</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-gold text-dark font-bold py-3 px-8 rounded-lg transition-all hover:bg-gold/80 hover:-translate-y-1 uppercase min-w-48 text-center"
          >
            {loading ? "Enviando..." : "Solicitar Orçamento"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrcamentoForm;

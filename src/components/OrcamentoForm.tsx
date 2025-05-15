
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the schema for form validation
const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  whatsapp: z.string().min(8, { message: "WhatsApp inválido" }),
  tipoSite: z.string().min(1, { message: "Selecione um tipo de site" }),
  ideia: z.string().min(10, { message: "Por favor, descreva sua ideia com mais detalhes" }),
  estiloVisual: z.string().optional(),
  assets: z.string().min(1, { message: "Selecione uma opção" }),
  prazo: z.string().min(1, { message: "Selecione um prazo" }),
});

type FormValues = z.infer<typeof formSchema>;

const OrcamentoForm = () => {
  const [loading, setLoading] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      tipoSite: '',
      ideia: '',
      estiloVisual: '',
      assets: '',
      prazo: ''
    },
  });
  
  const onSubmit = (data: FormValues) => {
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Orçamento solicitado com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      form.reset();
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp com DDD</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(00) 00000-0000"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tipoSite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de site</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="landing-page">Landing Page</SelectItem>
                      <SelectItem value="site-institucional">Site Institucional</SelectItem>
                      <SelectItem value="pagina-vendas">Página de Vendas</SelectItem>
                      <SelectItem value="link-bio">Link na Bio</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="ideia"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descreva sua ideia</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Conte-nos um pouco sobre o seu projeto..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="estiloVisual"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estilo visual desejado</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Minimalista, Moderno, Colorido..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="assets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Já tem logo e textos?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sim">Sim</SelectItem>
                      <SelectItem value="nao">Não</SelectItem>
                      <SelectItem value="criando">Ainda estou criando</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="prazo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prazo desejado</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="7-dias">Em até 7 dias</SelectItem>
                      <SelectItem value="15-dias">Em até 15 dias</SelectItem>
                      <SelectItem value="sem-urgencia">Sem urgência</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
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
      </Form>
    </div>
  );
};

export default OrcamentoForm;

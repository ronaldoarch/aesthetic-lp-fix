-- Criar tabela para leads da lista VIP
CREATE TABLE public.vip_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.vip_leads ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir inserção de qualquer usuário
CREATE POLICY "Anyone can insert leads" 
ON public.vip_leads 
FOR INSERT 
WITH CHECK (true);

-- Criar função para atualizar timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger para atualizar timestamp automaticamente
CREATE TRIGGER update_vip_leads_updated_at
BEFORE UPDATE ON public.vip_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
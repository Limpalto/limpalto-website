import React from 'react';
import { AccordionItem } from '../ui/Accordion';

export const FAQ = () => (
  <section id="faq" className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-emerald-900 mb-16 text-center">Dúvidas Frequentes</h2>
      <div className="space-y-2">
        <AccordionItem 
          title="Como funciona a substituição em caso de falta?" 
          content="Possuímos reserva técnica. Garantimos a reposição em até 2 horas."
        />
        <AccordionItem 
          title="Fornecem equipamentos e produtos?" 
          content="Sim. Uniformes, EPIs e produtos de linha profissional inclusos no contrato."
        />
        <AccordionItem 
          title="Atendem serviços avulsos?" 
          content="Nosso foco são contratos fixos para garantir o padrão de qualidade contínuo."
        />
      </div>
    </div>
  </section>
);
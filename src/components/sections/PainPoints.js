import React from 'react';
import { Clock, ShieldCheck, Handshake } from 'lucide-react';
import { Card } from '../ui/Card';

export const PainPoints = () => (
  <section id="diferenciais" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-emerald-900 mb-4">A gestão do seu condomínio não pode parar.</h2>
      <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">
        Esqueça as dores de cabeça com atrasos, faltas e manutenção mal feita. Nós assumimos a responsabilidade.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <Card delay={0.1} className="text-center flex flex-col items-center">
          <div className="text-amber-500 mb-6 bg-amber-50 p-4 rounded-2xl"><Clock size={40} /></div>
          <h3 className="text-xl font-bold text-emerald-900 mb-4">Cobertura em até 2 Horas</h3>
          <p className="text-slate-600">Equipe de reserva técnica garante reposição imediata para sua operação não parar.</p>
        </Card>
        <Card delay={0.2} className="text-center flex flex-col items-center">
          <div className="text-amber-500 mb-6 bg-amber-50 p-4 rounded-2xl"><ShieldCheck size={40} /></div>
          <h3 className="text-xl font-bold text-emerald-900 mb-4">Segurança e Conformidade</h3>
          <p className="text-slate-600">Profissionais uniformizados e com EPIs. Zero risco trabalhista para você.</p>
        </Card>
        <Card delay={0.3} className="text-center flex flex-col items-center">
          <div className="text-amber-500 mb-6 bg-amber-50 p-4 rounded-2xl"><Handshake size={40} /></div>
          <h3 className="text-xl font-bold text-emerald-900 mb-4">Contratos Inteligentes</h3>
          <p className="text-slate-600">Modelos fixos que otimizam o orçamento do condomínio com previsibilidade.</p>
        </Card>
      </div>
    </div>
  </section>
);
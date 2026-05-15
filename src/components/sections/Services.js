import React from 'react';
import { Leaf,BrushCleaning, Key, Wrench, Settings } from 'lucide-react';
import { Card } from '../ui/Card';

const services = [
  { icon: <Leaf />, title: "Paisagismo e Jardinagem", text: "Nosso carro-chefe. Construção e manutenção contínua de áreas verdes.", /*highlight: true*/ },
  { icon: <BrushCleaning />, title: "Limpeza e Conservação", text: "Limpeza geral, fachadas de vidro e pós-obra com produtos de alta performance." },
  { icon: <Key />, title: "Portaria e Controle", text: "Portaria não armada, controle rigoroso de acessos com cordialidade." },
  { icon: <Settings />, title: "Serviços de Apoio", text: "Recepção, copeira e manutenção especializada de piscinas." }
];

export const Services = () => (
  <section id="serviços" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-emerald-900 mb-16 text-center">Soluções Completas em Terceirização</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Card key={i} delay={i * 0.1} className={s.highlight ? "border-2 border-amber-500 bg-emerald-50/30" : ""}>
            <div className={`${s.highlight ? 'text-amber-500' : 'text-emerald-800'} mb-6`}>
              {React.cloneElement(s.icon, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
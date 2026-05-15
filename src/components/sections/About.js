import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import imagEquipe from '../../assets/images/services_at.webp'

export const About = () => (
  <section id="quem-somos" className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img 
            src={imagEquipe} 
            alt="Time Profissional" 
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-6">12 ANOS DE HISTÓRIA</span>
          <h2 className="text-4xl font-bold text-emerald-900 mb-6">Muito mais que prestação de serviços. Somos parceiros estratégicos.</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Em 2012, a Limpalto surgiu por meio da elaboração de serviços operacionais não convencionais, demonstrando desde o início sua força e capacidade na execução de tarefas do dia a dia.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Ao longo do tempo, expandimos nossos horizontes com visão de futuro. Com uma equipe comprometida, determinação e foco no cliente, conseguimos alcançar o equilíbrio entre serviços prestados com qualidade em terceirização, sempre com profissionais qualificados e preparados para atender e superar desafios, alcançando resultados consistentes.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">A Limpalto e seus colaboradores acreditam que é assim que se constroem bons resultados para nossos clientes. Atuamos em diversos setores e segmentos, com cada profissional desempenhando sua função de forma treinada e capacitada, garantindo um excelente desempenho técnico e prático.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">Em constante fase de crescimento, a Limpalto presta serviços de limpeza, conservação, portaria, recepção, guardião de piscina, paisagismo, jardinagem, entre outros.
          </p>
          <a href='https://wa.me/5521998739149?text=Olá! gostaria de mais informações' target='_blank'>
           <Button variant="dark">Fale com um Consultor</Button></a>
        </motion.div>
      </div>
    </div>
  </section>
);
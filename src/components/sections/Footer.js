import React from 'react';
import { MapPin, Mail, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => (
  <footer className="bg-emerald-900 text-white pt-24 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 mb-20">
        <div>
          <h2 className="text-4xl font-bold mb-8">Pronto para valorizar seu empreendimento?</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 text-emerald-100">
              <MapPin className="text-amber-500 mt-1" />
              <p>Edifício Passeio Empresarial, Campo Grande, RJ.</p>
            </div>
            <div className="flex items-start gap-4 text-emerald-100">
              <Mail className="text-amber-500 mt-1" />
              <p>contato@limpalto.com.br</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none" />
              <input type="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none" />
            </div>
            <input type="text" placeholder="Empresa" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none" />
            <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 outline-none">
              <option>Selecione o Serviço</option>
              <option>Paisagismo</option>
              <option>Limpeza</option>
              <option>Portaria</option>
            </select>
            <Button variant="primary" className="w-full py-4 uppercase">Solicitar Proposta <Send size={18}/></Button>
          </form>
        </div>
      </div>
      <div className="border-t border-emerald-800 pt-8 text-center text-emerald-400 text-sm">
        © 2026 Limpalto. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);
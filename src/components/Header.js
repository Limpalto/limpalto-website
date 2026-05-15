import { Children, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import logo from "../assets/images/logo_llimpalto.webp";
import  BotaoWhatsApp  from '../components/botaowhatsapp';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-3xl font-black text-emerald-800 tracking-tighter">
         <img src={logo} />                     
        </div>
        <nav className="hidden md:flex gap-8 font-medium text-emerald-900">
          {['Início', 'Diferenciais', 'Serviços', 'Quem Somos', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-500 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <BotaoWhatsApp variant="primary" onClick={BotaoWhatsApp}> fale conosco </BotaoWhatsApp>
        </div>

        <button className="md:hidden text-emerald-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {['Início', 'Diferenciais', 'Serviços', 'Quem Somos', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-semibold text-emerald-900">{item}</a>
          ))}
          <Button variant="primary" className="w-full">Fale Conosco</Button>
        </div>
      )}
    </header>
  );
};
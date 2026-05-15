import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/5521998739149" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
  >
    <MessageCircle size={32} fill="white" />
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
  </a>
);
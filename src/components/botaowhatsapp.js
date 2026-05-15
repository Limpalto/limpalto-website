import React from 'react';

function BotaoWhatsApp() {
  const numeroWhatsApp = "5521998739149"; // Exemplo: 55 + DDD + Numero
  const mensagem = "Olá! gostaria de mais informações!";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{
        backgroundColor: "rgba(245,158,11, 1)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold"
      }}
    >
      Fale Conosco
    </a>
  );
}

export default BotaoWhatsApp;

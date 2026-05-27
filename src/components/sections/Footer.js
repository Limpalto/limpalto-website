import React, { useState } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
  // PASSO 1: Criar a "memória" para guardar o que o usuário digita
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [servico, setServico] = useState('');

  // PASSO 2: Criar variáveis para controlar o aviso de "Enviando" ou "Sucesso"
  const [carregando, setCarregando] = useState(false);
  const [enviadoComSucesso, setEnviadoComSucesso] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  // PASSO 3: Função que roda quando o usuário clica no botão de enviar
  const enviarFormulario = async (evento) => {
    evento.preventDefault(); // Impede a página de atualizar sozinha

    // Validação simples: se esquecer de preencher os principais, para aqui
    if (!nome || !email || !servico) {
      setMensagemErro('Por favor, preencha o Nome, E-mail e selecione um Serviço.');
      return;
    }

    // Começa o envio: muda o botão para "Enviando..."
    setCarregando(true);
    setMensagemErro('');

    // Junta todos os dados em um objeto (nosso "pacote")
    const dadosParaEnviar = {
      nome: nome,
      email: email,
      empresa: empresa,
      servico: servico
    };

    try {
      // ATENÇÃO: Substitua o LINK abaixo pelo link que o Formspree vai te dar!
      const linkDoServidor = 'https://formspree.io/f/xjgzjebr';

      const resposta = await fetch(linkDoServidor, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dadosParaEnviar) // Transforma o pacote em texto para a internet
      });

      if (resposta.ok) {
        // Se deu certo: avisa que enviou e limpa os campos da tela
        setEnviadoComSucesso(true);
        setNome('');
        setEmail('');
        setEmpresa('');
        setServico('');
      } else {
        setMensagemErro('Houve um problema no servidor. Tente novamente.');
      }

    } catch (erro) {
      // Se a internet cair ou o link estiver errado, cai aqui
      setMensagemErro('Erro de rede. Verifique sua conexão.');
    } finally {
      // Terminou o processo (com sucesso ou erro), tira o aviso de "Enviando..."
      setCarregando(false);
    }
  };

  return (
    <footer className="bg-emerald-900 text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          
          {/* Lado Esquerdo: Textos e Informações */}
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
          
          {/* Lado Direito: Caixa do Formulário */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={enviarFormulario} className="space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nome" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)} // Atualiza a memória 'nome'
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none" 
                />
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Atualiza a memória 'email'
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none" 
                />
              </div>

              <input 
                type="text" 
                placeholder="Empresa" 
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)} // Atualiza a memória 'empresa'
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none" 
              />

              <select 
                value={servico}
                onChange={(e) => setServico(e.target.value)} // Atualiza a memória 'servico'
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Selecione o Serviço</option>
                <option value="Paisagismo">Paisagismo</option>
                <option value="Limpeza">Limpeza</option>
                <option value="Portaria">Portaria</option>
              </select>

              {/* Se houver algum erro, mostra este texto vermelho */}
              {mensagemErro && (
                <p className="text-red-500 text-sm font-medium">{mensagemErro}</p>
              )}

              {/* Se der certo, mostra este texto verde */}
              {enviadoComSucesso && (
                <p className="text-emerald-600 text-sm font-medium">Proposta enviada com sucesso! Verifique seu e-mail.</p>
              )}

              {/* Botão que muda de texto se estiver enviando e desativa para evitar cliques duplos */}
              <Button 
                variant="primary" 
                type="submit" 
                className="w-full py-4 uppercase flex items-center justify-center gap-2"
                disabled={carregando}
              >
                {carregando ? 'Enviando...' : 'Solicitar Proposta'} 
                {!carregando && <Send size={18}/>}
              </Button>
            </form>
          </div>

        </div>

        {/* Rodapé de Créditos */}
        <div className="border-t border-emerald-800 pt-8 text-center text-emerald-400 text-sm">
          Desenvolvido pela Agência Mais Resultado. Empresa de <a href="https://agenciamaisresultado.com.br" className="underline hover:text-white transition-colors">Marketing Digital</a>
        </div>
      </div>
    </footer>
  );
};
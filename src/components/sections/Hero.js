/*import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import imgFundo from'../../../src/assets/images/banner_inicial_01.webp'

export const Hero = () => (
  <section id="início" className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={imgFundo}
        alt="Limpalto - Cuidados premium para o seu patrimônio" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-emerald-900/80" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="text-amber-500 font-bold tracking-[0.2em] text-sm mb-4 block uppercase">
          Terceirização Inteligente para Condomínios e Empresas
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
          Cuidado Premium para o seu Patrimônio. <br/>
          <span className="text-amber-500">Tranquilidade</span> para Você.
        </h1>
        <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed max-w-2xl">
          Há 11 anos transformando ambientes com excelência em Paisagismo, Limpeza e Portaria no Rio de Janeiro.
        </p>
        <a href='https://wa.me/5521998739149?text=Olá! gostaria de mais informações!' target='_blank'>
        <Button variant="primary" className="text-lg px-8 py-6 h-auto">
          <MessageCircle className="fill-current" /> Solicitar Orçamento Rápido
        </Button></a>
      </motion.div>
    </div>
  </section>
);

*/
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

// Importação do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importação das suas imagens (Ajuste os nomes conforme seus arquivos)
import imgFundo01 from '../../../src/assets/images/banner_inicial_01.webp';
import imgFundo02 from '../../../src/assets/images/seguranca.webp';
import imgFundo03 from '../../../src/assets/images/paisagismo.webp';
import imgFundo04 from '../../../src/assets/images/limpeza.webp';

// import imgFundo02 from '../../../src/assets/images/banner_inicial_02.webp'; 

export const Hero = () => {
  
  // SOLUÇÃO: A variável 'slides' precisa estar AQUI, dentro da função Hero.
  const slides = [
    {
      id: 1,
      image: imgFundo01,
      tag: "Terceirização Inteligente para Condomínios e Empresas",
      title: "Cuidado Premium para o seu Patrimônio.",
      highlight: "Tranquilidade",
      description: "Há 11 anos transformando ambientes com excelência em Paisagismo, Limpeza e Portaria no Rio de Janeiro."
    },
    {
      id: 2,
      image: imgFundo04,
      tag: "Limpeza e Conservação",
      title: "Ambientes Impecáveis e Higienizados.",
      highlight: "Saúde",
      description: "Equipes treinadas e supervisão constante para garantir o melhor padrão de limpeza."
    },
    {
      id: 3,
      image: imgFundo03,
      tag: "Paisagismo Profissional",
      title: "A Natureza Valorizando seu Espaço.",
      highlight: "Estética",
      description: "Projetos de manutenção de jardins que trazem vida e valorização para o seu imóvel."
    },
    {
      id: 4,
      image: imgFundo02,
      tag: "Portaria e Recepção",
      title: "Segurança e Cordialidade na Entrada.",
      highlight: "Proteção",
      description: "Controle de acesso rigoroso com atendimento humanizado e profissional."
    }
  ];

  return (
    <section id="início" className="relative h-screen w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full"
      >
        {/* O .map agora vai encontrar a variável 'slides' definida logo acima */}
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full flex items-center overflow-hidden">
            
            <div className="absolute inset-0 z-0 bg-emerald-950"> 
              <img 
                src={slide.image}
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 md:bg-emerald-950/70" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <motion.div 
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl"
              >
                <span className="text-amber-500 font-bold tracking-[0.2em] text-sm mb-4 block uppercase mt-60">
                  {slide.tag}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                  {slide.title} <br/>
                  <span className="text-amber-500">{slide.highlight}</span> 
                </h1>
                <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
                <a href='https://wa.me/5521998739149' target='_blank' rel="noreferrer">
                  <Button variant="primary" className="text-lg px-8 py-6 h-auto">
                    <MessageCircle className="fill-current" /> Orçamento Rápido
                  </Button>
                </a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { background: white !important; }
        .swiper-pagination-bullet-active { background: #f59e0b !important; }
      `}} />
    </section>
  );
};
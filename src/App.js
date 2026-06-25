import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { PainPoints } from './components/sections/PainPoints';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  // Substitua as informações genéricas abaixo pelos dados reais da Limpalto
  const seoData = {
    title: "Serviço de Limpeza para Empresas e Condomínios RJ | Limpalto",
    description: "Conheça a Limpalto, empresa de limpeza profissional terceirizada no RJ com soluções para condomínios, empresas e residências com qualidade e confiança.",
    url: "https://limpalto.com.br",
    image: "https://limpalto.com.br/og-image.jpg" // Imagem que aparece no WhatsApp ao compartilhar
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        {/* Bloco de SEO gerenciado pelo Helmet */}
        <Helmet>
          {/* Tags Primárias */}
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.description} />
          <link rel="canonical" href={seoData.url} />
          <meta name="robots" content="index, follow" />

          {/* Open Graph / Facebook / WhatsApp / Instagram */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seoData.url} />
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:image" content={seoData.image} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={seoData.url} />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          <meta name="twitter:image" content={seoData.image} />

          {/* Dados Estruturados (JSON-LD) para o Google entender a empresa */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Limpalto",
              "image": seoData.image,
              "@id": seoData.url,
              "url": seoData.url,
              "telephone": "+55-21-99873-9149", // adicione o telefone real da empresa aqui
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Edifício Passeio Empresarial, Campo Grande, RJ.",
                "addressLocality": "Rio de Janeiro",
                "addressRegion": "UF",
                "postalCode": "23080-000",
                "addressCountry": "BR"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            })}
          </script>
        </Helmet>

        {/* Estrutura visual do site */}
        <Header />
        <main>
          <Hero />
          <PainPoints />
          <Services />
          <About />
          <FAQ />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
}

export default App;
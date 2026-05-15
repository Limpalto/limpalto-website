import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { PainPoints } from './components/sections/PainPoints';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
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
  );
}

export default App;
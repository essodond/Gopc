import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import BonusSection from './components/BonusSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductsSection />
      <BonusSection />
      <Footer />
    </div>
  );
}

export default App;
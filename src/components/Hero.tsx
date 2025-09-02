import React from 'react';
import { GraduationCap, Star, Zap } from 'lucide-react';

const Hero = () => {
  const phoneNumber = "+22890123456"; // Numéro WhatsApp à remplacer

  const openWhatsApp = () => {
    const message = "Bonjour ! Je suis intéressé(e) par vos offres spéciales rentrée universitaire 2025.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="accueil" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-yellow-300">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-semibold">Offre Spéciale Rentrée</span>
              <Star className="h-5 w-5 fill-current" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Spécial Rentrée
                <span className="block text-red-400">Universitaire 2025</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                PC fiables pour étudiants
              </p>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed">
              Équipez-vous pour la réussite avec nos ordinateurs portables et accessoires 
              sélectionnés spécialement pour les étudiants. Performances garanties, 
              prix étudiants !
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Commander maintenant
              </button>
              <a
                href="#produits"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white border-opacity-30"
              >
                Voir les produits
              </a>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-6 w-6 text-yellow-300" />
                <span className="text-sm font-medium">Spécial Étudiants</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-yellow-300" />
                <span className="text-sm font-medium">Livraison Rapide</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-6 w-6 text-yellow-300" />
                <span className="text-sm font-medium">Garantie Qualité</span>
              </div>
            </div>
          </div>

          {/* Image hero */}
          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ordinateurs portables pour étudiants"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
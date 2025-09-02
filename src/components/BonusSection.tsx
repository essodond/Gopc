import React from 'react';
import { Gift, Calendar, Mouse, Sparkles } from 'lucide-react';

const BonusSection = () => {
  const phoneNumber = "+22890123456"; // Numéro WhatsApp à remplacer

  const openWhatsApp = () => {
    const message = "Bonjour ! Je veux profiter de l'offre bonus étudiant avec la souris gratuite !";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="bonus" className="py-16 lg:py-24 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <Gift className="h-12 w-12 text-yellow-300" />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-yellow-300">Bonus</span> Étudiant
          </h2>
          <p className="text-xl lg:text-2xl text-red-100 max-w-3xl mx-auto">
            Offre spéciale limitée pour la rentrée universitaire
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu de l'offre */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
              <div className="flex items-center space-x-4 mb-6">
                <Mouse className="h-8 w-8 text-yellow-300" />
                <h3 className="text-2xl font-bold">Souris Sans Fil GRATUITE !</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Pour tout achat d'un ordinateur portable avant le 
                  <span className="font-bold text-yellow-300"> 15 Mars 2025</span>, 
                  recevez une souris sans fil de qualité GRATUITEMENT !
                </p>
                
                <div className="flex items-center space-x-2 text-yellow-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold">Valeur : 15 000 FCFA</span>
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-yellow-300" />
                Conditions de l'offre
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-300 mt-1">•</span>
                  <span>Valable jusqu'au 15 Mars 2025</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-300 mt-1">•</span>
                  <span>Pour tout achat d'ordinateur portable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-300 mt-1">•</span>
                  <span>Sur présentation de la carte étudiant</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-300 mt-1">•</span>
                  <span>Non cumulable avec autres promotions</span>
                </li>
              </ul>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-red-700 py-4 px-8 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Gift className="h-6 w-6" />
              <span>Profiter de l'offre maintenant !</span>
            </button>
          </div>

          {/* Image bonus */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Souris sans fil gratuite"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Badge gratuit */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-red-700 px-4 py-2 rounded-full font-bold text-lg shadow-lg animate-bounce">
              GRATUIT !
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
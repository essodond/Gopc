import React from 'react';
import { Monitor, Phone, MapPin, Mail, Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "+22890123456"; // Numéro WhatsApp à remplacer
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const message = "Bonjour ! Je souhaite obtenir plus d'informations sur vos produits.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">
                Go<span className="text-blue-400">PC</span> <span className="text-red-400">Togo</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins informatiques. 
              Spécialiste en PC et accessoires pour étudiants au Togo.
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Contactez-nous</span>
            </button>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-300">+228 71 60 80 97</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">kazalowilliam@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-1" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-300">Lomé, Togo<br />Agoe Assiyeye</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Horaires d'ouverture</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <div>
                  <p className="font-semibold">Lundi - Vendredi</p>
                  <p className="text-gray-300">8h00 - 18h00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="font-semibold">Samedi</p>
                  <p className="text-gray-300">8h00 - 16h00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-400" />
                <div>
                  <p className="font-semibold">Dimanche</p>
                  <p className="text-gray-300">Fermé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liens rapides et réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/gopctogo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/gopctogo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <div className="space-y-2 pt-4">
              <h4 className="font-semibold">Liens rapides</h4>
              <div className="space-y-2">
                <a href="#accueil" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Accueil
                </a>
                <a href="#produits" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Nos Produits
                </a>
                <a href="#bonus" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  Bonus Étudiant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} GoPC Togo. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Garantie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
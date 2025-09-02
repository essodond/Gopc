import React, { useState } from 'react';
import { Monitor, Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "+22896257589"; // Numéro WhatsApp à remplacer

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              Go<span className="text-blue-600">PC</span> <span className="text-red-600">Togo</span>
            </span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#produits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Produits
            </a>
            <a href="#bonus" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Bonus Étudiant
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* WhatsApp Button Desktop */}
          <button
            onClick={openWhatsApp}
            className="hidden md:flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Contact WhatsApp</span>
          </button>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-4">
              <a href="#accueil" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Accueil
              </a>
              <a href="#produits" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Produits
              </a>
              <a href="#bonus" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Bonus Étudiant
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
              <button
                onClick={openWhatsApp}
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
              >
                <Phone className="h-4 w-4" />
                <span>Contact WhatsApp</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
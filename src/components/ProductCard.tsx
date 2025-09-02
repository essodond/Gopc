import React from 'react';
import { ShoppingCart, Star, MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  rating: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const phoneNumber = "+22896257589"; // Numéro WhatsApp à remplacer

  const openWhatsApp = () => {
    const message = `Bonjour ! Je suis intéressé(e) par le ${product.name} (${product.price}). Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Badge promotion */}
      {product.originalPrice && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
          PROMO
        </div>
      )}

      {/* Image produit */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Contenu */}
      <div className="p-6 space-y-4">
        {/* Badge catégorie */}
        <div className="flex justify-between items-start">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>

        {/* Nom et marque */}
        <div>
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-blue-600 font-semibold">{product.brand}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Prix */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-600">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>

        {/* Boutons d'action */}
        <div className="space-y-3 pt-2">
          <button
            onClick={openWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Commander sur WhatsApp</span>
          </button>
          
          <button
            onClick={openWhatsApp}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Acheter maintenant</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
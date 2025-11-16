import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onServicesClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function Navigation({ onServicesClick, onAboutClick, onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                Fer Landscaping
              </h1>
              <p className="text-xs text-gray-600">Cleveland's Trusted Experts</p>
            </div>
          </a>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={onServicesClick}
              className="font-medium text-gray-700 hover:text-green-600 transition-colors pb-1"
            >
              Services
            </button>
            <button
              onClick={onAboutClick}
              className="font-medium text-gray-700 hover:text-green-600 transition-colors pb-1"
            >
              About Us
            </button>
            <button
              onClick={onContactClick}
              className="font-medium text-gray-700 hover:text-green-600 transition-colors pb-1"
            >
              Contact
            </button>
          </div>

          <a
            href="tel:+12165551234"
            className="hidden md:block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            (216) 555-1234
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => { onServicesClick(); handleMenuClose(); }}
              className="block w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => { onAboutClick(); handleMenuClose(); }}
              className="block w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => { onContactClick(); handleMenuClose(); }}
              className="block w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Contact
            </button>
            <a
              href="tel:+12165551234"
              className="block w-full text-center bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Call (216) 555-1234
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

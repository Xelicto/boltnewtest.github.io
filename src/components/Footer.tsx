import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onServicesClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onServicesClick, onAboutClick, onContactClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fer Landscaping</h3>
            <p className="text-gray-400 mb-4">
              Cleveland's trusted landscaping experts, transforming outdoor spaces with quality craftsmanship and dedication.
            </p>
            <div className="flex items-start space-x-2 text-gray-400">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <span>Serving Cleveland, OH and surrounding areas</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onServicesClick}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={onAboutClick}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-green-500" />
                <a href="tel:+12165551234" className="text-gray-400 hover:text-green-500 transition-colors">
                  (216) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-green-500" />
                <a href="mailto:info@ferlandscaping.com" className="text-gray-400 hover:text-green-500 transition-colors">
                  info@ferlandscaping.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fer Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

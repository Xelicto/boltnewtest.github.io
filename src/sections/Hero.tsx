import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onServicesClick: () => void;
}

export default function Hero({ onServicesClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/jared-muller-EkhWxU_pgLo-unsplash.jpg)',
          opacity: 0.4,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-emerald-700/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Cleveland's Premier Landscaping Experts
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
              Transform your outdoor space with Fer Landscaping. We bring beauty, functionality, and lasting value to residential and commercial properties throughout Cleveland and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12165551234"
                className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Estimate
                <ArrowRight className="ml-2" size={20} />
              </a>
              <button
                onClick={onServicesClick}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Leaf, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Cleveland's Premier Landscaping Experts
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your outdoor space with Fer Landscaping. We bring beauty, functionality, and lasting value to residential and commercial properties throughout Cleveland and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+12165551234"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <button className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all">
                  View Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl shadow-2xl flex items-center justify-center">
                <Leaf size={200} className="text-green-700 opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Award className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">15+ Years Experience</h3>
              <p className="text-gray-600">
                Trusted by Cleveland homeowners and businesses for over a decade of exceptional landscaping services.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Users className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Cleveland's climate, soil, and seasonal needs for optimal landscape care.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <CheckCircle2 className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind our work with satisfaction guarantees and meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Landscaping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to maintenance, we offer complete lawn care and landscape design services tailored to Cleveland properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Lawn Care & Maintenance',
                description: 'Professional mowing, edging, fertilization, and weed control to keep your Cleveland lawn lush and healthy year-round.',
              },
              {
                title: 'Landscape Design',
                description: 'Custom landscape design services that enhance curb appeal and create outdoor spaces perfect for Cleveland living.',
              },
              {
                title: 'Garden Installation',
                description: 'Beautiful flower beds, vegetable gardens, and perennial plantings designed for Cleveland\'s growing seasons.',
              },
              {
                title: 'Tree & Shrub Care',
                description: 'Expert pruning, planting, and maintenance of trees and shrubs to thrive in Cleveland\'s climate.',
              },
              {
                title: 'Hardscaping',
                description: 'Patios, walkways, retaining walls, and outdoor living spaces built to withstand Cleveland winters.',
              },
              {
                title: 'Seasonal Services',
                description: 'Spring cleanups, fall leaf removal, mulching, and snow removal services for Cleveland properties.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact Fer Landscaping today for a free estimate. Let's discuss how we can bring your vision to life with expert residential or commercial landscaping services in Cleveland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12165551234"
              className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Call (216) 555-1234
            </a>
            <button className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              Request Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

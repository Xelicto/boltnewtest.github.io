import { Sprout, Flower2, Trees, Hammer, Calendar, Droplets } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Sprout,
      title: 'Lawn Care & Maintenance',
      description: 'Keep your Cleveland lawn looking pristine with our comprehensive lawn care services. We understand the unique challenges of maintaining healthy grass in Northeast Ohio\'s climate.',
      features: [
        'Professional mowing and edging with precision equipment',
        'Fertilization programs tailored to Cleveland soil conditions',
        'Weed control and crabgrass prevention',
        'Aeration and overseeding for thick, healthy turf',
        'Disease and pest management',
        'Seasonal lawn treatments for year-round health',
      ],
    },
    {
      icon: Flower2,
      title: 'Landscape Design & Installation',
      description: 'Transform your Cleveland property with custom landscape design that reflects your style while thriving in our local climate. Our designers create stunning outdoor spaces that enhance your home\'s curb appeal.',
      features: [
        'Custom design consultations and 3D renderings',
        'Plant selection perfect for Cleveland\'s hardiness zone',
        'Foundation plantings and bed design',
        'Color schemes that bloom from spring through fall',
        'Water-efficient and low-maintenance options',
        'Complete installation with premium materials',
      ],
    },
    {
      icon: Droplets,
      title: 'Garden Installation & Planting',
      description: 'Whether you dream of vibrant flower beds or a productive vegetable garden, we bring your vision to life with expert planting services designed for Cleveland\'s growing seasons.',
      features: [
        'Perennial and annual flower bed installation',
        'Vegetable and herb garden setup',
        'Native plant gardens that support local ecosystems',
        'Raised bed construction and soil preparation',
        'Mulching and soil amendment',
        'Ongoing care plans to keep gardens thriving',
      ],
    },
    {
      icon: Trees,
      title: 'Tree & Shrub Care',
      description: 'Protect your investment in trees and shrubs with professional care services. We help your woody plants flourish through Cleveland\'s seasons while maintaining their health and beauty.',
      features: [
        'Expert pruning for health and aesthetics',
        'Disease diagnosis and treatment',
        'Insect and pest control',
        'Tree and shrub planting and transplanting',
        'Fertilization and deep root feeding',
        'Storm damage assessment and cleanup',
      ],
    },
    {
      icon: Hammer,
      title: 'Hardscaping & Outdoor Living',
      description: 'Extend your living space outdoors with durable, beautiful hardscaping designed to withstand Cleveland winters. From patios to retaining walls, we build outdoor features that last.',
      features: [
        'Custom patio design and installation',
        'Stone and paver walkways',
        'Retaining walls and terracing',
        'Outdoor kitchen and fire pit areas',
        'Decorative stone and gravel features',
        'Drainage solutions and erosion control',
      ],
    },
    {
      icon: Calendar,
      title: 'Seasonal Maintenance Services',
      description: 'Keep your Cleveland landscape beautiful through every season with our comprehensive maintenance programs. We handle the seasonal tasks so you can enjoy your outdoor space year-round.',
      features: [
        'Spring cleanup and mulch installation',
        'Summer maintenance and pruning',
        'Fall leaf removal and bed preparation',
        'Winter snow removal for commercial properties',
        'Gutter cleaning and yard debris removal',
        'Seasonal color rotation for flower beds',
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Landscaping Services in Cleveland
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Fer Landscaping offers complete residential and commercial landscaping services throughout Cleveland and surrounding areas. Our expertise in local climate conditions and attention to detail ensures your outdoor space looks its best every season.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service is customized to meet the unique needs of your property and designed to thrive in Cleveland's climate.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-block p-4 bg-green-100 rounded-2xl mb-6">
                    <service.icon className="text-green-600" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl shadow-lg flex items-center justify-center">
                    <service.icon size={150} className="text-green-700 opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Fer Landscaping for Cleveland Lawn Care?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                At Fer Landscaping, we understand that Cleveland's unique climate requires specialized knowledge and expertise. Our team has spent years mastering the art of creating and maintaining beautiful landscapes that thrive through harsh winters and humid summers.
              </p>
              <p className="text-lg">
                We take pride in our attention to detail and commitment to customer satisfaction. Every project, whether residential landscaping for a family home or commercial landscape design for a business property, receives the same level of care and professionalism.
              </p>
              <p className="text-lg">
                Our landscape design process begins with understanding your vision, your property's unique characteristics, and how you want to use your outdoor space. We then create a customized plan that balances beauty, functionality, and sustainability while working within your budget.
              </p>
              <p className="text-lg">
                From initial consultation through final installation and ongoing maintenance, we're dedicated to making your outdoor space a source of pride and enjoyment for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and estimate. Let's discuss how our professional landscaping services can transform your Cleveland property.
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

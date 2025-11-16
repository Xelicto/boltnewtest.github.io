import { Sprout, Flower2, Trees, Hammer, Calendar, Droplets, Award, Users, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const highlights = [
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Trusted by Cleveland homeowners and businesses for over a decade of exceptional landscaping services.',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: "Deep knowledge of Cleveland's climate, soil, and seasonal needs for optimal landscape care.",
    },
    {
      icon: CheckCircle2,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with satisfaction guarantees and meticulous attention to detail.',
    },
  ];

  const services = [
    {
      icon: Sprout,
      title: 'Lawn Care & Maintenance',
      description: 'Professional mowing, edging, fertilization, weed control, aeration, overseeding, disease management, and seasonal treatments.',
    },
    {
      icon: Flower2,
      title: 'Landscape Design',
      description: 'Custom design consultations with 3D renderings, plant selection for Cleveland hardiness zones, foundation plantings, and water-efficient options.',
    },
    {
      icon: Droplets,
      title: 'Garden Installation',
      description: 'Perennial and annual flower beds, vegetable gardens, native plant gardens, raised beds, mulching, and ongoing care plans.',
    },
    {
      icon: Trees,
      title: 'Tree & Shrub Care',
      description: 'Expert pruning, disease diagnosis and treatment, pest control, planting, transplanting, fertilization, and storm damage assessment.',
    },
    {
      icon: Hammer,
      title: 'Hardscaping',
      description: 'Custom patios, stone walkways, retaining walls, outdoor living spaces, decorative stone features, and drainage solutions.',
    },
    {
      icon: Calendar,
      title: 'Seasonal Services',
      description: 'Spring cleanup and mulching, summer maintenance, fall leaf removal, winter snow removal, gutter cleaning, and seasonal color.',
    },
  ];

  return (
    <div className="w-full">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                  <item.icon className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Landscaping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to maintenance, we offer complete lawn care and landscape design services tailored to Cleveland properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
                  <service.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Fer Landscaping?
          </h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            At Fer Landscaping, we understand that Cleveland's unique climate requires specialized knowledge and expertise. Our team has spent years mastering the art of creating and maintaining beautiful landscapes that thrive through harsh winters and humid summers. We take pride in our attention to detail and commitment to customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
}

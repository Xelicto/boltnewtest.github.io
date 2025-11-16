import { Heart, Target, Shield, Leaf, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About Fer Landscaping
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Fer Landscaping began with a simple vision: to help Cleveland homeowners and businesses create beautiful outdoor spaces they can truly enjoy. Founded over 15 years ago, our company has grown from a small operation to one of Cleveland's most trusted names in residential and commercial landscaping.
            </p>
            <p>
              As a locally owned and operated business, we take pride in our connection to Cleveland. We understand the unique characteristics of our region's soil, climate, and seasonal changes. This local expertise allows us to recommend the best plants, materials, and maintenance schedules for properties throughout the area.
            </p>
            <p>
              Every member of our team shares a genuine passion for landscaping and a commitment to excellence. We treat every property as if it were our own, bringing attention to detail and craftsmanship to every project, large or small.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Target className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To enhance the beauty and value of Cleveland properties through exceptional landscaping services, superior craftsmanship, and unwavering commitment to customer satisfaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Integrity in every interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Excellence in craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Respect for community</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Innovation in practices</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Leaf className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Over 15 years of experience working specifically in Cleveland means we understand exactly what plants thrive here.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Award className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-700 leading-relaxed">
                We stand behind our work with comprehensive guarantees using premium materials and proper techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Shield className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-700 leading-relaxed">
                Hundreds of satisfied residential and commercial clients throughout Cleveland trust us with their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Committed to Cleveland
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Being part of the Cleveland community means more to us than just operating a business here. We're your neighbors, and we care deeply about the appearance and health of our shared environment. Whether we're maintaining a residential property in Lakewood, designing a commercial landscape in downtown Cleveland, or installing gardens in Shaker Heights, we bring the same level of dedication and expertise.
          </p>
        </div>
      </section>
    </div>
  );
}

import { Heart, Target, Shield, Users, Leaf, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Fer Landscaping
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            A locally owned Cleveland landscaping company dedicated to transforming outdoor spaces with integrity, expertise, and passion.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Fer Landscaping began with a simple vision: to help Cleveland homeowners and businesses create beautiful outdoor spaces they can truly enjoy. Founded over 15 years ago, our company has grown from a small operation to one of Cleveland's most trusted names in residential and commercial landscaping.
              </p>
              <p>
                What started as a passion for creating beautiful lawns has evolved into a full-service landscaping company serving the greater Cleveland area. Throughout our journey, we've remained committed to the values that defined us from day one: exceptional quality, personal service, and deep respect for our community and the environment.
              </p>
              <p>
                As a locally owned and operated business, we take pride in our connection to Cleveland. We understand the unique characteristics of our region's soil, climate, and seasonal changes. This local expertise allows us to recommend the best plants, materials, and maintenance schedules for properties throughout the area.
              </p>
              <p>
                Every member of our team shares a genuine passion for landscaping and a commitment to excellence. We treat every property as if it were our own, bringing attention to detail and craftsmanship to every project, large or small.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
                <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                  <Target className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To enhance the beauty and value of Cleveland properties through exceptional landscaping services, superior craftsmanship, and unwavering commitment to customer satisfaction. We strive to create outdoor spaces that bring joy and pride to our clients while respecting and protecting our local environment.
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
                    <span>Integrity in every interaction and project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Excellence in craftsmanship and service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Respect for clients, community, and environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Innovation in sustainable practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Accountability for our work and results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
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
                Over 15 years of experience working specifically in Cleveland means we understand exactly what plants thrive here, when to plant them, and how to maintain them through our unique seasonal changes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Users className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Service</h3>
              <p className="text-gray-700 leading-relaxed">
                As a locally owned business, we build lasting relationships with our clients. You'll work with the same dedicated team who knows your property and understands your vision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Shield className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-700 leading-relaxed">
                We stand behind our work with comprehensive guarantees. Our commitment to quality means using premium materials, proper techniques, and meticulous attention to every detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Award className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-700 leading-relaxed">
                Hundreds of satisfied residential and commercial clients throughout Cleveland trust us with their landscaping needs. Our reputation speaks for itself.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Leaf className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Practices</h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize environmentally responsible methods, from native plant selections to water-efficient irrigation and organic treatments when possible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Target className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Services</h3>
              <p className="text-gray-700 leading-relaxed">
                From initial landscape design through year-round maintenance, we're your single source for all landscaping needs, simplifying the process and ensuring consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Committed to Cleveland
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Being part of the Cleveland community means more to us than just operating a business here. We're your neighbors, and we care deeply about the appearance and health of our shared environment.
            </p>
            <p>
              We're proud to contribute to making Cleveland neighborhoods more beautiful, one lawn and landscape at a time. Whether we're maintaining a residential property in Lakewood, designing a commercial landscape in downtown Cleveland, or installing gardens in Shaker Heights, we bring the same level of dedication and expertise.
            </p>
            <p>
              Our knowledge extends beyond general landscaping practices to include specific understanding of Cleveland's hardiness zone, soil composition, common pests and diseases in the area, and the best plant varieties for our climate. This localized expertise ensures that your landscape doesn't just look beautiful on installation day but continues to thrive year after year.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the Fer Landscaping difference. Contact us today to discuss your landscaping needs and discover how our local expertise can transform your Cleveland property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12165551234"
              className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Call (216) 555-1234
            </a>
            <button className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

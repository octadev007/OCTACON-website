import { Link } from 'react-router-dom'
import { CheckCircle, Award, Users, Zap } from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Building Excellence in Construction"
        subtitle="OCTACON delivers professional construction solutions with quality, safety, and innovation at every step."
        cta={{ text: 'Start Your Project', link: '/contact' }}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
      />

      {/* Stats Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-construction-500 mb-2">500+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-construction-500 mb-2">15+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-construction-500 mb-2">98%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-construction-500 mb-2">50+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon="🏢"
              title="Commercial"
              description="Office buildings, retail spaces, and commercial complexes with modern infrastructure."
            />
            <ServiceCard
              icon="🏗️"
              title="Infrastructure"
              description="Roads, bridges, utilities, and civil infrastructure projects of any scale."
            />
            <ServiceCard
              icon="🏠"
              title="Residential"
              description="Quality homes and residential developments built with precision and care."
            />
            <ServiceCard
              icon="🔧"
              title="Renovations"
              description="Expert renovation and restoration services for existing structures."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Why Choose OCTACON?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-construction-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy-900">Expert Team</h3>
                    <p className="text-gray-600">Experienced professionals with proven track records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="text-construction-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy-900">Quality Assured</h3>
                    <p className="text-gray-600">Certified processes and rigorous quality control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="text-construction-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy-900">On-Time Delivery</h3>
                    <p className="text-gray-600">Reliable project management and timely completion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-construction-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy-900">Client Focus</h3>
                    <p className="text-gray-600">Dedicated support and communication throughout</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                alt="Construction site"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-construction-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Dream Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact our team today for a consultation and quote</p>
          <Link to="/contact" className="btn-primary bg-white text-construction-500 hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
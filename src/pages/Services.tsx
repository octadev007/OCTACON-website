import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { Briefcase, Home, Building2, Wrench } from 'lucide-react'

export default function Services() {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="Comprehensive construction solutions for every project type"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ServiceCard
              icon={<Building2 size={32} />}
              title="Commercial Construction"
              description="Office buildings, retail spaces, industrial complexes, and corporate facilities built to the highest standards."
            />
            <ServiceCard
              icon={<Briefcase size={32} />}
              title="Infrastructure Projects"
              description="Civil works including roads, bridges, water systems, electrical infrastructure, and large-scale development projects."
            />
            <ServiceCard
              icon={<Home size={32} />}
              title="Residential Development"
              description="Quality residential properties from single homes to large-scale developments with modern amenities."
            />
            <ServiceCard
              icon={<Wrench size={32} />}
              title="Renovation & Restoration"
              description="Expert renovation, restoration, and refurbishment services for existing structures of all types."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Commercial Construction</h2>
              <p className="text-gray-600 mb-4">
                From concept to completion, we deliver world-class commercial projects. Our expertise spans office towers, retail centers, and specialized industrial facilities.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Design and planning</li>
                <li>✓ Project management</li>
                <li>✓ Quality assurance</li>
                <li>✓ On-time delivery</li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
              alt="Commercial Construction"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
              alt="Infrastructure"
              className="rounded-lg shadow-lg order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Infrastructure Solutions</h2>
              <p className="text-gray-600 mb-4">
                We develop critical infrastructure that supports communities and economies. Our portfolio includes roads, bridges, water systems, and power infrastructure.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Civil engineering</li>
                <li>✓ Environmental compliance</li>
                <li>✓ Safety management</li>
                <li>✓ Community engagement</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Residential Projects</h2>
              <p className="text-gray-600 mb-4">
                We create homes and communities where people want to live. From single residential units to large-scale developments, quality is non-negotiable.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Architectural design</li>
                <li>✓ Construction management</li>
                <li>✓ Quality finishes</li>
                <li>✓ Customer satisfaction</li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
              alt="Residential"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
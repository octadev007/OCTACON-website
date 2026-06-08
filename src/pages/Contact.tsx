import { useState } from 'react'
import Hero from '../components/Hero'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', project: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for your construction project"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-construction-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-construction-500" size={32} />
              </div>
              <h3 className="font-bold text-lg text-navy-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+27123456789" className="hover:text-construction-500 transition-colors">
                  +27 (0)12 345 6789
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-construction-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-construction-500" size={32} />
              </div>
              <h3 className="font-bold text-lg text-navy-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@octacon.co.za" className="hover:text-construction-500 transition-colors">
                  info@octacon.co.za
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">We reply within 24 hours</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-construction-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-construction-500" size={32} />
              </div>
              <h3 className="font-bold text-lg text-navy-900 mb-2">Office</h3>
              <p className="text-gray-600">
                123 Construction Ave<br />
                Johannesburg, SA 2000
              </p>
              <p className="text-sm text-gray-500 mt-2">South Africa</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-construction-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-construction-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-construction-500 transition-colors"
                    placeholder="+27 (0)12 345 6789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Project Type</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-construction-500 transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="commercial">Commercial</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="residential">Residential</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-construction-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Choose OCTACON?</h2>
              <div className="space-y-4">
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy-900 mb-2">✓ Expert Consultation</h3>
                  <p className="text-gray-600 text-sm">Our experienced team provides expert guidance from initial planning through project completion.</p>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy-900 mb-2">✓ Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">Clear, competitive quotes with no hidden charges. We work within your budget.</p>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy-900 mb-2">✓ Quality Assurance</h3>
                  <p className="text-gray-600 text-sm">Rigorous quality checks at every stage ensure superior results.</p>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy-900 mb-2">✓ On-Time Delivery</h3>
                  <p className="text-gray-600 text-sm">We respect deadlines and deliver projects on schedule, every time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
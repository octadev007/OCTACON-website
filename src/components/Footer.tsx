import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-construction-500 rounded-lg flex items-center justify-center font-bold">
                OC
              </div>
              <h3 className="font-bold text-xl">OCTACON</h3>
            </div>
            <p className="text-gray-300 mb-4">Professional construction solutions for modern South Africa.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-construction-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-construction-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-construction-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-construction-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-construction-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-construction-500 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-construction-500 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-construction-500 transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-construction-500 transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-construction-500 transition-colors">Residential</a></li>
              <li><a href="#" className="hover:text-construction-500 transition-colors">Renovations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-construction-500" />
                <a href="tel:+27123456789" className="hover:text-construction-500 transition-colors">+27 (0)12 345 6789</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-construction-500" />
                <a href="mailto:info@octacon.co.za" className="hover:text-construction-500 transition-colors">info@octacon.co.za</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-construction-500 flex-shrink-0 mt-1" />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 OCTACON (Pty) Ltd. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-construction-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-construction-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
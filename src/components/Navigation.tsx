import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-navy-900 text-white shadow-lg z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-construction-500 rounded-lg flex items-center justify-center font-bold text-lg group-hover:bg-construction-600 transition-colors">
              OC
            </div>
            <span className="font-bold text-xl hidden sm:inline">OCTACON</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
              About
            </Link>
            <Link to="/services" className="px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
              Services
            </Link>
            <Link to="/projects" className="px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="ml-4 btn-primary text-sm">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-navy-700 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
              About
            </Link>
            <Link to="/services" className="block px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
              Services
            </Link>
            <Link to="/projects" className="block px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="block btn-primary text-center">
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
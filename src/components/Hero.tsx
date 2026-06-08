import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle: string
  cta?: { text: string; link: string }
  backgroundImage?: string
}

export default function Hero({ title, subtitle, cta, backgroundImage }: HeroProps) {
  return (
    <div
      className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/70"></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        {cta && (
          <Link
            to={cta.link}
            className="inline-flex items-center space-x-2 btn-primary group"
          >
            <span>{cta.text}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  )
}
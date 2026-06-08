import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="card group hover:shadow-2xl">
      <div className="w-16 h-16 bg-construction-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-construction-500 group-hover:text-white transition-all duration-300">
        <div className="text-construction-500 group-hover:text-white text-3xl transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
interface ProjectCardProps {
  image: string
  title: string
  category: string
  description: string
}

export default function ProjectCard({ image, title, category, description }: ProjectCardProps) {
  return (
    <div className="card group overflow-hidden">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
          <span className="bg-construction-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
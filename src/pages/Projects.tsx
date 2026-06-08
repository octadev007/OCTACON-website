import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    title: 'Metropolitan Office Tower',
    category: 'Commercial',
    description: 'A 15-story modern office complex in the heart of Johannesburg featuring sustainable architecture.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
    title: 'Highway Development Project',
    category: 'Infrastructure',
    description: 'Construction of a 50km highway expansion connecting major cities with improved safety features.'
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    title: 'Riverside Residential Complex',
    category: 'Residential',
    description: 'A 200-unit residential development with premium facilities and green spaces.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    title: 'Heritage Building Restoration',
    category: 'Renovation',
    description: 'Complete restoration of a historic building preserving its original character.'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    title: 'Shopping Mall Development',
    category: 'Commercial',
    description: 'State-of-the-art retail complex with modern design and facilities.'
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    title: 'Water Infrastructure Network',
    category: 'Infrastructure',
    description: 'Advanced water supply and treatment facility serving multiple communities.'
  }
]

export default function Projects() {
  return (
    <div>
      <Hero
        title="Our Projects"
        subtitle="Showcasing our expertise across diverse construction sectors"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
              />
            ))}
          </div>

          <div className="bg-navy-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">More Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              With over 500 completed projects across commercial, residential, and infrastructure sectors, we've proven our capabilities time and again.
            </p>
            <button className="btn-primary">Contact Us for Portfolio Review</button>
          </div>
        </div>
      </section>
    </div>
  )
}
import Hero from '../components/Hero'

export default function About() {
  return (
    <div>
      <Hero
        title="About OCTACON"
        subtitle="Leading construction excellence in South Africa"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
              alt="About OCTACON"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, OCTACON has grown to become one of South Africa's trusted construction companies. What started as a small team with a vision has evolved into a robust organization with over 50 dedicated professionals.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to quality, safety, and customer satisfaction has earned us the trust of hundreds of clients across the country. We've successfully delivered projects ranging from residential developments to large-scale infrastructure initiatives.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and adapt to the evolving construction landscape, always putting our clients' needs first.
              </p>
            </div>
          </div>

          <div className="bg-navy-50 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">Excellence</h3>
                <p className="text-gray-600">We pursue excellence in every aspect of our work, from planning to execution.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">Safety</h3>
                <p className="text-gray-600">Safety is paramount. We maintain the highest standards on every project.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold text-xl text-navy-900 mb-2">Integrity</h3>
                <p className="text-gray-600">We build trust through transparency and honest communication.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Our Team</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Our success is built on the expertise and dedication of our team members. Each person brings specialized skills and a commitment to delivering outstanding results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-navy-500 to-construction-500 rounded-lg"></div>
                  <h3 className="font-bold text-navy-900">Team Member {i}</h3>
                  <p className="text-sm text-gray-600">Professional Role</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
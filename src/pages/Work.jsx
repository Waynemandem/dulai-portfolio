import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import { projects, categories } from '../data/projects'

function Work() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-12 text-center px-6">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">Portfolio</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest uppercase text-white">Work</h1>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 px-6 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs tracking-widest uppercase px-6 py-2 border transition-colors ${
              active === cat
                ? 'border-[#C9A84C] text-[#C9A84C]'
                : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
        {filtered.map(project => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="relative group cursor-pointer overflow-hidden aspect-video"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end p-6">
              <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">{project.category}</p>
                <h3 className="text-white text-lg font-bold tracking-wide">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${selected.videoId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              frameBorder="0"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm tracking-widest uppercase"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Work
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function About() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">The Filmmaker</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-widest uppercase text-white">About</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="aspect-[3/4] bg-white/5 border border-white/10">
            <img
              src="/dulai-photo.jpg"
              alt="Dulai"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-wide text-white">
              Crafting stories through the lens.
            </h2>
            <p className="text-white/60 leading-relaxed">
              Dulai is a cinematographer and visual storyteller with a passion for capturing moments that last forever. From intimate weddings to high-energy music videos, every frame is crafted with intention.
            </p>
            <p className="text-white/60 leading-relaxed">
              Based in Nigeria, working worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="text-[#C9A84C] text-3xl font-bold">5+</p>
                <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Years</p>
              </div>
              <div>
                <p className="text-[#C9A84C] text-3xl font-bold">200+</p>
                <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Projects</p>
              </div>
              <div>
                <p className="text-[#C9A84C] text-3xl font-bold">100%</p>
                <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Passion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
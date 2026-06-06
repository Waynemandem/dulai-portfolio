import heroVideo from '../src/assets/video_2026-06-06_17-57-11.mp4'

function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-[#C9A84C] text-sm tracking-[0.4em] uppercase mb-4">
          Cinematographer & Visual Storyteller
        </p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-widest uppercase text-white mb-6">
          Dulai
        </h1>
        <p className="text-white/60 text-lg tracking-widest uppercase">
          Weddings · Music Videos · Commercials · Documentaries
        </p>
      </div>

    </section>
  )
}

export default Hero
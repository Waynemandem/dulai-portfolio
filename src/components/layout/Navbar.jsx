import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur-sm border-b border-white/10">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-widest text-white uppercase">
        Dulai
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
        <li><Link to="/" className="text-white/70 hover:text-[#C9A84C] transition-colors">Home</Link></li>
        <li><Link to="/work" className="text-white/70 hover:text-[#C9A84C] transition-colors">Work</Link></li>
        <li><Link to="/about" className="text-white/70 hover:text-[#C9A84C] transition-colors">About</Link></li>
        <li><Link to="/contact" className="text-white/70 hover:text-[#C9A84C] transition-colors">Contact</Link></li>
      </ul>

      {/* Mobile Toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-8 text-sm tracking-widest uppercase border-t border-white/10 md:hidden">
          <li><Link to="/" onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A84C] transition-colors">Home</Link></li>
          <li><Link to="/work" onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A84C] transition-colors">Work</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A84C] transition-colors">About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A84C] transition-colors">Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
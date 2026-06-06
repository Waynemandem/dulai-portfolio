import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-2xl font-bold tracking-widest uppercase text-white">Dulai</p>

        <ul className="flex gap-8 text-xs tracking-widest uppercase text-white/50">
          <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/work" className="hover:text-white transition-colors">Work</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>

        <p className="text-white/30 text-xs tracking-widest">
          © {new Date().getFullYear()} Dulai Films. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
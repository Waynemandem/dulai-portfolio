import { useState } from 'react'
import Navbar from '../components/layout/Navbar'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleWhatsApp = () => {
    const text = `Hi Dulai, my name is ${form.name}. ${form.message} (${form.email})`
    window.open(`https://wa.me/2349090304208?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">Let's Work</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-widest uppercase text-white">Contact</h1>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="bg-transparent border border-white/20 text-white placeholder:text-white/30 px-4 py-4 text-sm tracking-wide focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            className="bg-transparent border border-white/20 text-white placeholder:text-white/30 px-4 py-4 text-sm tracking-wide focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
          <textarea
            rows={6}
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={e => setForm({...form, message: e.target.value})}
            className="bg-transparent border border-white/20 text-white placeholder:text-white/30 px-4 py-4 text-sm tracking-wide focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
          />
          <button
            onClick={handleWhatsApp}
            className="mt-4 bg-[#C9A84C] text-black text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C97A] transition-colors"
          >
            Send via WhatsApp
          </button>
        </div>

      </div>
    </div>
  )
}

export default Contact
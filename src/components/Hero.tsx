import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5802822/pexels-photo-5802822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/85 via-stone-800/75 to-amber-900/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar placeholder with initials */}
        <div className="w-28 h-28 rounded-full border-4 border-amber-400 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-2xl">
          <span className="text-white text-4xl font-bold">N</span>
        </div>

        <p className="text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
          Professional Portfolio
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight">
          Nazmul
        </h1>
        <p className="text-xl md:text-2xl text-amber-300 font-light italic mb-8">
          Experienced Land Surveyor
        </p>
        <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Over 12 years of precision surveying expertise across Singapore's most ambitious
          construction projects — from HDB residential blocks to major infrastructure works.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-stone-300 text-sm">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            Singapore
          </span>
          <a
            href="tel:+8801935127525"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            +880 1935127525
          </a>
          <a
            href="mailto:nazmul.avenue@gmail.com"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            nazmul.avenue@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#experience"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-white/40 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-8 py-3 rounded-full transition-all hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-amber-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

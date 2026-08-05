import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import cvPdf from '@/assets/Md_Nazmul_CV.pdf';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <MapPin className={`w-5 h-5 ${scrolled ? 'text-amber-600' : 'text-amber-400'}`} />
          <span className={`font-bold text-lg tracking-wide ${scrolled ? 'text-stone-800' : 'text-white'}`}>
            Nazmul
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-amber-500 ${
                  scrolled ? 'text-stone-600' : 'text-white/90'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cvPdf}
              download="Md_Nazmul_CV.pdf"
              className="text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition-colors"
            >
              Download CV
            </a>
          </li>
        </ul>

        <button
          className={`md:hidden ${scrolled ? 'text-stone-800' : 'text-white'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone-700 font-medium hover:text-amber-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={cvPdf}
            download="Md_Nazmul_CV.pdf"
            className="text-sm font-semibold bg-amber-500 text-white px-4 py-2 rounded-full text-center"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}

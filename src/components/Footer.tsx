import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-500 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span className="text-sm">Md Nazmul — Land Surveyor</span>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

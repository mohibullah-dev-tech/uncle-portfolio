import { Award, MapPin } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const certs = [
  {
    title: 'Engineering Surveying Course (GPS LAND)',
    location: 'Singapore',
    color: 'from-amber-500 to-amber-600',
  },
  {
    title: 'Basic Land Surveying Course (GPS LAND)',
    location: 'Singapore',
    color: 'from-stone-600 to-stone-700',
  },
  {
    title: 'Building Construction Supervisor Safety Course (BCSS)',
    location: 'Singapore',
    color: 'from-amber-700 to-amber-800',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Qualifications" title="Certifications & Courses" align="center" />

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-stone-100"
            >
              <div className={`bg-gradient-to-br ${cert.color} p-5 flex items-center justify-center`}>
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-stone-800 font-semibold text-sm leading-snug mb-3">{cert.title}</h3>
                <p className="text-stone-400 text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {cert.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

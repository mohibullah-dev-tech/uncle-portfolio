import { GraduationCap, MapPin } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const education = [
  {
    year: '2004',
    degree: 'Modern Language Institute',
    institution: 'University of Dhaka',
    location: 'Bangladesh',
  },
  {
    year: '2000',
    degree: 'Secondary School Certificate',
    institution: 'Jessore',
    location: 'Bangladesh',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Academic Background" title="Education" align="center" />

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white rounded-2xl p-8 border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5 group-hover:bg-amber-500 transition-colors">
                <GraduationCap className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-wide mb-1">{edu.year}</p>
              <h3 className="text-stone-900 font-bold text-lg mb-1">{edu.degree}</h3>
              <p className="text-stone-500 italic mb-2">{edu.institution}</p>
              <p className="text-stone-400 text-sm flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

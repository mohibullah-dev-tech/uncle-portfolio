import { Briefcase, MapPin } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const jobs = [
  {
    period: '2019 – 2025',
    title: 'Land Surveyor',
    company: 'HO Lee Construction Pte Ltd',
    location: 'Singapore',
    highlights: [
      'Led surveying tasks for the erection of 4 blocks (15-storey) and HDB flats of 524 units with an 8-storey car park at Tampines Street 62.',
      'Performed pile position marking, as-built checks, and ECC submissions.',
      'Provided grid lines, leveling, and daily coordinate verification for subcontractors.',
      'Prepared and submitted pre- and post-construction drawings.',
    ],
  },
  {
    period: '2015 – 2019',
    title: 'Land Surveyor',
    company: 'Avenue Engineering Pte Ltd',
    location: 'Singapore',
    highlights: [
      'Managed road realignment, junction improvement works, and infrastructure projects in Tampines area.',
      'Conducted legal surveys, boundary verifications, and property measurement.',
      'Maintained accurate survey records, prepared maps, and ensured compliance with engineering standards.',
    ],
  },
  {
    period: '2013 – 2015',
    title: 'Land Surveyor',
    company: 'Great Earth Construction Pte Ltd',
    location: 'Singapore',
    highlights: [
      'Oversaw surveying for large-scale condominium projects at Prince Charles Crescent and Alexandra Road.',
      'Delivered precise site layouts, elevation checks, and pile positioning.',
      'Coordinated with engineers and contractors to ensure smooth project execution.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/backNaz.jpeg)' }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-stone-950/88" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Career Journey" title="Work Experience" align="center" light />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-amber-500/30 -translate-x-1/2" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div
                key={job.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900 z-10 top-6" />

                {/* Period badge (center column) */}
                <div className="hidden md:flex w-full md:w-[calc(50%-2rem)] items-start justify-center pt-5">
                  <span className={`text-amber-400 font-semibold text-sm ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'} w-full`}>
                    {job.period}
                  </span>
                </div>

                {/* Card */}
                <div className="ml-14 md:ml-0 md:w-[calc(50%-2rem)] bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-amber-400 text-xs font-semibold uppercase tracking-wide md:hidden mb-1">
                        {job.period}
                      </p>
                      <h3 className="text-white font-bold text-lg leading-tight">{job.title}</h3>
                      <p className="text-stone-300 font-medium italic">{job.company}</p>
                      <p className="text-stone-500 text-sm flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-stone-400 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

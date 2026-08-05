import { User, Calendar, Flag, Heart } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const details = [
  { icon: Calendar, label: 'Date of Birth', value: '01 June 1983' },
  { icon: User, label: 'Gender', value: 'Male' },
  { icon: Heart, label: 'Marital Status', value: 'Married' },
  { icon: Flag, label: 'Citizenship', value: 'Bangladeshi' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Who I Am"
          title="Professional Summary"
          align="left"
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Dynamic and detail-oriented Land Surveyor with over{' '}
              <span className="font-semibold text-amber-600">12 years of professional experience</span>{' '}
              in Singapore, specializing in construction layout, site surveying, and project supervision.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Adept at working in high-pressure environments, ensuring precision in measurements,
              and delivering projects to the highest standards. Seeking opportunities to apply
              expertise in a forward-thinking organization.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
              <h3 className="font-semibold text-stone-800 mb-4 text-lg">Core Competencies</h3>
              <ul className="space-y-2">
                {[
                  'Land and Building Surveying',
                  'Construction Site Layout and Leveling',
                  'GPS and Total Station Operation',
                  'AutoCAD and Microsoft Office',
                  'Project Coordination and Documentation',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-stone-100 hover:border-amber-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-stone-800 font-semibold">{value}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 p-6 bg-stone-900 rounded-2xl text-white">
              <p className="text-amber-400 text-sm uppercase tracking-widest font-medium mb-1">Languages</p>
              <div className="flex gap-6 mt-3">
                <div>
                  <p className="font-semibold">English</p>
                  <p className="text-stone-400 text-sm">Fluent</p>
                </div>
                <div className="w-px bg-stone-700" />
                <div>
                  <p className="font-semibold">Bengali</p>
                  <p className="text-stone-400 text-sm">Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

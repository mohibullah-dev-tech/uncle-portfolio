import { Wrench, Monitor, Globe } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const technicalSkills = [
  { name: 'AutoCAD', level: 90 },
  { name: 'Total Station Operation', level: 95 },
  { name: 'GPS Surveying', level: 92 },
  { name: 'Microsoft Office', level: 85 },
  { name: 'Construction Layout', level: 96 },
  { name: 'Site Leveling', level: 94 },
];

const softSkills = [
  'Project Coordination',
  'Technical Documentation',
  'Team Leadership',
  'Problem Solving',
  'Precision & Accuracy',
  'Stakeholder Communication',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Expertise" title="Technical Skills" align="center" />

        <div className="grid md:grid-cols-3 gap-10">
          {/* Hard skills with bars */}
          <div className="md:col-span-2 bg-stone-50 rounded-2xl p-8 border border-stone-100">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-bold text-stone-800 text-lg">Technical Proficiency</h3>
            </div>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-stone-700">{skill.name}</span>
                    <span className="text-sm text-amber-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full .bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills + languages */}
          <div className="flex flex-col gap-6">
            <div className="bg-stone-50 rounded-2xl p-7 border border-stone-100 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-stone-800 text-lg">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-stone-900 rounded-2xl p-7 text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-bold text-lg">Languages</h3>
              </div>
              <div className="space-y-4">
                {[
                  { lang: 'English', level: 'Fluent', pct: 85 },
                  { lang: 'Bengali', level: 'Native', pct: 100 },
                ].map(({ lang, level, pct }) => (
                  <div key={lang}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-medium">{lang}</span>
                      <span className="text-amber-400 text-sm">{level}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

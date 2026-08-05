interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, align = 'center', light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center' : ''}`}>
      <p className={`text-sm font-semibold uppercase tracking-[0.2em] mb-2 ${light ? 'text-amber-300' : 'text-amber-600'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-stone-900'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 bg-amber-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}

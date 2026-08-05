import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+880 1935127525', href: 'tel:+8801935127525' },
  { icon: Mail, label: 'Email', value: 'nazmul.avenue@gmail.com', href: 'mailto:nazmul.avenue@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Singapore', href: undefined },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-stone-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Let's Connect" title="Get In Touch" align="center" light />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-stone-400 text-lg leading-relaxed mb-10">
              With over a decade of surveying experience in Singapore's construction industry,
              I'm open to new opportunities and collaborations. Let's discuss how I can contribute
              to your next project.
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-xs uppercase tracking-wide font-medium">{label}</p>
                    {href ? (
                      <a href={href} className="text-white font-semibold hover:text-amber-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get('name');
              const email = data.get('email');
              const message = data.get('message');
              window.location.href = `mailto:nazmul.avenue@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
            }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-stone-400 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-stone-400 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-stone-400 text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import SectionHeader from "@/components/SectionHeader";

const images = [
  "/gallery/n1.jpeg",
  "/gallery/n2.jpeg",
  "/gallery/n3.jpeg",
  "/gallery/n4.jpeg",
  "/gallery/n5.jpeg",
  "/gallery/n6.jpeg",
  "/gallery/n7.jpeg",  
  "/gallery/n8.jpeg",  
  "/gallery/n9.jpeg",
  "/gallery/n10.jpeg",
  "/gallery/n11.jpeg",
  "/Nazmul.jpeg",

];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          eyebrow="Photo Collection"
          title="Gallery"
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
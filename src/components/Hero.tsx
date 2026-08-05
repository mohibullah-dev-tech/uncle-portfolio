import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Background Video Slow Motion */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute 
          inset-0 
          w-full 
          h-full 
          object-cover
          scale-110
          animate-videoZoom
        "
      >
        <source src="/background_video.mp4" type="video/mp4" />
      </video>


      {/* Overlay */}
      <div className="
        absolute 
        inset-0 
        .bg-gradient-to-br 
        from-stone-900/90 
        via-stone-800/75 
        to-amber-900/70
      "/>



      {/* Content */}
      <div className="
        relative 
        z-10 
        text-center 
        px-6 
        max-w-6xl 
        mx-auto
        pt-10
      ">


        {/* Profile Image Bigger */}
        <div className="mb-10 flex justify-center">

          <img
            src="/Nazmul.jpeg"
            alt="Nazmul"
            className="
              w-48 
              h-48
              md:w-56
              md:h-56
              rounded-full
              object-cover
              border-4
              border-amber-400
              shadow-2xl
            "
          />

        </div>



        <p className="
          text-amber-400
          font-semibold
          text-base
          uppercase
          tracking-[0.3em]
          mb-5
        ">
          Professional Portfolio
        </p>



        <h1 className="
          text-6xl
          md:text-8xl
          font-bold
          text-white
          mb-5
          tracking-tight
        ">
          Nazmul
        </h1>



        <p className="
          text-2xl
          md:text-4xl
          text-amber-300
          font-light
          italic
          mb-10
        ">
          Experienced Land Surveyor
        </p>



        <p className="
          text-stone-200
          text-lg
          md:text-xl
          max-w-4xl
          mx-auto
          leading-relaxed
          mb-12
        ">
          Over 12 years of precision surveying expertise across Singapore's
          most ambitious construction projects — from HDB residential blocks
          to major infrastructure works.
        </p>




        {/* Contact */}
        <div className="
          flex
          flex-wrap
          justify-center
          gap-8
          mb-14
          text-base
          text-stone-200
        ">


          <span className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-amber-400"/>
            Singapore
          </span>


          <a 
            href="tel:+8801935127525"
            className="flex items-center gap-3 hover:text-amber-400"
          >
            <Phone className="w-6 h-6 text-amber-400"/>
            +880 1935127525
          </a>



          <a
            href="mailto:nazmul.avenue@gmail.com"
            className="flex items-center gap-3 hover:text-amber-400"
          >
            <Mail className="w-6 h-6 text-amber-400"/>
            nazmul.avenue@gmail.com
          </a>


        </div>




        {/* Buttons */}
        <div className="flex justify-center gap-6">


          <a
            href="#experience"
            className="
              bg-amber-500
              hover:bg-amber-600
              text-white
              font-bold
              text-lg
              px-10
              py-4
              rounded-full
              transition
              hover:-translate-y-1
            "
          >
            View My Work
          </a>



          <a
            href="#contact"
            className="
              border-2
              border-white/50
              text-white
              font-bold
              text-lg
              px-10
              py-4
              rounded-full
              hover:border-amber-400
              hover:text-amber-400
              transition
            "
          >
            Contact Me
          </a>


        </div>


      </div>




      {/* Scroll */}
      <a
        href="#about"
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-white/70
          animate-bounce
        "
      >
        <ChevronDown className="w-10 h-10"/>
      </a>


    </section>
  );
}
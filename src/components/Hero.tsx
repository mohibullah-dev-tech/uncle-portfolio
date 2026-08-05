import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        py-20
      "
    >

      {/* Background Video */}
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
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-stone-900/90
          via-stone-800/80
          to-amber-900/70
        "
      />



      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          px-5
          sm:px-8
          text-center
        "
      >


        {/* Profile Image */}
        <div className="flex justify-center mb-6 sm:mb-8">

          <img
            src="/Nazmul.jpeg"
            alt="Nazmul"
            className="
              w-32
              h-32

              sm:w-40
              sm:h-40

              md:w-48
              md:h-48

              lg:w-56
              lg:h-56

              rounded-full
              object-cover
              border-4
              border-amber-400
              shadow-2xl
            "
          />

        </div>




        {/* Small Title */}
        <p
          className="
            text-amber-400
            font-semibold
            text-xs
            sm:text-sm
            md:text-base
            uppercase
            tracking-[0.25em]
            mb-3
          "
        >
          Professional Portfolio
        </p>




        {/* Name */}
        <h1
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-bold
            text-white
            tracking-tight
            mb-3
          "
        >
          Nazmul
        </h1>




        {/* Profession */}
        <p
          className="
            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            text-amber-300
            font-light
            italic
            mb-6
            sm:mb-8
          "
        >
          Experienced Land Surveyor
        </p>




        {/* Description */}
        <p
          className="
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            text-stone-200
            max-w-xl
            sm:max-w-2xl
            lg:max-w-4xl
            mx-auto
            leading-relaxed
            mb-8
            sm:mb-10
          "
        >
          Over 12 years of precision surveying expertise across Singapore's
          most ambitious construction projects — from HDB residential blocks
          to major infrastructure works.
        </p>





        {/* Contact Info */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            flex-wrap
            items-center
            justify-center
            gap-4
            sm:gap-6
            md:gap-8
            mb-10
            sm:mb-12
            text-sm
            md:text-base
            text-stone-200
          "
        >


          <span className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            Singapore
          </span>



          <a
            href="tel:+8801935127525"
            className="
              flex
              items-center
              gap-2
              hover:text-amber-400
              transition
            "
          >
            <Phone className="w-5 h-5 text-amber-400" />
            +880 1935127525
          </a>



          <a
            href="mailto:nazmul.avenue@gmail.com"
            className="
              flex
              items-center
              gap-2
              hover:text-amber-400
              transition
            "
          >
            <Mail className="w-5 h-5 text-amber-400" />
            nazmul.avenue@gmail.com
          </a>


        </div>





        {/* Buttons */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
          "
        >


          <a
            href="#experience"
            className="
              w-full
              sm:w-auto
              bg-amber-500
              hover:bg-amber-600
              text-white
              font-semibold
              px-8
              sm:px-10
              py-3
              sm:py-4
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
              w-full
              sm:w-auto
              border-2
              border-white/40
              hover:border-amber-400
              text-white
              hover:text-amber-400
              font-semibold
              px-8
              sm:px-10
              py-3
              sm:py-4
              rounded-full
              transition
              hover:-translate-y-1
            "
          >
            Get In Touch
          </a>


        </div>


      </div>





      {/* Scroll Button */}
      <a
        href="#about"
        className="
          absolute
          bottom-5
          sm:bottom-8
          left-1/2
          -translate-x-1/2
          text-white/70
          hover:text-amber-400
          animate-bounce
        "
      >
        <ChevronDown
          className="
            w-8
            h-8
            sm:w-10
            sm:h-10
          "
        />
      </a>


    </section>
  );
}
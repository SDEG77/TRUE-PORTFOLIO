import { motion } from "framer-motion";
import selfPortrait from "../../assets/images/self-portrait.png";

function HeroFront() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6">
      {/* Portrait */}
      <motion.img
        src={selfPortrait}
        alt="Sigrae Derf E. Gabriel"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg mb-8"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Sigrae Derf E. Gabriel
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-8 italic"
      >
        Reliability. Familiarity. Stability.
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
        className="max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed mb-10"
      >
        In the dynamic and professional landscape of the IT industry, I embody
        the qualities of reliability, familiarity, and stability. I’m dedicated
        to cultivating trust and ensuring consistency in every interaction —
        navigating challenges with composure and fostering an environment of
        professionalism and dependability.
      </motion.p>

      {/* Web Portfolio Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 1.2,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 2,
        }}
        className="text-sm md:text-base text-indigo-400 tracking-wider uppercase font-medium"
      >
        This is my <span className="text-white font-semibold">Web Portfolio</span>
      </motion.p>
    </div>
  );
}

export default HeroFront;

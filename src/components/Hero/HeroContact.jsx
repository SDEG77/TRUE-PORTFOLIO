import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function HeroContact() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 } // sequentially show children
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.h2
        className="text-6xl md:text-5xl font-bold mb-6 -mt-72 md:-mt-12 text-green-300"
        variants={itemVariants}
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-green-100 max-w-xl mb-10 text-xl md:text-lg leading-relaxed"
        variants={itemVariants}
      >
        Feel free to reach out to me through email or connect on my social platforms.
      </motion.p>

      {/* Social Links */}
      <motion.div className="flex gap-10 mb-10" variants={itemVariants}>
        <motion.a
          href="https://www.facebook.com/SDEG77/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="text-green-400 transition-all duration-300 hover:text-green-300"
        >
          <FaFacebook className="w-20 h-20 md:w-16 md:h-16" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/sigrae-derf-gabriel-5762bb2a4/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: -3 }}
          whileTap={{ scale: 0.95 }}
          className="text-teal-400 transition-all duration-300 hover:text-teal-300"
        >
          <FaLinkedin className="w-20 h-20 md:w-16 md:h-16" />
        </motion.a>
      </motion.div>

      {/* Email Button */}
      <motion.a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sde.gabriel.77@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-4 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 transition-all duration-300 px-6 py-4 rounded-2xl shadow-lg"
        variants={itemVariants}
      >
        <SiGmail className="text-white w-8 h-8" />
        <span className="font-semibold text-white text-2xl md:text-lg">
          sde.gabriel.77@gmail.com
        </span>
      </motion.a>
    </motion.div>
  );
}

export default HeroContact;

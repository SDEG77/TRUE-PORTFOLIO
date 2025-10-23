import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function HeroContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center px-6"
    >
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-300">
        Get In Touch
      </h2>

      {/* Description */}
      <p className="text-green-100 max-w-xl mb-10 leading-relaxed">
        Feel free to reach out to me through email or connect on my social platforms.
      </p>

      {/* Email Button */}
      <motion.a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sde.gabriel.77@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-4 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 transition-all duration-300 px-6 py-4 rounded-2xl mb-10 shadow-lg"
      >
        <SiGmail className="text-red-500 w-8 h-8" />
        <span className="font-semibold text-white text-lg">
          sde.gabriel.77@gmail.com
        </span>
      </motion.a>

      {/* Social Links */}
      <div className="flex gap-10">
        {/* Facebook */}
        <motion.a
          href="https://www.facebook.com/SDEG77/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="text-green-400 transition-all duration-300 hover:text-green-300"
        >
          <FaFacebook className="w-16 h-16" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/sigrae-derf-gabriel-5762bb2a4/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: -3 }}
          whileTap={{ scale: 0.95 }}
          className="text-teal-400 transition-all duration-300 hover:text-teal-300"
        >
          <FaLinkedin className="w-16 h-16" />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default HeroContact;

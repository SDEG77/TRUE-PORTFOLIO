import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroFront from "./HeroFront";
import HeroSkills from "./HeroSkills";
import HeroContact from "./HeroContact";
import EducationalAttainment from "./HeroAttainment";
import HeroPortfolio from "./HeroPortfolio"; // new component

function HeroSection() {
  const [activeSection, setActiveSection] = useState("about"); // "about" | "skills" | "contact" | "education" | "portfolio"

  const fadeSlideVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  // Background gradient colors (tailwind HEX equivalents)
  const bgColors = {
    about: ["#4c1d95", "#3730a3", "#7c3aed"],        // purple-900, indigo-800, purple-700
    skills: ["#312e81", "#7e22ce", "#ec4899"],       // indigo-900, purple-800, pink-700
    contact: ["#064e3b", "#0f766e", "#1e3a8a"],      // green-900, teal-800, blue-700
    education: ["#78350f", "#b45309", "#f59e0b"],    // orange-900, amber-700, yellow-500
    portfolio: ["#1e293b", "#0f172a", "#0ea5e9"],    // slate-800, slate-900, sky-500
  };

  const currentGradient = bgColors[activeSection];

  return (
    <motion.section
      initial={{ background: `linear-gradient(to bottom, ${currentGradient.join(", ")})` }}
      animate={{ background: `linear-gradient(to bottom, ${currentGradient.join(", ")})` }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center text-white overflow-hidden"
    >
      <div className="relative w-full max-w-4xl h-[600px] flex justify-center items-center">
        <AnimatePresence mode="wait">
          {activeSection === "about" && (
            <motion.div
              key="about"
              variants={fadeSlideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full h-full flex justify-center items-center"
            >
              <HeroFront />
            </motion.div>
          )}

          {activeSection === "skills" && (
            <motion.div
              key="skills"
              variants={fadeSlideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full h-full flex justify-center items-center"
            >
              <HeroSkills />
            </motion.div>
          )}

          {activeSection === "contact" && (
            <motion.div
              key="contact"
              variants={fadeSlideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full h-full flex justify-center items-center"
            >
              <HeroContact />
            </motion.div>
          )}

          {activeSection === "education" && (
            <motion.div
              key="education"
              variants={fadeSlideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full h-full flex justify-center items-center"
            >
              <EducationalAttainment />
            </motion.div>
          )}

          {activeSection === "portfolio" && (
            <motion.div
              key="portfolio"
              variants={fadeSlideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full h-full flex justify-center items-center"
            >
              <HeroPortfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap gap-4 justify-center 
                  bg-white/10 backdrop-blur-md rounded-3xl p-4 
                  fixed bottom-4  -translate-x-1/2 z-50 
                  w-[90%] md:w-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <button
          onClick={() => setActiveSection("about")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeSection === "about"
              ? "bg-white text-black shadow-lg"
              : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          About Me
        </button>

        <button
          onClick={() => setActiveSection("skills")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeSection === "skills"
              ? "bg-white text-black shadow-lg"
              : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          My Skills
        </button>

        <button
          onClick={() => setActiveSection("education")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeSection === "education"
              ? "bg-white text-black shadow-lg"
              : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Education
        </button>

        <button
          onClick={() => setActiveSection("portfolio")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeSection === "portfolio"
              ? "bg-white text-black shadow-lg"
              : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Portfolio
        </button>

        <button
          onClick={() => setActiveSection("contact")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeSection === "contact"
              ? "bg-white text-black shadow-lg"
              : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Contact Me
        </button>
      </motion.div>

    </motion.section>
  );
}

export default HeroSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroFront from "./HeroFront";
import HeroSkills from "./HeroSkills";
import HeroSkillsMobile from "./Mobile/HeroSkills"; // import the mobile version
import HeroContact from "./HeroContact";
import EducationalAttainment from "./HeroAttainment";
import HeroAttainmentMobile from "./Mobile/HeroAttainment"; // mobile version
import HeroPortfolio from "./HeroPortfolio";

function HeroSection() {
  const [activeSection, setActiveSection] = useState("about"); // "about" | "skills" | "mobile-skills" | ...

  const fadeSlideVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const bgColors = {
    about: ["#4c1d95", "#3730a3", "#7c3aed"],
    skills: ["#312e81", "#7e22ce", "#ec4899"],
    "mobile-skills": ["#312e81", "#7e22ce", "#ec4899"], // same as skills
    contact: ["#064e3b", "#0f766e", "#1e3a8a"],
    education: ["#78350f", "#b45309", "#f59e0b"],
    "mobile-education": ["#78350f", "#b45309", "#f59e0b"], // same as desktop education
    portfolio: ["#1e293b", "#0f172a", "#0ea5e9"],
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
            <motion.div key="about" variants={fadeSlideVariants} initial="hidden" animate="visible" exit="exit" className="absolute w-full h-full flex justify-center items-center">
              <HeroFront />
            </motion.div>
          )}

          {activeSection === "skills" && (
            <motion.div key="skills" variants={fadeSlideVariants} initial="hidden" animate="visible" exit="exit" className="absolute w-full h-full flex justify-center items-center">
              <HeroSkills />
            </motion.div>
          )}

          {activeSection === "mobile-skills" && (
            <motion.div key="mobile-skills" variants={fadeSlideVariants} initial="hidden" animate="visible" exit="exit" className="absolute w-full h-full flex justify-center items-center">
              <HeroSkillsMobile />
            </motion.div>
          )}

          {activeSection === "contact" && (
            <motion.div key="contact" variants={fadeSlideVariants} initial="hidden" animate="visible" exit="exit" className="absolute w-full h-full flex justify-center items-center">
              <HeroContact />
            </motion.div>
          )}

          {activeSection === "education" && (
            <motion.div key="education" variants={fadeSlideVariants} initial="hidden" animate="visible" exit="exit" className="absolute w-full h-full flex justify-center items-center">
              <EducationalAttainment />
            </motion.div>
          )}

          {activeSection === "mobile-education" && (
            <motion.div key="mobile-education" variants={fadeSlideVariants} initial="hidden" animate="visible" exit="exit" className="absolute w-full h-full flex justify-center items-center">
              <HeroAttainmentMobile />
            </motion.div>
          )}

          {activeSection === "portfolio" && (
            <motion.div key="portfolio" variants={fadeSlideVariants} initial="hidden" animate="visible" exit="exit" className="absolute w-full h-full flex justify-center items-center">
              <HeroPortfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap gap-4 justify-center bg-white/10 backdrop-blur-md rounded-3xl p-4 fixed bottom-4 -translate-x-1/2 z-50 w-[90%] md:w-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <button
          onClick={() => setActiveSection("about")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeSection === "about" ? "bg-white text-black shadow-lg" : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          About Me
        </button>

        {/* Desktop-only My Skills */}
        <button
          onClick={() => setActiveSection("skills")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hidden md:block ${
            activeSection === "skills" ? "bg-white text-black shadow-lg" : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          My Skills
        </button>

        {/* Mobile-only My Skills */}
        <button
          onClick={() => setActiveSection("mobile-skills")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 block md:hidden ${
            activeSection === "mobile-skills" ? "bg-white text-black shadow-lg" : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          My Skills
        </button>

        {/* Desktop-only Education */}
        <button
          onClick={() => setActiveSection("education")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hidden md:block ${
            activeSection === "education" ? "bg-white text-black shadow-lg" : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Education
        </button>

        {/* Mobile-only Education */}
        <button
          onClick={() => setActiveSection("mobile-education")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 block md:hidden ${
            activeSection === "mobile-education" ? "bg-white text-black shadow-lg" : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Education
        </button>

        <button
          onClick={() => setActiveSection("portfolio")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeSection === "portfolio" ? "bg-white text-black shadow-lg" : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Portfolio
        </button>

        <button
          onClick={() => setActiveSection("contact")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeSection === "contact" ? "bg-white text-black shadow-lg" : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Contact Me
        </button>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;

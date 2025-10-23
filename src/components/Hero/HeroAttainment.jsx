import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroAttainment() {
  const [showSeminars, setShowSeminars] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 0.15 } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -40, rotate: -8, scale: 0.85 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 250, damping: 25 } 
    },
    exit: index => ({
      opacity: 0,
      x: (Math.random() - 0.5) * 800,   // random horizontal explosion
      y: -Math.random() * 600,           // random upward movement
      rotate: (Math.random() - 0.5) * 720, // random spin
      scale: 0.5,
      transition: { duration: 0.6, ease: "easeIn" }
    }),
  };

  const educationData = {
    degree: "Bachelor of Science in Information Technology",
    school: "Araullo University, Cabanatuan city, Nueva Ecija",
    year: "2022 - 2026 (Ongoing)",
  };

  const seminars = [
    { title: "ASSET CREATION", presenter: "Presented by Araullo University", date: "October 20, 2023" },
    { title: "DIGITAL PHOTOGRAPHY 101", presenter: "Presented by Araullo University", date: "October 20, 2023" },
    { title: "YOUR JOURNEY TO DATA ANALYTICS", presenter: "Presented by Araullo University", date: "October 20, 2023" },
  ];

  return (
    <motion.div className="flex flex-col items-center text-center px-6">
      {/* Header */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-6 text-yellow-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        Educational Attainment
      </motion.h2>

      {/* Degree Card */}
      <motion.div
        className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg max-w-xl mb-6"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        <h3 className="text-xl font-semibold mb-1">{educationData.degree}</h3>
        <p className="text-gray-200 mb-1">{educationData.school}</p>
        <p className="text-gray-300">{educationData.year}</p>
      </motion.div>

      {/* Seminars Toggle Button */}
      <motion.button
        onClick={() => setShowSeminars(prev => !prev)}
        className="mt-2 px-6 py-3 rounded-2xl font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 text-white shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        {showSeminars ? "Hide Seminars" : "Seminars Attended"}
      </motion.button>

      {/* Seminars List */}
      <AnimatePresence>
        {showSeminars && (
          <motion.div
            className="w-full max-w-4xl mt-6 overflow-visible"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, transition: { duration: 0.35, ease: "easeInOut" } }} // removed delay
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {seminars.map((seminar, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg text-center flex flex-col justify-between h-40"
                  whileHover={{ scale: 1.03 }}
                  variants={cardVariants}
                >
                  <h4 className="text-lg font-semibold">{seminar.title}</h4>
                  <div>
                    <p className="text-gray-200 mb-1">{seminar.presenter}</p>
                    <p className="text-gray-300">{seminar.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

export default HeroAttainment;

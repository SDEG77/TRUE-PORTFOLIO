import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroAttainmentMobile() {
  const [showSeminars, setShowSeminars] = useState(false);

  const educationData = {
    degree: "Bachelor of Science in Information Technology",
    school: "Araullo University, Cabanatuan City, Nueva Ecija",
    year: "2022 - 2026 (Ongoing)",
  };

  const seminars = [
    { title: "ASSET CREATION", presenter: "Araullo University", date: "Oct 20, 2023" },
    { title: "DIGITAL PHOTOGRAPHY 101", presenter: "Araullo University", date: "Oct 20, 2023" },
    { title: "YOUR JOURNEY TO DATA ANALYTICS", presenter: "Araullo University", date: "Oct 20, 2023" },
  ];

  return (
    <motion.div className="flex flex-col items-center text-center px-4">
      <motion.h2
        className="text-3xl font-bold mb-6 text-yellow-200 -mt-72"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        Educational Attainment
      </motion.h2>

      {/* Degree Card */}
      <motion.div
        className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg w-full max-w-sm mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <h3 className="text-lg font-semibold mb-1">{educationData.degree}</h3>
        <p className="text-gray-200 mb-1">{educationData.school}</p>
        <p className="text-gray-300">{educationData.year}</p>
      </motion.div>

      {/* Seminars Toggle */}
      <motion.button
        onClick={() => setShowSeminars(prev => !prev)}
        className="mt-2 px-4 py-2 rounded-2xl font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 text-white shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        {showSeminars ? "Hide Seminars" : "Show Seminars Attended"}
      </motion.button>

      {/* Seminars List */}
      <AnimatePresence>
        {showSeminars && (
          <motion.div
            className="w-full mt-4 overflow-visible"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, transition: { duration: 0.35 } }}
          >
            <div className="flex flex-col gap-3">
              {seminars.map((seminar, index) => (
                <motion.div
                  key={index}
                  className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 } }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <h4 className="text-md font-semibold">{seminar.title}</h4>
                  <p className="text-gray-200 text-sm">{seminar.presenter}</p>
                  <p className="text-gray-300 text-sm">{seminar.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default HeroAttainmentMobile;

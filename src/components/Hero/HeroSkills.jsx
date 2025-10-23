import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroSkills() {
  const [selectedSkill, setSelectedSkill] = useState("hard"); // "hard", "soft", "programming"
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  // Adjustable slider inside toggle style
  const sliderStyle = {
    widthOffset: -12, // how much smaller than full segment
    topOffset: 4,   // distance from top
    bottomOffset: 4, // distance from bottom
    borderRadius: 9999, // fully rounded
  };

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.offsetWidth;
      setSliderWidth((totalWidth - 32) / 3); // padding of 16px each side
    }
  }, []);

  // Slider positions (adjust these to fine-tune)
  const sliderPositions = {
    hard: -7, // padding from left
    soft: sliderWidth - 8,
    programming: sliderWidth * 2 - 8,
  };

  const hardSkills = [
    "Object Oriented Programming",
    "Full Stack Web Development",
    "Database Management",
    "Mobile Application Development",
    "Traditional Art",
    "Digital Art",
  ];

  const softSkills = [
    "Problem-Solving",
    "Research",
    "Collaboration",
    "Adaptability",
    "Excellent Under Pressure",
    "Creativity",
    "Time Management",
  ];

  const programmingSkills = [
    "Python",
    "JavaScript",
    "PHP",
    "Java",
    "React & React Native",
    "Node.js",
    "Laravel",
    "MySQL",
    "MongoDB",
  ];

  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.08, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full flex justify-center items-center px-8 md:px-12">
      <div className="flex flex-col items-center text-center max-w-4xl w-full">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          My Skills
        </motion.h2>

        {/* Slider Toggle */}
        <div
          ref={containerRef}
          className="relative flex bg-white/10 border border-white/20 backdrop-blur-md rounded-full p-4 mb-12 w-96 md:w-[36rem] h-20 overflow-hidden select-none"
        >
          {/* Slider Highlight */}
          <motion.div
            layout
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              if (info.offset.x < -sliderWidth * 0.5) setSelectedSkill("programming");
              else if (info.offset.x > sliderWidth * 0.5) setSelectedSkill("hard");
              else setSelectedSkill("soft");
            }}
            animate={{
              x: sliderPositions[selectedSkill] || 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bg-gradient-to-r from-indigo-500 to-purple-500 cursor-grab active:cursor-grabbing"
            style={{
              width: sliderWidth - sliderStyle.widthOffset,
              top: sliderStyle.topOffset,
              bottom: sliderStyle.bottomOffset,
              borderRadius: sliderStyle.borderRadius,
            }}
          />

          {/* Buttons */}
          <button
            onClick={() => !isDragging && setSelectedSkill("hard")}
            className={`relative z-10 flex-1 text-lg md:text-xl font-semibold transition-all duration-300 ${
              selectedSkill === "hard" ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Hard Skills
          </button>

          <button
            onClick={() => !isDragging && setSelectedSkill("soft")}
            className={`relative z-10 flex-1 text-lg md:text-xl font-semibold transition-all duration-300 ${
              selectedSkill === "soft" ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Soft Skills
          </button>

          <button
            onClick={() => !isDragging && setSelectedSkill("programming")}
            className={`relative z-10 flex-1 text-lg md:text-xl font-semibold transition-all duration-300 ${
              selectedSkill === "programming" ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Programming
          </button>
        </div>

        {/* Skill Grid */}
        <motion.div layout className="w-full min-h-[24rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {(selectedSkill === "hard"
                ? hardSkills
                : selectedSkill === "soft"
                ? softSkills
                : programmingSkills
              ).map((skill) => (
                <motion.div
                  key={skill}
                  layout
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.06,
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 100%)",
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="flex items-center justify-center text-center px-4 h-28 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm 
                             text-white text-lg font-medium transition-all duration-500 ease-out"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSkills;

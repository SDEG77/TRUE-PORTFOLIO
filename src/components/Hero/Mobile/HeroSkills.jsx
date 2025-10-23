import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSkills from "../HeroSkills"; // web version

function HeroSkillsMobile() {
  const [selectedSkill, setSelectedSkill] = useState("hard");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollRef = useRef(null);
  const scrollDirection = useRef(1); // 1 = down, -1 = up
  const scrollSpeed = 0.3; // px per frame, adjust for slower/faster

  // Watch for resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;

    const step = () => {
      if (container.scrollHeight <= container.clientHeight) return; // no overflow, no scroll

      container.scrollTop += scrollSpeed * scrollDirection.current;

      // Reverse direction if we hit top or bottom
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        scrollDirection.current = -1;
      } else if (container.scrollTop <= 0) {
        scrollDirection.current = 1;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedSkill]);

  if (!isMobile) return <HeroSkills />;

  const hardSkills = ["Object Oriented Programming", "Full Stack Web Devopment", "Database Management", "Mobile Devopment", "Traditional Art", "Digital Art"];
  const softSkills = ["Problem-Solving", "Research", "Collaboration", "Adaptability", "Creativity", "Time Management"];
  const programmingSkills = ["Laravel", "React & React Native", "JS", "PHP", "Python", "Java", "Node.js", "MySQL", "MongoDB"];
  const skillMap = { hard: hardSkills, soft: softSkills, programming: programmingSkills };

  return (
    <div className="w-full px-4 flex flex-col items-center text-center">
      <motion.h2 className="text-5xl font-bold text-indigo-300 mb-6 -mt-60">My Skills</motion.h2>

      {/* Horizontal category buttons */}
      <div className="flex gap-4 justify-center mb-6 w-full overflow-x-auto">
        {["hard", "soft", "programming"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedSkill(cat)}
            className={`flex-shrink-0 px-4 py-3 text-base rounded-2xl font-semibold border transition-colors duration-300 ${
              selectedSkill === cat
                ? "bg-white text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {cat === "hard" ? "Hard Skills" : cat === "soft" ? "Soft Skills" : "Programming"}
          </button>
        ))}
      </div>

      {/* Skill cards container with scroll and masked edges */}
      <motion.div
        ref={scrollRef}
        className="flex flex-col gap-4 w-full max-h-[450px] overflow-y-auto relative px-2"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <AnimatePresence mode="wait">
          {skillMap[selectedSkill].map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gray-800/30 backdrop-blur-[2px] border border-gray-700/30 rounded-2xl p-4 text-white font-medium text-xl"
            >
              {skill}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default HeroSkillsMobile;

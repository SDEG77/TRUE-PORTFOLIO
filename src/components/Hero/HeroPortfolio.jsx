import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HeroPortfolio() {
  const subjects = [
    { code: "ITE 298", description: "Information Management", link: "https://drive.google.com/drive/folders/13S4Brl3ZDwQCdEc-lMZryJUULwmqMXzB?usp=drive_link" },
    { code: "ITE 399", description: "Human Computer Interaction", link: "https://drive.google.com/drive/folders/1DKJD95266WmpNJk2Yy2MhZ2JW66rvX5_?usp=drive_link" },
    { code: "ITE 300", description: "Object Oriented Programming", link: "https://drive.google.com/drive/folders/1UHIdz3sQuT_FQzeevapJPo4ccMT6aWiF?usp=drive_link" },
    { code: "ITE 393", description: "Applications Development and Emerging Technologies", link: "https://drive.google.com/drive/folders/1_m7Xb-yfjtcorv4I_3hDvdZokZiZw9pm?usp=sharing" },
    { code: "ITE 400", description: "Systems Integration and Architecture", link: "https://drive.google.com/drive/folders/1pGfpT4-nOwJZAEbYJRckfDgTiQAkQ6G2?usp=sharing" },
    { code: "ITE 380", description: "Human Computer Interaction 2", link: "https://drive.google.com/drive/folders/1wjcmxMVhCWE8eKBAH87iCLC7riFfSZjs?usp=sharing" },
    { code: "ITE 308", description: "Web System and Technologies", link: "https://drive.google.com/drive/folders/1NayHlO6jBg67R9JntphfuWrc9I2O8Aph?usp=sharing" },
    { code: "ITE 387", description: "Advanced Programming", link: "https://drive.google.com/drive/folders/1LfMq6DtMFuvJF9qoynzG1SIIIhUYbrZ1?usp=sharing" },
    { code: "ITE 314", description: "Advanced Database Systems", link: "https://drive.google.com/drive/folders/1VIrrwZZbj6dAnYvZa2OBIpsL1cfmcl39?usp=sharing" },
    {
      code: "CAPSTONE",
      description: "Our capstone project",
      link: "https://rmpoims.com",
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(subjects.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 6000); // 6s per page
    return () => clearInterval(interval);
  }, [currentPage]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (page) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const paginatedSubjects = subjects.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <motion.div className="flex flex-col items-center text-center px-6 py-12 w-full">
      <motion.h2 className="text-4xl md:text-5xl font-bold mb-10 text-yellow-300">
        My Portfolio
      </motion.h2>

      <div className="relative w-full max-w-4xl flex items-center">
        {/* Left button */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute -left-16 sm:-left-20 z-20 p-4 rounded-full bg-gray-800/70 hover:bg-gray-800 transition-colors text-yellow-300 shadow"
        >
          <FaChevronLeft size={28} />
        </button>

        {/* Portfolio container */}
        <div className="flex w-full justify-center mx-16 sm:mx-20 overflow-visible">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.48, ease: "easeInOut" }}
              className="flex flex-col sm:flex-row justify-center gap-6 w-full"
              layout
            >
              {paginatedSubjects.map((subject) => (
                <motion.article
                  key={subject.code}
                  layout
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex-1 min-w-[200px] max-w-[360px] flex flex-col justify-between p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-white hover:shadow-2xl will-change-transform"
                >
                  <div className="mb-4">
                    <p className="text-lg font-semibold mb-2 text-yellow-200">{subject.code}</p>
                    <p className="text-gray-200">{subject.description}</p>
                  </div>
                  <div className="mt-1 flex items-center justify-center">
                    <a
                      href={subject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-400 hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right button */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute -right-16 sm:-right-20 z-20 p-4 rounded-full bg-gray-800/70 hover:bg-gray-800 transition-colors text-yellow-300 shadow"
        >
          <FaChevronRight size={28} />
        </button>
      </div>

      {/* Page indicators */}
      <div className="flex gap-3 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentPage ? "bg-yellow-400 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default HeroPortfolio;

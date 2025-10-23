import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroPortfolioMobile() {
  const subjects = [
    { code: "ITE 298", description: "Information Management", link: "https://drive.google.com/drive/folders/13S4Brl3ZDwQCdEc-lMZryJUULwmqMXzB?usp=drive_link" },
    { code: "ITE 399", description: "Human Computer Interaction", link: "https://drive.google.com/drive/folders/1DKJD95266WmpNJk2Yy2MhZ2JW66rvX5_?usp=drive_link" },
    { code: "ITE 300", description: "Object Oriented Programming", link: "https://drive.google.com/drive/folders/1UHIdz3sQuT_FQzeevapJPo4ccMT6aWiF?usp=drive_link" },
    { code: "ITE 393", description: "Applications Development and Emerging Technologies", link: "https://drive.google.com/drive/folders/1_m7Xb-yfjtcorv4I_3hDvdZokZiZw9pm?usp=sharing" },
    { code: "ITE 400", description: "Systems Integration and Architecture", link: "https://drive.google.com/drive/folders/1pGfpT4-nOwJZAEbYJRckfDgTiQAkQ6G2?usp=sharing" },
    { code: "ITE 380", description: "Human Computer Interaction 2", link: "https://drive.google.com/drive/folders/1wjcmxMVhCWE8eKBAH87iCLC7riFfSZjs?usp=sharing" },
    { code: "ITE 308", description: "Web System and Technologies", link: "https://drive.google.com/drive/folders/1NayHlO6jBg67R9JntphfuWrc9I2O8Aph?usp=drive_link" },
    { code: "ITE 387", description: "Advanced Programming", link: "https://drive.google.com/drive/folders/1LfMq6DtMFuvJF9qoynzG1SIIIhUYbrZ1?usp=sharing" },
    { code: "ITE 314", description: "Advanced Database Systems", link: "https://drive.google.com/drive/folders/1VIrrwZZbj6dAnYvZa2OBIpsL1cfmcl39?usp=sharing" },
    { code: "CAPSTONE", description: "Our capstone project", link: "https://rmpoims.com" }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(subjects.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 8000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToPage = (page) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const paginatedSubjects = subjects.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      handleNext();
    } else if (offset > 50 || velocity > 500) {
      handlePrev();
    }
  };

  return (
    <motion.div className="flex flex-col items-center text-center px-4 py-8 w-full">
      <motion.h2 className="text-4xl font-bold mb-8 text-yellow-300 -mt-52">
        My Portfolio
      </motion.h2>

      {/* Container with fixed min/max height */}
      <div className="w-full flex justify-center overflow-visible min-h-[460px] max-h-[460px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.48, ease: "easeInOut" }}
            className="flex flex-col gap-6 w-full items-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            {paginatedSubjects.map((subject) => (
              <motion.article
                key={subject.code}
                className="flex flex-col justify-between p-4 w-full max-w-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-white"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <p className="text-xl font-semibold mb-1 text-yellow-200">{subject.code}</p>
                <p className="text-gray-200 mb-2 text-xl">{subject.description}</p>
                <a
                  href={subject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-400 hover:underline"
                >
                  View Project
                </a>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mt-12">
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

export default HeroPortfolioMobile;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContent } from "../context/ContentContext";


const ImageGrid = () => {
  const { content } = useContent();
  const images = [
    "https://seshu-img-url.vercel.app/static/media/sc4.e9357ae3edc6298daf99.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p1.2973954aea9c81392c0f.jpg",


    "https://seshu-img-url.vercel.app/static/media/sc-p4.a9eee64253b2a7fcb7c4.jpg",

    "https://seshu-img-url.vercel.app/static/media/sc-p5.6065fb5ed7046d26dc3c.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p7.0d01ea0babb60522ee59.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc2.6c5c7443d789bc8673e9.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p8.fc01094fdfd11ab2b009.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p9.4480df4c27784bb462b8.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p10.8e0e4d02b57cbe94692a.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc1.d0c9d508cc1f693b2e1d.JPG",
    "https://seshu-img-url.vercel.app/static/media/sc-p11.bc38fb37cd474e878647.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p12.0a2d17c039d31581b90d.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p13.b013fc533e16ef9089ea.jpg",

    "https://seshu-img-url.vercel.app/static/media/sc-p14.dda281c70ba2e594389d.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p15.025f83fb4cd17b8b6665.jpg",

  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // To track slide direction

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="py-20 px-2 md:px-8 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-rose-800 mb-12">
            {content.imageGrid?.title || "Our Journey Together"}
          </h2>

          <motion.div
            className="columns-2 gap-4 px-8 sm:columns-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {images.map((imgSrc, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                className="mb-4 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={imgSrc}
                  alt={`Wedding journey moment ${index + 1}`}
                  className="size-full rounded-lg object-cover shadow-lg transform transition-transform hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Carousel Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute -top-10 right-0 text-white text-2xl z-10"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            {/* Carousel Container */}
            <div className="relative w-full h-[80vh] overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Carousel image ${currentIndex + 1}`}
                  className="absolute w-full h-full object-contain"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 100, damping: 20 },
                    opacity: { duration: 0.3 },
                  }}
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/50 p-2 rounded-full z-10"
                onClick={handlePrev}
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/50 p-2 rounded-full z-10"
                onClick={handleNext}
              >
                ›
              </button>
            </div>

            {/* Image Counter */}
            <div className="text-center text-white mt-2">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;
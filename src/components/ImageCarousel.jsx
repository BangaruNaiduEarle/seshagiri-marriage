import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const ImageCarousel = () => {

  const images = [
    "https://rupa-imgs.vercel.app/assets/rs1-nk3_h_iy.jpg",
    "https://rupa-imgs.vercel.app/assets/rs2-CYHgFi6-.jpg",
    "https://rupa-imgs.vercel.app/assets/rs3-NEf2x8Yv.jpg",
  "https://rupa-imgs.vercel.app/assets/rs5-CbC6UhOc.jpg",
    
    "https://rupa-imgs.vercel.app/assets/rs6-2esSN4pS.jpg",
    "https://rupa-imgs.vercel.app/assets/rs7-WnUNBjya.jpg",
    "https://rupa-imgs.vercel.app/assets/rs8-s9MNGxvQ.jpg",
    "https://rupa-imgs.vercel.app/assets/rs9-DXOG6WZC.jpg ",
    "https://rupa-imgs.vercel.app/assets/rs10-BhB0sWYE.jpg",
    "https://rupa-imgs.vercel.app/assets/rs11-D54GDu8S.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl">
   
      <div className="aspect-w-16 aspect-h-9 relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full object-cover"
            alt={`Carousel image ${currentIndex + 1}`}
          />
        </AnimatePresence>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-gray-800 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-gray-800 z-10"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
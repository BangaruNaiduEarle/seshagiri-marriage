import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';


const KalagoluSambralu = () => {
    const { content } = useContent();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  const images  = [
    // "https://img-urls.vercel.app/static/media/Seshagiri Rao16.2e0fcea662caa95e4ec5.jpg",
    "https://img-urls.vercel.app/static/media/Seshagiri Rao46.e8bfe2e6cc905b1a1bcf.jpg",
    // "https://img-urls.vercel.app/static/media/Seshagiri Rao27.9591d38c07cdeee19807.jpg",
    "https://img-urls.vercel.app/static/media/Seshagiri Rao24.2dd7ae9a440a523e26e1.jpg",
    // "https://img-urls.vercel.app/static/media/Seshagiri Rao23.c50d065ad93ff426d777.jpg",
    "https://img-urls.vercel.app/static/media/Seshagiri Rao19.e3cf412d8876af3e8940.jpg",
    // "https://img-urls.vercel.app/static/media/Seshagiri Rao16.2e0fcea662caa95e4ec5.jpg",
"https://img-urls.vercel.app/static/media/Seshagiri Rao12_12.2280276f13155cee7ec5.jpg"    ];

  const [currentImage, setCurrentImage] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 1500); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-purple-50">
         <motion.h2 
              className="text-3xl md:text-4xl font-script text-rose-600 text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content.photoshoot.title}
            </motion.h2>
            
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
      
       

        {/* Image Carousel */}
        <motion.div 
          variants={itemVariants}
          className="relative mb-12 overflow-hidden rounded-lg shadow-xl"
        >
          <div className="relative h-80 md:h-[40rem]">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={false}
                animate={{ 
                  opacity: currentImage === index ? 1 : 0,
                  scale: currentImage === index ? 1 : 1.1
                }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={image}
                  alt={`Kalagolu Sambralu ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading='lazy'
                />
              </motion.div>
            ))}
          </div>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-purple-800"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-purple-800"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full ${
                  currentImage === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

    
      </motion.div>
    </section>
  );
};

export default KalagoluSambralu;
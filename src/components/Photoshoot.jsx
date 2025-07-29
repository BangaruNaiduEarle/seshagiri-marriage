import React from 'react';
import { useContent } from '../context/ContentContext';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Re-using SectionWrapper logic (consider moving to a shared file if used more)
const SectionWrapper = ({ children, id }) => (
  <motion.section 
    id={id}
    className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-4">
      {children}
    </div>
  </motion.section>
);

// 5,10,26,23,27,1,

const photoshootImages = [
// "https://rupa-imgs.vercel.app/assets/rs19-Cd2W7kLy.jpg",
"https://rupa-imgs.vercel.app/assets/rs21-DNfEqUWY.jpg",
// "https://rupa-imgs.vercel.app/assets/rs23-BUpCVS1u.jpg",
"https://rupa-imgs.vercel.app/assets/rs18-BEupHsIO.jpg",
"https://rupa-imgs.vercel.app/assets/rs26-BfMNtOnG.jpg",
"https://rupa-imgs.vercel.app/assets/rs24-DukQaYF6.jpg",

];


const Photoshoot = () => {
  const { content } = useContent();

  return (
    <SectionWrapper id="photoshoot">
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
        className="max-w-3xl mx-auto shadow-xl rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Carousel 
          showThumbs={false} 
          showStatus={false} 
          infiniteLoop 
          useKeyboardArrows 
          autoPlay 
          interval={4000}
          className="rounded-lg"
        >
          {photoshootImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={image.alt} className="w-full h-auto object-contain max-h-[70vh]" loading="lazy"/>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </SectionWrapper>
  );
};

export default Photoshoot; 
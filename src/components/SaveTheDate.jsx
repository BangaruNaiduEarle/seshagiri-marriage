import React from 'react';
// import { useTranslation } from 'react-i18next'; // Remove
import { useContent } from '../context/ContentContext'; // Add
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id }) => (
  <motion.section 
    id={id}
    className="py-16 md:py-24 bg-gradient-to-b from-rose-50 to-white"
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

const SaveTheDate = () => {
  // const { t } = useTranslation(); // Remove
  const { content } = useContent(); // Add

  return (
    <SectionWrapper id="save-the-date">
      <motion.h2 
        className="text-3xl md:text-4xl font-script text-rose-600 text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
      Save the Date
        {/* {content.saveTheDate.title}  */}
      </motion.h2>
      <motion.div 
        className="aspect-video max-w-3xl mx-auto shadow-xl rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <video 
          src={"https://rupa-imgs.vercel.app/assets/rs_intro_video-PPCM7unN.mp4"}
          controls 
          playsInline
          className="w-full h-full object-cover"
          preload="metadata" // Faster initial load
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </SectionWrapper>
  );
};

export default SaveTheDate; 
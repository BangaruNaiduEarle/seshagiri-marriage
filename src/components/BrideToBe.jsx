import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContent } from '../context/ContentContext';

const BrideToBe = () => {
  const { content } = useContent();

  const [backgroundImage, setBackgroundImage] = useState('');
  const mobileBackground = 'https://seshu-img-url.vercel.app/static/media/sc-p16.50f782a8538409bb2d9f.jpg';
  const desktopBackground = 'https://seshu-img-url.vercel.app/static/media/sc-p6.9ba531aecbad36dde740.jpg';

  useEffect(() => {
    const updateBackground = () => {
      setBackgroundImage(window.innerWidth < 768 ? mobileBackground : desktopBackground);
    };
    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Use content.brideToBe.heading with fallback
  const headingText = content.brideToBe?.heading || 'Celebrating Our Bride & Groom';

  return (
    <section className="py-20 px-4 md:px-8 bg-rose-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex justify-center flex-wrap mb-4 hidden md:block">
            {headingText.split('').map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-2xl md:text-4xl font-display font-bold text-rose-800 mx-0.5 inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-center flex-wrap mb-4 md:hidden">
            <motion.span
              variants={letterVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-2xl md:text-4xl font-display font-bold text-rose-800 mx-0.5 inline-block"
            >
              {headingText.split(' ').length > 2
                ? headingText.split(' ').slice(0, -2).join(' ') +
                   
                  headingText.split(' ').slice(-2).join(' ')
                : headingText}
            </motion.span>
          </div>
          <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 text-center md:text-left">
            <motion.h3
              className="text-3xl font-script text-rose-700 mb-4"
              whileHover={{ scale: 1.05, originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {content.hero?.title || 'Seshagiri Rao & Chandini'}
            </motion.h3>
            <p
              className="text-gray-700 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: content.brideToBe?.description || 'Loading description...',
              }}
            ></p>
            <motion.div
              className="mt-8 inline-block bg-rose-100 px-6 py-3 rounded-lg"
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-rose-800 font-medium italic">
                {content.brideToBe?.quote || 'Love is creating a meaningful connection.'}
              </p>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-rose-300 rounded-lg transform rotate-3"></div>
              <motion.img
                src={backgroundImage}
                alt="Groom"
                className="relative rounded-lg shadow-lg w-full h-auto object-cover transform -rotate-2 transition-transform duration-500"
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                style={{ height: 500 }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrideToBe;
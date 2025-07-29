import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

const ThankYou = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  // Wavy text animation
  const thankYouText = "Thank You";
  
  // Floating text animation for the paragraph
  const floatingTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.3,
      },
    },
  };
  
  const floatingLetterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
  };
  
  

  return (
    <section className="py-20 px-4 md:px-8 bg-pink-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex justify-center mb-6 flex-wrap">
            {thankYouText.split('').map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-4xl md:text-6xl font-script text-pink-800 mx-1"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          <div className="w-24 h-1 bg-pink-400 mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={floatingTextVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 "
        >
          <p className="mb-6 leading-relaxed">
            
            From the bottom of our hearts, we want to express our deepest gratitude to everyone who has been a part of our journey. Your love, support, and blessings mean the world to us as we begin this new chapter of our lives together.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are especially thankful to our <b>parents</b>, whose unwavering love and guidance have shaped us 
            into the people we are today. To our <b>siblings, relatives, and friends </b>who have stood by us 
            through thick and thin – your presence in our lives is a true blessing.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2
            }}
          >
            <Heart className="text-pink-500" size={60} fill="#EC4899" />
          </motion.div>
        </motion.div>

        {/* <motion.div 
          variants={itemVariants}
          className="bg-white p-8 rounded-lg shadow-md mb-12"
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            y: -5
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-script text-pink-700 mb-6">A Note from the Couple</h3>
          <p className="text-gray-700 italic mb-6 ">
            "As we embark on this beautiful journey together, we are filled with gratitude for all the love 
            and blessings showered upon us. Your presence at our wedding will make our special day complete. 
            We look forward to creating memories that will last a lifetime."
          </p>
          <p className="text-pink-700 font-medium">With love,</p>
          <p className="text-xl text-pink-800 font-script">Seshagiri Rao & Chandini</p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div 
            className="bg-pink-100 p-5 rounded-lg"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-pink-800 mb-3">Share Your Photos</h4>
            <p className="text-gray-700 text-sm">
              We'd love to see the wedding through your eyes! Share your photos using our wedding hashtag:
            </p>
            <p className="text-pink-700 font-medium mt-2">#RahulAndPriya2025</p>
          </motion.div>
          
          <motion.div 
            className="bg-pink-100 p-5 rounded-lg"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-pink-800 mb-3">Wedding Favors</h4>
            <p className="text-gray-700 text-sm">
              Don't forget to pick up your personalized wedding favors as a token of our appreciation for 
              being part of our special day.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-pink-100 p-5 rounded-lg"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-pink-800 mb-3">Stay Connected</h4>
            <p className="text-gray-700 text-sm">
              We'll be sharing our wedding photos and videos soon. Stay connected with us to relive the 
              beautiful moments.
            </p>
          </motion.div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default ThankYou;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const MarriageMuhurtham = () => {
  const { content } = useContent();
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

  const headingText = content.marriageMuhurtham?.title || "Marriage Muhurtham";

  return (
    <section className="py-20 px-4 md:px-8 bg-red-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex justify-center flex-wrap mb-4">
            {headingText.split('').map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-2xl md:text-4xl font-display font-bold text-red-800 mx-0.5 inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          <div className="w-24 h-1 bg-red-400 mx-auto"></div>
          <p
            className="mt-6 text-gray-700 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: content.marriageMuhurtham?.description || "The Marriage Muhurtham is the main wedding ceremony."
            }}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.div
            className="flex items-center bg-red-100 px-6 py-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Calendar className="text-red-600 mr-2" size={20} />
            <span className="text-red-800 font-medium">
              {content.marriageMuhurtham?.date || "April 18, 2025"}
            </span>
          </motion.div>
          <motion.div
            className="flex items-center bg-red-100 px-6 py-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Clock className="text-red-600 mr-2" size={20} />
            <span className="text-red-800 font-medium">
              {content.marriageMuhurtham?.time || "08:36 PM"}
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h3 className="text-2xl font-script text-red-700 mb-6">
              {content.marriageMuhurtham?.subheadings.sacredCeremony || "The Sacred Ceremony"}
            </h3>
            <p
              className="text-gray-700 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: content.marriageMuhurtham?.ceremonyDetails.paragraph1 || "The ceremony unites the couple."
              }}
            />
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: content.marriageMuhurtham?.ceremonyDetails.paragraph2 || "Sacred vows are made."
              }}
            />
            <motion.div
              variants={itemVariants}
              className="mt-8 bg-red-100 p-5 rounded-lg"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold text-red-800 mb-3">Special Note</h4>
              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: content.marriageMuhurtham?.specialNote || "Please be seated on time."
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-red-200 rounded-lg transform rotate-3"></div>
              <motion.img
                src="https://seshu-img-url.vercel.app/static/media/sc-p17.94a91f42466554a375bc.jpg"
                alt={content.marriageMuhurtham?.imageAlt || "Marriage ceremony"}
                className="relative rounded-lg shadow-lg w-full h-auto object-cover transform -rotate-2 transition-transform duration-500"
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-script text-red-700 text-center mb-8">
            {content.marriageMuhurtham?.subheadings.timeline || "Ceremony Timeline"}
          </h3>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-300 transform -translate-x-px"></div>
            <div className="space-y-8">
              {(content.marriageMuhurtham?.rituals || []).map((ritual, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
                    {index % 2 === 0 && (
                      <motion.div
                        className="bg-white p-4 rounded-lg shadow-md max-w-xs w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      >
                        <h4 className="font-semibold text-red-700">{ritual.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{ritual.time}</p>
                        <p className="text-gray-700 text-sm">{ritual.description}</p>
                      </motion.div>
                    )}
                  </div>
                  <motion.div
                    className="absolute left-1/2 top-4 w-4 h-4 rounded-full bg-red-500 border-2 border-white transform -translate-x-1/2 hidden md:block"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                  />
                  <div className="md:w-1/2 flex justify-center md:justify-start md:pl-12">
                    {index % 2 !== 0 && (
                      <motion.div
                        className="bg-white p-4 rounded-lg shadow-md max-w-xs w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      >
                        <h4 className="font-semibold text-red-700">{ritual.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{ritual.time}</p>
                        <p className="text-gray-700 text-sm">{ritual.description}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MarriageMuhurtham;
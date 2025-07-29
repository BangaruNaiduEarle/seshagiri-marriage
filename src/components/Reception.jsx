import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Utensils, Camera } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Reception = () => {
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

  return (
    <section className="py-20 px-4 md:px-8 bg-blue-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {content.reception?.title || "Reception & Dinner"}
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p
            className="mt-6 text-gray-700 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: content.reception?.description || "Join us for an elegant evening of celebration."
            }}
          ></p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center bg-blue-100 px-6 py-3 rounded-lg">
            <Calendar className="text-blue-600 mr-2" size={20} />
            <span className="text-blue-800 font-medium">
              {content.reception?.date || "April 18, 2025"}
            </span>
          </div>
          <div className="flex items-center bg-blue-100 px-6 py-3 rounded-lg">
            <Clock className="text-blue-600 mr-2" size={20} />
            <span className="text-blue-800 font-medium">
              {content.reception?.time || "7:00 PM - 10:00 PM"}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {content.reception?.fineDining.title || "Fine Dining"}
            </h3>
            <p className="text-gray-700">
              {content.reception?.fineDining.description || "Exquisite multi-course dinner featuring traditional cuisine"}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {content.reception?.photoBooth.title || "Photo Booth"}
            </h3>
            <p className="text-gray-700">
              {content.reception?.photoBooth.description || "Capture memories with friends and family at our custom photo booth with props"}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Reception;
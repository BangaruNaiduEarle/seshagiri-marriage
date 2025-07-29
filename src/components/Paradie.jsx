import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';

const Paradie = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section className="py-20 px-4 md:px-8 bg-green-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Paradie Ceremony</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
          <b>Chandini</b> and <b>Seshagiri Rao’s</b> Paradie ceremony is a special ritual that brings spiritual blessings before their wedding. This tradition purifies their hearts and prepares them for a beautiful life together with the love and support of family and elders. 😊💖
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center bg-green-100 px-6 py-3 rounded-lg">
            <Calendar className="text-green-600 mr-2" size={20} />
            <span className="text-green-800 font-medium">June 13, 2025</span>
          </div>
          <div className="flex items-center bg-green-100 px-6 py-3 rounded-lg">
            <Clock className="text-green-600 mr-2" size={20} />
            <span className="text-green-800 font-medium">9:00 AM - 12:00 PM</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={itemVariants}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Cultural Significance</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Paradie ceremony is deeply rooted in our cultural heritage, representing the transition from single life to married life. 
              During this ceremony, the bride and groom are blessed with sacred mantras and rituals that invoke divine blessings for their future together.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Family members perform various rituals including offering prayers to ancestors, exchanging gifts, and applying sacred paste on the 
              foreheads of the couple. The ceremony concludes with a feast that brings together both families in celebration.
            </p>
            
            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div 
                variants={itemVariants}
                className="bg-green-100 p-4 rounded-lg text-center"
              >
                <h4 className="font-medium text-green-800 mb-2">Traditional Attire</h4>
                <p className="text-sm text-gray-700">Colorful ethnic wear</p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="bg-green-100 p-4 rounded-lg text-center"
              >
                <h4 className="font-medium text-green-800 mb-2">Rituals</h4>
                <p className="text-sm text-gray-700">Sacred chants & offerings</p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="bg-green-100 p-4 rounded-lg text-center"
              >
                <h4 className="font-medium text-green-800 mb-2">Music</h4>
                <p className="text-sm text-gray-700">Traditional folk songs</p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="bg-green-100 p-4 rounded-lg text-center"
              >
                <h4 className="font-medium text-green-800 mb-2">Feast</h4>
                <p className="text-sm text-gray-700">Traditional delicacies</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-200 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Paradie ceremony"
                className="relative rounded-lg shadow-lg w-full h-auto object-cover transform -rotate-2 transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Paradie;
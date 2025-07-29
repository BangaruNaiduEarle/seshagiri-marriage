import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Calendar, Clock, X } from 'lucide-react';

const SectionWrapper = ({ children, id }) => (
  <motion.section
    id={id}
    className="py-16 md:py-24 bg-yellow-50"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

const haldiImages = [
    // "https://seshu-img-url.vercel.app/static/media/sc3.ea2585a20b759f635b51.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p6.9ba531aecbad36dde740.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p2.09759b9bf0148148c36f.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p3.c94ec2f8254170d092ae.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p16.50f782a8538409bb2d9f.jpg",
    "https://seshu-img-url.vercel.app/static/media/sc-p17.94a91f42466554a375bc.jpg"
 
];

const Haldi = () => {
  const { content } = useContent();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <SectionWrapper id="haldi">
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">
          {content.haldi?.title || 'Haldi Ceremony'}
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        <p
          className="mt-6 text-gray-700 max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: content.haldi?.description || 'Loading description...'
          }}
        ></p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
      >
        <div className="flex items-center bg_registers bg-yellow-100 px-6 py-3 rounded-lg">
          <Calendar className="text-yellow-600 mr-2" size={20} />
          <span className="text-yellow-800 font-medium">
            {content.haldi?.date || 'April 18, 2025'}
          </span>
        </div>
        <div className="flex items-center bg-yellow-100 px-6 py-3 rounded-lg">
          <Clock className="text-yellow-600 mr-2" size={20} />
          <span className="text-yellow-800 font-medium">
            {content.haldi?.time || 'Starts at 8:30 AM'}
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {haldiImages.map((imageUrl, index) => (
          <motion.div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg cursor-pointer ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
            variants={gridItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            onClick={() => openLightbox(index)}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <img
              src={imageUrl}
              alt={`Haldi ceremony ${index + 1}`}
              className="w-full h-full object-cover aspect-square md:aspect-auto"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white/60 rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 z-10 bg-white/50 rounded-full p-1"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <Carousel
              selectedItem={selectedImageIndex}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
              dynamicHeight={false}
              className="h-full flex items-center justify-center"
              onChange={(index) => setSelectedImageIndex(index)}
              autoPlay={true}
              interval={1500}
              stopOnHover={true}
              transitionTime={600}
            >
              {haldiImages.map((imageUrl, index) => (
                <div key={index} className="max-h-[80vh] flex items-center justify-center">
                  <img
                    src={imageUrl}
                    alt={`Haldi ceremony ${index + 1}`}
                    className="object-contain max-h-[80vh]"
                  />
                </div>
              ))}
            </Carousel>
          </motion.div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Haldi;
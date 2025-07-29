import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContent } from '../context/ContentContext';

const VenueLocation = () => {
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
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{content.venueLocation?.title || "Venue Location"}</h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
          <p
            className="mt-6 text-gray-700 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{
              __html:
                content.venueLocation?.description ||
                "All wedding events will take place at a spacious and elegant venue."
            }}
          />
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mb-12 overflow-hidden rounded-lg shadow-xl"
        >
       
          <div className="relative h-96">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.856967205646!2d82.6973556!3d17.7513774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a398fb133000039%3A0xd288102b937f4f9d!2sRavi%20Talkies%20Theatre!5e0!3m2!1sen!2sin!4v1753810988120!5m2!1sen!2sin"      
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
            ></iframe>
            
          </div>
        </motion.div>
{/* 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Grand Lotus Resort & Spa</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  123 Wedding Avenue, Jubilee Hills, Hyderabad, Telangana 500033, India
                </p>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">reservations@grandlotusresort.com</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-3">Venue Highlights</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-2"></span>
                  <span>Spacious banquet halls with modern amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-2"></span>
                  <span>Beautiful outdoor gardens for ceremonies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-2"></span>
                  <span>Luxury accommodations for out-of-town guests</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-2"></span>
                  <span>Ample parking space with valet service</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Getting There</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-3">
                  <Car className="text-gray-600 mr-2" size={20} />
                  <h4 className="font-semibold text-gray-800">By Car</h4>
                </div>
                <p className="text-gray-700 ml-7">
                  The venue is easily accessible via the main highway. From the city center, 
                  take the Jubilee Hills Road and follow signs to the resort. The journey takes 
                  approximately 30 minutes from the city center.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <Plane className="text-gray-600 mr-2" size={20} />
                  <h4 className="font-semibold text-gray-800">By Air</h4>
                </div>
                <p className="text-gray-700 ml-7">
                  The nearest airport is Rajiv Gandhi International Airport, located 35 km from the venue. 
                  Taxis and airport shuttles are available for transportation to the resort.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <Bus className="text-gray-600 mr-2" size={20} />
                  <h4 className="font-semibold text-gray-800">By Public Transport</h4>
                </div>
                <p className="text-gray-700 ml-7">
                  Several bus routes stop near the venue. The nearest bus stop is "Jubilee Hills Check Post," 
                  which is a 5-minute walk from the resort.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Accommodation</h4>
              <p className="text-gray-700 mb-3">
                We have arranged special rates for our wedding guests at the resort. 
                Please mention the wedding code "RP2025" when making your reservation.
              </p>
              <p className="text-gray-700">
                For assistance with booking, please contact our wedding coordinator at 
                <a href="mailto:coordinator@weddingbells.com" className="text-blue-600 ml-1">coordinator@weddingbells.com</a>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Nearby Attractions</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            If you're planning to extend your stay, here are some popular attractions near the venue:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-1">Hussain Sagar Lake</h4>
              <p className="text-sm text-gray-600">10 km - Heart-shaped lake with Buddha statue</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-1">Golconda Fort</h4>
              <p className="text-sm text-gray-600">15 km - Historic fort with light and sound show</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-1">Charminar</h4>
              <p className="text-sm text-gray-600">18 km - Iconic monument and bazaar</p>
            </div>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default VenueLocation;
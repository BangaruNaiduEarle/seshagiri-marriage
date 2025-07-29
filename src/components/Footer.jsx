import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-rose-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <motion.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="h-6 w-6 text-rose-300 mr-2" fill="#FDA4AF" />
            <span className="text-2xl font-semibold">Seshagiri Rao & Chandini</span>
          </motion.div>
          
          <motion.p 
            className="text-rose-200 text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Thank you for being a part of our special day. We look forward to celebrating with you!
          </motion.p>
        </div>
        
       
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="bride-to-be"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-rose-200 hover:text-white transition-colors cursor-pointer"
          >
            Bride-to-be
          </Link>
          <Link
            to="haldi"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-rose-200 hover:text-white transition-colors cursor-pointer"
          >
            Haldi
          </Link>
          
          <Link
            to="reception"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-rose-200 hover:text-white transition-colors cursor-pointer"
          >
            Reception
          </Link>
          <Link
            to="marriage"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-rose-200 hover:text-white transition-colors cursor-pointer"
          >
            Marriage
          </Link>
          <Link
            to="venue"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-rose-200 hover:text-white transition-colors cursor-pointer"
          >
            Venue
          </Link>
        </motion.div>
        
        <motion.div 
          className="text-center text-rose-300 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} Seshagiri Rao & Chandini Wedding. All rights reserved.</p>
          <p className="mt-1">Made with <Heart className="inline-block h-3 w-3" fill="#FDA4AF" /> for our special day</p>
          <p className="mt-2">
            Developed by #Banagru Naidu | Contact:{' '}
            <a 
              href="tel:+919581160835" 
              className="text-rose-200 hover:text-white transition-colors underline"
            >
              +91- 9581160835
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
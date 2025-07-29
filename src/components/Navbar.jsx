import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Navbar = () => {
  const { content, language, setLanguage } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nameKey: 'brideAndGroom', to: 'bride-to-be' },
    { nameKey: 'haldi', to: 'haldi' },
    // { nameKey: 'sangeet', to: 'kalagolu' },
    { nameKey: 'reception', to: 'reception' },
    { nameKey: 'marriage', to: 'marriage' },
    { nameKey: 'venue', to: 'venue' },
    // { nameKey: 'saveTheDate', to: 'save-the-date' },
    // { nameKey: 'invitation', to: 'invitation' },
    // { nameKey: 'photoshoot', to: 'photoshoot' },
    // { nameKey: 'guestbook', to: 'guestbook' },
    // { nameKey: 'game', to: 'game' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const buttonStyle = `px-3 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${ 
    scrolled
      ? 'border border-rose-300 text-rose-700 hover:bg-rose-100' 
      : 'border border-white/50 text-white hover:bg-white/20'
  }`;

  const activeStyle = scrolled ? 'bg-rose-200 text-rose-800' : 'bg-white/30';

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="flex items-center cursor-pointer group"
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Heart 
              className={`h-6 w-6 ${scrolled ? 'text-rose-500' : 'text-white'} mr-2 transition-all duration-300 group-hover:animate-wave`} 
              fill={scrolled ? "#f43f5e" : "#fff"}
            />
          </motion.div>
          <span className={`text-xl font-script ${scrolled ? 'text-rose-700' : 'text-white'} transition-colors duration-300 `}>
            {content.hero.title}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <motion.div key={link.to} variants={linkVariants}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`${scrolled ? 'text-rose-800 hover:text-rose-500' : 'text-white hover:text-rose-300'} transition-colors cursor-pointer text-xs lg:text-sm font-medium tracking-wide`}
              >
                {content.navbar[link.nameKey]}
              </Link>
            </motion.div>
          ))}
          <div className="flex space-x-2 items-center">
             <button 
               onClick={() => setLanguage('en')}
               className={`${buttonStyle} ${language === 'en' ? activeStyle : ''}`}
             >
               EN
             </button>
             <button 
               onClick={() => setLanguage('te')}
               className={`${buttonStyle} ${language === 'te' ? activeStyle : ''}`}
             >
               తె
             </button>
          </div>
        </div>

        {/* Mobile Menu Button & Language Switcher */}
        <div className="md:hidden flex items-center space-x-3">
          <div className="flex space-x-2 items-center">
             <button 
               onClick={() => setLanguage('en')}
               className={`${buttonStyle} ${language === 'en' ? activeStyle : ''}`}
             >
               EN
             </button>
             <button 
               onClick={() => setLanguage('te')}
               className={`${buttonStyle} ${language === 'te' ? activeStyle : ''}`}
             >
               తె
             </button>
          </div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-rose-800' : 'text-white'} focus:outline-none`}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg absolute w-full"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col px-4 py-2 space-y-3">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  variants={linkVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-rose-800 hover:text-rose-500 py-2 transition-colors cursor-pointer block text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {content.navbar[link.nameKey]}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
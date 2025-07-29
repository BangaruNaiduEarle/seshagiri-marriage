import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import BrideToBe from './components/BrideToBe';
import KalagoluSambralu from './components/KalagoluSambralu';
import Reception from './components/Reception';
import MarriageMuhurtham from './components/MarriageMuhurtham';
import VenueLocation from './components/VenueLocation';
import ThankYou from './components/ThankYou';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';


import Haldi from './components/Haldi';


// Particles for double-tap hearts
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadHeartShape } from "tsparticles-shape-heart"; // Import heart shape
import ImageCarousel from './components/ImageCarousel';
import ProfilePictureCropper from './components/ProfilePictureCropper';

function App() {
  const [showHeartParticles, setShowHeartParticles] = useState(false);
  const [heartPosition, setHeartPosition] = useState({ x: 50, y: 50 });
  const lastTap = useRef(0);
  const heartTimeout = useRef(null);

  // --- Particles Engine Init --- 
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    await loadHeartShape(engine); // Load the heart shape
  }, []);

  // --- Double Tap Handler --- 
  const handleDoubleTap = useCallback((event) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300; // Milliseconds

    if (now - lastTap.current < DOUBLE_TAP_DELAY) {
      // Double tap detected
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setHeartPosition({ x, y });
      setShowHeartParticles(true);

      // Clear previous timeout if exists
      if (heartTimeout.current) {
        clearTimeout(heartTimeout.current);
      }

      // Hide particles after a short duration
      heartTimeout.current = setTimeout(() => {
        setShowHeartParticles(false);
      }, 1500); // Show hearts for 1.5 seconds
    }
    lastTap.current = now;
  }, []);

  useEffect(() => {
    // Add global double-tap listener
    document.addEventListener('touchstart', handleDoubleTap);
    document.addEventListener('mousedown', handleDoubleTap); // Also for desktop clicks

    return () => {
      // Cleanup listener
      document.removeEventListener('touchstart', handleDoubleTap);
      document.removeEventListener('mousedown', handleDoubleTap);
      if (heartTimeout.current) {
        clearTimeout(heartTimeout.current);
      }
    };
  }, [handleDoubleTap]);

  // --- Heart Particle Options --- 
  const heartParticleOptions = {
    fpsLimit: 60,
    interactivity: { events: { resize: true } },
    particles: {
      color: { value: ["#f43f5e", "#fda4af", "#fb7185"] }, // Rose/Pink colors
      move: {
        direction: "top",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: { min: 1, max: 3 }, // Slow floating speed
        straight: false,
        gravity: { enable: false } // No gravity, just float up
      },
      number: {
        density: { enable: true, area: 800 },
        value: 0 // Emit particles via emitter
      },
      opacity: {
        value: { min: 0.5, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
          startValue: "max",
          destroy: "min"
        }
      },
      rotate: {
        value: { min: -15, max: 15 },
        animation: { enable: true, speed: 5, sync: false },
        direction: "random",
      },
      shape: {
        type: "heart", // Use the loaded heart shape
      },
      size: {
        value: { min: 10, max: 20 }, // Heart size
      },
    },
    detectRetina: true,
    background: { color: "transparent" },
    emitters: {
      direction: "top",
      life: {
        count: 1, // Only one burst per double tap
        duration: 0.1,
        delay: 0
      },
      position: heartPosition, // Position where the double tap occurred
      rate: {
        quantity: 15, // Number of hearts per burst
        delay: 0
      },
      size: { width: 50, height: 50 }, // Area around the click
    }
  };

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Seshagiri Rao & Chandini Wedding</title>
        <meta name="description" content="We joyfully invite you to celebrate our special day with us. Your presence will be our greatest blessing! 😊💖" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content= "Seshagiri Rao & Chandini Wedding" />
        <meta property="og:description" content="We joyfully invite you to celebrate our special day with us. Your presence will be our greatest blessing! 😊💖" />
        <meta property="og:image" content="https://img-urls.vercel.app/static/media/Seshagiri Rao3_3.81ab21cc42ef463cc4f0.jpg"/>
        <meta property="og:image:width" content={"630"} />
        <meta property="og:image:height" content={"1200"} />
        <meta property="og:url" content={"https://Seshagiri Rao-weds-Chandini.vercel.app/"} />
        <meta property="og:site_name" content={"Seshagiri Rao & Chandini Wedding"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Seshagiri Rao & Chandini Wedding"} />
        <meta name="twitter:description" content="We joyfully invite you to celebrate our special day with us. Your presence will be our greatest blessing! 😊💖" />
        <meta name="twitter:image"  content="https://img-urls.vercel.app/static/media/Seshagiri Rao3_3.81ab21cc42ef463cc4f0.jpg" />
      </Helmet>
    <div className="font-sans bg-gradient-to-b from-rose-50 to-rose-100 min-h-screen">
      <Navbar />
      {/* <MobileNav /> */}
      <Hero />


      <Element name="bride-to-be" className="element">
        <BrideToBe />
      </Element>

      <Element name="haldi" className="element">
        <Haldi />
      </Element>

      <ImageGrid />

      {/* <Element name="kalagolu" className="element">
        <KalagoluSambralu />
      </Element> */}

      <Element name="reception" className="element">
        <Reception />
      </Element>

      <Element name="marriage" className="element">
        <MarriageMuhurtham />
      </Element>

      <Element name="venue" className="element">
        <VenueLocation />
      </Element>

      <Element name="thank-you" className="element">
        <ThankYou />
      </Element>

      <Footer />
    </div>
    </>
  );
}

export default App;
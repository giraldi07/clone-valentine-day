import React from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import { Heart } from 'lucide-react';
import catAnimation from "../assets/lottie-animations/cat.json";

import BgAnimImage2 from '../assets/images/gif/flower.gif';
import Lottie from 'lottie-react';


const ribbonVariants = {
  initial: { scale: 10, opacity: 1, rotate: -30 },
  animate: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' }, rotate: -30 },
  exit: { scale: 10, opacity: 1, transition: { duration: 1, ease: 'easeIn' }, rotate: -30 }
};

const DaysOfLove: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const date = location.state?.date;

  if (!date) {
    return <Navigate to="/" replace />;
  }

  const [day, month, year] = date.split('-').map(Number);
  const targetDate = new Date(year, month - 1, day);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-pink-100 to-red-50 p-4 sm:p-6 flex flex-col overflow-hidden"
    >

      {/* Background Animasi */}
      <motion.div
        className="fixed inset-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src={BgAnimImage2}
          alt="Background Animation"
          className="w-full h-full object-cover"
        />
        {/* Overlay Semi-Transparan */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </motion.div>



      {/* Pita hanya di pojok kiri atas dengan bentuk miring */}
      <motion.div
        variants={ribbonVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute top-0 left-0 w-40 h-12 sm:w-48 sm:h-16 bg-pink-300 -rotate-30 -translate-x-1/2 -translate-y-1/2 shadow-md"
      ></motion.div>
      {/* Pita pojok kanan bawah dengan bentuk miring */}
      <motion.div
        variants={ribbonVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute bottom-0 right-0 w-40 h-12 sm:w-48 sm:h-16 bg-pink-300 rotate-30 translate-x-1/2 translate-y-1/2 shadow-md"
      ></motion.div>

      <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col items-center justify-center py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 sm:mb-10"
          style={{ fontFamily: 'Breathing' }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-3 text-center">Days of Love</h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" fill="#ec4899" />
            <span className="text-base sm:text-lg text-pink-500" style={{ fontFamily: 'Montserrat, sans-serif', }}>
              Our journey together
            </span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" fill="#ec4899" />
          </div>
        </motion.div>


      {/* Animasi Lottie */}
      <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          className="w-full max-h-[200px] sm:max-h-[250px] md:max-h-[300px] h-[40px] z-0"
      >  
        <Lottie animationData={catAnimation} />

      </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full mt-[-5vw] mb-2 z-40">
            <Countdown targetDate={targetDate} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-base sm:text-lg text-pink-600 text-center mt-[-2%] rounded-md bg-white/70 mb-5 z-30 shadow-lg shadow-black/30 p-4"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', }}
        >
          Every second with you is a treasure ❤️
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/features')}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 text-white font-medium sm:font-semibold text-base sm:text-lg rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 w-fit z-40"
          style={{ fontFamily: 'Lobster Two, cursive' }}
        >
          Explore Features
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DaysOfLove;

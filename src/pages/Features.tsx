import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { features } from '../data/features';
import PageTransition from '../components/PageTransition';
import Decorations from '../components/Decorations';
import TimeCard from '../components/new-comp/TimeCard';
import BgAnimImage from '../assets/images/gif/blink-blink.gif';
import featuresIcons from '../assets/images/icons/biglove.svg';
import { CORRECT_DATE } from '../data/contstants';

function Features() {
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date(CORRECT_DATE.split('-').reverse().join('-'));

    const calculateTime = () => {
      const now = new Date().getTime();
      const elapsed = now - startDate.getTime();
      setTimeSince({
        days: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
        hours: Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((elapsed % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-radial from-red-50 via-pink-100 to-red-100 p-4">
        <Decorations />

        {/* Background Animasi */}
        <motion.div
          className="fixed inset-0 w-full h-full z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src={BgAnimImage}
            alt="Background Animation"
            className="w-full h-full object-cover"
          />
          {/* Overlay Semi-Transparan */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </motion.div>

        {/* Overlay Blur */}
        {showFeatures && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20"
            onClick={toggleFeatures}
          />
        )}

        <div className="relative max-w-4xl mx-auto mt-24 pt-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-red-600 mb-3 text-center"
            style={{
              fontFamily: 'Breathing',
              transform: 'rotate(-5deg)',
              letterSpacing: '0.1em',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            Welcome
          </motion.h1>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-lg text-red-400 text-center mb-8"
            style={{
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Let's explore our love journey together
          </motion.p>

          <div className="flex justify-center z-30 items-center gap-6 md:gap-8 flex-wrap relative">
            {/* Ikon Utama (Love Fill) */}
            <motion.div
              onClick={toggleFeatures}
              className="flex flex-col items-center cursor-pointer z-30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-2">
                <img
                  src={featuresIcons} // Menggunakan ikon hati dari data
                  alt="Heart Icon"
                  className="w-40 h-40"
                />
              </div>
              <span className="text-red-600 font-medium"></span>
            </motion.div>

            {/* Ikon Fitur */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                animate={{
                  scale: showFeatures ? 1 : 0,
                  opacity: showFeatures ? 1 : 0,
                  x: showFeatures ? Math.cos((index * 2 * Math.PI) / features.length) * 120 : 0,
                  y: showFeatures ? Math.sin((index * 2 * Math.PI) / features.length) * 120 : 0,
                }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                onClick={() => navigate(feature.path)}
                className="flex flex-col items-center cursor-pointer absolute z-30"
              >
                <motion.div
                  whileHover={feature.animation.hover}
                  whileTap={feature.animation.tap}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg flex items-center justify-center mb-2">
                    <img
                      src={feature.icon} // Menggunakan path gambar ikon
                      alt={feature.title}
                      className="w-20 h-20 md:w-30 md:h-30"
                    />
                  </div>
                </motion.div>
                <span className="text-red-600 font-medium text-sm" style={{ fontFamily: 'Lobster Two, cursive' }}>
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Countdown Timer */}
          <div className="mt-4" style={{ fontFamily: 'Lobster Two, cursive' }}>
            <TimeCard time={timeSince} title="Sudah selama ini ya!" style="bg-pink-300 text-red-500" />
            {/* <TimeCard time={timeUntilValentine} title="Menuju Hari Valentine" style="bg-pink-200 text-pink-800" /> */}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Features;


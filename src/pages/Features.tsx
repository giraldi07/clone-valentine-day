import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { features } from '../data/features';
import PageTransition from '../components/PageTransition';
import Decorations from '../components/Decorations';
import TimeCard from '../components/new-comp/TimeCard';

function Features() {
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };
  
  const [timeSince] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-radial from-red-50 via-pink-100 to-red-100 p-4">
        <Decorations />
        
        {/* Overlay Blur */}
        {showFeatures && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20"
            onClick={toggleFeatures} // Klik di luar untuk menutup overlay
          />
        )}
        
        <div className="relative max-w-4xl mx-auto mt-24 pt-8">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-2"
            style={{
              fontFamily: 'Lobster Two, cursive',
              transform: 'rotate(-5deg)',  // Menambahkan rotasi
              letterSpacing: '0.1em',        // Menambahkan jarak antar huruf
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' // Menambahkan bayangan teks
            }}
          >
            Welcome
          </motion.h2>
          
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-red-400 text-center mb-8"
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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-red-500 rounded-full shadow-lg flex items-center justify-center mb-2">
                <Icons.Heart className="w-10 h-10 text-white" fill="currentColor" />
              </div>
              <span className="text-red-600 font-medium"></span>
            </motion.div>

            {/* Ikon Fitur */}
            {features.map((feature, index) => {
              const Icon = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
              
              if (!Icon) {
                console.error(`Icon "${feature.icon}" not found`);
                return null;
              }
              
              // Atur posisi x dan y berdasarkan indeks
              let x = 0;
              let y = 0;
              
              if (index === 0) {
                x = -120; // Posisi kiri
              } else if (index === 1) {
                x = 120; // Posisi kanan
              } else if (index === 2) {
                y = -120; // Posisi atas
              } else if (index === 3) {
                y = 120; // Posisi bawah
              }
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{
                    scale: showFeatures ? 1 : 0,
                    opacity: showFeatures ? 1 : 0,
                    x: showFeatures ? x : 0,
                    y: showFeatures ? y : 0,
                  }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  onClick={() => navigate(feature.path)}
                  className="flex flex-col items-center cursor-pointer absolute z-30"
                >
                  <motion.div
                    whileHover={feature.animation.hover}
                    whileTap={feature.animation.tap}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
                    </div>
                  </motion.div>
                  <span className="text-red-600 font-medium text-sm" style={{ fontFamily: 'Lobster Two, cursive',}}>{feature.title}</span>
                </motion.div>
              );
            })}
          </div>
          {/* Countdown Timer */}
          <div className="mt-4" style={{ fontFamily: 'Lobster Two, cursive',}}>
            <TimeCard time={timeSince} title="Sudah selama ini ya!" style="bg-pink-200 bg-opacity-75 text-pink-800" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Features;
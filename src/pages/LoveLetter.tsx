import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showKiss, setShowKiss] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowKiss(true);
    setTimeout(() => {
      navigate('/features');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-6"
    >
      <div className="max-w-lg w-full">
        {!isOpen ? (
          // Card Tertutup (Tombol "Click to open")
          <motion.div
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="bg-white rounded-lg shadow-xl p-8 text-center cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              A Special Letter For You
            </h3>
            <p className="text-gray-600">Click to open</p>
          </motion.div>
        ) : (
          // Card Surat Terbuka
          <AnimatePresence>
            <motion.div
              key="letter"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <div className="prose prose-lg mx-auto">
                <h3 className="text-2xl font-bold text-red-600 mb-4">My Dearest,</h3>
                <p className="text-gray-700 mb-4">
                  As I write this letter, my heart is overflowing with love for you. Every day with you is a gift that I cherish more than words can express. Your love has brought so much joy, laughter, and meaning to my life.
                </p>
                <p className="text-gray-700 mb-4">
                  You're not just my partner; you're my best friend, my confidant, and my greatest adventure. Thank you for being you, and for choosing to share your life with me.
                </p>
                <p className="text-gray-700 mb-8">
                  Happy Valentine's Day, my love. Here's to many more beautiful moments together.
                </p>
                <p className="text-red-500 font-semibold">
                  Forever yours,<br />
                  Me
                </p>
              </div>
              <div className="text-center mt-8">
                <button
                  onClick={handleButtonClick}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all"
                >
                  Thanks for read this!
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        
        {/* Animasi Cinta */}
        <AnimatePresence>
          {showKiss && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Heart className="w-32 h-32 text-red-500 opacity-75" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default LoveLetter;

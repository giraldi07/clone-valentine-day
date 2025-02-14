import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-6"
    >
      <div className="max-w-lg w-full">
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
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
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
                onClick={() => navigate('/closing')}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default LoveLetter;
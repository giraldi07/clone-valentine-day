import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import ImageVcard from '../../assets/images/foto/foto2.jpg';

const ValentineCard: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-40 sm:h-52">
        <img
          src={ImageVcard}
          alt="Valentine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent" />
        <Heart
          className="absolute bottom-3 right-3 w-6 h-6 text-white"
          fill="white"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-pink-600 mb-1">
          Our Love Story
        </h3>
        <p className="text-sm text-gray-600">
          Every moment with you is a beautiful page in our story. Let's continue writing our journey together.
        </p>
      </div>
    </motion.div>
  );
};

export default ValentineCard;

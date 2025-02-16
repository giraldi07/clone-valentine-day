// components/Loading1.tsx
import { motion } from 'framer-motion';
import bigLoveImage from '../../assets/images/icons/biglove.svg';

const Loading1 = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-pink-50 to-pink-100 z-50">
      <motion.div
        className="flex flex-col items-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heart Container */}
        <motion.div
          className="relative w-24 h-24 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1.1, 1, 1],
            rotate: [0, 360], // Hanya memutar dari 0 ke 360 derajat
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {/* Main Heart */}
          <motion.img
            src={bigLoveImage} // Menggunakan gambar SVG yang diimpor
            alt="Loading Heart"
            className="h-16 w-16 absolute"
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Falling Hearts */}
        {[...Array(10)].map((_, i) => ( // Menambah jumlah hati yang berjatuhan
          <motion.div
            key={i}
            className="absolute w-6 h-6 text-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [1, 0],
              rotate: [0, 360], // Hanya memutar dari 0 ke 360 derajat
            }}
            transition={{
              duration: Math.random() * 2 + 3, // Random duration between 3-5 seconds
              delay: Math.random() * 1, // Random delay
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18.35l-1.45-1.32C5.4 14.25 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.75-6.55 9.54L10 18.35z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        ))}

        {/* Text Animation */}
        <motion.p
          className="text-pink-700 text-xl font-semibold"
          animate={{
            opacity: [0, 1, 1, 0],
            y: [10, 0, 0, -10],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          Hello my dear!...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading1;
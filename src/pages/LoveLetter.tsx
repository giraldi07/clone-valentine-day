import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import DotBackground from '../components/bg-animations/DotBackground';
import pitaImage from '../assets/images/pita.svg';
import data from '../data/love-letter/data.json'; // Import file JSON

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(true); // Untuk toggle antara letter dan foto
  const navigate = useNavigate();

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate('/features'); // Kembali ke halaman sebelumnya
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-800 flex items-center justify-center p-6"
    >
      <DotBackground />
      <div className="max-w-lg w-full z-40 relative perspective">
        {/* Container untuk card letter dan foto */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: showLetter ? 0 : 180 }} // Animasi flip
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Card Letter (Depan) */}
          {!isOpen ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-yellow-50 rounded-lg shadow-xl p-8 text-center cursor-pointer border border-gray-200"
              onClick={() => setIsOpen(true)}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Lobster Two, cursive" }}>
                {data.judul} {/* Gunakan judul dari JSON */}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Lobster Two, cursive" }}>Click to open</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-yellow-50 rounded-lg shadow-xl p-8 relative border border-gray-200"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24">
                <img 
                  src={pitaImage} 
                  alt="Pita"
                  className="w-full h-full rotate-12" 
                />
              </div>
              <div className="prose prose-lg mx-auto">
                <h3 className="text-2xl font-bold text-red-600 mb-4" style={{ fontFamily: "Lobster Two, cursive" }}>My Dearest,</h3>
                
                {/* Gunakan isi pesan dari JSON */}
                {data.isiPesan.map((paragraf, index) => (
                  <p key={index} className="text-gray-700 mb-4" style={{ fontFamily: "League Spartan" }}>
                    {paragraf}
                  </p>
                ))}
                
                <p className="text-red-500 font-semibold" style={{ fontFamily: "Lobster Two, cursive" }}>
                  {data.pengirim} 💓 {/* Gunakan pengirim dari JSON */}
                </p>
              </div>
              
              <div className="flex text-center gap-4 mt-8">
                {/* Tombol Back */}
                <button
                  onClick={handleBack}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 sm:px-8 sm:py-3 
                            rounded-md font-semibold shadow-lg transform hover:scale-105 
                            transition-all duration-300"
                  style={{ fontFamily: "Lobster Two, cursive" }}
                >
                  Back
                </button>

                <button
                  onClick={() => setShowLetter(false)} // Switch ke foto
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold shadow-lg transform hover:scale-105 transition-all"
                  style={{ fontFamily: "Lobster Two, cursive" }}

                >
                  See Photo
                </button>
              </div>
            </motion.div>
          )}

          {/* Foto (Belakang) */}
          <motion.div
            className="absolute inset-0 bg-white rounded-lg shadow-xl overflow-hidden flex items-center justify-center"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }} // Rotasi 180 derajat
          >
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={data.foto} // Gunakan foto dari JSON
                alt="Foto"
                className="w-full h-full object-cover md:object-contain" 
              />
            </div>
            
            {/* Tombol Back */}
            <div className="absolute bottom-4 w-full flex justify-center">
              <button
                onClick={() => setShowLetter(true)} // Switch kembali ke letter
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                style={{ fontFamily: "Lobster Two, cursive" }}
              >
                Back to Letter
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LoveLetter;
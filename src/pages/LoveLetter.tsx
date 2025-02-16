import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, X, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import DotBackground from '../components/bg-animations/DotBackground';
import pitaImage from '../assets/images/pita.svg';
import data from '../data/love-letter/data.json';
import bgMusic from '../assets/audio/runin-out.mp3'; // Pastikan file audio ada di direktori ini

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // State untuk volume
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inisialisasi Audio dan Autoplay
  useEffect(() => {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = volume; // Set volume awal
    audioRef.current.play().catch(() => {
      console.log("Autoplay dicegah oleh browser, user harus berinteraksi dulu.");
    });

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  // Fungsi untuk mute/unmute musik
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Fungsi untuk mengatur volume
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate('/features');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-800 flex items-center justify-center p-4 sm:p-6"
    >
      <DotBackground />
      <div className="max-w-xs sm:max-w-md md:max-w-lg w-full z-40 relative">
        {/* Container untuk card letter */}
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-yellow-50 rounded-lg shadow-xl p-6 sm:p-8 text-center cursor-pointer border border-gray-200"
            onClick={() => setIsOpen(true)}
          >
            <Heart className="w-14 h-14 sm:w-16 sm:h-16 text-red-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: "Lobster Two, cursive" }}>
              {data.judul}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: "Lobster Two, cursive" }}>Click to open</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-yellow-50 rounded-lg shadow-xl p-6 sm:p-8 relative border border-gray-200"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16">
              <img 
                src={pitaImage} 
                alt="Pita"
                className="w-full h-full rotate-12" 
              />
            </div>
            <div className="prose prose-sm sm:prose-lg mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4" style={{ fontFamily: "Lobster Two, cursive" }}>My Dearest,</h3>
              
              {data.isiPesan.map((paragraf, index) => (
                <p key={index} className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4" style={{ fontFamily: "League Spartan" }}>
                  {paragraf}
                </p>
              ))}

              <p className="text-red-500 font-semibold text-sm sm:text-base" style={{ fontFamily: "Lobster Two, cursive" }}>
                {data.pengirim} 💓
              </p>
            </div>

            {/* Foto dengan hover di desktop dan animasi looping di mobile */}
            <div 
              className="absolute bottom-4 right-4 w-20 h-20 sm:w-24 sm:h-24 cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <motion.img 
                src={data.foto} 
                alt="Foto"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }} 
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <div className="hidden sm:flex absolute inset-0 items-center justify-center bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-xs sm:text-sm">See this</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={handleBack}
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "Lobster Two, cursive" }}
              >
                Back
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating Button untuk Kontrol Musik */}
      <div className="fixed bottom-6 left-6 flex items-center gap-4 z-50">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-16 sm:w-24 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <button 
          onClick={toggleMute}
          className="bg-red-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-red-700 transition-all"
        >
          {isMuted ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Modal untuk melihat foto lebih besar */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-xs sm:max-w-md">
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 sm:p-2"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <img 
              src={data.foto} 
              alt="Foto"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default LoveLetter;
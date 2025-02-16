import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SlideToOpenButton from '../components/new-comp/SlideButton';
import TypingEffect from '../components/new-comp/TypingEffect';
import LineLoveImage from '../assets/images/line-love.svg';
import CloudRImage from '../assets/images/cloudR.svg';
import CloudLImage from '../assets/images/cloudL.svg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import BgAnimImage from '../assets/images/gif/blink-blink.gif';
import CurvedText from '../components/new-comp/CurvedText';
import HeartSpread from '../components/new-comp/HeartSpread'; // Impor komponen HeartSpread
import { useState } from 'react'; // Impor useState

function Opening() {
  const navigate = useNavigate();
  const [showHearts, setShowHearts] = useState(false); // State untuk mengontrol tampilan HeartSpread

  const handleSlideSuccess = () => {
    setShowHearts(true); // Tampilkan efek HeartSpread
    setTimeout(() => {
      navigate('/date-input2'); // Navigasi setelah efek selesai
    }, 2000); // Sesuaikan waktu dengan durasi efek HeartSpread
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen max-w-full mx-auto bg-gradient-radial from-gray-100 from-30% to-gray-300 flex flex-col items-center justify-center relative overflow-hidden"
    >
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

      <div className="flex flex-col mb-20 items-center justify-center h-screen z-50 relative">
        {/* Animasi Lottie */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="z-50 w-full max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%]"
        >
          <DotLottieReact
            src="/src/assets/lottie-animations/red-line-love.json"
            loop
            autoplay
            className="w-full max-h-[200px] sm:max-h-[250px] md:max-h-[300px] h-auto"
          />
        </motion.div>

        {/* Judul */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-2 mb-4 md:mb-8 px-4 z-50"
        >
          <CurvedText />
        </motion.h1>

        {/* Teks Typing Effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg sm:text-2xl md:text-3xl mb-6 sm:mb-8 px-4 text-center w-full max-w-[80%] sm:max-w-[70%] md:max-w-[60%] z-50"
          style={{
            height: '100px',
            fontWeight: 'bold',
            fontFamily: 'League Spartan',
          }}
        >
          <TypingEffect text="Salsabila Putri Bonita" speed={90} />
        </motion.div>

        {/* Tombol Slide */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] px-2 z-50"
        >
          <SlideToOpenButton onSlideSuccess={handleSlideSuccess} />
        </motion.div>
      </div>

      {/* Gambar Line Love L */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="z-30"
      >
        <img
          src={LineLoveImage}
          alt="Line Love"
          className="absolute top-[-6vw] left-[-2vw] w-[20vw] md:w-[20vw] sm:w-[40vw] h-auto object-cover -rotate-45"
        />
      </motion.div>

      {/* Gambar Line Love R */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="z-30"
      >
        <img
          src={LineLoveImage}
          alt="Line Love"
          className="absolute top-[-6vw] right-[-2vw] w-[20vw] md:w-[20vw] sm:w-[40vw] h-auto object-cover scale-x-[-1] rotate-45"
        />
      </motion.div>

      {/* Gambar Awan */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0 w-full flex gap-0 z-10"
      >
        <img
          src={CloudLImage}
          alt="CloudL"
          className="w-1/2 h-auto object-cover"
        />

        <img
          src={CloudRImage}
          alt="CloudR"
          className="w-1/2 h-auto object-cover scale-x-[-1]"
        />
      </motion.div>

      {/* Heart Spread Animation */}
      <HeartSpread show={showHearts} />
    </motion.div>
  );
}

export default Opening;
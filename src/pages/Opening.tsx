import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SlideToOpenButton from '../components/new-comp/SlideButton'; // Sesuaikan path sesuai struktur proyek Anda
import TypingEffect from '../components/new-comp/TypingEffect';
import ValentineIcons from '../components/new-comp/ValentineIconsAnimation';
import BackgroundIconsAnimation from '../components/new-comp/BackgroundAnimations'; // Import komponen baru
import CloudsImage from '../assets/images/clouds.svg';
import LineLeftImage from '../assets/images/line-left.svg';
import LineLoveImage from '../assets/images/line-love.svg';

function Opening() {
  const navigate = useNavigate();

  // Fungsi yang akan dipanggil ketika tombol berhasil di-slide
  const handleSlideSuccess = () => {
    navigate('/date-input2');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen max-w-full mx-auto bg-gradient-radial from-pink-100 from-20% to-gray-500 flex flex-col items-center justify-center relative"
    >
      {/* Tambahkan komponen BackgroundIconsAnimation di sini */}
      <BackgroundIconsAnimation />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="mb-2 mt-[-10%]"
      >
        <ValentineIcons />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-4xl md:text-7xl font-bold text-red-600 mb-6 text-center"
        style={{
          fontFamily: 'Lobster Two, cursive',
          transform: 'rotate(-5deg)',  // Menambahkan rotasi
          letterSpacing: '0.1em',        // Menambahkan jarak antar huruf
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' // Menambahkan bayangan teks
        }}
      >
        This is for
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-3xl md:text-4xl h-4 text-red-400 mb-24 p-6 text-center"
      >
        <TypingEffect text="{Masukan Nama Disini}" speed={90} />
      </motion.p>
      
      {/* Ganti tombol dengan komponen SlideToOpenButton */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <SlideToOpenButton onSlideSuccess={handleSlideSuccess} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.9 }} 
        className="absolute top-[-15vw] left-[-5vw] w-[50vw] h-auto" // Gunakan 20vw agar ukuran responsif
      >
        <img 
          src={LineLeftImage} 
          alt="Line Left"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }} 
        className="absolute bottom-0 right-0 w-[30vw] h-auto"
      >
        <img 
          src={LineLoveImage} 
          alt="Line Love"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Menambahkan gambar awan di bawah */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6 }} 
        className="absolute bottom-0 left-0 right-0 w-full"
      >
        <img 
          src={CloudsImage} 
          alt="Clouds" 
          className="w-full h-auto object-cover" 
        />
      </motion.div>
    </motion.div>
  );
}

export default Opening;
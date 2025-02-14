import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function PhotoCard() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-6"
    >
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800"
            alt="Valentine"
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              My Dearest Valentine
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every moment with you feels like a beautiful dream come true. Your smile lights up my world, and your love makes every day special. Thank you for being the most amazing partner I could ever wish for. Happy Valentine's Day, my love! ❤️
            </p>
            
            <div className="text-right">
              <p className="text-red-500 font-semibold">With all my love</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 flex justify-center gap-4"
        >
          {/* Tombol Back */}
          <button
            onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Back
          </button>

          {/* Tombol Continue */}
          {/* <button
            onClick={() => navigate('/todo-list')}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Continue
          </button> */}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PhotoCard;
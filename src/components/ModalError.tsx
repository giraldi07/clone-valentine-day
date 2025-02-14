import { motion } from 'framer-motion';

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalError({ isOpen, onClose }: ModalErrorProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="text-4xl text-red-600"
        >
          ❌
        </motion.div>
        <h2 className="text-2xl font-bold text-red-600 mt-4">Oops!</h2>
        <p className="text-gray-800">Ahhh masa kamu lupa sih tanggal jadian kita?</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
        >
          Tutup
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default ModalError;
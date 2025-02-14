import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

type SuksesPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SuksesPopup: React.FC<SuksesPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            <CheckCircle size={50} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">Berhasil!</h2>
            <p className="text-gray-600 mt-2">Tanggal jadian telah tersimpan.</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Oke
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuksesPopup;

import { motion } from 'framer-motion';

interface PhotoDisplayProps {
  photoSrc: string;
  onBack: () => void;
}

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({ photoSrc, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 180 }}
      animate={{ opacity: 1, rotateY: 180 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col items-center"
      style={{ backfaceVisibility: 'hidden' }}
    >
      <img src={photoSrc} alt="Foto" className="w-full h-full object-contain md:object-cover" />
      <div className="absolute bottom-4 w-full flex justify-center">
        <button
          onClick={onBack}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-lobster"
        >
          Back to Letter
        </button>
      </div>
    </motion.div>
  );
};

export default PhotoDisplay;

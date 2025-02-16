import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import pinIcon from '../assets/images/icons/pin.svg';
import LeftLineBottom from '../assets/images/crawl-line.svg';
import RightLineBottom from '../assets/images/heart-outline.svg';
import BgAnimImage from '../assets/images/gif/flower.gif';
import galleryData from '../data/gallery/data.json';

function Gallery() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState<{ src: string; title: string }[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    setPhotos(galleryData);
  }, []);

  const openPhotoDetail = (photo: { src: string; title: string }) => {
    setSelectedPhoto(photo);
  };

  const closePhotoDetail = () => {
    setSelectedPhoto(null);
  };

  const handleBack = () => {
    navigate('/features');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-gradient-to-br from-pink-100 to-red-50 sm:p-6 p-6 overflow-hidden"
    >
      <div className="max-w-7xl mt-16 mx-auto z-40">
        {/* Tombol Kembali */}
        <button
          onClick={handleBack}
          className="fixed bottom-4 left-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all z-50"
        >
          Back
        </button>

        {/* Background Animasi */}
        <motion.div
          className="fixed inset-0 w-full h-full z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img src={BgAnimImage} alt="Background Animation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </motion.div>

        {/* Garis Hiasan */}
        <div className="absolute h-screen bottom-[-8vw] left-[-18vw] z-0">
          <img src={LeftLineBottom} alt="Left Line" className="w-[80vw] h-auto object-cover -rotate-12" />
        </div>
        <div className="absolute bottom-[-10vw] right-[-24vw] z-0">
          <img src={RightLineBottom} alt="Right Line" className="w-[80vw] sm:w-[50vw] h-auto object-cover opacity-45" />
        </div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-8"
          style={{ fontFamily: 'Breathing' }}
        >
          Our Relationship Memories
        </motion.h1>

        {/* Grid Foto */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-16">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
              onClick={() => openPhotoDetail(photo)}
            >
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                <img src={pinIcon} alt="Pin Icon" className="w-8 h-8" />
              </div>

              <motion.img
                src={photo.src}
                alt={photo.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal untuk Detail Gambar */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="bg-white rounded-lg shadow-lg max-w-[90vw] md:max-w-3xl w-full overflow-hidden relative flex flex-col"
            >
              {/* Tombol Close */}
              <button
                onClick={closePhotoDetail}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full font-semibold shadow-lg transition-all text-sm"
              >
                ✕
              </button>

              {/* Gambar Modal */}
              <div className="w-full max-h-[80vh] flex justify-center items-center bg-gray-100 p-4">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-full max-w-full object-contain rounded-md"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </motion.div>
  );
}

export default Gallery;
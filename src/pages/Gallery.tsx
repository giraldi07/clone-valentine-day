import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Gallery() {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const photos = [
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1523595857-fe9ee689f76f?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=500&h=500&fit=crop",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 p-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12">
          Our Beautiful Moments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/features")}
            className="bg-gray-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Back
          </button>
        </div>
      </div>

      {/* Modal untuk menampilkan foto lebih besar */}
      <Modal
        isOpen={selectedPhoto !== null}
        onRequestClose={() => setSelectedPhoto(null)}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-70"
      >
        <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full shadow-md"
          >
            ✕
          </button>
          <img
            src={selectedPhoto || ""}
            alt="Selected Memory"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
      </Modal>
    </motion.div>
  );
}

export default Gallery;

import { motion } from "framer-motion";

interface FotoCardProps {
  imageUrl: string; // URL gambar
  caption?: string; // Teks keterangan (opsional)
  className?: string; // Class tambahan untuk styling
}

function FotoCard({ imageUrl, caption, className }: FotoCardProps) {
  return (
    <motion.div
        className={`
            relative overflow-hidden rounded-lg shadow-lg border-2 border-pink-200
            hover:scale-105 transition-transform duration-300 ${className}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
        {/* Gambar */}
        <img
            src={imageUrl}
            alt="Foto"
            className="w-full h-32 sm:h-48 object-cover"
        />

        {/* Keterangan (jika ada) */}
        {caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center text-white text-sm">
            {caption}
            </div>
        )}
    </motion.div>
  );
}

export default FotoCard;
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartSpreadProps {
  show: boolean;
}

const HeartSpread: React.FC<HeartSpreadProps> = ({ show }) => {
  // Jumlah hati yang lebih banyak
  const hearts = Array.from({ length: 500 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((i) => {
        const size = Math.random() * 32 + 16; // Ukuran hati acak antara 16px dan 48px
        const color = `rgba(236, 72, 153, ${Math.random() * 0.5 + 0.5})`; // Warna hati dengan variasi opacity
        const delay = Math.random() * 2; // Penundaan acak antara 0-2 detik
        const duration = 3 + Math.random() * 2; // Durasi acak antara 3-5 detik

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              show
                ? {
                    opacity: [0, 1, 0], // Muncul dan menghilang
                    scale: [0, 1, 0.5], // Membesar lalu mengecil
                    x: (Math.random() - 0.5) * window.innerWidth * 2, // Posisi horizontal acak
                    y: -window.innerHeight * 2, // Bergerak ke atas
                    rotate: Math.random() * 360, // Rotasi acak
                  }
                : {}
            }
            transition={{
              duration: duration,
              delay: delay,
              ease: "easeOut",
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`, // Posisi horizontal acak
              top: `${Math.random() * 100}%`, // Posisi vertikal acak
            }}
          >
            <Heart
              className="text-pink-500"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                fill: color,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default HeartSpread;
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DotBackground = () => {
  const [dots, setDots] = useState<{ x: number; y: number; size: number }[]>([]);

  // Fungsi untuk menghasilkan dot
  const generateDots = () => {
    const numDots = window.innerWidth < 768 ? 30 : 50; // Lebih banyak titik di layar besar
    const newDots = Array.from({ length: numDots }).map(() => ({
      x: Math.random() * 100, // Posisi acak (persentase)
      y: Math.random() * 100,
      size: Math.random() * 8 + 4, // Ukuran bervariasi antara 4 - 12px
    }));
    setDots(newDots);
  };

  useEffect(() => {
    generateDots(); // Generate dots saat komponen dimuat

    // Update dots saat ukuran layar berubah
    const handleResize = () => {
      generateDots();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: dot.y - 5, x: dot.x - 5 }}
          animate={{ opacity: 1, y: dot.y + 5, x: dot.x + 5 }}
          transition={{
            duration: 2 + Math.random() * 3, // Durasi acak
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bg-pink-300 rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            top: `${dot.y}vh`,
            left: `${dot.x}vw`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
};

export default DotBackground;
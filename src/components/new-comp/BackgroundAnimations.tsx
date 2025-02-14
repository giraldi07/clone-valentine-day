import { motion } from 'framer-motion';

const icons = ['🎁', '💖', '🌸', '💌', '🎀']; // Daftar ikon yang akan digunakan

const BackgroundIconsAnimation = () => {
  // Fungsi untuk menghasilkan posisi acak
  const getRandomPosition = () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
  });

  // Fungsi untuk menghasilkan delay acak
  const getRandomDelay = () => Math.random() * 2;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: getRandomDelay(),
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={getRandomPosition()}
          className="absolute text-4xl"
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundIconsAnimation;
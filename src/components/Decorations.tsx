import { motion } from 'framer-motion';

function Decorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            left: `${Math.random() * 100}%`,
            top: '100%',
            scale: 0.5 + Math.random() * 0.5,
          }}
          animate={{
            top: '-10%',
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <svg
            className="w-4 h-4 text-red-300/30 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-red-200/50 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-red-200/50 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-red-200/50 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-red-200/50 rounded-br-3xl" />
    </div>
  );
}

export default Decorations;
import { motion } from 'framer-motion';
import ValentineVideo from '../assets/video/valvid.mp4';

function Closing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source
          src={ValentineVideo}
          type="video/mp4"
        />
      </video>

      <div className="relative z-5 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Happy Valentine's Day
          </h2>
          <p className="text-xl md:text-2xl">
            I love you more each day ❤️
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Closing;
import React, { useRef } from "react";
import { motion } from "framer-motion";
import type { NumpadProps } from "../../types/index";
import soundClick from "../../assets/audio/tap.mp3";

const Numpad: React.FC<NumpadProps> = ({ onDateSubmit, onInputChange, currentInput }) => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "0", "⌫"];

  // Ref untuk audio
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = (value: string) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    if (value === "⌫") {
      onInputChange(currentInput.slice(0, -1));
    } else {
      if (currentInput.length < 10) {
        const newInput = currentInput + value;
        onInputChange(newInput);

        if (newInput.length === 10) {
          onDateSubmit(newInput);
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-3 auto-cols-fr gap-2 sm:gap-4 p-2 sm:p-4 bg-pink-50 rounded-xl shadow-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      {/* Audio untuk efek suara */}
      <audio ref={audioRef} src={soundClick} preload="auto"></audio>

      {buttons.map((btn) => (
        <motion.button
          key={btn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`
            w-full h-12 sm:h-16 aspect-square rounded-lg font-bold min-w-0
            text-[clamp(1rem,2vw,1.5rem)] sm:text-xl 
            ${btn === "-" ? "bg-pink-200 text-pink-700" : "bg-white text-pink-600"}
            shadow-md hover:shadow-lg transition-all duration-500
            active:bg-pink-100
          `}
          onClick={() => handleClick(btn)}
        >
          {btn}
        </motion.button>
      ))}
    </div>
  );
};

export default Numpad;

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import type { NumpadProps } from '../../types/index';
import soundClick from '../../assets/audio/tap.mp3'

const Numpad: React.FC<NumpadProps> = ({ onDateSubmit, onInputChange, currentInput }) => {
  const buttons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '-', '0', '⌫'
  ];

  // Buat ref untuk elemen audio
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = (value: string) => {
    // Mainkan suara tombol
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset waktu pemutaran ke awal
      audioRef.current.play();
    }

    if (value === '⌫') {
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
    <div className="grid grid-cols-3 gap-4 p-4 bg-pink-50 rounded-xl shadow-lg max-w-sm mx-auto">
      {/* Elemen audio untuk efek suara */}
      <audio ref={audioRef} src={soundClick} preload="auto"></audio>

      {buttons.map((btn) => (
        <motion.button
          key={btn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`
            h-16 rounded-lg text-2xl font-bold
            ${btn === '-' ? 'bg-pink-200 text-pink-700' : 'bg-white text-pink-600'}
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
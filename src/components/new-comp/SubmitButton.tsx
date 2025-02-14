import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface SubmitButtonProps {
  isEnabled: boolean;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isEnabled, onClick }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    if (isEnabled) {
      setIsClicked(true);
      onClick();
      setTimeout(() => setIsClicked(false), 300); // Reset animasi setelah 300ms
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`
        relative w-full max-w-[200px] h-14 rounded-full 
        flex items-center px-4 py-2 text-base sm:text-lg
        transition-colors duration-300
        ${isEnabled 
          ? 'bg-gradient-to-r from-pink-500 to-red-500 cursor-pointer' 
          : 'bg-gray-300 cursor-not-allowed'
        }
      `}
      whileTap={isEnabled ? { scale: 0.95 } : {}}
    >
      <motion.div
        className={`
          w-10 h-10 rounded-full bg-white 
          flex items-center justify-center
          shadow-md
        `}
        animate={{
          x: isClicked ? '160%' : '0%'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <Heart
          className={`w-6 h-6 ${isEnabled ? 'text-pink-500' : 'text-gray-400'}`}
          fill={isEnabled ? '#ec4899' : '#9ca3af'}
        />
      </motion.div>
      <span className={`
        absolute left-1/2 -translate-x-1/2
        text-white font-semibold
        ${isEnabled ? 'opacity-100' : 'opacity-50'}
      `}>
        Submit
      </span>
    </motion.button>
  );
};

export default SubmitButton;
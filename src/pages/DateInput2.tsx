import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Numpad from '../components/new-comp/Numpad';
import HeartBar from '../components/new-comp/HeartBar';
import SubmitButton from '../components/new-comp/SubmitButton';
import ValentineCard from '../components/new-comp/ValentineCard';
import HeartSpread from '../components/new-comp/HeartSpread';

// Import file suara
import wrongSound from '../assets/audio/wrong.mp3';
import successSound from '../assets/audio/success.mp3';

const CORRECT_DATE = '10-02-2025';

const DateInput2: React.FC = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [fillPercentage, setFillPercentage] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (value: string) => {
    setCurrentInput(value);
    setFillPercentage((value.length / 10) * 100);
  };

  const handleSubmit = () => {
    if (currentInput === CORRECT_DATE) {
      setShowHearts(true);
      setIsExiting(true);
      new Audio(successSound).play(); // Play success sound
      setTimeout(() => {
        navigate('/days-of-love', { 
          state: { date: currentInput },
        });
      }, 3000);
    } else {
      setIsShaking(true);
      setIsError(true);
      new Audio(wrongSound).play(); // Play error sound
      setFillPercentage(0);
      setTimeout(() => {
        setIsShaking(false);
        setIsError(false);
        setCurrentInput('');
      }, 1000); // Durasi efek error (1 detik)
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-pink-100 to-red-50 p-4 sm:p-6 md:p-8 flex flex-col ${isError ? 'error-effect' : ''}`}>
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            key="content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            animate={{
              scale: isShaking ? [1, 0.98, 1.02, 0.98, 1] : 1, // Efek getar yang halus
              x: isShaking ? [-5, 5, -5, 5, 0] : 0, // Efek getar horizontal
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Transisi halus
            className="max-w-4xl mx-auto w-full flex-grow flex flex-col"
          >
            {/* Judul */}
            <div className="text-center mb-6 sm:mb-8">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-3xl md:text-4xl font-bold text-red-600 mb-0 text-center"
                style={{
                  fontFamily: 'Lobster Two, cursive',
                }}
              >
                Tanggal Jadian Kita?
              </motion.h2>
              <p className="mt-6">
                masukan 10-02-2025
              </p>
            </div>

            {/* Input Tanggal */}
            <div className="w-full max-w-md mx-auto mb-6">
              <input
                type="text"
                value={currentInput}
                readOnly
                className="text-xl sm:text-2xl font-bold text-pink-600 bg-white/50 backdrop-blur-sm rounded-lg py-3 px-4 text-center w-full outline-none shadow-sm"
                placeholder="DD-MM-YYYY"
              />
            </div>

            {/* Baris Horizontal untuk Card Foto, Chart Bar, dan Numpad */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-6">
              {/* Card Foto */}
              <div className="hidden lg:block">
                <ValentineCard />
              </div>

              {/* Chart Bar */}
              <div className="w-20 sm:w-24">
                <HeartBar fillPercentage={fillPercentage} />
              </div>

              {/* Numpad */}
              <div className="w-full max-w-sm">
                <Numpad
                  onDateSubmit={() => {}}
                  onInputChange={handleInputChange}
                  currentInput={currentInput}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full max-w-md mx-auto flex justify-center">
              <SubmitButton
                isEnabled={currentInput.length === 10}
                onClick={handleSubmit}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heart Spread Animation */}
      <HeartSpread show={showHearts} />
    </div>
  );
};

export default DateInput2;
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Decorations from '../components/Decorations';
import { useState } from 'react';

function Games() {
  const navigate = useNavigate();

  // Contoh pertanyaan kuis
  const questions = [
    {
      question: "Apa warna yang identik dengan Valentine's Day?",
      options: ["Merah", "Biru", "Hijau", "Kuning"],
      answer: "Merah"
    },
    {
      question: "Apa simbol cinta yang paling umum?",
      options: ["Hati", "Bintang", "Bulan", "Matahari"],
      answer: "Hati"
    },
    {
      question: "Apa hadiah yang paling sering diberikan pada Valentine's Day?",
      options: ["Cokelat", "Bunga", "Perhiasan", "Kartu"],
      answer: "Cokelat"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-radial from-red-50 via-pink-100 to-red-100 p-6">
        <Decorations />
        
        <div className="relative z-10 max-w-4xl mx-auto pt-12">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-4"
          >
            Mini Games: Valentine's Day Quiz
          </motion.h2>

          {showResult ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-red-600 mb-4">Hasil Kuis</h3>
              <p className="text-xl text-red-500">
                Skor Anda: {score} dari {questions.length}
              </p>
              <button
                onClick={() => navigate('/')}
                className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                Kembali ke Beranda
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                {questions[currentQuestion].question}
              </h3>
              <div className="flex flex-col gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="px-6 py-2 bg-white text-red-600 rounded-full shadow-lg hover:bg-red-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Games;
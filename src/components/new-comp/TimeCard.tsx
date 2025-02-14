// TimeCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface TimeCardProps {
  time: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  title: string;
  style?: string;
}

const TimeCard: React.FC<TimeCardProps> = ({ time, title, style }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`shadow-lg rounded-xl p-4 sm:p-6 w-fit mx-auto ${style} hover:shadow-xl transition-shadow duration-300`}
    >
      <h3 className="text-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
        {Object.entries(time).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-3 sm:p-4 w-20 sm:w-24 hover:bg-gray-50 transition-colors duration-300"
          >
            <span className="text-2xl sm:text-3xl font-bold">{value}</span>
            <span className="text-xs sm:text-sm text-gray-500 mt-1 capitalize">{key}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimeCard;

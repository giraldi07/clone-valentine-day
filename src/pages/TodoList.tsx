import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Decorations from '../components/Decorations';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState<TodoItem[]>(() => {
    const saved = localStorage.getItem('valentineActivities');
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "Morning surprise breakfast in bed", completed: false },
      { id: 2, text: "Exchange Valentine's cards", completed: false },
      { id: 3, text: "Romantic lunch at our favorite restaurant", completed: false },
      { id: 4, text: "Evening walk in the park", completed: false },
      { id: 5, text: "Watch sunset together", completed: false },
      { id: 6, text: "Candlelight dinner", completed: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem('valentineActivities', JSON.stringify(activities));
  }, [activities]);

  const toggleActivity = (id: number) => {
    setActivities(activities.map(activity =>
      activity.id === id
        ? { ...activity, completed: !activity.completed }
        : activity
    ));
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-radial from-red-50 via-pink-100 to-red-100 p-6">
        <Decorations />
        
        <div className="relative z-10 max-w-lg mx-auto">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-8"
          >
            Our Valentine's Day Plans
          </motion.h2>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                onClick={() => toggleActivity(activity.id)}
                className="flex items-center space-x-3 py-3 border-b last:border-b-0 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {activity.completed ? (
                    <CheckCircle2 className="text-red-500 w-6 h-6" />
                  ) : (
                    <Circle className="text-gray-400 group-hover:text-red-400 w-6 h-6 transition-colors" />
                  )}
                </motion.div>
                <span className={`${
                  activity.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-700 group-hover:text-red-500'
                } transition-colors`}>
                  {activity.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => navigate('/love-letter')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Continue
            </button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

export default TodoList;
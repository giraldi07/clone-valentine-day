import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import Opening from './pages/Opening';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import PhotoCard from './pages/PhotoCard';
import TodoList from './pages/TodoList';
import LoveLetter from './pages/LoveLetter';
import Closing from './pages/Closing';
import Games from './pages/Games';
import DateInput2 from './pages/DateInput2';
import DaysOfLove from './pages/DaysOfLove';
import MusicAudio from './assets/audio/music.mp3';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Opening />} />
        <Route path="/days-of-love" element={<DaysOfLove />} />
        <Route path="/date-input2" element={<DateInput2 />} />
        <Route path="/features" element={<Features />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/photo-card" element={<PhotoCard />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/love-letter" element={<LoveLetter />} />
        <Route path="/closing" element={<Closing />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isOpen, setIsOpen] = useState(false);
  const sound = useRef<Howl | null>(null);

  useEffect(() => {
    sound.current = new Howl({
      src: [MusicAudio],
      loop: true,
      volume: volume,
      autoplay: true,
    });

    setIsPlaying(true);

    return () => {
      sound.current?.stop();
    };
  }, []);

  useEffect(() => {
    if (sound.current) {
      sound.current.volume(volume);
    }
  }, [volume]);

  const togglePlay = () => {
    if (!sound.current) return;

    if (isPlaying) {
      sound.current.pause();
    } else {
      sound.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Router>
      <div className="relative">
        <AnimatedRoutes />

        {/* Floating Music Button */}
        <div className="fixed bottom-4 right-4 z-99">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="p-3 bg-white shadow-lg rounded-full border border-gray-300 hover:bg-gray-200 transition-all"
          >
            <Music size={24} />
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute bottom-14 right-0 bg-white shadow-lg rounded-lg p-4 border border-gray-300 flex flex-col items-center gap-2"
              >
                <button
                  onClick={togglePlay}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-24 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />

                {volume > 0 ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;

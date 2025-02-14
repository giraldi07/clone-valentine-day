import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Opening from './pages/Opening';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import PhotoCard from './pages/PhotoCard';
import TodoList from './pages/TodoList';
import LoveLetter from './pages/LoveLetter';
import Closing from './pages/Closing';
import Music from './pages/Music';
import { AnimatePresence } from 'framer-motion';
import Games from './pages/Games';
import DateInput2 from './pages/DateInput2';
import DaysOfLove from './pages/DaysOfLove';

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
        <Route path="/music" element={<Music />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/love-letter" element={<LoveLetter />} />
        <Route path="/closing" element={<Closing />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
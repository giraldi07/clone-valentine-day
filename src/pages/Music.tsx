import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Decorations from '../components/Decorations';

function Music() {
  const navigate = useNavigate();
  const [embedCode, setEmbedCode] = useState(localStorage.getItem('musicEmbed') || '');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEmbedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('musicEmbed', embedCode);
    setIsPlaying(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-radial from-red-50 via-pink-100 to-red-100 p-6">
        <Decorations />
        
        <div className="relative z-10 max-w-2xl mx-auto pt-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-8"
          >
            <Music2 className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-red-600">Our Love Song</h2>
            <p className="text-red-400 mt-2">Add the perfect soundtrack to our love story</p>
          </motion.div>

          {!isPlaying ? (
            <motion.form
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleEmbedSubmit}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Paste your music embed code (Spotify, SoundCloud, etc.)
                </label>
                <textarea
                  value={embedCode}
                  onChange={(e) => setEmbedCode(e.target.value)}
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-500"
                  placeholder="<iframe src='...'></iframe>"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all"
                >
                  Play Music
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              <div 
                className="w-full"
                dangerouslySetInnerHTML={{ __html: embedCode }}
              />
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="text-red-500 hover:text-red-600 px-4 py-2"
                >
                  Change Music
                </button>
                <button
                  onClick={() => navigate('/todo-list')}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Music;
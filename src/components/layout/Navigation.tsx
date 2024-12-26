import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-white text-4xl font-extrabold cursor-pointer">
            HN
          </motion.span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-lg font-medium px-4 py-2 rounded-full
                     border border-white/20 hover:bg-white/10 
                     transition-colors duration-300">
            Menu
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navigation;
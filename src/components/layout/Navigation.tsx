import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <span className="text-white text-6xl font-extrabold">HN</span>
          <button className="text-white text-3xl">Menu</button>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navigation;
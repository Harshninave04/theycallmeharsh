import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Projects', id: 'projects' },
    { title: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Prevent default navigation
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.span
              whileHover={{ scale: 1.05 }}
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-white text-4xl font-extrabold cursor-pointer">
              HN
            </motion.span>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.span
                  key={item.title}
                  onClick={(e) => scrollToSection(e, item.id)}
                  whileHover={{ scale: 1.1 }}
                  className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {item.title}
                </motion.span>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white text-lg font-medium px-4 py-2 rounded-full
                       border border-white/20 hover:bg-white/10 
                       transition-colors duration-300">
              Menu
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {menuItems.map((item) => (
                  <motion.span
                    key={item.title}
                    onClick={(e) => scrollToSection(e, item.id)}
                    whileHover={{ scale: 1.1 }}
                    className="text-white/80 text-2xl hover:text-white transition-colors duration-300 cursor-pointer">
                    {item.title}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

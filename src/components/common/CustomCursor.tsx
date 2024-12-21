import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;
    if (!cursor || !cursorText) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      cursorText.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <motion.div 
        ref={cursorTextRef}
        className="fixed pointer-events-none mix-blend-difference z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-[100px] h-[100px] flex items-center justify-center">
          <div className="text-white text-sm font-light tracking-wider cursor-text"></div>
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
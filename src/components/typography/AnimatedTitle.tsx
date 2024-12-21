import React from 'react';
import { motion } from 'framer-motion';
import { splitText } from '../../utils/textSplitter';

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedTitle = ({ text, className = "" }: AnimatedTitleProps) => {
  const characters = splitText(text);

  return (
    <h1 className={`text-[12vw] font-bold leading-none tracking-tighter ${className}`}>
      {characters.map(({ char, index }) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 1,
            delay: index * 0.02,
            ease: [0.215, 0.610, 0.355, 1.000],
          }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;
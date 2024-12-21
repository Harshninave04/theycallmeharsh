import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedText = ({ children, className = '' }: AnimatedTextProps) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
};

export default AnimatedText;
import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Advanced' },
  { name: 'AWS', level: 'Intermediate' }
];

const TechStack = () => {
  return (
    <motion.div 
      className="grid grid-cols-2 gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group p-4 border border-black/10 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
        >
          <div className="font-bold text-md md:text-4xl md:mb-4">{tech.name}</div>
          <div className="text-sm md:text-2xl opacity-60">{tech.level}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
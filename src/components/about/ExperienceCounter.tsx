import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const experiences = [
  { number: 3, label: 'Years of Experience' },
  { number: 20, label: 'Projects Completed' },
  { number: 15, label: 'Happy Clients' }
];

const ExperienceCounter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="text-4xl font-bold">
            <CountUp end={exp.number} duration={2} />+
          </div>
          <div className="text-sm text-neutral-600">{exp.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceCounter;
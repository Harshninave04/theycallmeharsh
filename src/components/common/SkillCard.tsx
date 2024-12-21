import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 border border-black/10 rounded-lg hover:bg-black hover:text-white transition-colors duration-500"
    >
      <h3 className="text-3xl font-bold mb-4">{skill.name}</h3>
      <p className="text-lg opacity-60 mb-6">{skill.description}</p>
      <div className="flex flex-wrap gap-3">
        {skill.technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 text-sm border border-current rounded-full opacity-60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../common/SkillCard';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 text-black">
        <motion.h2 
          className="text-7xl font-bold mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
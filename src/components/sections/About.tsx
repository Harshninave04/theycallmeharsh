import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../typography/AnimatedText';
import ExperienceCounter from '../about/ExperienceCounter';
import TechStack from '../about/TechStack';

const About = () => {
  return (
    <section className="min-h-screen bg-white text-black flex items-center relative py-20">
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] aspect-square rounded-full bg-black mix-blend-difference"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <AnimatedText className="text-[5vw] leading-tight">
              Crafting digital experiences through{' '}
              <span className="font-bold">code</span> and{' '}
              <span className="font-bold">creativity</span>
            </AnimatedText>
            
            <motion.p 
              className="text-xl text-neutral-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              As a full-stack developer, I blend technical expertise with creative 
              problem-solving to build seamless digital solutions that make an impact.
            </motion.p>

            <ExperienceCounter />
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;
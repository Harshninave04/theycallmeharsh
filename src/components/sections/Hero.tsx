import React from 'react';
import AnimatedTitle from '../typography/AnimatedTitle';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] opacity-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square border-[0.5px] border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.01 }}
          />
        ))}
      </div>
      
      <div className="px-4 relative container mx-auto">
        <div className="space-y-2">
          <AnimatedTitle 
            text="HARSH" 
            className="text-white hover:bg-white hover:text-black -tracking-tight" 
          />
          <AnimatedTitle 
            text="NINAVE" 
            className="text-neutral-800 hover:bg-gray-50 hover:text-gray-800" 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p className="text-2xl md:text-3xl text-neutral-400 max-w-2xl">
              Full Stack Developer crafting digital experiences through code and creativity
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 text-xl text-neutral-500">
              <div className="w-12 h-[1px] bg-neutral-500" />
              <span>SCROLL TO EXPLORE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
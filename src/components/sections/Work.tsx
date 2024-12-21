import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack Development',
    year: '2024',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=215',
  },
  {
    title: 'AI Dashboard',
    description: 'Web Application',
    year: '2023',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2215',
  },
  {
    title: 'Social Platform',
    description: 'Mobile App',
    year: '2023',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=2215',
  },
];

const Work = () => {
  return (
    <section className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-6xl md:text-9xl font-extrabold mb-16 md:mb-24 text-center md:text-left tracking-tight leading-tight"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          Selected Work
        </motion.h2>

        <div className="">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden h-[400px] md:h-[500px]">
              <div
                className="absolute inset-0 h-full w-full bg-center bg-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="relative z-10 flex items-center">
                <div className="w-full px-6 py-10 border-t border-neutral-800">
                  <div className="flex items-center justify-between">
                    <div className="space-y-4 max-w-[70%] h-full">
                      <motion.h3
                        className="text-4xl md:text-6xl font-semiboldtransition-colors tracking-wide"
                        whileHover={{ x: 10 }}>
                        {project.title}
                      </motion.h3>
                      <p className="text-lg md:text-xl text-neutral-400">{project.description}</p>
                    </div>
                    <span className="text-lg md:text-2xl text-neutral-400 font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

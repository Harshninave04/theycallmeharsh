import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website showcasing my work and skills as a developer.',
    year: '2024',
    link: 'https://harshninave.netlify.app/',
    image: 'https://harshninave.netlify.app/showcaseme.png',
    tags: ['React', 'Node.js', 'TailwindCSS'],
  },
  {
    title: 'Libry: Discover a world of books!',
    description: 'Discover and read books of all genres with Libry.',
    year: '2023',
    link: 'https://libry-frontend.onrender.com/',
    image: 'https://harshninave.netlify.app/libry1.png',
    tags: ['React', 'TailwindCSS', 'MongoDB', 'Express'],
  },
  {
    title: 'Cinemovies',
    description:
      'Users can explore trending movies, search by title, and view key details like release dates and posters, all with a modern and clean user interface.',
    year: '2024',
    link: 'https://cinemoviez.netlify.app/',
    image: 'https://harshninave.netlify.app/cinemovies.png',
    tags: ['React', 'TMDB API', 'TailwindCSS', 'Node'],
  },
  {
    title: 'Blog Space',
    description:
      'A space where I reflect on thoughts, ideas, and the musings that come to mind. Join me as I explore different perspectives and share my unique take on the world.',
    year: '2024',
    link: 'https://blogsship.vercel.app/',
    image: 'https://odoocdn.com/openerp_website/static/src/img/apps/blog/banner.webp',
    tags: ['React', 'Framer', 'TailwindCSS', 'Typescript'],
  },
];

const Work = () => {
  return (
    <section className="min-h-screen bg-black text-white py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24">
          <motion.h2
            className="text-6xl md:text-8xl font-bold tracking-tight leading-tight
                     bg-gradient-to-r from-white via-white to-neutral-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            Selected Work
          </motion.h2>
          <motion.div
            className="h-px bg-gradient-to-r from-white/50 to-transparent mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl">
              <motion.div
                className="relative bg-white/5 border border-white/10 p-8 md:p-12
                         hover:bg-white/10 transition-all duration-500"
                whileHover={{ scale: 0.98 }}>
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-20 
                           transition-opacity duration-500 scale-105 group-hover:scale-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-8">
                    <div className="space-y-4 flex-1">
                      <motion.h3 className="text-4xl md:text-5xl font-bold" whileHover={{ x: 10 }}>
                        {project.title}
                      </motion.h3>
                      <p className="text-lg text-neutral-400">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-white/5 rounded-full
                                     border border-white/10 text-neutral-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between h-full">
                      <span className="text-lg md:text-xl text-neutral-400">{project.year}</span>

                      <motion.a
                        href={project.link}
                        target='_blank'
                        className="p-3 border border-white/10 rounded-full
                                 opacity-0 group-hover:opacity-100 transition-all
                                 hover:bg-white/10 hover:border-white/30"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.9 }}>
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

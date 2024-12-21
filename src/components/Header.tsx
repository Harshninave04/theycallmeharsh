import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold">Portfolio</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <SocialIcon icon={<Github />} href="https://github.com" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com" />
            <SocialIcon icon={<Mail />} href="mailto:contact@example.com" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Header;
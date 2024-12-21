import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h2 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Let's Connect
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Open for opportunities and collaborations
            </motion.p>
          </div>
          
          <div className="flex gap-6 md:justify-end">
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:contact@example.com" icon={<Mail />} />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
          <p>© {currentYear} Harsh Ninave. All rights reserved.</p>
          <nav className="flex gap-8 mt-4 md:mt-0">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#work">Work</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="hover:text-white transition-colors"
    whileHover={{ x: 5 }}
  >
    {children}
  </motion.a>
);

export default Footer;
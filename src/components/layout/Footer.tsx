import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h2
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              Let's Connect
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              Open for opportunities and collaborations
            </motion.p>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-white/30 transition-colors
                           text-white placeholder-white/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-white/30 transition-colors
                           text-white placeholder-white/50"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-white/30 transition-colors
                           text-white placeholder-white/50 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 bg-white/5 border border-white/10 
                         rounded-lg px-6 py-3 text-white hover:bg-white/10 
                         transition-colors duration-300">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex gap-6 md:justify-end">
              <SocialLink href="https://github.com/Harshninave04" icon={<Github />} />
              <SocialLink href="https://linkedin.com/in/Harshninave2004" icon={<Linkedin />} />
              <SocialLink href="mailto:harshninave32@gmail.com" icon={<Mail />} />
            </div>

            <motion.div
              className="mt-8 md:mt-0 p-6 bg-white/5 border border-white/10 rounded-lg
                       hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold mb-2">Quick Contact</h3>
              <p className="text-neutral-400">contact@example.com</p>
              <p className="text-neutral-400">+1 234 567 890</p>
            </motion.div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center 
                      text-neutral-400 text-sm border-t border-white/10 pt-8">
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
    className="p-3 border border-white/10 rounded-full hover:bg-white/10 
             hover:border-white/30 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
    {icon}
  </motion.a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="hover:text-white transition-colors relative group"
    whileHover={{ x: 5 }}>
    {children}
    <span
      className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white 
                   group-hover:w-full transition-all duration-300"
    />
  </motion.a>
);

export default Footer;

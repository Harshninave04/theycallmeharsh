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
    <footer className="py-24 border-t border-white/10 text-white bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Open for opportunities and collaborations. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-12">
            <motion.div
              className="p-8 bg-white/5 border border-white/10 rounded-xl
                       hover:bg-white/10 transition-all duration-300
                       transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">Quick Contact</h3>
                <div className="flex gap-4">
                  <SocialLink href="https://github.com/Harshninave04" icon={<Github className="w-5 h-5" />} />
                  <SocialLink href="https://linkedin.com/in/Harshninave2004" icon={<Linkedin className="w-5 h-5" />} />
                  <SocialLink
                    href="mailto:harshninave32@gmail.com"
                    icon={<Mail className="w-5 h-5" />}
                  />
                </div>
              </div>
              <motion.div
                className="space-y-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}>
                <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:harshninave32@gmail.com" className="text-lg">
                    harshninave32@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <span className="text-2xl">📞</span>
                  <a href="tel:+1234567890" className="text-lg">
                    +91 7507460xxx
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4
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
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4
                           focus:outline-none focus:border-white/30 transition-colors
                           text-white placeholder-white/50"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4
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
                className="group flex items-center gap-3 bg-white/5 border border-white/10 
                         rounded-lg px-8 py-4 text-white hover:bg-white/10 
                         transition-colors duration-300 text-lg">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>
          </div>

          <div>
            <motion.div
              className="p-8 bg-white/5 border border-white/10 rounded-xl h-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}>
              <h3 className="text-3xl font-semibold mb-8">Let's Create Something Amazing</h3>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                Whether you have a project in mind or just want to chat, I'm always open to new
                opportunities and collaborations.
              </p>
              <ul className="space-y-6 text-neutral-400">
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-white text-xl">✓</span> Web Development
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-white text-xl">✓</span> UI/UX Design
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-white text-xl">✓</span> Technical Consulting
                </li>
              </ul>
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

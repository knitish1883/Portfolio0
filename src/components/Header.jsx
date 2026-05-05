'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 300) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3'
          : 'py-5'
        }`}
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isScrolled
            ? 'rgba(3, 3, 8, 0.7)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(77, 159, 255, 0.08)' : '1px solid transparent',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Logo */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-neon-blue to-neon-violet flex items-center justify-center shadow-glow-blue">
            <span className="text-white font-orbitron font-black text-sm">N</span>
          </div>
          <span className="text-lg font-orbitron font-bold text-chrome-white hidden sm:block">
            NITISH<span className="text-neon-blue">.</span>
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-inter font-medium rounded-xl transition-all duration-300 ${isActive
                    ? 'text-neon-blue'
                    : 'text-chrome-silver hover:text-chrome-white'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-neon-blue/8 border border-neon-blue/15"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection('#contact')}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-blue/15 to-neon-violet/15 border border-neon-blue/20 rounded-xl text-neon-blue text-sm font-orbitron font-semibold hover:border-neon-blue/40 hover:shadow-glow-soft transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Let&apos;s Talk
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="w-5 h-0.5 bg-chrome-white rounded-full"
            animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-chrome-white rounded-full"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-chrome-white rounded-full"
            animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-panel p-4 space-y-1">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-chrome-silver hover:text-chrome-white hover:bg-white/5 font-inter text-sm transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-2 py-3 bg-gradient-to-r from-neon-blue to-neon-violet text-white font-orbitron font-bold text-sm rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = 'Building digital experiences from the future';
  const speed = 45;

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayedText]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(blink);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatingOrbVariants = {
    animate: (i) => ({
      y: [0, -20, 0],
      x: [0, 10 * (i % 2 === 0 ? 1 : -1), 0],
      transition: {
        duration: 6 + i * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 pt-24 md:pt-0 z-10 overflow-hidden">
      {/* Floating orbs */}
      {[
        { size: 400, x: '70%', y: '15%', color: 'from-neon-blue/8 to-neon-violet/5' },
        { size: 300, x: '20%', y: '60%', color: 'from-neon-violet/6 to-neon-cyan/3' },
        { size: 200, x: '85%', y: '70%', color: 'from-neon-cyan/5 to-transparent' },
      ].map((orb, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatingOrbVariants}
          animate="animate"
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl pointer-events-none`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(77, 159, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 159, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-chrome-silver text-sm font-inter">Available for work</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black font-orbitron text-chrome-white leading-[1.1] tracking-tight">
            K NITISH
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black font-orbitron gradient-text leading-[1.1] tracking-tight mt-2">
            KUMAR
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="flex items-center gap-4 text-chrome-silver font-inter">
            <span className="text-neon-blue font-medium">Web Developer</span>
            <span className="w-1 h-1 rounded-full bg-neon-violet" />
            <span className="text-neon-violet font-medium">Designer</span>
            <span className="w-1 h-1 rounded-full bg-neon-cyan" />
            <span className="text-neon-cyan font-medium">Problem Solver</span>
          </div>
        </motion.div>

        {/* Typewriter */}
        <motion.div variants={itemVariants} className="mb-12 min-h-[3rem]">
          <p className="text-lg md:text-xl text-chrome-dim font-inter font-light">
            {displayedText}
            <span
              className="inline-block w-[2px] h-5 bg-neon-blue ml-1 align-middle"
              style={{ opacity: cursorVisible ? 1 : 0 }}
            />
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>View My Work</span>
          </motion.button>
          <motion.button
            className="btn-outline"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2"
          variants={itemVariants}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-chrome-dim font-inter tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-chrome-dim/30 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-1.5 rounded-full bg-neon-blue"
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

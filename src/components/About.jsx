'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stats = [
    { value: '10+', label: 'Projects Completed', color: 'text-neon-blue' },
    { value: '3+', label: 'Years Experience', color: 'text-neon-violet' },
    { value: '100%', label: 'Client Satisfaction', color: 'text-neon-cyan' },
  ];

  const values = [
    {
      title: 'Innovation',
      desc: 'Stay ahead of tech trends and push creative boundaries',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-neon-blue to-neon-cyan',
    },
    {
      title: 'Quality',
      desc: 'Attention to detail in every pixel and line of code',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: 'from-neon-violet to-neon-purple',
    },
    {
      title: 'Collaboration',
      desc: 'Work seamlessly with teams to achieve shared goals',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-neon-cyan to-neon-blue',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-container"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-14">
          <div className="flex items-center gap-4 mb-3">
            <div className="line-glow w-12" />
            <span className="text-neon-blue text-sm font-space-mono tracking-widest uppercase">Who I Am</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl section-title">
            <span className="gradient-text">About</span>
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div variants={itemVariants} className="glass-panel p-8 md:p-12 mb-8">
          <p className="text-chrome-silver text-lg leading-relaxed mb-6 font-inter">
            I&apos;m a passionate <span className="text-neon-blue font-semibold">web developer and designer</span> with a
            focus on creating immersive, interactive digital experiences. With expertise in modern
            front-end technologies and a keen eye for design, I transform complex problems into
            elegant, user-centric solutions.
          </p>

          <p className="text-chrome-silver text-lg leading-relaxed font-inter">
            My journey in tech is driven by curiosity and a desire to push the boundaries of what&apos;s
            possible on the web. Whether it&apos;s building performant applications with{' '}
            <span className="text-neon-violet font-semibold">React</span> and{' '}
            <span className="text-neon-violet font-semibold">Next.js</span>, or crafting stunning interfaces
            with cutting-edge design principles, I bring both technical expertise and creative
            vision to every project.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/[0.04]">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + idx * 0.15, duration: 0.6 }}
              >
                <div className={`text-4xl font-black font-orbitron mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-chrome-dim text-sm font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-7 group cursor-default"
              whileHover={{ y: -6 }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.gradient} bg-opacity-10 flex items-center justify-center mb-5 text-white/80 group-hover:text-white transition-colors`}
                style={{ background: `linear-gradient(135deg, rgba(77,159,255,0.1), rgba(139,92,246,0.1))` }}
              >
                {value.icon}
              </div>
              <h3 className="text-lg font-bold font-orbitron text-chrome-white mb-2">
                {value.title}
              </h3>
              <p className="text-chrome-dim text-sm font-inter leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

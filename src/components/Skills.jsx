'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const skills = [
    { name: 'React', level: 95, category: 'Frontend', icon: '⚛' },
    { name: 'Next.js', level: 95, category: 'Frontend', icon: '▲' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend', icon: '🎨' },
    { name: 'Framer Motion', level: 85, category: 'Animation', icon: '✦' },
    { name: 'JavaScript', level: 90, category: 'Language', icon: 'JS' },
    { name: 'TypeScript', level: 85, category: 'Language', icon: 'TS' },
    { name: 'Web Design', level: 92, category: 'Design', icon: '◈' },
    { name: 'UI/UX', level: 88, category: 'Design', icon: '◎' },
    { name: 'Performance', level: 87, category: 'Optimization', icon: '⚡' },
    { name: 'SEO', level: 85, category: 'Optimization', icon: '🔍' },
  ];

  const technologies = [
    'React', 'Next.js', 'Tailwind CSS', 'Framer Motion',
    'JavaScript', 'TypeScript', 'Figma', 'Git',
    'REST APIs', 'GraphQL', 'Node.js', 'Express',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="section-container"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-14">
          <div className="flex items-center gap-4 mb-3">
            <div className="line-glow w-12" />
            <span className="text-neon-violet text-sm font-space-mono tracking-widest uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl section-title">
            <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 group cursor-default relative overflow-hidden"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-neon-blue font-bold text-xs">
                    {skill.icon}
                  </span>
                  <h3 className="text-base font-bold font-orbitron text-chrome-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-[10px] px-2.5 py-1 bg-neon-violet/10 text-neon-violet rounded-full font-space-mono uppercase tracking-wider">
                  {skill.category}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-violet to-neon-cyan"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: idx * 0.08 }}
                />
              </div>

              <div className="mt-2 text-right">
                <span className="text-xs text-chrome-dim font-space-mono">
                  {skill.level}%
                </span>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/[0.02] to-neon-violet/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold font-orbitron text-center mb-8">
            <span className="gradient-text-subtle">Technologies & Tools</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                className="px-5 py-2.5 glass-card rounded-full text-chrome-silver font-space-mono text-sm cursor-default"
                whileHover={{
                  scale: 1.06,
                  borderColor: 'rgba(77, 159, 255, 0.2)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + idx * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

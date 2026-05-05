'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: 'Nexus Hub',
      description: 'AI-powered collaboration platform with real-time chat, file sharing, and intelligent suggestions',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'from-neon-blue to-neon-cyan',
      accentColor: '#4d9fff',
      link: '#',
    },
    {
      title: 'Quantum Analytics',
      description: 'Advanced data visualization dashboard with interactive charts and predictive analytics',
      tech: ['React', 'D3.js', 'Tailwind CSS', 'Node.js'],
      gradient: 'from-neon-violet to-neon-blue',
      accentColor: '#8b5cf6',
      link: '#',
    },
    {
      title: 'Infinity Store',
      description: 'E-commerce platform with dynamic product filtering, cart management, and payment integration',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      gradient: 'from-neon-pink to-neon-violet',
      accentColor: '#ec4899',
      link: '#',
    },
    {
      title: 'Echo Design',
      description: 'Design system and component library with documentation and interactive examples',
      tech: ['React', 'Storybook', 'Tailwind CSS', 'TypeScript'],
      gradient: 'from-neon-cyan to-neon-blue',
      accentColor: '#22d3ee',
      link: '#',
    },
    {
      title: 'Portal Tasks',
      description: 'Task management app with drag-and-drop, real-time sync, and team collaboration',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'from-neon-blue to-neon-violet',
      accentColor: '#4d9fff',
      link: '#',
    },
    {
      title: 'Pulse Health',
      description: 'Fitness tracking application with workout plans, progress tracking, and social challenges',
      tech: ['Next.js', 'MongoDB', 'TypeScript', 'Chart.js'],
      gradient: 'from-neon-violet to-neon-cyan',
      accentColor: '#a855f7',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      id="projects"
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
            <span className="text-neon-cyan text-sm font-space-mono tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              variants={itemVariants}
              className="glass-card p-7 cursor-pointer group relative overflow-hidden flex flex-col"
              whileHover={{ y: -8 }}
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Project number */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-space-mono text-chrome-dim">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <motion.div
                  className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-chrome-dim group-hover:text-neon-blue transition-colors"
                  animate={inView ? {} : {}}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-orbitron text-chrome-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-chrome-dim text-sm leading-relaxed mb-6 flex-1 font-inter">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 bg-white/[0.04] rounded-full text-chrome-silver font-space-mono uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none rounded-2xl`}
              />
            </motion.a>
          ))}
        </div>

        {/* View All button */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.button
            className="btn-outline"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      school: 'Tech University',
      period: '2020 - 2024',
      details: 'Focus on web development and software engineering',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      school: 'Code Academy',
      period: '2022 - 2023',
      details: 'Intensive course covering MERN stack and modern web development',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      degree: 'Advanced React & Next.js Certification',
      school: 'Frontend Masters',
      period: '2023',
      details: 'Advanced patterns, performance optimization, and best practices',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  const certifications = [
    'AWS Certified Developer',
    'Google Analytics Certified',
    'Scrum Master Certified',
    'UX Design Professional',
  ];

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
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="education"
      ref={ref}
      className="section-container"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-14">
          <div className="flex items-center gap-4 mb-3">
            <div className="line-glow w-12" />
            <span className="text-neon-violet text-sm font-space-mono tracking-widest uppercase">Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl section-title">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[1px] hidden md:block">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-neon-blue via-neon-violet to-neon-cyan"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {education.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <motion.div
                className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-xl bg-void-deep border border-white/[0.08] items-center justify-center text-neon-blue z-10"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {item.icon}
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="glass-card p-7"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="md:hidden w-10 h-10 shrink-0 rounded-xl bg-white/[0.04] flex items-center justify-center text-neon-blue">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold font-orbitron text-chrome-white">
                        {item.degree}
                      </h3>
                      <span className="text-[10px] px-2.5 py-1 bg-neon-blue/10 text-neon-blue rounded-full font-space-mono">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-neon-violet font-space-mono text-sm mb-2">
                      {item.school}
                    </p>
                    <p className="text-chrome-dim text-sm font-inter leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-xl font-bold font-orbitron text-chrome-white mb-6 flex items-center gap-3">
            <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-5 flex items-center gap-4"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + idx * 0.1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-chrome-silver font-inter text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

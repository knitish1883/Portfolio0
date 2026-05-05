'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';
import { useState } from 'react';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailTo = 'knitish3march@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:${emailTo}` +
      `?subject=${encodeURIComponent(`New message from ${formData.name}`)}` +
      `&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:knitish3march@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  const contactInfo = [
    {
      title: 'Email',
      value: 'knitish3march@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      title: 'Response Time',
      value: 'Within 24 hours',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
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
      id="contact"
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
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="line-glow w-12" />
            <span className="text-neon-cyan text-sm font-space-mono tracking-widest uppercase">Connect</span>
            <div className="line-glow w-12" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-chrome-dim font-inter mt-4 max-w-md mx-auto">
            Have a project in mind? Let&apos;s collaborate and create something amazing.
          </p>
          <p className="text-chrome-dim font-inter mt-3 max-w-md mx-auto text-sm">
            When someone sends a message here, it opens an email to <strong>knitish3march@gmail.com</strong> so you can receive it directly.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="glass-panel p-8 md:p-10 mb-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-space-mono text-chrome-dim mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-chrome w-full"
                  placeholder="Alex"
                />
              </div>
              <div>
                <label className="block text-xs font-space-mono text-chrome-dim mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-chrome w-full"
                  placeholder="alex@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-space-mono text-chrome-dim mb-2 uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="input-chrome w-full resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary w-full"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{submitted ? '✓ Message Sent!' : 'Send Message'}</span>
            </motion.button>
          </form>

          {submitted && (
            <motion.div
              className="mt-4 p-4 bg-neon-cyan/10 border border-neon-cyan/20 rounded-xl text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-neon-cyan font-inter text-sm">
                Thank you! I&apos;ll get back to you soon.
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-chrome-dim font-inter mb-6 text-sm">Connect with me</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-chrome-dim hover:text-neon-blue hover:border-neon-blue/20 hover:bg-neon-blue/5 transition-all duration-300"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 text-center"
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-neon-blue mx-auto mb-3">
                {info.icon}
              </div>
              <h3 className="text-sm font-bold font-orbitron text-chrome-white mb-1">
                {info.title}
              </h3>
              <p className="text-chrome-dim text-xs font-inter">{info.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

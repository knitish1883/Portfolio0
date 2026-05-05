'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import SpaceBackground from '@/components/SpaceBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-void relative overflow-hidden">
      {/* Immersive Space Background */}
      <SpaceBackground />

      {/* Holographic Navigation */}
      <Header />

      {/* Content Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 py-10 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-chrome-dim text-sm font-inter">
            © 2026 K NITISH KUMAR. Built with Next.js & Three.js
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-chrome-dim hover:text-neon-blue text-sm font-inter transition-colors">GitHub</a>
            <a href="#" className="text-chrome-dim hover:text-neon-blue text-sm font-inter transition-colors">LinkedIn</a>
            <a href="#" className="text-chrome-dim hover:text-neon-blue text-sm font-inter transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

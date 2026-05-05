# Copilot Instructions - Futuristic Portfolio

## Project Overview

This is an ultra-modern, futuristic student portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. The design features a dark theme with neon accents, glassmorphism effects, and smooth animations.

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components for each section
- `src/lib/` - Utility functions and custom hooks
- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration

## Key Technologies

- Next.js 15 with App Router
- React 18
- Tailwind CSS 3
- Framer Motion for animations
- Custom Canvas API for particle background

## Customization Guidelines

1. **Colors**: Update `tailwind.config.js` for neon color scheme
2. **Content**: Edit component files directly
3. **Fonts**: Orbitron (headings) and Space Mono (monospace) via Google Fonts
4. **Animations**: Review `globals.css` and individual component animations

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Performance Notes

- Particle background uses Canvas API for performance
- Animations use Framer Motion for GPU acceleration
- Images are optimized with Next.js Image component
- CSS is purged by Tailwind in production

## Common Tasks

### Adding a New Skill
Edit `src/components/Skills.jsx` and add to the `skills` array.

### Adding a New Project
Edit `src/components/Projects.jsx` and add to the `projects` array.

### Changing Colors
Update the theme in `tailwind.config.js` under the `colors` object.

### Modifying Animations
Review `src/app/globals.css` for global animations and component files for local animations.

## Deployment

The project is optimized for Vercel deployment. Simply connect the repository to Vercel for automatic deployments.

## Notes

- All components use the `'use client'` directive
- Smooth scrolling is enabled via CSS
- Custom scrollbar styling is applied
- Responsive design uses Tailwind breakpoints

# K NITSH KUMAR - Futuristic Portfolio

An ultra-modern, futuristic portfolio website built with cutting-edge web technologies. Designed for 2030 with stunning neon aesthetics, glassmorphism effects, and smooth animations.

## ✨ Features

- **Dark Theme with Neon Accents**: Electric blue, purple, and cyan neon colors (#0f0f0f background)
- **Glassmorphism Design**: Modern glass-effect cards with frosted glass appearance
- **Animated Background**: Particle system with animated gradients
- **Smooth Scroll Animations**: Scroll reveal effects and parallax scrolling
- **Glow Hover Effects**: Neon glow interactions on all interactive elements
- **3D & Abstract Shapes**: Animated gradient orbs and abstract futuristic elements
- **Bold Typography**: Orbitron font for futuristic heading styles
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **High Performance**: Optimized bundle size and fast loading times
- **SEO Optimized**: Metadata and semantic HTML throughout

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with animations
│   ├── About.jsx           # About section with glass cards
│   ├── Skills.jsx          # Skills section with progress bars
│   ├── Projects.jsx        # Featured projects grid
│   ├── Education.jsx       # Education timeline
│   ├── Contact.jsx         # Contact form and social links
│   ├── AnimatedBackground.jsx  # Canvas particle background
│   └── MouseGlow.jsx       # Mouse follower glow effect
├── lib/
│   └── hooks.js            # Custom React hooks (useInView)
└── public/                 # Static assets
```

## 🎨 Design System

### Colors
- **Dark Base**: `#0f0f0f`
- **Dark Light**: `#1a1a1a`
- **Neon Blue**: `#00d9ff`
- **Neon Purple**: `#b300ff`
- **Neon Pink**: `#ff006e`
- **Neon Cyan**: `#00f0ff`

### Typography
- **Headings**: Orbitron (futuristic style)
- **Body**: System fonts (fast loading)
- **Monospace**: Space Mono (code elements)

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **React 18**: UI library
- **Tailwind CSS 3**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **JavaScript**: Modern ES6+ syntax

## 🎬 Animations

- **Page Load**: Staggered entrance animations
- **Scroll Reveal**: Elements animate on scroll into view
- **Hover Effects**: Interactive glow and lift effects
- **Particle System**: Animated background particles
- **Typewriter**: Hero text typing effect
- **Gradient Orbs**: Floating animated gradient backgrounds

## 📊 Sections

1. **Hero**: Animated introduction with typewriter effect
2. **About**: Glassmorphic card with personal info and values
3. **Skills**: Animated skill cards with progress bars
4. **Projects**: Featured projects with hover interactions
5. **Education**: Timeline-style education and certifications
6. **Contact**: Contact form with social media links

## 🚀 Performance Optimization

- Image optimization with Next.js
- CSS purging with Tailwind
- Dynamic imports for components
- Lazy loading for scroll-triggered animations
- Minimal JavaScript bundle

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## � Deployment

### Deploy to Vercel
1. Push the project to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Use the default settings. Vercel will detect this as a Next.js project.
4. The build command is `npm run build` and the output is handled automatically.

### Use a Custom Domain
1. In Vercel, go to your project dashboard.
2. Add a custom domain under the Domain settings.
3. Point your domain to Vercel using the DNS records Vercel provides.
4. Wait for DNS propagation, then your portfolio will be live at your domain.

> This project is ready for production deployment. The `vercel.json` file is included to make Vercel detection explicit.

## �📝 Customization

### Change Colors
Edit the color values in `tailwind.config.js`:
```javascript
colors: {
  'neon-blue': '#your-color',
  // ... other colors
}
```

### Update Content
- Edit component files in `src/components/`
- Update metadata in `src/app/layout.jsx`
- Modify project data in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`

### Add New Sections
1. Create a new component in `src/components/`
2. Use the same animation patterns
3. Import and add to `src/app/page.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**K NITSH KUMAR**
- Email: knitish3march@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Made with [Emergent](https://emergent.dev/)

---

Made with ❤️ for the future of web development.

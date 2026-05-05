import './globals.css';

export const metadata = {
  title: 'K NITISH KUMAR — Developer & Designer',
  description: 'Award-winning immersive 3D developer portfolio. Anti-gravity environment with floating glass UI panels, holographic navigation, and cinematic design.',
  keywords: ['portfolio', 'web developer', 'designer', 'react', 'next.js', '3D', 'immersive'],
  authors: [{ name: 'K NITISH KUMAR' }],
  robots: 'index, follow',
  openGraph: {
    title: 'K NITISH KUMAR — Developer & Designer',
    description: 'Immersive 3D developer portfolio with anti-gravity design',
    type: 'website',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-void text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

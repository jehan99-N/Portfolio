import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jehan-portfolio.com'),
  title: 'Jehan Abujaleel - Frontend Developer',
  description: 'Results-driven Frontend Developer with 5+ years of experience building scalable and responsive web applications using React, Next.js, TypeScript, and modern frontend architectures.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Web Developer',
    'UI/UX',
    'Full Stack',
    'Portfolio'
  ],
  authors: [{ name: 'Jehan Abujaleel', url: 'https://jehan-portfolio.com' }],
  creator: 'Jehan Abujaleel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jehan-portfolio.com',
    siteName: 'Jehan Portfolio',
    title: 'Jehan Abujaleel - Frontend Developer',
    description: 'Results-driven Frontend Developer with 5+ years of experience building scalable and responsive web applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jehan Abujaleel Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jehan Abujaleel - Frontend Developer',
    description: 'Results-driven Frontend Developer with 5+ years of experience.',
    creator: '@jehan_abujaleel',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}

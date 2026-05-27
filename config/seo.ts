// SEO Configuration for Portfolio
// Used for meta tags, Open Graph, and Twitter cards

export const defaultSEOConfig = {
  title: 'Jehan Abujaleel - Frontend Developer',
  description: 'Results-driven Frontend Developer with 5+ years of experience building scalable and responsive web applications using React, Next.js, TypeScript, and modern frontend architectures.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jehan-portfolio.com',
  ogImage: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jehan-portfolio.com'}/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'Jehan Abujaleel Portfolio',
  },
  twitter: {
    handle: '@jehan_abujaleel',
    cardType: 'summary_large_image',
  },
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Web Development',
    'Portfolio',
  ],
};

export type SEOConfig = typeof defaultSEOConfig;

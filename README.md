# Jehan Abujaleel - Frontend Developer Portfolio

A modern, SSR-optimized portfolio website built with Next.js featuring SEO optimization, responsive design, and server-side rendering for optimal performance and search engine visibility.

## Features

✨ **Modern Stack**
- Next.js 14+ with App Router
- React 18+ with TypeScript
- Tailwind CSS for styling
- SEO optimized with Meta tags

🚀 **Performance**
- Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- Image optimization
- Automatic code splitting
- Minification and compression

🔍 **SEO Optimized**
- Meta tags for all pages
- Open Graph support
- Twitter Card support
- Sitemap generation
- Structured data (JSON-LD)
- Mobile responsive

📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface

## Project Structure

```
portfolio/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Homepage
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/               # Static data
│   └── portfolio.ts    # CV data
├── config/             # Configuration
│   └── seo.ts         # SEO settings
├── styles/             # Global styles
│   └── globals.css
├── public/             # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your details.

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:
```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Self-hosted (Ubuntu/Linux)

1. Install Node.js and npm
2. Clone the repository
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Start: `npm start`

### Using PM2 for Process Management

```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### Using Docker

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## SEO Optimization

The portfolio includes:
- Dynamic meta tags for all pages
- Open Graph tags for social media sharing
- Twitter Card support
- Mobile meta tags
- Structured data support
- Robots meta tags
- Canonical URLs
- Sitemap configuration

To enable Google Analytics:
1. Update the `GA_ID` in `.env.local`
2. Uncomment the Google Analytics script in `app/layout.tsx`

## Performance Tips

1. **Image Optimization**: Use Next.js Image component for all images
2. **Code Splitting**: Components are automatically split
3. **CSS**: Tailwind CSS is optimized for production
4. **Caching**: Configure ISR revalidation time based on content update frequency
5. **Compression**: Enable gzip compression on your server

## Technologies Used

- **Framework**: Next.js 14
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **SEO**: Next.js built-in Meta tags
- **Deployment**: Vercel/Self-hosted

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact

For inquiries or feedback:
- Email: jehanabujaleel@gmail.com
- Phone: 0796186967
- LinkedIn: [jehan_abujaleel](https://linkedin.com/in/jehan_abujaleel)
- GitHub: [jehan_abujaleel](https://github.com/jehan_abujaleel)

## License

This project is open source and available for personal use.

---

**Built with ❤️ by Jehan Abujaleel**

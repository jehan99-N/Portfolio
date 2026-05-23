# Deployment Configuration

## Environment Variables

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Vercel Deployment (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

## Self-Hosted Deployment

### Linux/Ubuntu

```bash
# 1. SSH into your server
ssh user@your-server.com

# 2. Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 3. Install dependencies
npm install

# 4. Build the project
npm run build

# 5. Start the application
npm start
```

### Using Nginx as Reverse Proxy

```nginx
server {
    listen 80;
    server_name jehan-portfolio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Using Apache

```apache
<VirtualHost *:80>
    ServerName jehan-portfolio.com
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
</VirtualHost>
```

### SSL Certificate (Let's Encrypt)

```bash
certbot certonly --standalone -d jehan-portfolio.com
```

## Database (Optional)

For contact form submissions, consider:
- Firebase
- Supabase
- MongoDB Atlas
- AWS DynamoDB

## Monitoring

- **Error Tracking**: Sentry
- **Analytics**: Google Analytics
- **Uptime**: Uptime Robot
- **Performance**: New Relic or DataDog

## CI/CD Pipeline

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - run: npm test
```

## Performance Checklist

- [ ] Enable gzip compression
- [ ] Set up CDN (Cloudflare)
- [ ] Configure caching headers
- [ ] Optimize images
- [ ] Minify CSS/JS
- [ ] Enable lazy loading
- [ ] Set up monitoring
- [ ] Configure backups
- [ ] Set up SSL/HTTPS
- [ ] Test on mobile devices

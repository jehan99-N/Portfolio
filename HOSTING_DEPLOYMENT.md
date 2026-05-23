# Hosting & Deployment Guide

A comprehensive guide to host and deploy your portfolio website on various platforms.

## Table of Contents

1. [Quick Deploy to Vercel](#vercel-deployment)
2. [Self-Hosted on Linux](#linux-server)
3. [Using Docker](#docker-deployment)
4. [Custom Domain & SSL](#domain-setup)
5. [Performance Optimization](#performance)
6. [Monitoring & Maintenance](#monitoring)

---

## Vercel Deployment

### Why Vercel?
- Optimized for Next.js
- Auto-deploy on git push
- Free tier available
- Global CDN
- Automatic SSL
- Environment variables management

### Setup Steps

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment**
   - Go to Settings → Environment Variables
   - Add your variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://your-domain.com
     NEXT_PUBLIC_GA_ID=your-google-analytics-id
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live at `<project>.vercel.app`

5. **Connect Custom Domain**
   - Go to Settings → Domains
   - Add your domain
   - Update DNS records at your registrar

### Auto-Deploy on Push

Every push to `main` branch automatically deploys!

```bash
git push origin main  # Automatic deploy starts
```

---

## Linux Server Deployment

### Prerequisites

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs npm

# Verify installation
node --version  # Should be v18+
npm --version
```

### Installation

```bash
# Navigate to home directory
cd ~

# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Build project
npm run build

# Test run
npm start
# Visit http://localhost:3000
```

### Using PM2 (Process Manager)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start application
pm2 start npm --name "portfolio" -- start

# View running processes
pm2 status

# View logs
pm2 logs portfolio

# Setup auto-start on reboot
pm2 startup
pm2 save

# Restart
pm2 restart portfolio

# Stop
pm2 stop portfolio

# Delete
pm2 delete portfolio
```

### Using Systemd Service

Create `/etc/systemd/system/portfolio.service`:

```ini
[Unit]
Description=Portfolio Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/home/username/portfolio
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=portfolio

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable portfolio
sudo systemctl start portfolio
sudo systemctl status portfolio
```

### Nginx Reverse Proxy

Create `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name jehan-portfolio.com www.jehan-portfolio.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name jehan-portfolio.com www.jehan-portfolio.com;

    # SSL Configuration (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/jehan-portfolio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/jehan-portfolio.com/privkey.pem;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss;

    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache static assets
    location /_next/static {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache public files
    location /public {
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

Enable and test:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### SSL Certificate with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --standalone -d jehan-portfolio.com -d www.jehan-portfolio.com

# Auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# Check renewal
sudo certbot renew --dry-run
```

---

## Docker Deployment

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

### .dockerignore

```
node_modules
npm-debug.log
.git
.gitignore
README.md
.next
```

### Build and Run

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# Run with environment variables
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://portfolio.com \
  portfolio

# Run in background
docker run -d -p 3000:3000 --name portfolio portfolio
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_SITE_URL: https://jehan-portfolio.com
    restart: always
    volumes:
      - ./public:/app/public
```

Run:

```bash
docker-compose up -d
docker-compose logs -f
docker-compose down
```

---

## Domain Setup

### Connect Custom Domain

1. **Buy Domain**
   - Register at Namecheap, GoDaddy, or your preferred registrar

2. **Add DNS Records**
   - Type A: `jehan-portfolio.com` → `your-server-ip`
   - Type CNAME: `www` → `jehan-portfolio.com`

3. **For Vercel**
   - Use Vercel nameservers
   - Or add Vercel DNS records

### Subdomain Setup

```nginx
server {
    server_name blog.jehan-portfolio.com;
    # Route to blog service
}
```

---

## Performance Optimization

### Enable Caching Headers

In nginx:

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### CDN Integration (Cloudflare)

1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Add your domain
3. Update nameservers at registrar
4. Enable caching rules
5. Enable Gzip compression

### Database Optimization (if needed)

- Use MongoDB Atlas for managed database
- Enable indexes on frequently queried fields
- Use caching (Redis)

---

## Monitoring & Maintenance

### Uptime Monitoring

Use [UptimeRobot](https://uptimerobot.com):
- Monitor site every 5 minutes
- Get alerts on downtime
- Status page

### Error Tracking

Use [Sentry](https://sentry.io):
```javascript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "your-sentry-dsn",
});
```

### Analytics

Google Analytics:
```tsx
// In app/layout.tsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
/>
<script dangerouslySetInnerHTML={{
  __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');`
}} />
```

### Logs Management

View application logs:

```bash
# PM2
pm2 logs portfolio

# Systemd
sudo journalctl -u portfolio -f

# Docker
docker logs -f portfolio

# Nginx
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Regular Maintenance

```bash
# Weekly
git pull
npm update
npm run build
pm2 restart portfolio

# Monthly
# Review analytics
# Check security updates
# Review error logs

# Yearly
# Renew SSL certificate
# Backup database
# Review performance metrics
```

---

## Troubleshooting

### Site Not Loading

```bash
# Check if process is running
pm2 status

# Check nginx
sudo systemctl status nginx

# Check logs
pm2 logs portfolio
sudo tail -f /var/log/nginx/error.log

# Restart services
pm2 restart portfolio
sudo systemctl restart nginx
```

### High CPU/Memory Usage

```bash
# Check process
pm2 monit

# View top processes
top
```

### SSL Certificate Errors

```bash
# Check certificate
sudo certbot certificates

# Renew certificate
sudo certbot renew

# Fix certificate
sudo certbot delete --cert-name jehan-portfolio.com
sudo certbot certonly --standalone -d jehan-portfolio.com
```

---

## Support & Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [PM2 Documentation](https://pm2.keymetrics.io/docs)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)

---

**Need help? Contact: jehanabujaleel@gmail.com**

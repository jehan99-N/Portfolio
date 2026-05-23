#!/bin/bash

# Portfolio Setup Script
# This script sets up the Next.js portfolio project

echo "🚀 Starting portfolio setup..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo "✓ npm version: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create environment file
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local..."
    cp .env.example .env.local
    echo "✓ .env.local created. Please update it with your configuration."
else
    echo "✓ .env.local already exists"
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✓ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "✅ Portfolio setup completed!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your configuration"
echo "2. Customize data/portfolio.ts with your information"
echo "3. Run 'npm run dev' to start the development server"
echo "4. Open http://localhost:3000 in your browser"
echo ""

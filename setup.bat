@echo off
REM Portfolio Setup Script for Windows
REM This script sets up the Next.js portfolio project

echo.
echo 🚀 Starting portfolio setup...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js version:
node --version
echo ✓ npm version:
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✓ Dependencies installed successfully
echo.

REM Create environment file
if not exist .env.local (
    echo 📝 Creating .env.local...
    copy .env.example .env.local
    echo ✓ .env.local created. Please update it with your configuration.
) else (
    echo ✓ .env.local already exists
)
echo.

REM Build the project
echo 🔨 Building the project...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✓ Build successful
echo.

echo ✅ Portfolio setup completed!
echo.
echo Next steps:
echo 1. Update .env.local with your configuration
echo 2. Customize data/portfolio.ts with your information
echo 3. Run 'npm run dev' to start the development server
echo 4. Open http://localhost:3000 in your browser
echo.
pause

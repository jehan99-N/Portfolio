'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-primary">
          Jehan.Abujaleel
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Link href="#contact" className="button-primary">
          Get In Touch
        </Link>
      </div>
    </header>
  );
}

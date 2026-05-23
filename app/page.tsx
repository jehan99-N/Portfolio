import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Jehan Abujaleel - Frontend Developer Portfolio',
  description: 'Explore my professional portfolio showcasing 4+ years of experience in React, Next.js, and modern frontend development.',
};

export const generateStaticParams = () => [];

export const revalidate = 86400; // ISR: Revalidate every 24 hours

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

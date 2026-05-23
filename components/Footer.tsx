'use client';

import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jehan Abujaleel</h3>
            <p className="text-gray-400">Frontend Developer & Tech Enthusiast</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href={`mailto:${portfolioData.personal.email}`} className="hover:text-white transition-colors">Email</a></li>
              <li><a href={`tel:${portfolioData.personal.phone}`} className="hover:text-white transition-colors">Phone</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Form</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href={`https://github.com/${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Jehan Abujaleel. All rights reserved.</p>
            <p>Built with <span className="text-primary">Next.js</span>, <span className="text-primary">React</span> & <span className="text-primary">TypeScript</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

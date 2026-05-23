'use client';

import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-secondary mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-secondary mb-4">Frontend</h3>
            <div className="space-y-2">
              {portfolioData.skills.frontend.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-secondary mb-4">Backend & APIs</h3>
            <div className="space-y-2">
              {portfolioData.skills.backend.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-secondary mb-4">Tools & Platforms</h3>
            <div className="space-y-2">
              {portfolioData.skills.tools.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-secondary mb-4">Languages</h3>
            <div className="space-y-2">
              {portfolioData.skills.languages.map((lang, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-700">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

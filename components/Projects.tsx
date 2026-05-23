'use client';

import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-secondary mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-primary to-secondary h-40 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl mb-2">🚀</div>
                  <p className="font-semibold">{project.company}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.url && (
                  <p className="text-sm text-primary font-semibold mb-4">
                    Visit: <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.url}</a>
                  </p>
                )}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-secondary mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-primary">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

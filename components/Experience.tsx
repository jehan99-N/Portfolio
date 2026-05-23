'use client';

import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-secondary mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {portfolioData.experience.map((job, index) => (
            <div key={job.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-secondary">{job.title}</h3>
                  <p className="text-primary font-semibold text-lg">{job.company}</p>
                  <p className="text-gray-500 text-sm">{job.location}</p>
                </div>
                <div className="text-sm text-gray-600 mt-2 md:mt-0">
                  <span className="font-semibold">{job.startDate}</span> - <span>{job.endDate}</span>
                </div>
              </div>
              <ul className="space-y-3 ml-4">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              {index !== portfolioData.experience.length - 1 && (
                <div className="mt-8 pt-8 border-t border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

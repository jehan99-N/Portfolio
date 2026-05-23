'use client';

import { portfolioData } from '@/data/portfolio';

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-secondary mb-12">Education</h2>
        <div className="space-y-8 max-w-3xl">
          {portfolioData.education.map((edu, index) => (
            <div key={edu.id} className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-secondary">{edu.degree}</h3>
                  <p className="text-primary font-semibold text-lg">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location}</p>
                  {edu.description && (
                    <p className="text-gray-700 mt-2">{edu.description}</p>
                  )}
                </div>
                <div className="text-sm text-gray-600 mt-2 md:mt-0 whitespace-nowrap">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

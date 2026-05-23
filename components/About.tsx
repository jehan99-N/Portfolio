'use client';

import { portfolioData } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-secondary mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {portfolioData.summary}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary">4+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary">10+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary">5</div>
                <p className="text-gray-600">Technologies</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-secondary mb-6">Key Strengths</h3>
            <ul className="space-y-4">
              {[
                'Building scalable and responsive web applications',
                'UI/UX optimization and performance tuning',
                'API integration and backend collaboration',
                'Modern frontend architectures and best practices',
                'Cross-functional team collaboration',
                'Clean code and documentation'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

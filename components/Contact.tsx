'use client';

import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-secondary mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's collaborate and bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-primary">📧</div>
                <div>
                  <p className="font-semibold text-secondary">Email</p>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-600 hover:text-primary transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-primary">📱</div>
                <div>
                  <p className="font-semibold text-secondary">Phone</p>
                  <a href={`tel:${portfolioData.personal.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-primary">📍</div>
                <div>
                  <p className="font-semibold text-secondary">Location</p>
                  <p className="text-gray-600">{portfolioData.personal.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-primary">🔗</div>
                <div>
                  <p className="font-semibold text-secondary">Social Media</p>
                  <div className="flex gap-4 mt-2">
                    <a href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                    <a href={`https://github.com/${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            <button type="submit" className="button-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

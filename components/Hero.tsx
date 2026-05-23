'use client';

import Image from 'next/image';

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Jehan-abujaleel.pdf';
    link.download = 'Jehan-abujaleel.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold">Welcome to my portfolio</span>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mt-2 mb-6">
              Hi, I'm <span className="text-primary">Jehan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A results-driven Frontend Developer with 4+ years of experience building scalable and responsive web applications. Specializing in React, Next.js, and modern frontend architectures.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="button-primary">
                Let's Work Together
              </a>
              <button onClick={handleDownloadCV} className="button-secondary">
                Download CV
              </button>
            </div>
          </div>
          <div>
            <div className="rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/img-cv.jpeg"
                alt="Jehan Abujaleel"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <p className="text-sm text-center mt-4 text-gray-600">Frontend Developer & Web Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
}

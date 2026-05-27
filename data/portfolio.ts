export const portfolioData = {
  personal: {
    name: 'Jehan Abujaleel',
    title: 'Frontend Developer',
    bio: 'Results-driven Frontend Developer with 5+ years of experience building scalable and responsive web applications.',
    email: 'jehanabujaleel@gmail.com',
    phone: '0796186967',
    location: 'Amman, Jordan',
    birthDate: '1999/09/03',
    linkedin: 'jehan_abujaleel',
    github: 'jehan_abujaleel',
  },
  summary: `Results-driven Frontend Developer with 5+ years of experience building scalable and responsive web applications. Proficient in React.js, Next.js, Redux, TypeScript, and REST APIs, with a strong background in UI/UX optimization. Proven ability to deliver high-quality projects ahead of deadlines, integrate with backend systems, and collaborate effectively with cross-functional teams. Passionate about clean code, performance optimization, and modern frontend architectures.`,
  
  experience: [
    {
      id: 1,
      title: 'Software Development (React js)',
      company: 'Jordan Ahli Bank',
      location: 'Amman, Jordan',
      startDate: '2024/04',
      endDate: 'present',
      description: [
        'Currently working on an Admin Portal for managing customer accounts of the Qawn application, a digital product of Ahli Bank Jordan.',
        'Develop and maintain a secure web-based administration platform used to manage all Qawn users and their financial activities.',
        'Implement frontend features based on Figma UI/UX designs, translating design specifications into functional and responsive interfaces.',
        'Integrate multiple backend APIs for user registration, account creation, verification, and transaction management.',
        'Ensure the portal supports full lifecycle management of customer accounts with banking security standards.',
      ]
    },
    {
      id: 2,
      title: 'Frontend Developer - React & Next.js',
      company: 'Roya Media Group',
      location: 'Amman, Jordan',
      startDate: '2023/07',
      endDate: '2023/12',
      description: [
        'Developed Roya Waves (royawaves.com), a comprehensive platform for podcasts, live radio streaming, and studio voice recordings.',
        'Built the frontend using React and Next.js, creating a dynamic, interactive, and user-friendly interface.',
        'Integrated multiple APIs for user registration, authentication, profile management, and live streaming.',
        'Designed the platform to be fully responsive across desktop, tablet, and mobile devices.',
        'Implemented real-time audio playback and interactive elements with optimized performance.',
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer (React JS)',
      company: 'Bebsa6a For Business',
      location: 'Amman, Jordan',
      startDate: '2021/10',
      endDate: '2023/07',
      description: [
        'Developed a responsive website optimized for both desktop and mobile devices.',
        'Implemented a single-page application using React and Redux that improved overall performance and usability.',
        'Utilized HTML, CSS, and JavaScript to create dynamic, interactive user interfaces.',
        'Integrated third-party APIs to provide additional functionality and improve user experience.',
        'Developed unit tests to ensure code integrity and reduce production bugs.',
      ]
    },
  ],

  education: [
    {
      id: 1,
      degree: 'Master CS',
      institution: 'Yarmouk University',
      location: 'Irbid, Jordan',
      startDate: '2025/01',
      endDate: 'Present',
    },
    {
      id: 2,
      degree: "Bachelor's CIS",
      institution: 'AABU',
      location: 'Mafreq, Jordan',
      startDate: '2018/02',
      endDate: '2021/07',
      description: "Bachelor's of IT degree in Computer Information System from Al-Albayt University",
    },
  ],

  skills: {
    frontend: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Tailwind CSS'],
    backend: ['REST APIs', 'API Integration', 'Node.js', 'PHP Laravel'],
    tools: ['Git/GitHub', 'AWS', 'Figma', 'Jest', 'React Testing Library'],
    languages: ['Arabic', 'English'],
  },

  projects: [
    {
      id: 1,
      name: 'Qawn Admin Portal',
      company: 'Jordan Ahli Bank',
      description: 'Secure web-based administration platform for managing Qawn users and their financial activities.',
      technologies: ['React', 'TypeScript', 'REST APIs', 'Redux'],
      role: 'Frontend Developer',
      highlights: [
        'User account management',
        'Transaction monitoring',
        'Banking security standards',
      ]
    },
    {
      id: 2,
      name: 'Roya Waves',
      company: 'Roya Media Group',
      description: 'Comprehensive platform for podcasts, live radio streaming, and studio voice recordings.',
      url: 'royawaves.com',
      technologies: ['React', 'Next.js', 'TypeScript', 'Audio APIs'],
      role: 'Frontend Developer',
      highlights: [
        'Real-time audio playback',
        'Interactive UI',
        'Fully responsive design',
      ]
    },
  ],

  certificates: ['PHP Laravel'],
};

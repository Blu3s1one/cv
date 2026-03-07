import type { CVData } from '@/types/cv'
import { withBase } from '@/lib/base-url'

export const en: CVData = {
  name: 'Pierre Gaillard',
  title: 'Fullstack Engineer',
  profile:
    'Fullstack Engineer specialized in web and mobile application development, with strong expertise in React, React Native, and Node.js. Experienced in TypeScript and Python, and comfortable working in Agile environments. I design robust, maintainable, and well-tested solutions using TDD and software architecture best practices.',
  email: 'pierregaillard99@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/Blu3s1one/' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pierre-gaillard-02a90a1bb/',
    },
  ],

  skills: [
    { category: 'Programming Languages', items: ['TypeScript', 'Python'] },
    {
      category: 'Frameworks',
      items: ['React/React Native', 'Remix', 'TanStack', 'AdonisJS', 'NestJS'],
    },
    { category: 'Data', items: ['SQL', 'PostgreSQL', 'GraphQL'] },
    { category: 'Infrastructure', items: ['AWS', 'OVH'] },
    {
      category: 'Deployment',
      items: ['Docker', 'Terraform', 'GitHub Actions'],
    },
    {
      category: 'Languages',
      items: ['French (Native)', 'English (C1)', 'Spanish (B2)', 'German (B1)'],
    },
  ],

  jobs: [
    {
      company: 'Galadrim',
      role: 'Fullstack Engineer',
      startDate: 'June 2024',
      endDate: 'Present',
      category: 'programming',
      description: '',
      highlights: [
        'Migrate a legacy ColdFusion application to a modern TypeScript architecture (Remix, GraphQL) with TDD and CI/CD.',
        'Develop web and mobile applications using React / React Native with AdonisJS / NestJS backends.',
        'Set up AWS / OVH infrastructure using Terraform.',
        'Manage CI/CD pipelines with GitHub Actions.',
        'Mentor junior developers (code reviews, project setup…).',
        'Conduct technical interviews for recruitment.',
      ],
    },
    {
      company: 'Airbus Defence & Space',
      role: 'Data Science Intern',
      startDate: 'April 2023',
      endDate: 'October 2023',
      category: 'data-science',
      description:
        'Studied change detection models, designed a semi-supervised training method, and developed a dataset creation tool (Python backend, TypeScript/Angular frontend).',
    },
    {
      company: 'Lorient Agglomeration',
      role: 'Data Science Contractor',
      startDate: 'November 2021',
      endDate: 'December 2021',
      category: 'data-science',
      description:
        'Cleaned data and trained a deep learning (RCNN) algorithm to detect birds and nests from drone images.',
    },
    {
      company: 'EPHE (École Pratique des Hautes Études)',
      role: 'OCR Intern',
      startDate: 'April 2021',
      endDate: 'September 2021',
      category: 'data-science',
      description:
        'Contributed to the development of an OCR tool to digitize multilingual historical texts, with a focus on Arabic texts.',
    },
  ],

  projects: [
    {
      name: 'wesplit',
      subtitle: 'Personal Project',
      date: '2025',
      description:
        'Wesplit is an application designed to distribute people into groups with constraints, developed for activities organized with Scouts et Guides de France.',
      url: 'https://wesplit.fr',
    },
    {
      name: 'Donkey Car',
      subtitle: 'Inter-school Competition',
      date: '2023',
      description:
        'I trained autonomous mini-cars (DonkeyCar kits) using a reinforcement learning approach to race against other students in a race organized between schools and universities in Nantes.',
      videos: [
        { title: 'training', url: withBase('videos/training.mp4') },
        { title: 'race day', url: withBase('videos/racing.mp4') },
      ],
    },
  ],

  education: [
    {
      institution: 'Wealcome',
      degree: 'TDD Training',
      startDate: '06/2025',
      description: 'TDD & Clean Architecture with Node.js and TypeScript.',
    },
    {
      institution: 'IMT Atlantique',
      degree: 'Engineering Degree',
      startDate: '2019',
      endDate: '2023',
      specializations: [
        'Data (Deep Learning, Big Data, Visualization)',
        'Software Engineering (Functional Programming, OOP, Microservices, C/C++/Rust)',
      ],
    },
    {
      institution: "Lycée Jeanne d'Albret",
      degree: 'CPGE',
      startDate: '2017',
      endDate: '2019',
      description:
        'MPSI and MP preparatory classes, major in Engineering Sciences.',
    },
  ],
}

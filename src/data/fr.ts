import type { CVData } from '@/types/cv'
import { withBase } from '@/lib/base-url'

export const fr: CVData = {
  name: 'Pierre Gaillard',
  title: 'Ingénieur Fullstack',
  profile:
    "Ingénieur Fullstack spécialisé dans le développement d'applications web et mobiles, avec une expertise en React, React Native et Node.js. Solide expérience en TypeScript et Python, habitué aux environnements Agile. Je conçois des solutions robustes, maintenables et testées (TDD), en m'appuyant sur les bonnes pratiques d'architecture et de développement.",
  email: 'pierregaillard99@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/Blu3s1one/' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pierre-gaillard-02a90a1bb/',
    },
  ],

  skills: [
    { category: 'Languages de programmation', items: ['TypeScript', 'Python'] },
    {
      category: 'Frameworks',
      items: ['React/React Native', 'Remix', 'TanStack', 'AdonisJS', 'NestJS'],
    },
    { category: 'Données', items: ['SQL', 'PostgreSQL', 'GraphQL'] },
    { category: 'Infrastructure', items: ['AWS', 'OVH'] },
    {
      category: 'Déploiement',
      items: ['Docker', 'Terraform', 'GitHub Actions'],
    },
    {
      category: 'Langues',
      items: ['Français', 'Anglais (C1)', 'Espagnol (B2)', 'Allemand (B1)'],
    },
  ],

  jobs: [
    {
      company: 'Galadrim',
      role: 'Fullstack Engineer',
      startDate: 'Juin 2024',
      endDate: "Aujourd'hui",
      category: 'programming',
      description: '',
      highlights: [
        "Migration d'une application legacy en ColdFusion vers une architecture TypeScript moderne (Remix, GraphQL), avec mise en place de TDD et CI/CD.",
        "Développement d'applications web et mobiles en React / React Native avec backend en AdonisJS / NestJS.",
        "Mise en place d'infrastructures AWS / OVH via Terraform.",
        'Gestion de la pipeline CI/CD avec GitHub Actions.',
        'Choix technologiques, mentorat de développeurs juniors et revues de code.',
        'Conduite de tests techniques pour le recrutement.',
      ],
    },
    {
      company: 'Airbus Defence & Space',
      role: 'Stage Data Science',
      startDate: 'Avril 2023',
      endDate: 'Octobre 2023',
      category: 'data-science',
      description:
        "Étude de modèles de détection de changement, conception d'une méthode d'entraînement semi-supervisée et développement d'un outil de création de jeu de données (backend Python, frontend TypeScript/Angular).",
    },
    {
      company: 'Lorient Agglomération',
      role: 'CDD Data Science',
      startDate: 'Novembre 2021',
      endDate: 'Décembre 2021',
      category: 'data-science',
      description:
        "Nettoyage de données et entraînement d'un algorithme de deep learning (RCNN) pour détection d'oiseaux et de nids depuis des images de drones.",
    },
    {
      company: 'EPHE (École Pratique des Hautes Études)',
      role: 'Stage OCR',
      startDate: 'Avril 2021',
      endDate: 'Septembre 2021',
      category: 'data-science',
      description:
        "Participation au développement d'un outil OCR pour numériser des textes anciens multi-langues, avec focus sur les textes arabes.",
    },
  ],

  projects: [
    {
      name: 'wesplit',
      subtitle: 'Projet personnel',
      date: '2025',
      description:
        "Application permettant de répartir des personnes entre des groupes avec contraintes, développée dans le cadre d'animations d'activités pour les Scouts et Guides de France.",
      url: 'https://wesplit.fr',
    },
    {
      name: 'Donkey Car',
      subtitle: 'Concours inter-écoles',
      date: '2023',
      description:
        "Entraînement de mini-voitures autonomes (kits DonkeyCar) avec une méthode d'apprentissage par renforcement.",
      videos: [
        { title: 'training', url: withBase('videos/training.mp4') },
        { title: 'race day', url: withBase('videos/racing.mp4') },
      ],
    },
  ],

  education: [
    {
      institution: 'Wealcome',
      degree: 'TDD Formation',
      startDate: '06/2025',
      description: 'TDD & Clean Architecture avec Node.js et TypeScript.',
    },
    {
      institution: 'IMT Atlantique',
      degree: "Diplôme d'ingénieur généraliste",
      startDate: '2019',
      endDate: '2023',
      specializations: [
        'Data (Deep Learning, Big Data, Visualisation)',
        'Software Engineering (Functional Programming, OOP, Microservices, C/C++/Rust)',
      ],
    },
    {
      institution: "Lycée Jeanne d'Albret",
      degree: 'CPGE',
      startDate: '2017',
      endDate: '2019',
      description: "MPSI et MP, spécialisation Sciences de l'Ingénieur.",
    },
  ],
}

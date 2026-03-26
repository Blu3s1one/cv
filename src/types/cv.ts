export interface Skill {
  category: string
  items: string[]
}

export interface Job {
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
  highlights?: string[]
  category?: 'programming' | 'data-science'
}

export interface ProjectVideo {
  title: string
  url: string
}

export interface Project {
  name: string
  subtitle: string
  date?: string
  description: string
  url?: string
  videos?: ProjectVideo[]
}

export interface Education {
  institution: string
  degree: string
  startDate: string
  endDate?: string
  description?: string
  specializations?: string[]
}

export interface CVData {
  name: string
  title: string
  profile: string
  email: string
  links: { label: string; url: string }[]
  skills: Skill[]
  jobs: Job[]
  projects: Project[]
  education: Education[]
}

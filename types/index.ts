export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  url: string
  tags: string[]
  image?: string
}

export interface TechCategory {
  id: string
  category: string
  skills: string[]
}

export interface Publication {
  id: string
  title: string
  conference: string
  year: string
  url?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  url?: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
}

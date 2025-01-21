export type TSection = {
  id: string
  type: string
  data: TSectionData | TSectionThreecols
}

export type TSectionData =
  | TSectionGeneric
  | TSectionExperience
  | TSectionSkills
  | TSectionAwards
  | TSectionProjects
  | TSectionEducation
  | TSectionContact
  | TSectionSocial
  | TSectionServices
  | TSectionTestimonials
  | TSectionClients
  | Record<string, unknown>

export type TSectionThreecols = TSectionAwards & TSectionEducation & TSectionContact

export type TSectionGeneric = {
  heading: string
  caption?: string
  button?: TSectionButton
  image?: TSectionImage
}

export type TSectionButton = {
  label: string
  link: string
  target?: 'blank' | 'self'
}

export type TSectionImage = {
  src: string
  alt: string
}

export type THero = {
  bgImage?: string
}

export type TSectionHero = TSectionGeneric & {
  hero: THero
}

export type TExperience = {
  id: number
  title: string
  company: string
  location: string
  date: string
  description: string
}

export type TSectionExperience = TSectionGeneric & {
  experiences: TExperience[]
}

export type TSkill = {
  id: number
  name: string
  description?: string
  level?: number
  year?: number
}

export type TSectionSkills = TSectionGeneric & {
  skills: TSkill[]
}

export type TAward = {
  id: number
  title: string
  date?: string
  description?: string
}

export type TSectionAwards = TSectionGeneric & {
  awards: TAward[]
}

export type TProject = {
  id: number
  title: string
  description: string
  link?: string
  image?: string
}

export type TSectionProjects = TSectionGeneric & {
  projects: TProject[]
}

export type TEducation = {
  id: number
  title: string
  school: string
  location: string
  date: string
  description?: string
}

export type TSectionEducation = TSectionGeneric & {
  educations: TEducation[]
}

export type TContact = {
  id: number
  title: string
  description?: string
  email: string
  phone?: string
  address?: string
}

export type TSectionContact = TSectionGeneric & {
  contact: TContact
}

export type TSocial = {
  id: number
  name: string
  link: string
}

export type TSectionSocial = TSectionGeneric & {
  socials: TSocial[]
}

export type TService = {
  id: number
  title: string
  description?: string
  icon?: string
}

export type TSectionServices = TSectionGeneric & {
  services: TService[]
}

export type TTestimonial = {
  id: number
  name: string
  role?: string
  image?: string
  content: string
  rating?: number
}

export type TSectionTestimonials = TSectionGeneric & {
  testimonials: TTestimonial[]
}

export type TClient = {
  id: number
  name: string
  image: string
}

export type TSectionClients = TSectionGeneric & {
  clients: TClient[]
}

export type EditorModelValue = {
  content: string
  [key: string]: unknown // Allow additional properties
}

export type TSectionStyle = Record<`--${string}`, string>

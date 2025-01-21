import type {
  TSection,
  TSectionData,
  TSectionThreecols,
  TSectionHero,
  TSectionSkills,
  TSectionExperience,
  TSectionAwards,
  TSectionClients,
  TSectionContact,
  TSectionEducation,
  TSectionProjects,
  TSectionServices,
  TSectionSocial,
  TSectionTestimonials,
  TSectionGeneric,
} from '@/types/Section'

// Check if the object is a valid TSection
export function isTSection(data: unknown): data is TSection {
  return (
    typeof data === 'object' && data !== null && 'id' in data && 'type' in data && 'data' in data
  )
}

// TSection Data

export function isSectionGeneric(
  section: unknown,
): section is TSection & { data: TSectionGeneric } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'generic' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    Array.isArray((section as TSection & { data: TSectionGeneric }).data)
  )
}

export function isSectionHero(section: unknown): section is TSection & { data: TSectionHero } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'hero' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'hero' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionHero }).data.hero)
  )
}

export function isSectionSkills(section: unknown): section is TSection & { data: TSectionSkills } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'skills' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'skills' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionSkills }).data.skills)
  )
}

export function isSectionExperience(
  section: unknown,
): section is TSection & { data: TSectionExperience } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'experiences' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'experiences' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionExperience }).data.experiences)
  )
}

export function isSectionAwards(section: unknown): section is TSection & { data: TSectionAwards } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'awards' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'awards' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionAwards }).data.awards)
  )
}

export function isSectionClients(
  section: unknown,
): section is TSection & { data: TSectionClients } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'clients' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'clients' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionClients }).data.clients)
  )
}

export function isSectionContact(
  section: unknown,
): section is TSection & { data: TSectionContact } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'contact' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'contact' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionContact }).data.contact)
  )
}

export function isSectionEducation(
  section: unknown,
): section is TSection & { data: TSectionEducation } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'educations' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'educations' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionEducation }).data.educations)
  )
}

export function isSectionProjects(
  section: unknown,
): section is TSection & { data: TSectionProjects } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'projects' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'projects' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionProjects }).data.projects)
  )
}

export function isSectionServices(
  section: unknown,
): section is TSection & { data: TSectionServices } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'services' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'services' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionServices }).data.services)
  )
}

export function isSectionSocials(section: unknown): section is TSection & { data: TSectionSocial } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'socials' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'socials' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionSocial }).data.socials)
  )
}

export function isSectionTestimonials(
  section: unknown,
): section is TSection & { data: TSectionTestimonials } {
  return (
    typeof section === 'object' &&
    section !== null &&
    'type' in section &&
    (section as TSection).type === 'testimonials' &&
    'data' in section &&
    typeof (section as TSection).data === 'object' &&
    'testimonials' in (section as TSection).data &&
    Array.isArray((section as TSection & { data: TSectionTestimonials }).data.testimonials)
  )
}

export const isSectionThreecols = (
  section: TSection,
  data: TSectionData,
): data is TSectionThreecols => {
  return (
    section.type === '3cols' &&
    (data as TSectionEducation).educations !== undefined &&
    (data as TSectionAwards).awards !== undefined &&
    (data as TSectionContact).contact !== undefined
  )
}

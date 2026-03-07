export const navSectionIds = ['jobs', 'projects', 'education'] as const

export type NavSectionId = (typeof navSectionIds)[number]

import type { ComponentPropsWithoutRef } from 'react'
import type { TFunction } from 'i18next'
import { navSectionIds } from '@/lib/navigation'
import type { NavSectionId } from '@/lib/navigation'

interface NavigationLinksProps {
  t: TFunction
  linkClassName: (id: NavSectionId) => string
  onNavigate?: () => void
}

const sectionLabels: Record<NavSectionId, string> = {
  jobs: 'nav.jobs',
  projects: 'nav.projects',
  education: 'nav.education',
}

export default function NavigationLinks({
  t,
  linkClassName,
  onNavigate,
}: NavigationLinksProps) {
  return navSectionIds.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      className={linkClassName(id)}
      onClick={onNavigate}
    >
      {t(sectionLabels[id])}
    </a>
  ))
}

export function getNavigationIds() {
  return [...navSectionIds]
}

export type NavigationLinkProps = ComponentPropsWithoutRef<'a'>

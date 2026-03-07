import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './settings/ThemeToggle'
import LanguageSwitcher from './settings/LanguageSwitcher'
import DownloadCV from './settings/DownloadCV'
import { useActiveSection } from '@/hooks/useActiveSection'
import NavigationLinks, { getNavigationIds } from './NavigationLinks'
import WeatherLink from './weather/WeatherLink'
import { useCV } from '@/hooks/useCV'

export default function Header() {
  const { t } = useTranslation()
  const cv = useCV()
  const activeSection = useActiveSection(getNavigationIds())

  return (
    <header className="sticky top-0 z-50 hidden border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg sm:block">
      <nav className="page-wrap grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 py-4">
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-[var(--sea-ink)] transition-opacity hover:opacity-80"
        >
          {cv.name}
          <span className="mx-1.5 text-[var(--line)]">-</span>
          <span className="text-[var(--sea-ink-soft)]">{cv.title}</span>
        </Link>

        <div className="flex items-center gap-2 text-sm font-semibold">
          <NavigationLinks
            t={t}
            linkClassName={(id) =>
              `nav-link rounded-lg px-3 py-1.5 transition-colors ${
                activeSection === id
                  ? 'bg-[var(--chip-bg)] text-[var(--lagoon-deep)]'
                  : 'text-[var(--sea-ink-soft)] hover:bg-[var(--link-bg-hover)]'
              }`
            }
          />
        </div>

        <div className="flex items-center justify-end gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <WeatherLink />
          <DownloadCV />
        </div>
      </nav>
    </header>
  )
}

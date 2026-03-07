import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './settings/ThemeToggle'
import LanguageSwitcher from './settings/LanguageSwitcher'
import DownloadCV from './settings/DownloadCV'
import { useActiveSection } from '@/hooks/useActiveSection'
import NavigationLinks, { getNavigationIds } from './NavigationLinks'
import WeatherLink from './weather/WeatherLink'

type Panel = 'nav' | 'settings' | null

export default function MobileBottomBar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<Panel>(null)
  const activeSection = useActiveSection(getNavigationIds())

  function toggle(panel: Panel) {
    setOpen((prev) => (prev === panel ? null : panel))
  }

  function close() {
    setOpen(null)
  }

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 px-6 sm:hidden pointer-events-none">
      {open && (
        <div
          className="fixed inset-0 z-40 pointer-events-auto"
          onClick={close}
        />
      )}

      <div className="relative w-full h-full flex items-end justify-between pointer-events-none">
        {/* Nav Panel & Button */}
        <div className="flex flex-col items-start gap-3 pointer-events-auto">
          {open === 'nav' && (
            <div className="mobile-panel relative z-50 rounded-3xl border border-[var(--line)] bg-[var(--header-bg)] p-2 backdrop-blur-xl shadow-2xl min-w-[200px]">
              <div className="flex flex-col gap-1">
                <NavigationLinks
                  t={t}
                  onNavigate={close}
                  linkClassName={(id) =>
                    `nav-link flex items-center rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                      activeSection === id
                        ? 'bg-[var(--chip-bg)] text-[var(--lagoon-deep)]'
                        : 'text-[var(--sea-ink-soft)]'
                    }`
                  }
                />
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={() => toggle('nav')}
            aria-label="Navigation"
            className={`rounded-2xl border border-[var(--line)] bg-[var(--header-bg)] p-3.5 backdrop-blur-xl shadow-lg transition active:scale-95 ${open === 'nav' ? 'bg-[var(--chip-bg)] text-[var(--lagoon-deep)]' : 'text-[var(--sea-ink-soft)]'}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Settings Panel & Button */}
        <div className="flex flex-col items-end gap-3 pointer-events-auto">
          {open === 'settings' && (
            <div className="mobile-panel relative z-50 rounded-3xl border border-[var(--line)] bg-[var(--header-bg)] p-4 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
                <WeatherLink onNavigate={close} />
                <DownloadCV />
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={() => toggle('settings')}
            aria-label="Settings"
            className={`rounded-2xl border border-[var(--line)] bg-[var(--header-bg)] p-3.5 backdrop-blur-xl shadow-lg transition active:scale-95 ${open === 'settings' ? 'bg-[var(--chip-bg)] text-[var(--lagoon-deep)]' : 'text-[var(--sea-ink-soft)]'}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

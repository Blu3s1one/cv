import { Link } from '@tanstack/react-router'
import { CloudSun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface WeatherLinkProps {
  onNavigate?: () => void
}

export default function WeatherLink({ onNavigate }: WeatherLinkProps) {
  const { i18n } = useTranslation()
  const isEn = i18n.language.startsWith('en')
  const weatherLabel = isEn ? 'Weather' : 'Météo'

  return (
    <Link
      to="/weather"
      aria-label={weatherLabel}
      title={weatherLabel}
      onClick={onNavigate}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--sea-ink)] no-underline shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--lagoon-deep)] hover:text-[var(--lagoon-deep)]"
    >
      <CloudSun className="h-3.5 w-3.5" />
    </Link>
  )
}

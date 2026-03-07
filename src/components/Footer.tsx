import { useTranslation } from 'react-i18next'
import { useCV } from '@/hooks/useCV'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()
  const cv = useCV()
  const footerLinks = [
    ...cv.links,
    { label: 'Email', url: `mailto:${cv.email}` },
  ]

  return (
    <footer className="mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} {cv.name}. {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

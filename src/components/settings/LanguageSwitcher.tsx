import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const isEn = (i18n.resolvedLanguage ?? i18n.language).startsWith('en')

    return (
        <button
            onClick={() => i18n.changeLanguage(isEn ? 'fr' : 'en')}
            className="inline-flex items-center gap-1 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--sea-ink)] transition hover:border-[var(--lagoon-deep)] hover:text-[var(--lagoon-deep)]"
        >
            <span className={isEn ? 'opacity-100' : 'opacity-40'}>EN</span>
            <span className="text-[var(--line)]">/</span>
            <span className={!isEn ? 'opacity-100' : 'opacity-40'}>FR</span>
        </button>
    )
}

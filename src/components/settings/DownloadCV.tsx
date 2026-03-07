import { useTranslation } from 'react-i18next'

export default function DownloadCV() {
    const { i18n } = useTranslation()
    const isEn = i18n.language.startsWith('en')
    const filename = isEn ? 'CV_PGA_EN_LX.pdf' : 'CV_PGA_LX.pdf'
    const href = `/cv/${filename}`

    return (
        <a
            href={href}
            download={filename}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--sea-ink)] no-underline shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--lagoon-deep)] hover:text-[var(--lagoon-deep)]"
        >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
        </a>
    )
}

import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Mail } from 'lucide-react'
import type { CVData } from '@/types/cv'

export default function HeroSection({
    name,
    title,
    profile,
    email,
    links,
}: Pick<CVData, 'name' | 'title' | 'profile' | 'email' | 'links'>) {
    const { t } = useTranslation()

    return (
        <section className="island-shell rise-in relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">

            <p className="island-kicker mb-3">{title}</p>
            <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
                {name}
            </h1>

            <h2 className="island-kicker mb-2">{t('sections.profile')}</h2>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--sea-ink-soft)] sm:text-base">
                {profile}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--sea-ink-soft)]">
                <span className="inline-flex items-center gap-1.5">
                    <Mail className="h-4 w-4 text-[var(--lagoon)]" />
                    <a href={`mailto:${email}`}>{email}</a>
                </span>
                {links.map((link) => (
                    <Badge
                        key={link.label}
                        variant="outline"
                        className="border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink)]"
                        asChild
                    >
                        <a href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                        </a>
                    </Badge>
                ))}
            </div>
        </section>
    )
}

import { useTranslation } from 'react-i18next'
import { GraduationCap } from 'lucide-react'
import type { Education } from '@/types/cv'
import ResumeEntryCard from './ResumeEntryCard'

export default function EducationSection({
  education,
}: {
  education: Education[]
}) {
  const { t } = useTranslation()

  return (
    <section id="education" className="scroll-mt-24">
      <h2 className="island-kicker mb-6">{t('sections.education')}</h2>

      <div className="space-y-4">
        {education.map((edu, i) => (
          <ResumeEntryCard
            key={`${edu.institution}-${edu.degree}`}
            title={edu.degree}
            subtitle={edu.institution}
            date={
              edu.endDate ? `${edu.startDate} — ${edu.endDate}` : edu.startDate
            }
            animationDelayMs={i * 90 + 80}
            icon={<GraduationCap className="h-5 w-5 text-[var(--lagoon)]" />}
            body={
              edu.description || edu.specializations ? (
                <>
                  {edu.description && (
                    <p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                      {edu.description}
                    </p>
                  )}
                  {edu.specializations && edu.specializations.length > 0 && (
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-[var(--sea-ink-soft)]">
                      {edu.specializations.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  )}
                </>
              ) : undefined
            }
          />
        ))}
      </div>
    </section>
  )
}

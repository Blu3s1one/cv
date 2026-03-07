import { useTranslation } from 'react-i18next'
import { Terminal, Share2 } from 'lucide-react'
import type { Job } from '@/types/cv'
import ResumeEntryCard from './ResumeEntryCard'

export default function JobsSection({ jobs }: { jobs: Job[] }) {
  const { t } = useTranslation()

  return (
    <section id="jobs" className="scroll-mt-24">
      <h2 className="island-kicker mb-6">{t('sections.experience')}</h2>

      <div className="relative space-y-4">
        <div className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-[var(--line)] sm:block" />

        {jobs.map((job, i) => (
          <ResumeEntryCard
            key={`${job.company}-${job.role}`}
            title={job.role}
            subtitle={job.company}
            date={`${job.startDate} — ${job.endDate}`}
            animationDelayMs={i * 90 + 80}
            icon={
              job.category === 'programming' ? (
                <Terminal className="h-4 w-4 text-[var(--lagoon)]" />
              ) : (
                <Share2 className="h-4 w-4 text-[var(--lagoon)]" />
              )
            }
            body={
              <>
                {job.description && (
                  <p className="mb-3 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                    {job.description}
                  </p>
                )}
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="list-disc space-y-1 pl-4 text-sm text-[var(--sea-ink-soft)]">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </>
            }
          />
        ))}
      </div>
    </section>
  )
}

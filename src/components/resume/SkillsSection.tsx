import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import type { Skill } from '@/types/cv'

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  const { t } = useTranslation()

  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="island-kicker mb-6">{t('sections.skills')}</h2>

      <div className="island-shell rounded-2xl p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.category} className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--lagoon-deep)]">
                {skill.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="border border-[var(--chip-line)] bg-[var(--chip-bg)] text-xs text-[var(--sea-ink)]"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

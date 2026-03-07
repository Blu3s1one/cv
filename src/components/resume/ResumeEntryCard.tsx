import type { ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface ResumeEntryCardProps {
  title: string
  subtitle: string
  date?: string
  icon: ReactNode
  body?: ReactNode
  animationDelayMs: number
}

export default function ResumeEntryCard({
  title,
  subtitle,
  date,
  icon,
  body,
  animationDelayMs,
}: ResumeEntryCardProps) {
  return (
    <Card
      className="rise-in island-shell border-[var(--line)] bg-transparent shadow-none"
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      <CardHeader>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] sm:flex">
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-[var(--sea-ink)]">{title}</CardTitle>
            <CardDescription className="text-[var(--sea-ink-soft)]">
              {subtitle}
            </CardDescription>
          </div>
          {date ? (
            <span className="shrink-0 text-xs font-medium text-[var(--lagoon-deep)]">
              {date}
            </span>
          ) : null}
        </div>
      </CardHeader>

      {body ? <CardContent>{body}</CardContent> : null}
    </Card>
  )
}

import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ExternalLink, Video } from 'lucide-react'
import type { Project } from '@/types/cv'
import VideoModal from '../VideoModal'
import { cn } from '@/lib/utils'

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const { t } = useTranslation()
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [focusedProjectId, setFocusedProjectId] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setFocusedProjectId(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFocusedProjectId(entry.target.getAttribute('data-project-id'))
          }
        })
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px',
      },
    )

    const currentRefs = cardRefs.current
    Object.values(currentRefs).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [isMobile, projects])

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="island-kicker mb-6">{t('sections.projects')}</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => {
          const isFocused = focusedProjectId === project.name
          return (
            <Card
              key={project.name}
              ref={(el) => {
                cardRefs.current[project.name] = el
              }}
              data-project-id={project.name}
              className="group rise-in island-shell feature-card border-[var(--line)] bg-transparent shadow-none transition-all duration-500"
              style={{ animationDelay: `${i * 90 + 80}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-[var(--sea-ink)]">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-[var(--sea-ink-soft)]">
                      {project.subtitle} · {project.date}
                    </CardDescription>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    {project.videos && project.videos.length > 0 && (
                      <button
                        onClick={() => setActiveProject(project)}
                        className={cn(
                          'rounded-lg p-1.5 text-[var(--lagoon-deep)] transition duration-500 hover:bg-[var(--link-bg-hover)] group-hover:shadow-[0_0_5px_var(--primary)] group-hover:ring-1 group-hover:ring-primary/10 cursor-pointer',
                          isFocused && 'mobile-glow',
                        )}
                        title="View videos"
                      >
                        <Video className="h-4 w-4" />
                      </button>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          'rounded-lg p-1.5 text-[var(--lagoon-deep)] transition duration-500 hover:bg-[var(--link-bg-hover)] group-hover:shadow-[0_0_5px_var(--primary)] group-hover:ring-1 group-hover:ring-primary/10',
                          isFocused && 'mobile-glow',
                        )}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {activeProject && (
        <VideoModal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          videos={activeProject.videos || []}
          title={activeProject.name}
        />
      )}
    </section>
  )
}
